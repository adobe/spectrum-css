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
import { dirs, getAllComponentNames } from "../../../tasks/utilities.js";

import "colors";

const bundleRoot = path.resolve(dirs.root, "tools", "bundle");

/**
 * Refresh the list of component imports
 * @returns {Promise<string[]>}
 */
export async function refresh() {
	const components = getAllComponentNames(false);

	// Refresh the src/index.css file with the latest component imports
	const imports = `
/** This file is machine generated. */

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

	const reports = await processCSS(imports, undefined, path.join(bundleRoot, "src", "index.css"), {
		cwd: bundleRoot,
		env: "development",
		configPath: bundleRoot,
	}).catch((err) => {
		console.log("\n\n🔄  refresh bundle");
		console.log(`${"".padStart(30, "-")}`);

		console.trace(err);

		console.log(`${"".padStart(30, "-")}`);
		console.log("");

		process.exit(1);
	});

	const logs = reports.flat(Infinity).filter(Boolean);
	console.log("\n\n🔄  refresh bundle");
	console.log(`${"".padStart(30, "-")}`);
	if (logs && logs.length > 0) {
		logs.forEach(log => console.log(log));
		console.log(`${"".padStart(30, "-")}`);
		console.log("");
	}
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
		processCSS(undefined, path.join(bundleRoot, "src", "index.css"), path.join(bundleRoot, "dist", "index.css"), { lint: false, cwd: bundleRoot }),
		// Write the minified CSS
		processCSS(undefined, path.join(bundleRoot, "src", "index.css"), path.join(bundleRoot, "dist", "index.min.css"), { lint: false, cwd: bundleRoot, minify: true }),
		// Write the module CSS
		processCSS(undefined, path.join(bundleRoot, "src", "index.css"), path.join(bundleRoot, "dist", "index.module.css"), { lint: false, cwd: bundleRoot, module: true }),
	]);
}

/**
 * Entry point for the bundler
 * @returns {Promise<void>}
 */
export async function main() {
	const key = "bundler";

	console.time(key);

	const report = await bundler().catch((err) => {
		console.log(`\n\n${key} 🔨`);
		console.log(`${"".padStart(30, "-")}`);

		console.trace(err);

		console.log(`${"".padStart(30, "-")}`);
		console.timeEnd(key);
		console.log("");

		process.exit(1);
	});

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
}
