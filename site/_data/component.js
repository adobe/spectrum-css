/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

const postcss = require('postcss');
const valueParser = require('postcss-value-parser');
const yaml = require("js-yaml");
const fg = require("fast-glob");
const npmFetch = require('npm-registry-fetch');

/**
 * Fetches the custom property details from provided CSS content;
 * content is broken down into 4 sets: mods, internal, a11y, and other
 * @param {import('path').PathLike} filepath - the filepath to the CSS content
 * @param {{ [key: string]: string | RegExp }} bucketConfig - the configuration for the buckets
 * @returns {Promise<{ [key: string]: Map<string, { value: [], source: any }[]> }>}
 */
async function fetchCustomProps(filepath, bucketConfig = {}) {
  /* If no filepath is provided, return */
  if (!fs.existsSync(filepath)) {
    return Promise.resolve({});
  }

  /* If no bucket config is provided, return */
  if (typeof bucketConfig !== 'object' || Object.keys(bucketConfig).length === 0) {
    return Promise.resolve({});
  }

  /* Read the file */
  const content = await fsp.readFile(filepath, "utf8").catch((err) => Promise.reject(err));

  /* Initialize the return object */
  const ret = {};
  /**
   * Iterate over the provided bucket config to determine
   * how to sort properties found in the content
   */
  for (const [bucketName, regex] of Object.entries(bucketConfig)) {
    /**
     * Using a map ensures values are not repeated
     * key of the map is the property name matching provided regex
     **/
    ret[bucketName] = new Map();

    /** @todo: this is where we should capture maybe a comment and fallback values for the table */
    postcss.parse(content).walkRules((rule) => {
      rule.walkDecls((decl) => {
        /* Only 1 varstack per var function */
        let varstack;
        let foundMatch = false;

        // If the property matches the regex, it should always be first in the stack.
        if (decl.prop.match(regex)) {
          foundMatch = true;
          varstack = [decl.prop];
        }

        // Next we walk the assigned value to find any fallbacks.
        const processVarStack = (node, foundMatch) => {
          if (!node || node.type !== 'function' || node.value !== 'var') {
            /* If we've already found the root var, capture the fallbacks */
            if (foundMatch) varstack.push(decl.value);
            return;
          }
        };
        valueParser(decl.value).walk(node => {
          processVarStack(node, foundMatch);

          /* If no root var found and this is a var function, let's peruse it's children */
          /* We're only checking the first node in the var function b/c the rest are fallbacks */
          console.log(node.nodes);
          const firstNode = node.nodes.shift();
          if (firstNode && firstNode.value) {
            if (!foundMatch && firstNode.value.match(regex)) {
              foundMatch = true;
              varstack = [firstNode.value];
            } else if (foundMatch) {
              varstack.push(firstNode.value);
            }
          }
        });

        // } else if (decl.value.match(/var\(--.*?\)/)) {
        //   // If the property name doesn't match the regex, check the value for a varstack.
        //   valueParser(decl.value).walk(node => {
        //     if (!node || node.type !== 'function' || node.value !== 'var') return false;
        //     /* Only 1 varstack per var function */
        //     varstack = [];
        //     const firstNode = node.nodes.shift();
        //     if (!foundMatch && firstNode && firstNode.value && firstNode.value.match(regex)) {
        //       foundMatch = true;
        //       varstack.push(firstNode.value);
        //     } else if (foundMatch && firstNode && firstNode.value) {
        //       varstack.push(firstNode.value);
        //     }
        //   });
        // }

        if (!varstack || !varstack.length) return;

        const first = varstack.shift();
        if (!first || typeof first !== 'string' || !first.match(regex)) return;

        ret[bucketName].set(first, { value: [...new Set(varstack)].sort(), source: rule.selector });
      });
    });
  }

  return Promise.resolve(ret);
}

