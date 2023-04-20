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

const fs = require('fs');
const fsp = fs.promises;
const path = require('path');

const chalk = require('chalk');
const fg = require('fast-glob');
const postcss = require('postcss');
const valueParser = require('postcss-value-parser');

async function writeFile(dest, content) {
  // Don't write if there's no content, but still resolve b/c it's okay if the files are missing
  if (!content) return Promise.resolve(dest);
  return fsp.writeFile(dest, content, "utf-8").then(() => {
    console.log(`  ${chalk.green('✔️')} ${path.relative(process.cwd(), dest)}`);
    return Promise.resolve(dest);
  }).catch((err) => {
    console.error(`  🔴 failed to write ${path.relative(process.cwd(), dest)}`);
    return Promise.reject(err);
  });
}

async function concatFiles(globs = [], { cwd } = {}) {
  return fg(globs, {
    cwd: cwd ?? process.cwd(),
    absolute: true,
    onlyFiles: true,
    ignore: ['**/node_modules/**']
  }).then(async (files) => {
    return Promise.all(files.map(async (filepath) => {
      // It's okay if a file doesn't exist
      if (!fs.existsSync(filepath)) return Promise.resolve('');
      return fsp.readFile(filepath, 'utf8').catch((err) => {
        console.error(`🔴 failed to read ${chalk.yellow(filepath)}`);
        return Promise.reject(err);
      }).then((content) => {
        return Promise.resolve(`/* --- ${filepath} --- */\n${content}`);
      });
    })).then((results) => results.length > 0 ? results.join('\n') : '');
  });
}

async function getAllVars(paths) {
  const cwd = path.dirname(require.resolve('@spectrum-css/vars/package.json', {
    paths: [process.cwd(), path.join(process.cwd(), '../../')]
  }));

  const results = await concatFiles(paths, { cwd });
  const root = postcss.parse(results);
  return getTokensInCSS(root);
}

function getTokensUsedInValueNode(node, usedTokens = new Set(), filters = []) {
    if (!node.nodes || node.nodes.length === 0) return usedTokens;

    for (const subNode of node.nodes) {
      if (subNode.type === 'word' && subNode.value.startsWith('--')) {
        if (filters.length > 0) { // && !filters.includes(subNode.value)) {
          if (filters.reduce((ret, filter) => {
            if (typeof filter === 'string' && subNode.value === filter) return true;
            if (filter instanceof RegExp && filter.test(subNode.value)) return true;
            console.trace(`Filters provided must be of type string or RegExp. Received ${typeof filter}.`);
            return ret;
          }, false)) {
            continue;
          }
        }

        usedTokens.add(subNode.value);
        continue;
      }

      if (subNode.type === 'func') {
          usedTokens = getTokensUsedInValueNode(subNode, usedTokens, filters);
      }
    }

    return usedTokens;
}

function getTokensInCSS(root, filters = []) {
  const definedTokens = {};
  const usedTokens = new Set();

  root.walkRules((rule) => {
      rule.walkDecls((decl) => {
          if (decl.prop.startsWith('--')) {
              definedTokens[decl.prop] = decl.value;
          }

          let matches = decl.value.match(/var\(.*?\)/g);
          if (!matches) return;
          valueParser(decl.value).nodes.forEach(node => {
              getTokensUsedInValueNode(node, usedTokens, filters).forEach(tokenName => {
                  usedTokens.add(tokenName);
              });
          });
      });
  });
  return { definedTokens, usedTokens: [...usedTokens] };
}

function getClassNames(root) {
  const classNames = new Set();
  root.walkRules((rule) => {
    rule.selectors.forEach((fullSelector) => {
      // Skip compound selectors, they may not start with the component itself
      if (fullSelector.match(/~|\+/)) return true;

      const selector = fullSelector.split(' ').shift();
      if (rule.type !== 'rule') return;
      const matches = selector.match(/^\.spectrum-[\w]+/);
      if (matches) classNames.add(matches[0]);
    });
  });

  return [...classNames];
}

module.exports = {
  writeFile,
  concatFiles,
  getAllVars,
  getTokensInCSS,
  getClassNames
};
