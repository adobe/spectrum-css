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
const path = require('path');
const glob = require('glob');
const rename = require('stream-rename');
const svgmin = require('svgmin');
const replace = require('replace-in-file');
const sort = require('sort-stream');
const svgcombiner = require('svgcombiner');
const svgstore = require('svgstore');
const async = require('async')


async function clean() {
  const del = await import('del');
  return del([
    'combined/**'
  ]);
}

/**
 * @description This code will read all the files in the medium and large directories, 
 * transform the data in the files using the replace and svgmin functions, 
 * rename the files, and write the modified versions to the current directory.
 */
function sanitizeIcons() {
  glob('{medium,large}/*.svg', (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    files.forEach(file => {
      fs.createReadStream(file)
        .pipe(replace(/<defs>[\s\S]*?<\/defs>/m, ''))
        .pipe(replace(/<rect[\s\S]*?\/>/m, ''))
        .pipe(svgmin({
          plugins: [
            {
              removeAttrs: {
                attrs: [
                  'class',
                  'data-name',
                  'id'
                ]
              }
            },
            { collapseGroups: true }
          ]
        }))
        .pipe(rename((path) => path.basename = path.basename.split('_').pop().replace('Size', '')))
        .pipe(fs.createWriteStream(file.replace('{medium,large}/', './')))
        .on('finish', () => {
          del(file); // delete the original file
        });
    });
  });
}

/**
 * @description This code will read all the files in the medium and large directories, transform the data in the files using the sort and svgcombiner functions,
 * and write the modified versions to the
 */
function generateCombinedIcons() {
  glob('{medium,large}/*.svg', (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    fs.createReadStream(files)
      .pipe(sort())
      .pipe(svgcombiner({
        processName(filePath) {
          // Clean filename
          return path.basename(filePath, path.extname(filePath)).replace(/S_UI(.*?)_.*/, '$1');
        },
        processClass(filePath) {
          // Return the last directory
          return 'spectrum-UIIcon--' + path.dirname(filePath).split(path.sep).pop();
        }
      }))
      .pipe(fs.createWriteStream('combined/'))
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
  glob('combined/*.svg', (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    fs.createReadStream(files)
      .pipe(rename((filePath) => {
        filePath.basename = 'spectrum-css-icon-' + filePath.basename;
      }))
      .pipe(svgstore({
        inlineSvg: true
      }))
      .pipe(rename('spectrum-css-icons.svg'))
      .pipe(fs.createWriteStream('dist/'))
  });
}

/**
 * @description This code defines a getSVGSpriteTask function that takes a
 * size parameter and returns a 
 * function that generates an SVG sprite for the specified size. 
 * The returned function reads all the files in the specified directory, 
 * transforms the data in the files using the rename and svgstore functions, and writes 
 * the modified versions to the dist directory
 * @param {*} size 
 * @author Rajdeepx`` 
 */
function getSVGSpriteTask(size) {
  return (callback) => {
    glob(`${size}/*.svg`, (err, files) => {
      if (err) {
        console.error(err);
        return;
      }
      fs.createReadStream(files)
        .pipe(rename((filePath) => {
          filePath.basename = 'spectrum-css-icon-' + filePath.basename.replace(/S_UI(.*?)_.*/, '$1');
        }))
        .pipe(svgstore({
          inlineSvg: true
        }))
        .pipe(rename(`spectrum-css-icons-${size}.svg`))
        .pipe(fs.createWriteStream('dist/'))
        .on('finish', callback);
    });
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
    await buildIcons();
    await tasks.buildCSS();
  } catch (err) {
    console.error(err);
  }
}


exports.updateIcons = updateIcons;
exports.build = exports.buildLite = exports.buildHeavy = exports.buildMedium = build;
exports.default = build;
