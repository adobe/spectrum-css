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
const processors = require('./processors').processors;

const legacyBuild = require('./legacyBuild');
const vars = require('./vars');

// Read in all variables used
// Read in all vars from recent DNA
// Include definitions if they refer to a variable, static if not

function buildIndexVars() {
  return gulp.src([
    'index.css',
    'skin.css',
  ], {
    allowEmpty: true // Allow missing skin.css
  })
    .pipe(concat('index-vars.css'))
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist/'));
}

let buildVars = gulp.series(
  buildIndexVars,
  vars.bakeVars
);

exports.buildVars = buildVars;

exports.buildCSS = gulp.parallel(
  buildVars,
  legacyBuild.buildDiff,
  legacyBuild.buildMedium,
  legacyBuild.buildLarge,
  legacyBuild.buildSingleStops,
  legacyBuild.buildMultiStops
);
