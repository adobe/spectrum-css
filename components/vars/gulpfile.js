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

const path = require("path");

const gulp = require("gulp");
const concat = require("gulp-concat");
const replace = require("gulp-replace");
const insert = require("gulp-insert");

function copyGlobals() {
	return gulp
		.src([
			"css/globals/*.css",
			"!css/globals/spectrum-dimensionAliases.css",
			"!css/globals/spectrum-colorAliases.css",
		])
		.pipe(replace(/:root {/, ".spectrum {"))
		.pipe(gulp.dest("dist/globals/"));
}

function copySources() {
	const classMap = {
		"spectrum-darkest.css": ".spectrum--darkest",
		"spectrum-dark.css": ".spectrum--dark",
		"spectrum-light.css": ".spectrum--light",
		"spectrum-lightest.css": ".spectrum--lightest",
		"spectrum-large.css": ".spectrum--large",
		"spectrum-medium.css": ".spectrum--medium",
	};

	return gulp
		.src(["css/themes/*.css", "css/scales/*.css"])
		.pipe(
			replace(":root", function () {
				return classMap[path.basename(this.file.path)];
			})
		)
		.pipe(gulp.dest("dist/"));
}

function concatGlobalsFinal() {
	return gulp
		.src([
			".tmp/spectrum-global.css",
			"dist/globals/spectrum-dimensionAliases.css",
			"dist/globals/spectrum-colorAliases.css",
			"custom.css",
		])
		.pipe(
			replace(/{/, function () {
				if (this.file.path.match("Aliases.css")) {
					return `{\n  /* ${path.basename(this.file.path)} */`;
				}
				return "{";
			})
		)
		.pipe(concat("spectrum-global.css"))
		.pipe(gulp.dest("dist/"));
}

function concatGlobalsTemp() {
	return gulp
		.src([
			"css/globals/*.css",
			"!css/globals/index.css",
			"!css/globals/spectrum-dimensionAliases.css",
			"!css/globals/spectrum-colorAliases.css",
		])
		.pipe(
			replace(/:root {/, function () {
				return `  /* ${path.basename(this.file.path)} */`;
			})
		)
		.pipe(replace(/}/, ""))
		.pipe(concat("spectrum-global.css"))
		.pipe(insert.prepend(".spectrum {"))
		.pipe(insert.append("}\n"))
		.pipe(gulp.dest(".tmp/"));
}

function processColorAliases() {
	return gulp
		.src(["css/globals/spectrum-colorAliases.css"])
		.pipe(
			replace(
				/:root/,
				["darkest", "dark", "light", "lightest"]
					.map((stop) => `.spectrum--${stop}`)
					.join(",\n")
			)
		)
		.pipe(gulp.dest("dist/globals/"));
}

function processDimensionAliases() {
	return gulp
		.src(["css/globals/spectrum-dimensionAliases.css"])
		.pipe(
			replace(
				/:root/,
				["medium", "large"].map((scale) => `.spectrum--${scale}`).join(",\n")
			)
		)
		.pipe(gulp.dest("dist/globals/"));
}

function copyComponents() {
	return gulp
		.src(["!css/components/index.css", "css/components/*.css"])
		.pipe(replace(/:root/, ".spectrum"))
		.pipe(gulp.dest("dist/components/"));
}

function copyMetadata() {
	return gulp.src("json/spectrum-metadata.json").pipe(gulp.dest("dist/"));
}

const build = gulp.series(
	gulp.parallel(
		copyMetadata,
		copyGlobals,
		copySources,
		copyComponents,
		concatGlobalsTemp,
		processColorAliases,
		processDimensionAliases
	),
	concatGlobalsFinal
);

exports.update = require("./tasks/updateDNA").updateDNA;

exports.default = build;
exports.build =
	exports.buildLite =
	exports.buildHeavy =
	exports.buildMedium =
		build;
