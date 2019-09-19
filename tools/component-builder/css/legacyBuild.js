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

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');
const insert = require('gulp-insert');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const merge = require('merge-stream');
const path = require('path');

const processors = require('./processors');
const mutateselectors = require('./plugins/postcss-mutateselectors')
const legacyProcessors = processors.legacyProcessors;

var colorStops = [
  'darkest',
  'dark',
  'light',
  'lightest'
];

const varDir = path.join(path.dirname(require.resolve('@spectrum-css/vars')), '..') + '/';

const baseImports = `
@import "${varDir}css/globals/spectrum-dimensionGlobals.css";
@import "${varDir}css/globals/spectrum-animationGlobals.css";
@import "${varDir}css/globals/spectrum-fontGlobals.css";
@import "${varDir}css/globals/spectrum-colorGlobals.css";
@import "${varDir}css/globals/spectrum-staticAliases.css";
@import "${varDir}css/globals/spectrum-colorAliases.css";
@import "${varDir}css/globals/spectrum-colorSemantics.css";
@import "${varDir}css/globals/spectrum-dimensionAliases.css";
`;

/**
  Builds medium files
*/
function buildMedium() {
  return gulp.src('index.css')
    .pipe(insert.prepend(`${baseImports}
@import "${varDir}css/scales/spectrum-medium.css";
@import "${varDir}dist/components/index.css";`))
    .pipe(postcss(processors.getProcessors(false, false)))
    .pipe(gulp.dest('dist/'));
}

/**
  Builds individual components (dimensions only)
*/
function buildLarge() {
  return gulp.src('index.css')
    .pipe(insert.prepend(`${baseImports}
@import "${varDir}css/scales/spectrum-large.css";
@import "${varDir}dist/components/index.css";`))
    .pipe(postcss(processors.getProcessors(false, false)))
    .pipe(rename(function(path) {
      path.basename += '-lg';
    }))
    .pipe(gulp.dest('dist/'));
}

function buildSkinFiles(colorStop, globs, prependString, appendString, dest) {
  prependString = prependString || '';
  appendString = appendString || '';
  dest = dest || 'dist/';

  return gulp.src(globs, {
    allowEmpty: true // Allow missing skin.css
  })
    .pipe(insert.prepend(`${baseImports}
@import "${varDir}css/themes/spectrum-${colorStop}.css";
@import "${varDir}dist/components/index.css";
${prependString}\n`))
    .pipe(insert.append(appendString))
    .pipe(postcss(legacyProcessors))
    .pipe(rename(function(path) {
      path.dirname += '/colorStops';
      path.basename = colorStop;
    }))
    .pipe(gulp.dest(dest));
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
  Builds all skin files individually against each colorstop for each component with outer descendant selectors
  This enables the use of multiple colorstops on the same page
*/
function buildMultiStops() {
  function buildMultistopSkinFiles(colorStop) {
    return gulp.src('skin.css', {
      allowEmpty: true // Allow missing skin.css
    })
    .pipe(insert.prepend(`${baseImports}
@import "${varDir}css/themes/spectrum-${colorStop}.css";
@import "${varDir}dist/components/index.css";`))
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
      .pipe(rename(function(path) {
        path.dirname += '/multiStops';
        path.basename = colorStop;
      }))
      .pipe(gulp.dest('dist/'));
  }

  return merge.apply(this, colorStops.map(buildMultistopSkinFiles));
}

/**
  Create a file that only includes statements that are affected by variables
*/
function buildDiff() {
  var varsProcessors = processors.getProcessors(false, false, false);
  varsProcessors.unshift(require('./plugins/postcss-varsonly')());

  return gulp.src('index.css')
    // Use large variables
    .pipe(insert.prepend(`${baseImports}
@import "${varDir}css/scales/spectrum-large.css";
@import "${varDir}dist/components/index.css";`))
    .pipe(postcss(varsProcessors))
    // Process again, but wrapped
    .pipe(insert.prepend('.spectrum--large {\n'))
    .pipe(insert.append('\n}\n'))
    .pipe(postcss([
      require('postcss-nested'),
      require('postcss-discard-empty') // kill empty wraps
    ]))
    .pipe(rename(function(path) {
      path.basename += '-diff';
    }))
    .pipe(gulp.dest('dist/'));
}

exports.buildDiff = buildDiff;
exports.buildMedium = buildMedium;
exports.buildLarge = buildLarge;
exports.buildSingleStops = buildSingleStops;
exports.buildMultiStops = buildMultiStops;
