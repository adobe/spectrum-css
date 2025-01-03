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
	getPackageFromPath,
	cleanFolder,
	validateComponentName,
	fetchContent,
	copy,
	writeAndReport,
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
		minify = false,
		encoding = "utf-8",
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

	const ctx = {
		cwd,
		env: process.env.NODE_ENV ?? "development",
		file: output,
		from: input,
		to: output,
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
		to: output,
		...options
	});

	if (result.error) return Promise.reject(result.error);

	if (!result.css) return Promise.resolve();

	const formatted = !minify ? await prettier.format(result.css, {
		parser: "css",
		filepath: input,
		printWidth: 500,
		tabWidth: 2,
		useTabs: true,
	}) : result.css;

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
		processCSS(content, indexSourceCSS, indexOutputPath, {
			cwd,
			clean,
			skipMapping: true,
			referencesOnly: false,
			preserveVariables: true,
			stripLocalSelectors: false,
		}).then(async (reports) => {
			// Copy index.css to index-vars.css for backwards compat, log as deprecated
			return copy(indexOutputPath, path.join(cwd, "dist/index-vars.css"), { cwd })
				.then(r => [r, ...reports]);
		}),
		processCSS(
			content,
			indexSourceCSS,
			path.join(cwd, "dist", "index-base.css"),
			{
				cwd,
				clean,
				splitinatorOptions: {
					noFlatVariables: true,
				},
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
				map: false,
				env: "production",
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
				splitinatorOptions: {
					noSelectors: true,
				},
				map: false,
			},
		),
	);

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

	return Promise.all([
		...(clean ? [cleanFolder({ cwd })] : []),
		build({ cwd, clean }),
		buildThemes({ cwd, clean }),
	])
		.then((report) => {
			const logs = report.flat(Infinity).filter(Boolean);

			console.log(`\n\n${key} 🔨`);
			console.log(`${"".padStart(30, "-")}`);

			if (logs && logs.length > 0) {
				logs
					.sort((a) => {
						if (typeof a === "string" && a.includes("✓")) return -1;
						if (typeof a === "string" && a.includes("🔍")) return 0;
						return 1;
					})
					.forEach((log) => console.log(log));
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

exports.processCSS = processCSS;
exports.fetchContent = fetchContent;
exports.default = main;