function fetchMetadata(metadata) {
  /* Component data required to fetch vars metadata */
  if (!metadata || !metadata.id || !metadata.name) return metadata;
  const { id, name, dnaStatus, cssStatus, status, examples = [] } = metadata;

  // const quiet = typeof process.env.VERBOSE === undefined || process.env.VERBOSE?.toLowerCase() !== 'true' ? true : false;
  const varsMetadata = require('@spectrum-css/vars') ?? {};
  const cleanId = id.replace('-', '');
  const idParts = id.split('-');

  /* Iterate over metadata keys and filter out component-specific properties */
  const dnaComponent = Object.keys(varsMetadata).filter(varKey =>
      varKey.startsWith(`spectrum-${cleanId}`) ||
      varKey.startsWith(`spectrum-${idParts[0]}`)
    ).reduce((acc, varKey) => {
      /* Attempt to capture name, status, version */
      let key = varKey.match(`spectrum-${cleanId}(?:-[s|m|l|xl])?-(name|status|version)`)?.[1];
      if (!key) key = varKey.match(`spectrum-${cleanId}(?:-\\w+)*-(name|status|version)`)?.[1];
      if (!key) key = varKey.match(`spectrum-${idParts[0]}(?:-[s|m|l|xl])?${idParts[1] ? `-${idParts[1]}`: ``}(?:-\\w+)*-(name|status|version)`)?.[1];
      if (!key) return acc;

      acc[key] = varsMetadata[varKey];
      return acc;
    }, {}) ?? {
      name,
      status: dnaStatus ?? 'Contribution'
    };

  return {
    ...metadata,
    title: metadata.title ?? dnaComponent.name,
    cssStatus: status ?? 'Unverified',
    status: status ?? 'Contribution',
    examples: examples.map((example, idx) => {
      if (!example.id) example.id = `${name}${idx}`;

      /* All examples are verified if the outer component is verified */
      if (!example.status && status === 'Verified')
        example.status = 'Verified';

      if (dnaStatus === 'Deprecated' || cssStatus === 'Deprecated') {
        example.status = 'Deprecated';
      } else if (dnaStatus === 'Canon' || cssStatus === 'Verified') {
        example.status = 'Verified';
      }

      // The example is canon if the component is Canon and Verified
      if (dnaStatus === 'Canon' && status === 'Verified')
        example.dnaStatus = 'Canon';

      return example ?? {};
    }),
  };
}

/**
 * This type defines what information is available in the object passed
 * to the component rendering template.
 *
 * @typedef {object} PageMetadata
 * @property {string} PageMetadata.name - Component name
 * @property {string} PageMetadata.packageName - Package name
 * @property {string} PageMetadata.version - Latest verison of package
 * @property {PathLike} PageMetadata.path - The full path to the component's package folder
 * @property {string[]} PageMetadata.dependencies
 * @property {object} PageMetadata.cssVariables
 * @property {string[]} PageMetadata.cssVariables.mods -
 * @property {string[]} PageMetadata.cssVariables.internal -
 * @property {string[]} PageMetadata.cssVariables.a11y -
 * @property {string[]} PageMetadata.cssVariables.other -
 * @property {boolean} PageMetadata.migrated - True if the component has migrated to the new token system
 * @property {string} PageMetadata.releaseDate - Formatted, human-readable date when the package version was published
 * @property {string} PageMetadata.id - Component identifying string
 * @property {string} PageMetadata.title - Human-readable title for the published page
 * @property {string} PageMetadata.description - A short summary of the component
 * @property {string} PageMetadata.status -
 * @property {string} PageMetadata.cssStatus -
 * @property {string} PageMetadata.dnaStatus -
 * @property {string} PageMetadata.permalink - The url path to the published component page
 * @property {object[]} PageMetadata.examples -
 */

