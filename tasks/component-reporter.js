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

const { hideBin } = require("yargs/helpers");
const yargs = require("yargs");

const postcss = require("postcss");
const prettier = require("prettier");
const valuesParser = require("postcss-values-parser");

require("colors");

const {
	dirs,
	getAllComponentNames,
	getPackageFromPath,
	writeAndReport,
} = require("./utilities.js");

const { processCSS } = require("./component-builder.js");


/**
 * This regex will find all the custom properties that start with --mod-
 * and are defined inside a var() function. The last capture group will
 * ignore any mod properties that are followed by a colon, to exclude
 * sub-component passthrough properties that should not be listed as mods.
 * @param {string} content
 * @param {{ [string]: (string)[] }} [meta={}]
 * @returns { [string]: string[] }
 */
function extractProperties(content, meta = {}) {
	if (!content) return;

	const found = {};

	// Process CSS content through the valuesParser an postcss to capture
	// all the custom properties defined and used in the CSS
	postcss.parse(content).walkDecls((decl) => {
		Object.entries(meta).forEach(([key, values]) => {
			found[key] = found[key] ?? new Map([
				["used", new Set()],
				["defined", new Set()],
			]);

			values.forEach((value) => {
				if (decl.prop.startsWith("--") && decl.prop.startsWith(`--${value}-`)) {
					found[key].get("defined").add(decl.prop);
				}
			});

			// Parse the value of the declaration to extract custom properties
			valuesParser.parse(decl.value).walk((node) => {
				if (node.type !== "word" || !node.isVariable) return;

				// Extract the custom property name from the var() function
				values.forEach((value) => {
					if (node.value.startsWith(`--${value}-`)) {
						found[key].get("used").add(node.value);
					}
				});
			});
		});
	});

	// Sort the custom properties alphabetically and return them as a map
	Object.entries(found).forEach(([key, values]) => {
		found[key] = new Map([
			["used", [...values.get("used").values()].sort()],
			["defined", [...values.get("defined").values()].sort()],
		]);
	});

	console.log(Object.keys(found));

	return found;
}

/**
 * Extract custom properties to report
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
		// Check that the selector is not inside a keyframe
		if (rule.parent.type === "atrule" && rule.parent.name === "keyframes") return;

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
	const used = meta.spectrum.get("used") ?? [];
	const defined = meta.spectrum.get("defined") ?? [];

	// Remove the generic spectrum values from the meta object
	delete meta.spectrum;

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

	meta.component = [...new Set(defined.map((value) => isComponentVar(value, componentName)).filter(Boolean))].sort();

	// Filter out the component level values from the global spectrum values
	meta.global = used.filter((value) => !meta.component.includes(value)).sort();

	if (!Object.keys(meta).includes("high-contrast")) {
		meta["high-contrast"] = new Map(["used", [], "defined", []]);
	}

	// Filter out variables that reference other components --spectrum-<componentName>-*
	meta.passthroughs = [...meta["high-contrast"].get("defined"), ...defined].filter((v) => {
		if (!componentName) return false;

		if (isComponentVar(v, componentName)) return false;

		const otherComponents = components.filter((component) => component !== componentName);

		// If the variable doesn't reference any other components, it's not a passthrough
		if (!otherComponents.some((component) => isComponentVar(v, component))) return false;

		// Remove the variable from the global list if it's a passthrough
		meta.global = meta.global.filter((m) => m !== v).sort();
		return true;
	});

	meta["high-contrast"] = meta["high-contrast"].get("used");

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

let {
	_: components,
} = yargs(hideBin(process.argv)).argv;

Promise.all(components.map((componentName) => main({ componentName })));
