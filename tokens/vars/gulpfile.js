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

<<<<<<< HEAD:components/vars/gulpfile.js
const path = require("path");
=======
const fs = require('fs');
const fsp = fs.promises;
const path = require('path');
>>>>>>> d31d89e45 (chore: cleaning up build tasks):tokens/vars/gulpfile.js

const gulp = require("gulp");
const concat = require("gulp-concat");
const replace = require("gulp-replace");
const insert = require("gulp-insert");

<<<<<<< HEAD:components/vars/gulpfile.js
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
=======
const fg = require('fast-glob');
const postcss = require('postcss');

function replaceSelector(root, selector, replacement) {
  root.walkRules(rule => {
    rule.selectors.forEach((s) => {
      // replace :root with .spectrum class
      rule.selector = s.replace(selector, replacement);
    });
  });
  return root;
}

async function readReplaceWrite(globs, dest = (f) => `dist/${path.basename(f)}`, replacement = '.spectrum') {
  return fg(globs).then(async (files) => {
    await Promise.all(
      files.map(async (file) => {
        const newClass = typeof replacement === 'function' ? replacement(file) : replacement;
        const destPath = typeof dest === 'function' ? dest(file) : dest;
        const content = await fsp.readFile(file);
        const root = postcss.parse(content).then(async (root) =>
          replaceSelector(root, ':root', newClass)
        );
        return fsp.writeFile(destPath, root.toString());
      })
    );
  });
}

async function copyGlobals() {
  return readReplaceWrite([
    'css/globals/*.css',
    '!css/globals/spectrum-dimensionAliases.css',
    '!css/globals/spectrum-colorAliases.css'
  ], (f) => `dist/globals/${path.basename(f)}`);
}

async function copySources() {
  return readReplaceWrite([
    'css/themes/*.css',
    'css/scales/*.css'
  ], (f) => `dist/${path.basename(f)}`, (f) => `.${path.basename(f, '.css')}`);
}

function concatGlobalsFinal() {
  return readReplaceWrite([
    '.tmp/spectrum-global.css',
    'dist/globals/spectrum-dimensionAliases.css',
    'dist/globals/spectrum-colorAliases.css',
    'custom.css'
  ])
    .pipe(replace(/{/, function () {
      if (this.file.path.match('Aliases.css')) {
        return `{\n  /* ${path.basename(this.file.path)} */`;
      }
      return '{';
    }))
    .pipe(concat('spectrum-global.css'))
    .pipe(gulp.dest('dist/'));
>>>>>>> d31d89e45 (chore: cleaning up build tasks):tokens/vars/gulpfile.js
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

<<<<<<< HEAD:components/vars/gulpfile.js
function copyComponents() {
	return gulp
		.src(["!css/components/index.css", "css/components/*.css"])
		.pipe(replace(/:root/, ".spectrum"))
		.pipe(gulp.dest("dist/components/"));
}

function copyMetadata() {
	return gulp.src("json/spectrum-metadata.json").pipe(gulp.dest("dist/"));
=======
async function copyComponents() {
  return fg([
    '!css/components/index.css',
    'css/components/*.css'
  ]).then(async (files) => {
    await Promise.all(
      files.map(async (file) => {
        let content = await fsp.readFile(file);
        let root = postcss.parse(content);
        root = replaceSelector(root, ':root', `.spectrum`);
        return fsp.writeFile(`dist/components/${path.basename(file)}`, root.toString());
      })
    );
  });
}

async function copyMetadata() {
  fs.mkdirSync('dist/json', { recursive: true });
  return fsp.copyFile('json/spectrum-metadata.json', 'dist/json/spectrum-metadata.json');
>>>>>>> d31d89e45 (chore: cleaning up build tasks):tokens/vars/gulpfile.js
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

<<<<<<< HEAD:components/vars/gulpfile.js
exports.update = require("./tasks/updateDNA").updateDNA;

exports.default = build;
exports.build =
	exports.buildLite =
	exports.buildHeavy =
	exports.buildMedium =
		build;
=======
exports.update = require('./tasks/updateDNA').updateDNA;
exports.default = build;
>>>>>>> d31d89e45 (chore: cleaning up build tasks):tokens/vars/gulpfile.js
