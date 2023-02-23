/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
const fs = require("fs")
const path = require('path');
const glob = require('glob');
const del = require("del")
const fg = require("fast-glob")
const { promisify } = require('util');
const svgcombiner = require('svgcombiner');



async function clean() {
  return del([
    'combined/**'
  ]);
}

/**
 * @description This code will read all the files in the medium and large directories, 
 * transform the data in the files using the replace and svgmin functions, 
 * rename the files, and write the modified versions to the current directory.
 */
 const minifySvg = async (filePath) => {
  const fileContents = await promisify(fs.readFile)(filePath, 'utf8');
  // Remove <defs> and <rect> elements from SVG
  const sanitizedSvg = fileContents
    .replace(/<defs>[\s\S]*?<\/defs>/m, '')
    .replace(/<rect[\s\S]*?\/>/m, '');

  // Minify SVG
  const { optimize } = require('svgo');
  const optimizedSvg = optimize(sanitizedSvg, {
    plugins: [
      {
        name: 'removeAttrs',
        params: {
          attrs: [
            'class',
            'data-name',
            'id'
          ]
        }
      },
      {
        name: 'collapseGroups'
      }
    ]
  }).data;

  // Get the filename without the directory or extension
  const { name, dir } = path.parse(filePath);
  const iconName = name.split('_').pop().replace('Size', '');

  // Write optimized SVG to new file
  const outputPath = path.join(__dirname, `${dir}/${iconName}.svg`);
   // Delete the original file
  await promisify(fs.unlink)(filePath);
  await promisify(fs.writeFile)(outputPath, optimizedSvg);

  // Delete the original file
  // await promisify(fs.unlink)(filePath);
};

const sanitizeIcons = async () => {
  // Find all SVG files in the "medium" and "large" directories
  const icons = await fg(['medium/*.svg', 'large/*.svg']);
  // Minify and rename each SVG file
  await Promise.all(icons.map(minifySvg));
};

/**
 * @description This code will read all the files in the medium and large directories, transform the data in the files using the sort and svgcombiner functions,
 * and write the modified versions to the
 */
 function generateCombinedIcons() {
  fg(['medium/*.svg', 'large/*.svg'])
    .then((files) => {
      // Sort files alphabetically
      files.sort();
      const grouped = {};
      files.forEach(function (filePath) {
        const cleanedName = path.basename(filePath, path.extname(filePath)).replace(/S_UI(.*?)_.*/, '$1');
        const directory = 'spectrum-UIIcon--' + path.dirname(filePath).split(path.sep).pop();
        grouped[cleanedName] = grouped[cleanedName] || [];
        grouped[cleanedName].push({ directory: directory, file:filePath });
    });

      // Combine SVGs
      Object.keys(grouped).forEach((filePath) => {
        const svgGroup = grouped[filePath].reduce((acc, cur) => ({ ...acc, [cur.directory]: fs.readFileSync(cur.file , 'utf8') }), {})
        const combinedSvg = svgcombiner( filePath , svgGroup);
              // Write combined SVG to file
        fs.writeFileSync(`combined/${filePath}.svg`, combinedSvg);
      });
    });
}

// Only ran by Adobe

const updateIcons =  async () => {
  await clean();
  await sanitizeIcons();
  await generateCombinedIcons();
}

const tasks = require('@spectrum-css/component-builder');

/**
 * @description This code will read all the files in the combined directory, 
 * transform the data in the files using the rename and svgstore functions, 
 * and write the modified versions to the dist directory.
 * @author Rajdeep
 */
 function generateSVGSprite() {
  const files = glob.sync(`combined/*.svg`).map(filePath => {
    return {
      path: filePath,
      name: 'spectrum-css-icon-' + path.basename(filePath, '.svg')
    };
  });
  let svgString = '';
  files.forEach(file => {
    svgString += fs.readFileSync(file.path, 'utf-8');
  });
  const sprite = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
    files.map(file => `<symbol id="${file.name}">${fs.readFileSync(file.path, 'utf-8')}</symbol>`) +
    '</svg>';
  fs.writeFileSync(`dist/spectrum-css-icons.svg`, sprite);
}

/**
 * @description This code defines a getSVGSpriteTask function that takes a
 * size parameter and returns a 
 * function that generates an SVG sprite for the specified size. 
 * The returned function reads all the files in the specified directory, 
 * transforms the data in the files using the rename and svgstore functions, and writes 
 * the modified versions to the dist directory
 * @param {*} size 
 * @author Rajdeep
 */
 function getSVGSpriteTask(size) {
  return function generateSVGSprite() {
    const files = glob.sync(`${size}/*.svg`).map(filePath => {
      return {
        path: filePath,
        name: 'spectrum-css-icon-' + path.basename(filePath, '.svg')
      };
    });
    let svgString = '';
    files.forEach(file => {
      svgString += fs.readFileSync(file.path, 'utf-8');
    });
    const sprite = '<svg xmlns="http://www.w3.org/2000/svg">\n' +
      files.map(file => `<symbol id="${file.name}" viewBox="0 0 24 24">${fs.readFileSync(file.path, 'utf-8')}</symbol>`).join('\n') +
      '\n</svg>';
    fs.writeFileSync(`dist/spectrum-css-icons-${size}.svg`, sprite);
  };
}

const generateSVGSpriteMedium = getSVGSpriteTask('medium');
const generateSVGSpriteLarge = getSVGSpriteTask('large');

const buildIcons = async function() {
  try {
    await generateSVGSpriteMedium();
    await generateSVGSpriteLarge();
    await generateSVGSprite();
  } catch (err) {
    console.error(err);
  }
}

const build = async function() {
  try {
    await Promise.all([
    buildIcons(),
    tasks.buildCSS()
    ])
  } catch (err) {
    console.error(err);
  }
}

exports.updateIcons = updateIcons;
exports.build = exports.buildLite = exports.buildHeavy = exports.buildMedium = build;
exports.default = build;
