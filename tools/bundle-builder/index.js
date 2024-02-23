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

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

const gulp = require("gulp");
const depSolver = require("dependency-solver");

const docs = require("./docs");
const dev = require("./dev");

const coreTokensDir = path.dirname(require.resolve("@spectrum-css/tokens/package.json")) ?? path.join(__dirname, "..", "..", "..", "tokens");

function copyCoreTokens() {
	return gulp
		.src(path.join(coreTokensDir, "dist/**/*.css"))
		.pipe(gulp.dest(path.join(__dirname, "..", "..", "..", "dist", "tokens")));
}

/**
 * Given a package path, get its dependencies
 * @param {string} packages - package directory
 * @return {Object} An object mapping the package name to its dependencies, or null if no dependencies
 */
async function getDependencies(package) {
	const {
		name,
		peerDependencies = {},
		dependencies = {},
		devDependencies = {}
	} = await fsp.readFile(path.join(package, "package.json")).then(JSON.parse);
	return {
		name,
		dependencies: [...new Set([
			...Object.keys(peerDependencies),
			...Object.keys(dependencies),
			...Object.keys(devDependencies),
		])].filter((dep) => (
			dep.startsWith("@spectrum-css") &&
			![
				"bundle-builder",
				"component-builder-simple"
			].some((postfix) => dep.endsWith(postfix))
		))
	};
}

/**
 * Given a list of package paths, solve the dependency order
 * @param {string[]} packages - package directories
 * @return {Promise<string[]>} The solved dependency order
 */
async function solveDependencies(packages) {
	async function getDependenciesForSolver(package) {
		let { name, dependencies } = await getDependencies(package);

		if (dependencies.length === 0) {
			return null;
		}

		return { [name]: dependencies };
	}

	let depArray = (
		await Promise.all(packages.map(getDependenciesForSolver))
	).filter(Boolean);

	let dependencies = {};
	depArray.forEach((dep) => {
		Object.assign(dependencies, dep);
	});

	return depSolver.solve(dependencies);
}

/**
 * Get the list of all packages in given directory
 * @param {string} packagesDir - directory of packages
 * @return {Promise<string[]>} An array of package names in dependency order
 */
async function getFolderDependencyOrder(packagesDir) {
	// Get list of all packages
	const packages = (await fsp.readdir(packagesDir, { withFileTypes: true }))
		.filter((dirent) => dirent.isDirectory() || dirent.isSymbolicLink())
		.map((dirent) => path.join(packagesDir, dirent.name));

	const solution = await solveDependencies(packages) ?? [];

	return [...new Set([
		"@spectrum-css/tokens",
		...solution,
	])];
}

/*
  Run the specified gulp task for the given package
*/
function buildComponent(packageDir, callback) {
	packageName = packageDir.split("/").pop();

	const gulpfile = path.join(packageDir, "gulpfile.js");

	if (!fs.existsSync(gulpfile)) {
		return callback();
	}

	const cwd = process.cwd();
	const { build } = require(gulpfile);

	if (!build) {
		return callback(new Error(
			`Task '${packageName.yellow}:${task.yellow}' not found!`
		));
	}

	process.chdir(packageDir);
	return build((err) => {
		process.chdir(cwd);
		callback(err);
	});
}

/*
  Run a task on every component in dependency order
*/
async function buildAllComponents() {
	const result = await getFolderDependencyOrder(path.join(__dirname, "../../components"));

	// Turn the package names into a path to the component directory
	const components = result.map((component) => {
		return path.dirname(require.resolve(`${component}/package.json`));
	});

	if (!components || !components.length) {
		return Promise.reject(`No packages provided for build`);
	}

	function processPackage() {
		const packageDir = components.shift();

		if (!packageDir) return Promise.resolve();

		return buildComponent(packageDir, (err) => {
			if (err && !process.env.FORCE) process.exit(1);
			return processPackage();
		});
	}

	// Kick off a gulp build for each package
	return processPackage();
}

const build = gulp.series(
	buildAllComponents,
	gulp.parallel(
		docs.build,
		copyCoreTokens
	)
);

exports.dev = gulp.series(build, dev.watch);
exports.watch = dev.watch;
exports.default = exports.build = build;

exports.buildDocs = gulp.parallel(docs.build, copyCoreTokens);
