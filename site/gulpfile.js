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
const path = require('path');

function buildSite_resources() {
  return gulp.src(path.join(__dirname, 'resources/**'))
    .pipe(gulp.dest(path.join(__dirname, 'dist/')));
}

function buildSite_loadicons() {
  return gulp.src(require.resolve('loadicons'))
    .pipe(gulp.dest(path.join(__dirname, 'dist/js/loadicons/')));
}

function buildSite_focusPolyfill() {
  return gulp.src(require.resolve('@adobe/focus-ring-polyfill'))
    .pipe(gulp.dest(path.join(__dirname, 'dist/js/focus-ring-polyfill/')));
}

function buildSite_lunr() {
  return gulp.src(require.resolve('lunr'))
    .pipe(gulp.dest(path.join(__dirname, 'dist/js/lunr/')));
}

function buildSite_prism() {
  return gulp.src([
    `${path.dirname(require.resolve('prismjs'))}/themes/prism.css`,
    `${path.dirname(require.resolve('prismjs'))}/themes/prism-tomorrow.css`
  ])
    .pipe(gulp.dest(path.join(__dirname, 'dist/css/prisim/')));
}

let copySiteResources = gulp.parallel(
  buildSite_resources,
  buildSite_loadicons,
  buildSite_focusPolyfill,
  buildSite_lunr,
  buildSite_prism
);

exports.copySiteResources = copySiteResources;
