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
const del = require('del');

const css = require('./css');
const docs = require('./docs');
const release = require('./release');

function clean() {
  return del('dist/*');
}

function copyPackage() {
  return gulp.src('package.json')
    .pipe(gulp.dest('dist/'));
}

const build = gulp.series(
  clean,
  copyPackage,
  gulp.parallel(
    css.buildCSS,
    docs.buildDocs
  )
);

exports.default = build;
exports.build = build;
exports.clean = clean;

exports.buildCSS = css.buildCSS;
exports.buildVars = css.buildVars;

exports.buildDocs = docs.buildDocs;
exports.buildDocs_html = docs.buildDocs_html;

exports.release = gulp.series(
  release.bumpVersion,
  build,
  release.publishRelease
);

exports.bumpVersion = release.bumpVersion;
exports.publishRelease = release.publishRelease;
