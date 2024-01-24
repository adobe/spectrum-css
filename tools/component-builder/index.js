/*!
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const gulp = require("gulp");

const css = require("./css");
const docs = require("./docs");

const build = gulp.parallel(css.buildVars, docs.buildDocs);

const buildLite = css.buildIndexVars;

const buildMedium = css.buildVars;

const buildHeavy = css.buildCSS;

exports.default = build;
exports.build = build;
exports.buildLite = buildLite;
exports.buildMedium = buildMedium;
exports.buildHeavy = buildHeavy;

exports.buildCSS = css.buildCSS;
exports.buildVars = css.buildVars;

exports.buildDocs = docs.buildDocs;
exports.buildDocs_html = docs.buildDocs_html;
