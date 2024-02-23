/*!
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

const fg = require('fast-glob');
const { optimize } = require('svgo');
const combine = require('svgcombiner');
const svgstore = require('svgstore');

async function setupIconStores() {
  const stores = new Map();
  stores.set('all', svgstore());

  for (const variant of await fg(['*'], {
    cwd: __dirname,
    ignore: ['dist', 'node_modules'],
    onlyDirectories: true,
  })) {
    stores.set(variant, svgstore());
  }

  return stores;
}

async function main() {
  // Not using svgo's loadConfig because it doesn't support dynamic config files
  const getSvgoConfig = require('./svgo.config.js');

  // Hash to hold all icons arranged by processed name
  const icons = new Map();
  const stores = await setupIconStores();
  const variants = [...stores.keys()].filter((key) => key !== 'all');

  const files = await fg([`{${variants.join(',')}}/*.svg`], {
    cwd: __dirname,
    onlyFiles: true,
  });

  const promises = [];
  for (const file of files) {
    const assetName = path.basename(file, '.svg');

    // Capture metadata about the icon from the path and filename
    const variant = path.dirname(file);

    // Read in the SVG contents
    const contents = await fsp.readFile(file, 'utf-8');
    const result = optimize(contents, getSvgoConfig({ clean: true }));

    icons.set(assetName, {
      ...(icons.has(assetName) ? icons.get(assetName) : {}),
      [variant]: result.data,
    });

    stores.get(variant).add(assetName, result.data);

    const dest = path.join(__dirname, 'dist', file);
    if (!fs.existsSync(path.dirname(dest))) {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
    }

    promises.push(fsp.writeFile(dest, result.data));
  }

  // Wait for all the SVG content to be read in and processed before continuing
  await Promise.all(promises);

  if (icons.size === 0) return;

  // For each entry in the map, combine the SVG variants into a single SVG file with multiple symbols
  promises.length = 0;
  [...icons.entries()].map(([iconName, data]) => {
    // Combine the SVG variants into a single SVG file with multiple symbols
    const contents = combine(iconName, data);

    // Add the combined SVG to the "all" store so we can generate a single SVG file with all icons
    stores.get('all').add(iconName, contents);

    // Write the combined SVG to the dist folder
    const destPath = path.join(__dirname, 'dist/combined');
    if (!fs.existsSync(destPath)) fs.mkdirSync(destPath, { recursive: true });

    promises.push(fsp.writeFile(path.join(destPath, `${iconName}.svg`), optimize(contents, getSvgoConfig())?.data));
  });

  // Finally, we write out the stores to disk
  for (const [identifier, store] of stores.entries()) {
    const isFullSet = identifier === 'all';
    const filename = isFullSet ? 'spectrum-css-icons' : `spectrum-css-icons-${identifier}`;
    const dest = path.join(__dirname, `dist/${filename}.svg`);
    const config = getSvgoConfig(
      isFullSet
        ? {
          idPrefix: 'spectrum-css-icon',
          removeViewBox: true,
        }
        : {},
    );

    const result = optimize(store.toString(), config);

    if (!result?.data) continue;

    promises.push(fsp.writeFile(dest, result?.data));
  }

  return Promise.all(promises);
}

main()
  .then(() => {
    console.log('✔ Icons generated successfully.');
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
