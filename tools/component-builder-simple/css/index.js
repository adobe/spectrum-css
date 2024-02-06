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
const processorsFunction = require("./processors").getProcessors;
const processors = processorsFunction();

function buildCSS() {
	return gulp
		.src([
			"index.css",
			"themes/spectrum.css", // spectrum comes first
			"themes/*.css",
		], {
			allowEmpty: true,
		})
		.pipe(concat("index.css"))
		.pipe(
			postcss(processors, {
				from: "./index.css", // gulp-concat sets the file.path wrong, so override here
			})
		)
		.pipe(gulp.dest("dist/"));
}

function buildCSSWithoutThemes() {
	return gulp
		.src([
			"index.css",
			"themes/spectrum.css", // spectrum comes first
			"themes/*.css",
		], {
			allowEmpty: true,
		})
		.pipe(concat("index-base.css"))
		.pipe(
			postcss(processorsFunction({ noFlatVariables: true }), {
				from: "./index.css", // gulp-concat sets the file.path wrong, so override here
			})
		)
		.pipe(gulp.dest("dist/"));
}

function buildCSSThemeIndex() {
	return gulp
		.src([
			"themes/spectrum.css", // spectrum comes first
			"themes/*.css",
		], {
			allowEmpty: true,
		})
		.pipe(concat("index-theme.css"))
		.pipe(postcss(processorsFunction({ noSelectors: true })))
		.pipe(gulp.dest("dist/"));
}

function buildCSSThemes() {
	return gulp
		.src([
			"themes/*.css",
			"!themes/express.css",
		], {
			allowEmpty: true,
		})
		.pipe(postcss(processorsFunction({ noSelectors: true, keepComments: true })))
		.pipe(gulp.dest("dist/themes/"));
}

/**
  Special case for express: it needs Spectrum base vars and needs to override them
*/
function buildExpressTheme() {
	return gulp
		.src(["dist/index-theme.css"], {
			allowEmpty: true,
		})
		.pipe(concat("express.css"))
		.pipe(postcss(processorsFunction().concat(require("postcss-combininator"))))
		.pipe(gulp.dest("dist/themes/"));
}

exports.buildCSS = gulp.series(
	gulp.parallel(
		buildCSS,
		buildCSSWithoutThemes,
		gulp.series(buildCSSThemes, buildCSSThemeIndex, buildExpressTheme)
	),
);
