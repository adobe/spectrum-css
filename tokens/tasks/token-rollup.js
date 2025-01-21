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
const fsp = fs.promises;
const path = require("path");

const fg = require("fast-glob");

const { processCSS } = require("../../tasks/component-builder.js");
const { copy, fetchContent } = require("../../tasks/utilities.js");

require("colors");

/**
 * Create a tagline for the CSS file based on the package.json data
 * @param {Object} [packageJson={}]
 * @param {string} packageJson.name
 * @param {string} packageJson.version
 * @returns
 */
function generateTagline({ name, version } = {}) {
	if (!name) return "";
	if (!version) return `/* ${name} */\n\n`;
	return `/* ${name}@v${version} */\n\n`;
}

/**
 * The builder for the main entry point
 * @param {object} config
 * @param {string} config.cwd - Current working directory for the component being built
 * @param {boolean} config.clean - Should the built assets be cleaned before running the build
 * @returns Promise<void>
 */
async function index(inputGlob, outputPath, { cwd = process.cwd(), clean = false } = {}) {
	// Read in the package version from the package.json file
	const packageJson = await fsp.readFile(path.join(cwd, "package.json"), "utf-8").then(JSON.parse);

	const inputs = await fg(inputGlob, { cwd });
	const contents = inputs.map(input => `@import "${input}";`).join("\n");
	if (!contents) return;

	return processCSS(contents, undefined, outputPath, {
		cwd,
		clean,
		configPath: cwd,
		map: false,
		resolveImports: true,
		customTagline: generateTagline(packageJson),
	});
}

/**
 * Append custom/*-vars.css files to the end of the dist/css/*-vars.css files
 * @param {Object} config
 * @param {string} [config.cwd=process.cwd()] - Current working directory for the component
 * @returns {Promise<string[]>}
 */
async function appendCustomOverrides({ cwd = process.cwd(), packageJson = {} } = {}) {
	const promises = [];

	// Add custom/*-vars.css to the end of the dist/css/*-vars.css files and run through postcss before writing back to the dist/css/*-vars.css file
	const customFiles = await fg(["*-vars.css"], { cwd: path.join(cwd, "custom"), onlyFiles: true });
	const globalFiles = await fg(["*-vars.css"], { cwd: path.join(cwd, "dist", "css"), onlyFiles: true });

	// Create a list that combines the custom and dist files
	const combinedFiles = [...new Set([...customFiles, ...globalFiles])];
	for (const file of combinedFiles) {
		// Read in the custom file and the dist file and combine them into one file
		const combinedContent = await fetchContent([
			path.join("dist", "css", file),
			path.join("custom", file)
		], { cwd, shouldCombine: true });

		if (!combinedContent || !combinedContent[0].content) continue;

		promises.push(
			processCSS(combinedContent[0].content, path.join(cwd, "dist", "css", file), path.join(cwd, "dist", "css", file), {
				cwd,
				configPath: cwd,
				customTagline: generateTagline(packageJson),
			})
		);
	}

	return Promise.all(promises);
}

/**
 * The main entry point for this tool; this builds a CSS component
 * @param {object} config
 * @param {string} [config.componentName=process.env.NX_TASK_TARGET_PROJECT] - Current working directory for the component being built
 * @param {string} [config.cwd=] - Current working directory for the component being built
 * @param {boolean} [config.clean=false] - Should the built assets be cleaned before running the build
 * @returns Promise<void>
 */
async function main({
	cwd = process.cwd(),
	clean,
} = {}) {
	const key = `[build] ${"@spectrum-css/tokens".cyan} index`;
	console.time(key);

	const compiledOutputPath = path.join(cwd, "dist");

	const reports = [];
	const errors = [];

	// Wait for all the custom files to be processed
	await appendCustomOverrides({ cwd }).then((report) => { reports.push(report); }).catch((err) => { errors.push(err); });

	// Then build the index.css file
	await index(["dist/css/*-vars.css"], path.join(compiledOutputPath, "css", "index.css"), { cwd, clean }).then((report) => { reports.push(report); }).catch((err) => { errors.push(err); });

	// Finally, copy the index.css file to the dist folder
	await copy(path.join(compiledOutputPath, "css", "index.css"), path.join(cwd, "dist", "index.css"), { cwd, isDeprecated: false }).then((report) => { reports.push(report); }).catch((err) => { errors.push(err); });

	// Combine all the reports into a single log output
	const logs = reports.flat(Infinity).filter(Boolean);
	const errorLogs = errors.flat(Infinity).filter(Boolean);

	console.log(`\n\n${key} 🔨`);
	console.log(`${"".padStart(30, "-")}`);

	if (!(errorLogs && errorLogs.length > 0)) {
		if (logs && logs.length > 0) {
			logs.forEach(log => {
				// Strip the ../../tokens/ from the paths
				console.log(log.replace(/(\.\.\/)+tokens\//g, ""));
			});
		}
		else console.log("No assets created.".gray);
	}
	else {
		errorLogs.forEach(log => {
			console.error(log);
		});
	}

	console.log(`${"".padStart(30, "-")}`);
	console.timeEnd(key);
	console.log("");

	if (errorLogs && errorLogs.length > 0) {
		process.exit(1);
	}
}

exports.default = main;
