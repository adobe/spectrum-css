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

const { existsSync } = require("fs");
const { readFile } = require("fs").promises;
const { join, basename } = require("path");

const yaml = require("js-yaml");
const fg = require("fast-glob");

const getMetadata = require('../scripts/getMetadata.js');
const fetchCustomProps = require('../scripts/fetchCustomProps.js');
const { getReleaseDate, isComponentPackage, isMigrated } = require('../scripts/utilities.js');

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

// was: buildDocs_forDep/buildDocs_individualPackages
module.exports = async (configData) => {
  /** @type PageMetadata[] */
  const pages = [];
  const cwd = configData.componentDir;

  for await (const name of fg.stream('*', {
    cwd,
    onlyDirectories: true,
  })) {
    const path = join(cwd, name);
    const { name: packageName, devDependencies = {}, version } = await readFile(join(path, 'package.json'), "utf8").then(JSON.parse).catch(console.warn);
    if (!packageName || !version) continue;

    const promises = [];
    const cssVariables = {};
    for await (const file of fg.stream('dist/*.css', {
      cwd: path,
      onlyFiles: true,
      absolute: true,
    })) {
      const content = await readFile(file, "utf8").catch(console.warn);
      if (!content) continue;

      /* Grep the CSS assets for custom properties */
      promises.push(fetchCustomProps(content));
    }

    await Promise.all(promises).then(props => {
      /* Add custom properties to object by category */
      Object.entries(props).forEach(([, obj]) => {
        Object.entries(obj).forEach(([key, value]) => {
          if (!cssVariables[key]) cssVariables[key] = value;
          else cssVariables[key].push(...value);
        });
      });
    }).catch(console.warn);

    const dependencies = Object.keys(devDependencies).filter(isComponentPackage);

    // Load template.js from stories folder if it exists
    let renderer;
    const renderTemplatePath = join(path, 'stories/template.js');
    if (existsSync(renderTemplatePath)) {
      renderer = await readFile(renderTemplatePath, "utf8").catch(console.warn);
    }

    /** This loop will extract all the contents of js files under metadata folder in each component */
    let renderScripts = '';
    for await (const file of fg.stream('metadata/*.js', { cwd: path, onlyFiles: true, absolute: true })) {
        if (existsSync(file)) {
            const data = await readFile(file, "utf8").catch(console.warn);
            renderScripts += data + '\n'; // Append the contents with a newline
        }
    }
    /** This loop determines how many pages are published to the site */
    for await (const file of fg.stream('metadata/*.yml', { cwd: path, onlyFiles: true, absolute: true })) {
      let fileName = basename(file, '.yml');
      /** @type {object} */
      const pageData = await readFile(file, "utf8").then(yaml.load).catch(console.warn);
      if (!pageData) continue;

      pageData.id = (pageData.id ?? fileName ?? name)?.toLowerCase()?.trim();
      const metadata = getMetadata(pageData) || {};

      fileName = fileName.replace(/-/, '/');
      /** One page created for every yaml file in the metadata folder */
      pages.push({
        name, packageName, version, path,
        dependencies,
        cssVariables,
        migrated: isMigrated(devDependencies),
        permalink: `components/${fileName}/`,
        releaseDate: await getReleaseDate(packageName, version),
        ...metadata,
        renderer,
        renderScripts,
        eleventyNavigation: {
          title: metadata.title,
          key: metadata.name,
          parent: "Components"
        },
      });
    }
  }

  return pages;
};
