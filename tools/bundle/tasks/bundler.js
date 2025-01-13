/* eslint-disable no-console */
/*!
 * Copyright 2024 Adobe. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at <http://www.apache.org/licenses/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import fs from "node:fs";
import path from "node:path";

import { processCSS } from "../../../tasks/component-builder.js";
import { dirs, getAllComponentNames, writeAndReport } from "../../../tasks/utilities.js";

import "colors";

const bundleRoot = path.resolve(dirs.root, "tools", "bundle");

/**
 * Validate the dependencies listed in the package.json
 * match the components in the components directory
 * @param {string[]} components - List of components
 * @returns {Promise<string[]>}
 */
async function validateDependencies(components) {
	const localPackage = path.join(bundleRoot, "package.json");
	// Confirm the dependencies listed in this package.json match the components in the components directory
	const packageJSON = JSON.parse(fs.readFileSync(localPackage, "utf8"));

	const dependencies = Object.keys(packageJSON.devDependencies ?? {}).filter((dependency) => dependency.startsWith("@spectrum-css/"));

	// Capture any dependencies that are missing or outdated in the components directory
	const outdated = dependencies.filter((dependency) => !components.includes(dependency.replace("@spectrum-css/", "")));

	// Capture any components that are missing from the dependencies to add them
	const missing = components.filter((components) => !dependencies.includes(`@spectrum-css/${components}`));

	// We don't need to update the package.json if nothing has changed
	let hasChanged = false;
	const reports = [];

	// If there are missing components, add them to the package dependencies
	if (missing.length > 0) {
		hasChanged = true;

		// Update the package.json dependencies
		missing.forEach((dependency) => {
			reports.push(`${"+".green} ${`@spectrum-css/${dependency} to package.json`.gray}`);
			packageJSON.devDependencies[`@spectrum-css/${dependency}`] = "workspace:^";
		});
	}

	// If there are outdated dependencies, remove them from the package dependencies
	if (outdated.length > 0) {
		hasChanged = true;

		// Remove the outdated dependencies
		outdated.forEach((dependency) => {
			// Don't remove the tokens dependency
			if (dependency === "@spectrum-css/tokens") return;

			reports.push(`${"-".red} ${`${dependency} from package.json`.gray}`);
			delete packageJSON.devDependencies[dependency];
		});
	}

	// If changes were made to the dependencies, write the package.json file
	if (hasChanged) {
		// Sort the devDependencies alphabetically
		packageJSON.devDependencies = Object.keys(packageJSON.devDependencies)
			.sort()
			.reduce((obj, key) => {
				obj[key] = packageJSON.devDependencies[key];
				return obj;
			}, {});

		return writeAndReport(JSON.stringify(packageJSON, null, "\t"), localPackage).then((r) => [...reports, r]).catch((err) => {
			return [...reports, err];
		});
	}

	return Promise.resolve("No dependency updates needed.\n".gray);
}

/**
 * Refresh the list of component imports
 * @returns {Promise<string[]>}
 */
export async function refresh() {
	const components = getAllComponentNames(false);

	// Refresh the src/index.css file with the latest component imports
	const imports = `
/**
 * This file is machine generated.
 *
 * To update, run \`yarn refresh:bundle\`
 * from the project root for Spectrum CSS.
 */

/* --- CORE TOKENS --- */
@import "@spectrum-css/tokens";

/* --- COMPONENTS --- */
${components.map((component) => {
		// Check if the package has an index.css file
		if (
			fs.existsSync(path.join(dirs.components, component, "index.css")) &&
			!["commons"].includes(component)
		) {
			return `@import "@spectrum-css/${component}";`;
		}
		return `/* skip @spectrum-css/${component} -- does not ship CSS */`;
}).join("\n")}
`;

	return Promise.all([
		validateDependencies(components),
		processCSS(imports, undefined, path.join(bundleRoot, "src", "index.css"), {
			cwd: bundleRoot,
			env: "development",
			configPath: bundleRoot,
		}),
	]).then(reports => {
		const logs = reports.flat(Infinity).filter(Boolean);
		console.log("\n\n🔄  refresh bundle");
		console.log(`${"".padStart(30, "-")}`);
		if (logs && logs.length > 0) {
			logs.forEach(log => console.log(log));
			console.log(`${"".padStart(30, "-")}`);
			console.log("");
		}
	})
		.catch((err) => {
			console.log("\n\n🔄  refresh bundle");
			console.log(`${"".padStart(30, "-")}`);

			console.trace(err);

			console.log(`${"".padStart(30, "-")}`);
			console.log("");

			process.exit(1);
		});
}

/**
 * Bundle all the components into a single CSS file
 * @returns {Promise<string[]>}
 */
export async function bundler() {
	// Ensure the dist directory exists
	if (!fs.existsSync(path.join(bundleRoot, "dist"))) {
		fs.mkdirSync(path.join(bundleRoot, "dist"));
	}

	return Promise.all([
		processCSS(undefined, path.join(bundleRoot, "src", "index.css"), path.join(bundleRoot, "dist", "index.css"), { cwd: bundleRoot }),
		// Write the minified CSS
		processCSS(undefined, path.join(bundleRoot, "src", "index.css"), path.join(bundleRoot, "dist", "index.min.css"), { cwd: bundleRoot, minify: true }),
	]);
}

/**
 * Entry point for the bundler
 * @returns {Promise<void>}
 */
export async function main() {
	const key = "bundler";

	console.time(key);
	return Promise.all([
		bundler(),
	]).then((report) => {
		const logs = report.flat(Infinity).filter(Boolean);

		console.log(`\n\n📦  ${key}`);
		console.log(`${"".padStart(30, "-")}`);

		if (logs && logs.length > 0) {
			logs.forEach((log) => console.log(log));
		}
		else console.log("No assets created.".gray);

		console.log(`${"".padStart(30, "-")}`);
		console.timeEnd(key);
		console.log("");
	})
		.catch((err) => {
			console.log(`\n\n${key} 🔨`);
			console.log(`${"".padStart(30, "-")}`);

			console.trace(err);

			console.log(`${"".padStart(30, "-")}`);
			console.timeEnd(key);
			console.log("");

			process.exit(1);
		});
}
