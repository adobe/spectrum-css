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

const fsp = require("fs").promises;
const path = require("path");
const depSolver = require("dependency-solver");

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
				"component-builder",
				"component-builder-simple"
			].some((postfix) => dep.endsWith(postfix))
		))
	};
}

/**
 * Given a list of package paths, solve the dependency order
 * @param {string[]} packages - package directories
 * @return {string[]} The solved dependency order
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
 * @param {string} packageDir - package directory
 * @return {string[]} An array of package names in dependency order
 */
async function getPackageDependencyOrder(packageDir) {
	const { dependencies } = await getDependencies(packageDir);
	return solveDependencies(
		dependencies.map((dep) => {
			const packagePath = path.join(dep, "package.json");
			return path.dirname(
				require.resolve(packagePath)
			);
		})
	);
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
		"@spectrum-css/expressvars"
	])];
}

exports.getDependencies = getDependencies;
exports.solveDependencies = solveDependencies;
exports.getFolderDependencyOrder = getFolderDependencyOrder;
exports.getPackageDependencyOrder = getPackageDependencyOrder;
