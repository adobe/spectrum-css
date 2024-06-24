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

const depSolver = require("dependency-solver");

const { dirs, relativePrint } = require("../../tasks/utilities");

require("colors");

/**
 * Given a list of package paths, solve the dependency order
 * @param {string[]} packages - package directories
 * @return {Promise<string[]>} The solved dependency order
 */
async function solveDependencies(packages = []) {
	const packageDependencies = {};

	await Promise.all(
		packages.map(async (pkg) => {
			const {
				name,
				peerDependencies = {},
				dependencies = {},
				devDependencies = {},
			} = await fsp.readFile(path.join(pkg, "package.json")).then(JSON.parse);

			packageDependencies[name] = [...new Set([
				...Object.keys(peerDependencies),
				...Object.keys(dependencies),
				...Object.keys(devDependencies),
			])];
		})
	);

	return depSolver.solve(packageDependencies);
}

/**
 * Get the list of all packages in given directory
 * @param {string} packagesDir - directory of packages
 * @return {Promise<string[]>} An array of package names in dependency order
 */
async function getFolderDependencyOrder(packagesDir) {
	const packages = [];

	if (fs.existsSync(path.join(packagesDir, "package.json"))) {
		packages.push(packagesDir);
	}

	// If no packages identified, see if this is a folder containing packages
	if (!packages.length) {
		(await fsp.readdir(packagesDir, { withFileTypes: true }))
			.forEach((dirent) => {
				/* looking for directories that have a package.json */
				if (!dirent.isDirectory() || !dirent.isSymbolicLink()) return;
				if (fs.existsSync(path.join(dirent.path, dirent.name, "package.json"))) {
					packages.push(path.join(dirent.path, dirent.name));
				}
			});
	}

	return await solveDependencies(packages);
}

/**
 * Determines the package name from a file path
 * @param {string} filePath
 * @returns {string}
 */
function getPackageFromPath(filePath = process.cwd()) {
	const parts = filePath.split(path.sep);

	// Capture component name from a local or node_modules syntax
	if (parts.includes("components") || parts.includes("@spectrum-css")) {
		const index = parts.indexOf("components") ?? parts.indexOf("@spectrum-css");
		return parts[index + 1];
	}

	// Capture component name from a local or node_modules syntax
	if (parts.includes(".storybook")) {
		const index = parts.indexOf(".storybook");
		return parts[index + 2];
	}

	// Check local root-level packages such as ui-icons & tokens
	if (parts.includes("ui-icons")) return "ui-icons";
	if (parts.includes("tokens")) return "tokens";

	// This is a fallback best-guess scenario:
	// Split the path from root dir and capture the first folder as the package name
	const guessParts = path.relative(dirs.root, filePath).split(path.sep);
	return guessParts[0];
}

module.exports = {
	relativePrint,
	solveDependencies,
	getFolderDependencyOrder,
	getPackageFromPath,
};
