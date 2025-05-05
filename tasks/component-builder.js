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

const { hideBin } = require("yargs/helpers");
const yargs = require("yargs");

const { deflate } = require("zlib");
const { promisify } = require("util");

const postcss = require("postcss");
const postcssrc = require("postcss-load-config");
const prettier = require("prettier");

require("colors");

const gzip = promisify(deflate);

const {
	dirs,
	relativePrint,
	getPackageFromPath,
	validateComponentName,
	fetchContent,
	writeAndReport,
} = require("./utilities.js");

const report = {
	failure: (message) => `${"✗".red}  ${message}`,
	warning: (message) => `${"⚠".yellow}  ${message}`,
	success: (message) => `${"✓".green}  ${message}`,
};

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
		minify = false,
		encoding = "utf-8",
		customTagline,
		...postCSSOptions
	} = {},
) {
	if (!content) {
		if (!input || !fs.existsSync(input)) {
			return Promise.reject(
				new Error("[processCSS] Content or an input file path must be provided"),
			);
		}

		content = await fsp.readFile(input, encoding);

		if (!content) {
			return Promise.reject(
				new Error(`[processCSS] No content found for ${relativePrint(input, { cwd })}`),
			);
		}
	}

	// If the output file is a minified file, force the minify flag to true
	if (output && path.basename(output, ".css").endsWith(".min")) minify = true;

	const ctx = {
		cwd,
		env: process.env.NODE_ENV ?? "development",
		file: output ?? input,
		from: input,
		to: output ?? input,
		verbose: false,
		minify,
		...postCSSOptions,
	};

	const { plugins, options } = await postcssrc(
		ctx,
		configPath, // This is the path to the directory where the postcss.config.js lives
	);

	const result = await postcss(plugins).process(content, {
		from: input,
		to: output ?? input,
		...options
	});

	if (result.error) return Promise.reject(result.error);

	const logs = [];
	if (result.warnings().length > 0) {
		/** @todo, do we want to support a verbose mode that prints out the warnings during the build? */
		result.warnings().forEach((warning) => {
			logs.push(report.warning(warning.text));
		});
	}

	if (!result.css) return Promise.resolve(logs);

	if (typeof customTagline === "string") {
		result.css = `${customTagline}\n${result.css}`;
	}

	const formatted = !minify ? await prettier.format(result.css, {
		parser: "css",
		filepath: input,
		printWidth: 500,
		tabWidth: 2,
		useTabs: true,
	}) : result.css;

	// If no output is provided, return the formatted content
	/** @todo how can we return the logs from this function if we're returning the content instead here? */
	if (!output) return Promise.resolve(formatted);

	/* Ensure the directory exists */
	const outputDir = path.dirname(output);
	if (!fs.existsSync(outputDir)) {
		await fsp.mkdir(outputDir, { recursive: true }).catch((err) => {
			if (!err) return;

			logs.push(report.failure(`problem making the ${relativePrint(outputDir, { cwd })} directory`));
			return Promise.reject([...logs, err]);
		});
	}

	const promises = [
		writeAndReport(formatted, output, { cwd }),
	];

	if (minify) {
		promises.push(
			gzip(formatted).then(zipped => writeAndReport(zipped, `${output}.gz`, { cwd }))
		);
	}

	if (result.map) {
		promises.push(
			writeAndReport(result.map.toString().trimStart(), `${output}.map`, { cwd }),
		);
	}

	return Promise.all(promises).then((r) => [...r, ...logs]);
}

/**
 * The builder for the main entry point
 * @param {object} config
 * @param {string} config.cwd - Current working directory for the component being built
 * @param {boolean} config.clean - Should the built assets be cleaned before running the build
 * @returns Promise<void>
 */
async function build({ cwd = process.cwd(), clean = false, minify = false, componentName } = {}) {
	// Nothing to do if there's no input file
	if (!fs.existsSync(path.join(cwd, "index.css"))) return;

	if (!componentName || validateComponentName(componentName) !== true) {
		componentName = getPackageFromPath(cwd);
	}

	return Promise.all([
		processCSS(undefined, path.join(cwd, "index.css"), path.join(cwd, "dist", "index.css"), {
			cwd,
			clean,
			skipMapping: true,
			referencesOnly: false,
			preserveVariables: true,
			stripLocalSelectors: false,
		}),
		minify ? processCSS(undefined, path.join(cwd, "index.css"), path.join(cwd, "dist", "index.min.css"), {
			cwd,
			clean,
			skipMapping: true,
			referencesOnly: false,
			preserveVariables: true,
			stripLocalSelectors: false,
		}) : Promise.resolve(),
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
	minify = false,
} = {}) {
	if (!cwd && componentName) {
		cwd = path.join(dirs.components, componentName);
	}

	if (!fs.existsSync(cwd)) {
		return Promise.resolve(
			report.failure(`Component directory not found at ${relativePrint(cwd)}`)
		);
	}

	if (!componentName) {
		componentName = cwd
			? getPackageFromPath(cwd)
			: process.env.NX_TASK_TARGET_PROJECT;
	}

	if (typeof clean === "undefined") {
		clean = process.env.NODE_ENV === "production";
	}

	if (process.env.NODE_ENV === "production") {
		minify = true;
	}

	const key = `[build] ${`@spectrum-css/${componentName}`.cyan}`;
	console.time(key);

	const reports = [];
	const errors = [];

	await build({ cwd, clean, minify }).then((report) => reports.push(report)).catch((err) => errors.push(err));

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

let {
	_: components,
} = yargs(hideBin(process.argv)).argv;

Promise.all(components.map((componentName) => main({ componentName })));
