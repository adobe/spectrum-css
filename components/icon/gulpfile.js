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
const path = require('path');

const gulp = require('gulp');
const rename = require('gulp-rename');
const replace = require('gulp-replace');

const { build } = require('@spectrum-css/component-builder');

function sanitizeIcons() {
  return gulp.src('{medium,large}/*.svg')
    .pipe(replace(/<defs>[\s\S]*?<\/defs>/m, ''))
    .pipe(replace(/<rect[\s\S]*?\/>/m, ''))
    .pipe(require('gulp-svgmin')({
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
    .pipe(require('vinyl-paths')(require('rimraf'))) // delete the original file
    .pipe(rename(path => path.basename = path.basename.split('_').pop().replace('Size', '')))
    .pipe(gulp.dest('./'));
}

function generateCombinedIcons() {
  return gulp.src('{medium,large}/*.svg')
    .pipe(require('gulp-sort')())
    .pipe(require('gulp-svgcombiner')({
      processName: function(filePath) {
        // Clean filename
        return path.basename(filePath, path.extname(filePath)).replace(/S_UI(.*?)_.*/, '$1');
      },
      processClass: function(filePath) {
        // Return the last directory
        return 'spectrum-UIIcon--' + path.dirname(filePath).split(path.sep).pop();
      }
    }))
    .pipe(gulp.dest('combined/'));
}

function generateSVGSprite() {
  return gulp.src('combined/*.svg')
    .pipe(rename(function(filePath) {
      filePath.basename = 'spectrum-css-icon-' + filePath.basename;
    }))
    .pipe(require('gulp-svgstore')({
      inlineSvg: true
    }))
    .pipe(rename('spectrum-css-icons.svg'))
    .pipe(gulp.dest('dist/'));
}

function getSVGSpriteTask(size) {
  return function generateSVGSprite() {
    return gulp.src(`${size}/*.svg`)
      .pipe(rename(function(filePath) {
        filePath.basename = 'spectrum-css-icon-' + filePath.basename.replace(/S_UI(.*?)_.*/, '$1');
      }))
      .pipe(require('gulp-svgstore')({
        inlineSvg: true
      }))
      .pipe(rename(`spectrum-css-icons-${size}.svg`))
      .pipe(gulp.dest('dist/'));
  };
}

const generateSVGSpriteMedium = getSVGSpriteTask('medium');
const generateSVGSpriteLarge = getSVGSpriteTask('large');

const buildIcons = gulp.parallel(
  generateSVGSpriteMedium,
  generateSVGSpriteLarge,
  generateSVGSprite
);

exports.updateIcons = gulp.series(
  sanitizeIcons,
  generateCombinedIcons
);

exports.build = exports.buildLite = exports.buildHeavy = exports.buildMedium = gulp.parallel(
  buildIcons,
  build
);

exports.default = this.build;
