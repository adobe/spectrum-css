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
const del = require("del");

const css = require("./css");

function clean() {
	return del("dist/*");
}

exports.default = exports.build = gulp.series(clean, css.buildVars);
exports.buildLite = gulp.series(clean, css.buildIndexVars);
exports.buildMedium = gulp.series(clean, css.buildVars);
exports.buildHeavy = gulp.series(clean, css.buildCSS);
exports.clean = clean;

exports.buildCSS = css.buildCSS;
exports.buildVars = css.buildVars;
