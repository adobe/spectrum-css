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
const postcss = require("gulp-postcss");
const concat = require("gulp-concat");
const processors = require("./processors").processors;
const rename = require("gulp-rename");

const vars = require("./vars");

// Read in all variables used
// Read in all vars from recent DNA
// Include definitions if they refer to a variable, static if not

function buildIndexVars() {
	return gulp
		.src(["index.css"])
		.pipe(concat("index-vars.css"))
		.pipe(postcss(processors))
		.pipe(gulp.dest("dist/"));
}

let buildVars = gulp.series(buildIndexVars, vars.bakeVars);

exports.buildIndexVars = buildIndexVars;
exports.buildVars = buildVars;

exports.buildCSS = gulp.series(buildVars, function copyIndex() {
	// Just copy index.vars as index.css to maintain backwards compat
	return gulp
		.src("dist/index-vars.css")
		.pipe(
			rename((file) => {
				file.basename = "index";
			})
		)
		.pipe(gulp.dest("dist/"));
});
