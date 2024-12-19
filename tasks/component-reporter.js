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

require("colors");

const {
	dirs,
	fetchContent,
	extractProperties,
	getAllComponentNames,
	runAndReportToConsole,
	writeAndReport,
} = require("./utilities.js");

const { default: builder } = require("./component-builder.js");

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
 * @param {string} [config.folderName] - Current folder name for the component being built
 * @param {string} [config.cwd=process.env.INIT_CWD] - Current working directory for the component being built
 * @param {boolean} [config.build=true] - Should the component be built before running the report
 * @param {boolean} [config.clean=false] - Should the built assets be cleaned before running the build
 * @returns Promise<0|1>
 */
async function main({
	folderName,
	build = true,
	cwd = process.env.INIT_CWD,
	clean = true,
} = {}) {
	if (!folderName) return Promise.reject(new Error("[component-reporter]  No folder name provided."));

	if (typeof clean === "undefined") {
		clean = process.env.NODE_ENV === "production";
	}

	if (["action-menu", "commons"].includes(folderName)) return Promise.resolve();

	if (build) await builder({
		folderName,
		cwd,
		clean,
	});

	if (!fs.existsSync(path.join(cwd, "dist", "index.css"))) {
		return runAndReportToConsole(() => ([
			Promise.resolve("No compiled assets on which to report.".gray),
		]), {
			taskLabel: "report",
			taskIcon: "🔍",
			folderName,
			cwd,
		});
	}

	const processed = await fetchContent([
		"dist/index-base.css",
		"dist/themes/*.css",
		"dist/index-theme.css",
	], { cwd, shouldCombine: true }).then(({ content }) => content);

	const meta = await extractModifiers(
		processed,
		{
			cwd,
			sourcePath: path.join(cwd, "index.css"),
			componentName: folderName?.replaceAll("-", ""),
			baseSelectors: [".spectrum", ".spectrum--express", ".spectrum--legacy"],
			dataModel: {
				modifiers: ["mod"],
				spectrum: ["spectrum"],
				"system-theme": ["system"],
				"high-contrast": ["highcontrast"],
			},
		}
	);

	// Create the metadata directory if it doesn't exist
	if (!fs.existsSync(path.join(cwd, "metadata"))) {
		fs.mkdirSync(path.join(cwd, "metadata"));
	}

	return runAndReportToConsole((cwd) => ([
		prettier.format(
			`${[
				"| Modifiable custom properties |",
				"| --- |",
				...(meta?.modifiers ?? []).map((mod) => `| \`${mod}\` |`),
			].join("\n")}\n`,
			{ parser: "markdown" },
		).then(content => writeAndReport(content, path.join(cwd, "metadata/mods.md"), { cwd })),
		prettier.format(
			JSON.stringify({
				sourceFile: meta.sourceFile,
				selectors: meta.selectors,
				modifiers: meta.modifiers,
				component: meta.component,
				global: meta.global,
				"system-theme": meta["system-theme"],
				passthroughs: meta.passthroughs,
				"high-contrast": meta["high-contrast"],
			}, null, 2),
			{ parser: "json" },
		).then(content => writeAndReport(content, path.join(cwd, "metadata/metadata.json"), { cwd })),
	]), {
		taskLabel: "report",
		taskIcon: "🔍",
		folderName,
		cwd,
	});
}

exports.extractModifiers = extractModifiers;
exports.default = main;

let {
	_: components = getAllComponentNames(),
	build = true,
	clean = true,
	// @todo allow to run against local main or published versions
} = yargs(hideBin(process.argv)).argv;

Promise.all(components.map((folderName) => {
	const cwd = path.join(dirs.components, folderName);
	return main({ folderName, cwd, build, clean });
})).then(() => process.exit(0));
