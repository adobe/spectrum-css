/* eslint-disable global-require */
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
const splice = require('splice-string');
const postcss = require('postcss');
const rename = require('stream-rename');
const replace = require('replace-in-file');
const merge = require('merge-stream');
const path = require('path');
const fs = require('fs')
const processors = require('./processors');
const mutateselectors = require('./plugins/postcss-mutateselectors')

const { legacyProcessors } = processors;

const colorStops = [
  'darkest',
  'dark',
  'light',
  'lightest'
];

const varDir = `${path.join(path.dirname(require.resolve('@spectrum-css/vars')), '..')  }/`;

const baseImports = `
@import "${varDir}css/globals/index.css";
`;

/**
  Builds spectrum-medium css file
*/
function buildMedium() {
  fs.readFile('index.css', 'utf8', (err, data) => {
    if (err) throw err;

    const result = splice(data, 0, 0, `${baseImports}
@import "${varDir}css/scales/spectrum-medium.css";
@import "${varDir}css/components/index.css";`);

    postcss(processors.getProcessors(false, false)).process(result, (err, result) => {
      if (err) throw err;
      fs.writeFile('dist/index.css', result.css, (err) => {
        if (err) throw err;
      });
    });
  });
}

/**
  Builds spectrum-large css
*/
function buildLarge() {
  fs.readFile('index.css', 'utf8', (err, data) => {
    if (err) throw err;

    const result = splice(data, 0, 0, `${baseImports}
@import "${varDir}css/scales/spectrum-large.css";
@import "${varDir}css/components/index.css";`);

    postcss(processors.getProcessors(false, false)).process(result, (err, result) => {
      if (err) throw err;
      fs.writeFile('dist/index.css', result.css, (err) => {
        if (err) throw err;
      });
    });
  });
}

/**
 * @description Builds skin.css files under component theme folders
 * @param {*} colorStop 
 * @param {*} globs 
 * @param {*} prependString 
 * @param {*} appendString 
 * @param {*} dest 
 * @returns 
 */
function buildSkinFiles(colorStop, globs, prependString, appendString, dest) {
  prependString = prependString || '';
  appendString = appendString || '';
  dest = dest || 'dist/';

  return fs.createReadStream(globs, {
    allowEmpty: true // Allow missing skin.css
  })
    .pipe(fs.readFileSync(globs, 'utf8', (err, data) => {
      if (err) throw err;
      let result = splice(data, 0, 0, `${baseImports}
@import "${varDir}css/themes/spectrum-${colorStop}.css";
@import "${varDir}css/components/index.css";
${prependString}\n`);
      result = splice(result, result.length, 0, appendString);
      return result;
    }))
    .pipe(postcss(legacyProcessors))
    .pipe(rename((path) => {
      path.dirname += '/colorStops';
      path.basename = colorStop;
    }))
    .pipe(fs.createWriteStream(dest));
}

/**
  For each color stop, create a standalone skin file that applies colors for this component
*/
function buildSingleStops() {
  function buildComponentSkinFiles(colorStop) {
    return buildSkinFiles(colorStop, 'skin.css');
  }
  return merge.apply(this, colorStops.map(buildComponentSkinFiles));
}

/**
  // eslint-disable-next-line max-len
  Builds all skin files individually against each colorstop for each 
  component with outer descendant selectors
  This enables the use of multiple colorstops on the same page
*/
function buildMultiStops() {
  function buildMultistopSkinFiles(colorStop) {
    return fs.createReadStream('skin.css', {
      allowEmpty: true // Allow missing skin.css
    })
      .pipe(fs.readFileSync('skin.css', 'utf8', (err, data) => {
        if (err) throw err;
        const result = splice(data, 0, 0, `${baseImports}
@import "${varDir}css/themes/spectrum-${colorStop}.css";
@import "${varDir}css/components/index.css";`);
        return result;
      }))
      .pipe(postcss(legacyProcessors))
      .pipe(postcss([
        mutateselectors((selector) => {
          if (selector === '.spectrum') {
            // This is a special exception for the Page component: it shouldn't be nested
            selector = '';
          }
          return `.spectrum--${colorStop} ${selector}`;
        })
      ]))
      // Fix a nested + inherit bug
      .pipe(replace(`.spectrum--${colorStop} .spectrum--${colorStop}`, `.spectrum--${colorStop}`))
      .pipe(rename((path) => {
        path.dirname += '/multiStops';
        path.basename = colorStop;
      }))
      .pipe(fs.createWriteStream('dist/'));
  }

  return merge.apply(this, colorStops.map(buildMultistopSkinFiles));
}

/**
  Create a file that only includes statements that are affected by variables
*/
function buildDiff() {
  const varsProcessors = processors.getProcessors(false, false, false, true);

  return fs.createReadStream('index.css')
    .pipe(fs.readFileSync('index.css', 'utf8', (err, data) => {
      if (err) throw err;
      const result = splice(data, 0, 0, `${baseImports}
@import "${varDir}css/scales/spectrum-large.css";
@import "${varDir}css/components/index.css";`);
      return result;
    }))
    .pipe(postcss(varsProcessors))
    .pipe(fs.readFileSync('index.css', 'utf8', (err, data) => {
      if (err) throw err;
      let result = splice(data, 0, 0, '.spectrum--large {\n');
      result = splice(result, result.length, 0, '\n}\n');
      return result;
    }))
    .pipe(postcss([
      // eslint-disable-next-line global-require
      require('postcss-nested'),
      require('postcss-discard-empty') // kill empty wraps
    ]))
    .pipe(rename((path) => {
      path.basename += '-diff';
    }))
    .pipe(fs.createWriteStream('dist/'));
}

exports.buildDiff = buildDiff;
exports.buildMedium = buildMedium;
exports.buildLarge = buildLarge;
exports.buildSingleStops = buildSingleStops;
exports.buildMultiStops = buildMultiStops;
