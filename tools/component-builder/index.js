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

function clean() {
  return del('dist/*');
}

const build = gulp.series(
  clean,
  gulp.parallel(
    css.buildCSS,
    docs.buildDocs
  )
);

const buildLite = gulp.series(
  clean,
  css.buildVars
);

exports.default = build;
exports.build = build;
exports.buildLite = buildLite;
exports.clean = clean;

exports.buildCSS = css.buildCSS;
exports.buildVars = css.buildVars;

exports.buildDocs = docs.buildDocs;
exports.buildDocs_html = docs.buildDocs_html;
