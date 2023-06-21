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
const rename = require("gulp-rename");
const concat = require("gulp-concat");

const through = require("through2");
const postcss = require("postcss");

const { build, serve, watch, dev } = require("./site/gulpfile.js");

const varDir = path.dirname(require.resolve(`@spectrum-css/vars/package.json`));

const expressVarDir = path.dirname(
	require.resolve(`@spectrum-css/expressvars/package.json`)
);

const tokensDir = path.dirname(
	require.resolve(`@spectrum-css/tokens/package.json`)
);

const getVarValues = function (css) {
	const variables = {};

	postcss.parse(css).walkRules((rule) => {
		rule.walkDecls((decl) => {
			variables[decl.prop] = decl.value;
		});
	});

	return variables;
};

const getAllVars = async function () {
	return new Promise((resolve, reject) => {
		let variableList;

		gulp
			.src([
				`${varDir}/css/themes/*.css`,
				`${varDir}/css/scales/*.css`,
				`${varDir}/css/components/*.css`,
				`${varDir}/css/globals/*.css`,
				`${tokensDir}/dist/index.css`,
			])
			.pipe(concat("everything.css"))
			.pipe(
				through.obj((file, _enc, cb) => {
					variableList = getVarValues(file.contents.toString());

					cb(null, file);
				})
			)
			.on("finish", () => {
				resolve(variableList);
			})
			.on("error", reject);
	});
};

const getUsedVars = async function () {
	return new Promise(async (resolve, reject) => {
		let variables;

		const allVars = await getAllVars();

		gulp
			.src(`dist/index-vars.css`, { cwd: process.cwd() })
			.pipe(concat("everything.css"))
			.pipe(
				through.obj(function getUsedVars(file, _enc, cb) {
					variables = getVarsFromCSS(file.contents.toString());
					if (!variables) cb(null, file);

					// Resolve each variable to ensure everything it references is available
					for (let varName in variables) {
						if (!allVars[varName] || !allVars[varName].startsWith("var"))
							continue;

						const isVarFunc = allVars[varName].match(/var\((.+),?.*?\)/);

						let curVarName = isVarFunc ? isVarFunc[1] : allVars[varName];
						while (allVars[curVarName]) {
							if (!variables[curVarName]) {
								variables[curVarName] = true;
							}
							curVarName = allVars[curVarName];
						}
					}

					cb(null, file);
				})
			)
			.on("finish", () => {
				resolve([...Object.keys(variables ?? {})]);
			})
			.on("error", reject);
	});
};

const buildUnique = function () {
	return new Promise(async (resolve, reject) => {
		// Read in all variables from components
		const variableList = await getUsedVars();

		// For each stop and scale, filter by used variables only
		gulp
			.src([
				path.join(varDir, "dist/*.css"),
				"!" + path.join(varDir, "dist/index.css"),
			])
			.pipe(
				through.obj(function makeUnique(file, _enc, cb) {
					postcss.parse(file.contents.toString()).walkRules((rule) => {
						rule.walkDecls((decl) => {
							if (variableList.indexOf(decl.prop) === -1) {
								decl.remove();
							}
						});
					});

					file.contents = Buffer.from(root.toString());

					// For each line variable, delete it if its not included
					cb(null, file);
				})
			)
			.pipe(
				rename((file) => {
					file.basename += "-unique";
				})
			)
			.pipe(gulp.dest("dist/vars/"))
			.on("finish", resolve)
			.on("error", reject);
	});
};

// Combined
const concatPackageFiles = function (taskName, input, output, directory) {
	const func = () =>
		gulp
			.src(input, { allowEmpty: true })
			.pipe(concat(output))
			.pipe(gulp.dest(`dist/${directory || ""}`));

	Object.defineProperty(func, "name", { value: taskName, writable: false });

	return func;
};

const buildCombined = gulp.series(
	gulp.parallel(
		concatPackageFiles("buildCombined_core", "index.css", "spectrum-core.css"),
		concatPackageFiles(
			"buildCombined_large",
			"index-lg.css",
			"spectrum-core-lg.css"
		),
		concatPackageFiles(
			"buildCombined_diff",
			"index-diff.css",
			"spectrum-core-diff.css"
		),
		concatPackageFiles(
			"buildCombined_light",
			"multiStops/light.css",
			"spectrum-light.css"
		),
		concatPackageFiles(
			"buildCombined_lightest",
			"multiStops/lightest.css",
			"spectrum-lightest.css"
		),
		concatPackageFiles(
			"buildCombined_dark",
			"multiStops/dark.css",
			"spectrum-dark.css"
		),
		concatPackageFiles(
			"buildCombined_darkest",
			"multiStops/darkest.css",
			"spectrum-darkest.css"
		)
	)
);

const buildStandalone = gulp.series(
	gulp.parallel(
		concatPackageFiles(
			"buildStandalone_light",
			["index.css", "colorStops/light.css"],
			"spectrum-light.css",
			"standalone/"
		),
		concatPackageFiles(
			"buildStandalone_lightest",
			["index.css", "colorStops/lightest.css"],
			"spectrum-lightest.css",
			"standalone/"
		),
		concatPackageFiles(
			"buildStandalone_dark",
			["index.css", "colorStops/dark.css"],
			"spectrum-dark.css",
			"standalone/"
		),
		concatPackageFiles(
			"buildStandalone_darkest",
			["index.css", "colorStops/darkest.css"],
			"spectrum-darkest.css",
			"standalone/"
		),
		concatPackageFiles(
			"buildStandalone_lightLarge",
			["index-lg.css", "colorStops/light.css"],
			"spectrum-light-lg.css",
			"standalone/"
		),
		concatPackageFiles(
			"buildStandalone_lightestLarge",
			["index-lg.css", "colorStops/lightest.css"],
			"spectrum-lightest-lg.css",
			"standalone/"
		),
		concatPackageFiles(
			"buildStandalone_darkLarge",
			["index-lg.css", "colorStops/dark.css"],
			"spectrum-dark-lg.css",
			"standalone/"
		),
		concatPackageFiles(
			"buildStandalone_darkestLarge",
			["index-lg.css", "colorStops/darkest.css"],
			"spectrum-darkest-lg.css",
			"standalone/"
		)
	)
);

exports.build = gulp.series(
	gulp.parallel(buildCombined, buildStandalone),
	gulp.parallel(
		buildUnique,
		() =>
			gulp
				.src(path.join(varDir, "dist/spectrum-*.css"))
				.pipe(gulp.dest("dist/vars/")),

		() =>
			gulp
				.src(path.join(expressVarDir, "dist/spectrum-*.css"))
				.pipe(gulp.dest("dist/expressvars/")),
		() =>
			gulp
				.src(path.join(varDir, "dist/**/*.css"))
				.pipe(gulp.dest("dist/tokens/"))
	),
	build
);

exports.serve = serve;
exports.watch = watch;

exports.dev = gulp.series(exports.build, dev);
