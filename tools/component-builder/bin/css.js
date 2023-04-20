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
const { readFile } = fsp;
const path = require('path');

// const chalk = require('chalk');
const fg = require('fast-glob');
const postcss = require('postcss');
const postcssrc = require('postcss-load-config');

const {
  concatFiles,
  getTokensInCSS,
  writeFile,
  getAllVars,
  getClassNames
} = require('./utilities.js');

async function postcssProcess(content, srcPath) {
  return postcssrc({ from: srcPath, to: srcPath }).then(({ plugins, options }) =>
    postcss(plugins).process(content, {
      from: srcPath,
      to: srcPath,
      ...options,
    }).then((result) => result.css ?? '')).catch((error) => {
      Promise.reject(error);
    });
}

async function bakeVars(srcPath, destPath) {
  if (!fs.existsSync(srcPath)) return;
  const results = await readFile(srcPath);

  const root = postcss.parse(results);
  // @todo skip page -- was: name && name.endsWith('page') ? [] :
  const classNames = getClassNames(root);
  const { usedTokens } = getTokensInCSS(root);

  // Get vars in ALL components
  const { definedTokens } = await getAllVars([
    `css/components/*.css`,
    `css/globals/*.css`,
    `custom.css`
  ]);

  const content = `
  ${classNames.map((className) => `${className}`).join(',\n')} {
  ${usedTokens.map(v => `  ${v}: ${definedTokens[v]};`).join('\n')}
  }
  `;

  return postcssProcess(content, destPath).then((result) => writeFile(destPath, result));
};

module.exports =  async function build() {
  const pkgPath = path.join(process.cwd(), 'package.json');
  // Not a package, skip it
  if (!fs.existsSync(pkgPath)) {
    return Promise.reject(`Provided target is not a package: ${pkgPath}`);
  }

  const { name, devDependencies = {} } = await readFile(pkgPath).then(JSON.parse).catch(() => ({}));

  if (!name || ['vars', 'tokens'].every(n => name.endsWith(n)) || Object.keys(devDependencies)?.length === 0) {
    return Promise.resolve(`⚠ skipping ${name}`);
  }

  const isLegacy = Object.keys(devDependencies)?.includes('@spectrum-css/vars');

  async function buildCSS(paths, destPath) {
    return concatFiles(paths)
      .then((content) => {
        if (!content || content === '') return Promise.resolve();
        return postcssProcess(content, paths[0])
          .then((result) => writeFile(destPath, result));
      });
  }

  console.log(`📦 Building ${name}...`);
  // Create dist folder if it doesn't exist
  if (!fs.existsSync(path.join(process.cwd(), 'dist'))) {
    await fsp.mkdir(path.join(process.cwd(), 'dist'), { recursive: true });
  }

  if (isLegacy) {
    await buildCSS(['index.css', 'skin.css'], 'dist/index-vars.css').then(async () => {
      if (!fs.existsSync('dist/index-vars.css')) return Promise.resolve();
      return Promise.all([
        bakeVars('dist/index-vars.css', 'dist/vars.css'),
        fsp.copyFile('dist/index-vars.css', 'dist/index.css'),
      ]);
    });
  } else {
    await Promise.all([
      buildCSS([
        'index.css',
        'themes/spectrum.css', // spectrum comes first
        'themes/*.css'
      ], 'dist/index.css'),
      buildCSS([
        'index.css',
        'themes/spectrum.css', // spectrum comes first
        'themes/*.css'
      ], 'dist/index-base.css'),
      fg(['themes/*.css']).then((files) => files.map((file) => buildCSS([file], file.replace('themes', 'dist/themes')))),
      buildCSS([
        'themes/spectrum.css', // spectrum comes first
        'themes/*.css'
      ], 'dist/index-theme.css').then(async () => {
        if (!fs.existsSync('dist/index-theme.css')) return Promise.resolve();
        /** Special case for express: it needs Spectrum base vars and needs to override them */
        return buildCSS(['dist/index-theme.css'], 'dist/themes/express.css');
      }),
    ]);
  }


  // Fetch mod properties
  if (!fs.existsSync('index.css')) return Promise.resolve();

  const results = await readFile('index.css', 'utf8');
  const css = postcss.parse(results);
  const mods = getTokensInCSS(css, [/^--mod-/,/^--spectrum-\w+-/]).usedTokens;

  if (!mods.length) return;
  await writeFile('metadata/mods.md', [
    `| Modifiable custom properties |\n| --- |`,
    ...[...mods].map((mod) => `|\`${mod}\`|`)
  ].join('\n'));
};