async function fetchRenderData(cwd) {
  if (!cwd) return {};

  const folderName = cwd.split(path.sep).pop();
  if (['expressvars', 'tokens', 'vars'].some(pkg => folderName === pkg)) return {};

  /* Fetch package data for the package */
  const packageJSON = await fsp.readFile(path.join(cwd, 'package.json'), "utf8")
    .then(JSON.parse)
    .catch(() => Promise.reject(`No package.json found in ${cwd}`));

    const storyPath = path.join(cwd, `stories/${folderName}.stories.js`);
    const storybook = {};
    if (fs.existsSync(storyPath)) {
      /**
       * @todo: There is a more optimal way to do this however
       * it requires the entire repo be using es6 modules.
       **/
      const story = await fsp.readFile(storyPath, "utf8");
      if (story) {
        [...story.matchAll(/(?<key>title|description)\:\s*\"(?<data>[\w|\d|\s]+)\"/gs)].forEach(({ groups } = {}) => {
          if (groups && groups.key && groups.data) {
            storybook[groups.key] = groups.data;
          }
        });
      }
    }

  const version = packageJSON.version;
  const releaseDate = await npmFetch.json(packageJSON.name).then((data) => {
      if (!data || !data.time) return 'Unreleased';
      const datetime = data.time[version] ?? data.time.latest;
      if (!datetime) return 'Unreleased';
      return new Date(datetime).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }).catch(() => 'Unreleased');

  const cssTokens = await fg('dist/*.css', { cwd, absolute: true })
    .then(async files => await Promise.all(
      files.map(async file =>
        /* Grep the CSS assets for custom properties */
        fetchCustomProps(file, {
          mods: /^--mod-/,
          internal: /^--spectrum-(?!global|alias)-/,
          globals: /^--spectrum-(global|alias)-/,
          a11y: /^--highcontrast-/,
          other: /^--(?!system|mod|spectrum-(global|alias|\w+))-/
        })
      )
    ));

  const cssVariables = cssTokens.reduce((variables, tokens) => {
    /* Deep merge maps */
    Object.entries(tokens).forEach(([key, typeSet]) => {
      console.log(`--- ${key} ---\n`);
      [...typeSet.keys()].forEach((customProp) => {
        console.log(customProp, typeSet.get(customProp));
        if (!variables[key]) variables[key] = [customProp];
        else if (!variables[key].includes(customProp)) variables[key].push(customProp);
      });
    });

    return variables;
  }, {});

  const isMigrated = (dependencies) =>
    !!(dependencies && (dependencies["@spectrum-css/component-builder-simple"] || dependencies["@spectrum-css/tokens"]));

  const dependencies = Object.keys(packageJSON.devDependencies ?? {})
    .filter(packageName => {
      return packageName.startsWith('@spectrum-css') && !packageName.includes('-builder') && !['vars', 'tokens'].includes(packageName);
    })
    .map(name => name.replace(/^@spectrum-css\//, ''));

  /** @todo: Should these be rendered as tabs instead of separate pages? */
  const subsections = await fg('metadata/*.yml', { cwd, absolute: true });
  if (!subsections || subsections.length === 0) return {};

  const variants = await Promise.all(
    subsections.map(async (file) => {
      const fileBasename = path.basename(file, '.yml');

      /** @todo: this type should match the schema for component examples */
      /** @type {object} */
      const data = await fsp.readFile(file, "utf8")
        .then(yaml.load)
        .catch(() => Promise.reject(`Error parsing ${file}`));

      const metadata = fetchMetadata({
        id: (data.id ?? fileBasename ?? folderName)?.toLowerCase().trim(),
        ...data,
      });

      if (Object.keys(metadata).length > 0) {
        return metadata;
      }
    })
  );

  return {
    id: folderName,
    title: storybook?.title ?? folderName.split('-').pop().trim(),
    description: storybook.description ?? '',
    folderName,
    path: cwd,
    packageName: packageJSON.name,
    version,
    releaseDate,
    dependencies: [...new Set([...dependencies, 'tabs', 'typography', 'divider', 'table', 'icon', 'card', 'statuslight', 'link'])],
    cssVariables,
    layout: 'details.njk',
    tags: [ 'component' ],
    migrated: isMigrated(packageJSON.devDependencies),
    variants,
  }
}

/** @return PageMetadata[] */
module.exports = async () => {
  /* This iterates over all the component packages */
  const folders = await fg('*', {
    cwd: path.join(__dirname, '../../components'),
    onlyDirectories: true,
    absolute: true
  });

  return await Promise.all(folders.map(async f => {
    const d = await fetchRenderData(f);
    if (Object.keys(d).length === 0) return;
    return d;
  })).then((data) => {
    return data.filter(Boolean);
  }).catch(console.error);
};
