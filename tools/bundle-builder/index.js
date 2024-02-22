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

const depUtils = require("./lib/depUtils");
const dirs = require("./lib/dirs");

const docs = require("./docs");
const dev = require("./dev");
const subrunner = require("./subrunner");
const vars = require("./vars");

const components = path.join(__dirname, "..", "..", "components");

var dependencyOrder = null;

// Combined
function concatPackageFiles(taskName, input, output, directory) {
	let func = function () {
		let glob;
		if (Array.isArray(input)) {
			glob = [];

			dependencyOrder.forEach((dep) => {
				input.forEach((file) => glob.push(require.resolve(`${dep}/${file}`)));
			});
		} else {
			glob = dependencyOrder.map((dep) => require.resolve(`${dep}/${input}`));
		}

		return gulp
			.src(glob, { allowEmpty: true })
			.pipe(concat(output))
			.pipe(gulp.dest(`dist/${directory || ""}`));
	};

	Object.defineProperty(func, "name", { value: taskName, writable: false });

	return func;
}

async function getDependencyOrder(done) {
	dependencyOrder = await depUtils.getFolderDependencyOrder(components);
	done();
}

let buildCombined = gulp.series(
	getDependencyOrder,
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

let buildStandalone = gulp.series(
	getDependencyOrder,
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

// run buildLite on a selected set of packages that depend on commons
// yay: faster than 'rebuild everything' approach
// boo: must add new packages here as commons grows
function buildDependenciesOfCommons() {
	return subrunner.runTaskOnPackages("build", [
		`${dirs.components}/actionbutton`,
		`${dirs.components}/button`,
		`${dirs.components}/closebutton`,
		`${dirs.components}/logicbutton`,
		`${dirs.components}/modal`,
		`${dirs.components}/picker`,
		`${dirs.components}/popover`,
		`${dirs.components}/tooltip`,
		`${dirs.components}/underlay`,
	]);
}

const buildDocs = gulp.parallel(docs.build, vars.copyVars);

function buildIfTopLevel() {
	const tasks = gulp.parallel(buildCombined, buildStandalone, buildDocs);

	// They're already built, just include the output or build for all packages
	return !dirs.isTopLevel ? tasks : gulp.series(subrunner.buildComponents, tasks);
}

const build = gulp.series(buildIfTopLevel(), vars.copyVars);

const buildLite = gulp.series(function buildComponents() {
	return subrunner.runTaskOnAllComponents("buildLite");
}, buildDocs);

const buildMedium = gulp.series(function buildComponents() {
	return subrunner.runTaskOnAllComponents("buildMedium");
}, buildDocs);

const buildHeavy = gulp.series(function buildComponents() {
	return subrunner.runTaskOnAllComponents("buildHeavy");
}, buildDocs);

exports.devHeavy = gulp.series(buildHeavy, dev.watch);

exports.buildUniqueVars = vars.buildUnique;

exports.buildComponents = subrunner.buildComponents;
exports.buildCombined = buildCombined;
exports.buildStandalone = buildStandalone;
exports.buildLite = buildLite;
exports.buildDocs = buildDocs;
exports.buildDependenciesOfCommons = buildDependenciesOfCommons;
// Build all packages if at the top level, otherwise just build the docs
exports.dev = dirs.isTopLevel ? gulp.series(buildLite, dev.watch) : gulp.series(buildDocs, dev.watch);
exports.build = build;
exports.watch = dev.watch;
exports.default = buildMedium;
