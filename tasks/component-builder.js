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

const postcss = require("postcss");
const postcssrc = require("postcss-load-config");
const prettier = require("prettier");

require("colors");

const {
	dirs,
	relativePrint,
	writeAndReport,
	getPackageFromPath,
	cleanFolder,
	validateComponentName,
	fetchContent,
} = require("./utilities.js");

/**
 * Process the provided CSS input and write out to a file
 * @param {string} content
 * @param {string} input
 * @param {string} output
 * @param {object} [options={}]
 * @param {string} [options.cwd=]
 * @param {boolean} [options.clean=false]
 * @param {import('postcss-load-config').ConfigContext} [options.postCSSOptions]
 * @returns {Promise<(string|void)[]>} Returns the console output for the build
 */
async function processCSS(
	content,
	input,
	output,
	{
		cwd,
		configPath = __dirname,
		...postCSSOptions
	} = {},
) {
	if (!content)
		return Promise.reject(
			new Error("This function requires content be provided"),
		);

	const ctx = {
		cwd,
		env: process.env.NODE_ENV ?? "development",
		file: output,
		from: input,
		to: output,
		verbose: false,
		...postCSSOptions,
	};

	const { plugins, options } = await postcssrc(
		ctx,
		configPath, // This is the path to the directory where the postcss.config.js lives
	);

	const result = await postcss(plugins).process(content, {
		from: input,
		to: output,
		...options
	});

	if (result.error) return Promise.reject(result.error);

	if (!result.css) return Promise.resolve();

	const formatted = await prettier.format(result.css, {
		parser: "css",
		filepath: input,
		printWidth: 500,
		tabWidth: 2,
		useTabs: true,
	});

	// If no output is provided, return the formatted content
	if (!output) return Promise.resolve(formatted);

	if (!fs.existsSync(path.dirname(output))) {
		await fsp.mkdir(path.dirname(output), { recursive: true }).catch((err) => {
			if (!err) return;
			console.log(
				`${"✗".red}  problem making the ${relativePrint(path.dirname(output), { cwd }).yellow} directory`,
			);
			return Promise.reject(err);
		});
	}

	const promises = [
		writeAndReport(formatted, output, { cwd }),
	];

	if (result.map) {
		promises.push(
			writeAndReport(result.map.toString().trimStart(), `${output}.map`, { cwd }),
		);
	}

	return Promise.all(promises);
}

/**
 * The builder for the main entry point
 * @param {object} config
 * @param {string} config.cwd - Current working directory for the component being built
 * @param {boolean} config.clean - Should the built assets be cleaned before running the build
 * @returns Promise<void>
 */
async function build({ cwd = process.cwd(), clean = false, componentName } = {}) {
	const indexSourceCSS = path.join(cwd, "index.css");

	// Nothing to do if there's no input file
	if (!fs.existsSync(indexSourceCSS)) return;

	const content = await fsp.readFile(indexSourceCSS, "utf8");

	if (!componentName || validateComponentName(componentName) !== true) {
		componentName = getPackageFromPath(cwd);
	}

	// Create the dist directory if it doesn't exist
	if (!fs.existsSync(path.join(cwd, "dist"))) {
		fs.mkdirSync(path.join(cwd, "dist"));
	}

	const indexOutputPath = path.join(cwd, "dist", "index.css");

	return Promise.all([
		processCSS(content, indexSourceCSS, indexOutputPath, { cwd, clean }),
	]);
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
	componentName = process.env.NX_TASK_TARGET_PROJECT,
	cwd,
	clean,
} = {}) {
	if (!cwd && componentName) {
		cwd = path.join(dirs.components, componentName);
	}

	if (!componentName) {
		componentName = cwd
			? getPackageFromPath(cwd)
			: process.env.NX_TASK_TARGET_PROJECT;
	}

	if (typeof clean === "undefined") {
		clean = process.env.NODE_ENV === "production";
	}

	const key = `[build] ${`@spectrum-css/${componentName}`.cyan}`;
	console.time(key);

	const reports = [];
	const errors = [];

	if (clean) await cleanFolder({ cwd }).then((report) => reports.push(report)).catch((err) => errors.push(err));

	await build({ cwd, clean }).then((report) => reports.push(report)).catch((err) => errors.push(err));

	const logs = reports.flat(Infinity).filter(Boolean);
	const errs = errors.flat(Infinity).filter(Boolean);

	console.log(`\n\n${key} 🔨`);
	console.log(`${"".padStart(30, "-")}`);

	if (errs && errs.length > 0) {
		errs.forEach((err) => console.error(err));
	}
	else {
		if (logs && logs.length > 0) {
			logs.forEach((log) => console.log(log));
		}
		else console.log("No assets created.".gray);
	}

	console.log(`${"".padStart(30, "-")}`);
	console.timeEnd(key);
	console.log("");

	if (errs && errs.length > 0) process.exit(1);
	else process.exit(0);
}

exports.processCSS = processCSS;
exports.fetchContent = fetchContent;
exports.default = main;
