/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('del');
const StyleDictionary = require('style-dictionary').extend('config.js');

function clean() {
  return del('dist/*');
}

function concatIndex() {
  return gulp.src([
    'dist/css/*.css',
    'dist/css/spectrum/*.css',
    'dist/css/express/*.css',
    'custom.css'
  ])
    .pipe(concat('index.css'))
    .pipe(gulp.dest('dist/'));
}

function styleDictionary(cb) {
  StyleDictionary.buildAllPlatforms();
  cb();
}

exports.clean = clean;
exports.build = exports.buildLite = exports.buildMedium = exports.default = gulp.series(
  clean,
  styleDictionary,
  concatIndex
);
