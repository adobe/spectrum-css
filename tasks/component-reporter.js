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

/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const postcss = require("postcss");
const prettier = require("prettier");

require("colors");

const {
	dirs,
	extractProperties,
	getAllComponentNames,
	getPackageFromPath,
	writeAndReport,
} = require("./utilities.js");

const { processCSS } = require("./component-builder.js");

/**
 * Extract custom property modifers to report
 * @param {string} sourcePath
 * @param {object} [options={}]
 * @param {string} [options.componentName] - The name of the component being built
 * @param {string[]} [options.baseSelectors=[".spectrum"]] - The selectors that are considered the base selectors for the component
 * @param {object} [options.dataModel={ spectrum: ["spectrum"] }] - The key-value pairs used to extract and store custom property data from the source file
 * @param {string} [options.sourcePath] - The path to the source file
 * @param {string} [options.cwd=process.cwd()]
 * @returns Promise<string|string[]|void>
 */
async function extractModifiers(
	content,
	{
		componentName,
		baseSelectors = [".spectrum"],
		dataModel = {
			spectrum: ["spectrum"],
		},
		sourcePath,
		cwd = process.cwd(),
	} = {}
) {
	const components = getAllComponentNames();

	/* Remove duplicates using a Set and sort the results (default is alphabetical) */
	const meta = extractProperties(content, dataModel);

	if (sourcePath) {
		meta.sourceFile = path.relative(cwd, sourcePath);
	}

	// Extract all selectors from the source file
	const selectors = new Set();
	const root = postcss.parse(content);
	root.walkRules((rule) => {
		if (rule.selectors) {
			rule.selectors.forEach((selector) => {
				// If the selector is not a base selector, add it to the set
				if (baseSelectors.every((base) => selector !== base)) {
					selectors.add(selector);
				}
			});
		}
	});

	meta.selectors = [...selectors].sort();

	// Iterate over the spectrum values and see if the 2nd part of the variable
	// name matches the component name
	const spectrum = meta.spectrum ?? [];

	function isComponentVar(value, componentName) {
		if (!componentName) return value;

		const parts = value.slice(2).split("-");

		// If the variable name is just the component name, it's a match
		if (parts.length > 1 && parts[1] === componentName) return value;

		parts.shift();

		// If we combine all the parts after the first one and it starts with the component name, it's a match
		if (parts.join("").startsWith(componentName)) return value;
		return;
	}

	const componentLevel = new Set(spectrum.map((value) => isComponentVar(value, componentName)).filter(Boolean));

	// Filter out the component level values from the global spectrum values
	meta.global = spectrum.filter((value) => !componentLevel.has(value));

	// Filter out mods that reference other components --mod-<componentName>-*
	meta.passthroughs = meta.modifiers.filter((mod) => {
		if (!componentName) return false;

		if (isComponentVar(mod, componentName)) return false;

		const otherComponents = components.filter((component) => component !== componentName);

		// If the mod doesn't reference any other components, it's not a passthrough, maybe it's a global or deprecated mod?
		if (!otherComponents.some((component) => isComponentVar(mod, component))) return false;

		// Remove the mod from the modifiers list if it's a passthrough
		meta.modifiers = meta.modifiers.filter((m) => m !== mod);
		return true;
	});

	// Remove the spectrum values from the meta object
	delete meta.spectrum;

	meta.component = [...componentLevel].sort();

	return meta;
}

/**
 * The main entry point for this tool; this reports on the component's features and structure
 * @param {object} config
 * @param {string} [config.componentName=process.env.NX_TASK_TARGET_PROJECT] - Current working directory for the component being built
 * @param {string} [config.cwd=] - Current working directory for the component being built
 * @param {boolean} [config.clean=false] - Should the built assets be cleaned before running the build
 * @returns Promise<void>
 */
async function main({
	componentName = process.env.NX_TASK_TARGET_PROJECT,
	cwd,
} = {}) {
	if (!cwd && componentName) {
		cwd = path.join(dirs.components, componentName);
	}

	if (!componentName) {
		componentName = cwd
			? getPackageFromPath(cwd)
			: process.env.NX_TASK_TARGET_PROJECT;
	}

	const key = `[report] ${`@spectrum-css/${componentName}`.cyan}`;
	console.time(key);

	const sourceCSS = path.join(cwd, "index.css");

	if (!fs.existsSync(sourceCSS)) {
		console.log(`\n\n${key} 🔍`);
		console.log(`${"".padStart(30, "-")}`);
		console.log(`No source CSS file found at ${sourceCSS}`);
		console.log(`${"".padStart(30, "-")}`);
		console.timeEnd(key);
		console.log("");
		return Promise.reject(new Error(`No source CSS file found at ${sourceCSS}`));
	}

	// Create the dist directory if it doesn't exist
	if (!fs.existsSync(path.join(cwd, "dist"))) {
		fs.mkdirSync(path.join(cwd, "dist"));
	}

	const processed = await processCSS(undefined, sourceCSS, undefined, {
		cwd,
		map: false,
		env: "production",
	});

	const meta = await extractModifiers(
		processed,
		{
			cwd,
			sourcePath: sourceCSS,
			componentName,
			baseSelectors: [".spectrum"],
			dataModel: {
				modifiers: ["mod"],
				spectrum: ["spectrum"],
				"high-contrast": ["highcontrast"],
			},
		}
	);

	return Promise.all([
		writeAndReport(
			await prettier.format(
				JSON.stringify({
					sourceFile: meta.sourceFile,
					selectors: meta.selectors,
					modifiers: meta.modifiers,
					component: meta.component,
					global: meta.global,
					passthroughs: meta.passthroughs,
					"high-contrast": meta["high-contrast"],
				}, null, 2),
				{ parser: "json" },
			),
			path.join(cwd, "dist", "metadata.json"),
			{ cwd },
		),
	])
		.then((report) => {
			const logs = report.flat(Infinity).filter(Boolean);

			console.log(`\n\n${key} 🔍`);
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

exports.extractModifiers = extractModifiers;
exports.default = main;
