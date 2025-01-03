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

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

const { hideBin } = require("yargs/helpers");
const yargs = require("yargs");

const postcss = require("postcss");
const postcssrc = require("postcss-load-config");
const prettier = require("prettier");

require("colors");

const {
	dirs,
	relativePrint,
	writeAndReport,
	getAllComponentNames,
	getPackageFromPath,
	cleanFolder,
	validateComponentName,
	runAndReportToConsole,
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
		shouldCombine: true,
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
			return Promise.reject([
				`${"✗".red}  problem making the ${relativePrint(path.dirname(output), { cwd }).yellow} directory`,
				err,
			]);
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
		processCSS(content, indexSourceCSS, indexOutputPath, {
			cwd,
			clean,
			skipMapping: true,
			referencesOnly: false,
			preserveVariables: true,
			stripLocalSelectors: false,
		}),
		processCSS(
			content,
			indexSourceCSS,
			path.join(cwd, "dist", "index-base.css"),
			{
				cwd,
				clean,
				skipMapping: true,
				referencesOnly: false,
				preserveVariables: false,
				stripLocalSelectors: false,
			},
		),
	]);
}

/**
 * The builder for the individual themes assets
 * @param {object} config
 * @param {string} config.cwd - Current working directory for the component being built
 * @param {boolean} config.clean - Should the built assets be cleaned before running the build
 * @returns Promise<void>
 */
async function buildThemes({ cwd = process.cwd(), clean = false } = {}) {
	// This fetches the content of the files and returns an array of objects with the content and input paths
	const contentData = await fetchContent(["themes/*.css"], { cwd, clean });

	// Nothing to do if there's no content
	if (!contentData || contentData.length === 0) return;

	const imports = contentData.map(({ input }) => input);
	const importMap = imports.map((i) => `@import "${i}";`).join("\n");

	const promises = contentData.map(async ({ content, input }) => {
		if (!content)
			return Promise.reject(
				new Error(`No content found for ${relativePrint(input, { cwd })}`),
			);

		// Bring the input path back down to the relative path from cwd
		input = path.relative(cwd, input);

		const theme = path.basename(input, ".css");
		return processCSS(
			content,
			path.join(cwd, input),
			path.join(cwd, "dist", input),
			{
				cwd,
				clean,
				lint: false,
				skipMapping: false,
				referencesOnly: false,
				preserveVariables: true,
				// Only output the new selectors with the system mappings
				stripLocalSelectors: true,
				theme,
			},
		);
	});

	promises.push(
		// Expect this file to have component-specific selectors mapping to the system tokens but not the system tokens themselves
		processCSS(
			importMap,
			path.join(cwd, "index.css"),
			path.join(cwd, "dist", "index-theme.css"),
			{
				cwd,
				clean,
				skipMapping: false,
				stripLocalSelectors: false,
				referencesOnly: true,
				shouldCombine: false,
				map: false,
			},
		),
	);

	return Promise.all(promises);
}

/**
 * The main entry point for this tool; this builds a CSS component
 * @param {object} config
 * @param {string} [config.componentName] - Current working directory for the component being built
 * @param {string} [config.cwd=] - Current working directory for the component being built
 * @param {boolean} [config.clean=false] - Should the built assets be cleaned before running the build
 * @returns Promise<void>
 */
async function main({
	// Local path stored in process.env.INIT_CWD
	cwd = process.env.INIT_CWD,
	clean = true,
} = {}) {
	if (typeof clean === "undefined") {
		clean = process.env.NODE_ENV === "production";
	}

	return runAndReportToConsole((cwd) => ([
		...(clean ? [cleanFolder({ cwd })] : []),
		build({ cwd, clean }),
		buildThemes({ cwd, clean }),
	]), {
		taskLabel: "build",
		taskIcon: "🔨",
		cwd,
	});
}

exports.processCSS = processCSS;
exports.fetchContent = fetchContent;
exports.default = main;

let {
	_: components = getAllComponentNames(),
	clean = true,
	// @todo allow to run against local main or published versions
} = yargs(hideBin(process.argv)).argv;

Promise.all(components.map((folderName) => {
	const cwd = path.join(dirs.components, folderName);
	return main({ folderName, cwd, build, clean });
})).then(() => process.exit(0));
