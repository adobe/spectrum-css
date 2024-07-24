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
const postcss = require("postcss");
const postcssrc = require("postcss-load-config");
const prettier = require("prettier");

require("colors");

const {
	dirs,
	relativePrint,
	bytesToSize,
	getPackageFromPath,
	extractProperties,
	cleanFolder,
} = require("./utilities.js");

/**
 * Extract custom property modifers to report
 * @param {string} filepath
 * @param {object} [options={}]
 * @returns Promise<string|string[]|void>
 */
async function extractModifiers(filepath, { cwd } = {}) {
	if (!fs.existsSync(filepath)) return Promise.resolve();

	const componentName = cwd.split(path.sep).pop();
	const content = await fsp.readFile(filepath, { encoding: "utf-8" });

	/* Remove duplicates using a Set and sort the results (default is alphabetical) */
	const meta = extractProperties(content, {
		modifiers: ["mod"],
		spectrum: ["spectrum"],
		system: ["system"],
		"high-contrast": ["highcontrast"],
	});

	const selectors = new Set();
	const root = postcss.parse(content);
	root.walkRules((rule) => {
		if (rule.selectors) {
			rule.selectors.forEach((selector) => {
				selectors.add(selector);
			});
		}
	});

	if (!fs.existsSync(path.join(cwd, "dist"))) {
		fs.mkdirSync(path.join(cwd, "dist"));
	}

	// Iterate over the spectrum values and see if the 2nd part of the variable
	// name matches the component name
	const spectrum = meta.spectrum ?? [];
	const componentLevel = new Set(spectrum.map((value) => {
		const parts = value.slice(0, 2).split("-");
		if (parts.length > 1 && parts[1] === componentName) return value;
		if (parts[1] + parts[2] === componentName) return value;
		return;
	}).filter(Boolean));

	return Promise.all([
		fsp.writeFile(
			path.join(cwd, "dist/mods.md"),
			await prettier.format(
				`${[
					"| Modifiable custom properties |",
					"| --- |",
					...(meta?.modifiers ?? []).map((mod) => `| ${mod} |`),
				].join("\n")}`,
				{ parser: "markdown" },
			),
			{ encoding: "utf-8" },
		)
			.then(() => {
				const stats = fs.statSync(path.join(cwd, "dist/mods.md"));
				return [
					`${"✓".green}  ${"dist/mods.md".padEnd(20, " ").yellow}  ${bytesToSize(stats.size).gray}`,
					`🔍  ${`${selectors.size}`.underline} selector${selectors.size === 1 ? "" : "s"}`,
				];
			})
			.catch((err) => {
				if (!err) return;
				console.log(`${"✗".red}  ${"dist/mmods.md".yellow} not written`);
				return Promise.reject(err);
			}),
		fsp
			.writeFile(
				path.join(cwd, "dist/metadata.json"),
				await prettier.format(
					JSON.stringify(
						{
							sourceFile: path.relative(cwd, filepath),
							selectors: [...selectors].sort(),
							component: [...componentLevel].sort(),
							...meta,
						},
						null,
						2,
					),
					{ parser: "json" },
				),
				{ encoding: "utf-8" },
			)
			.then(() => {
				const stats = fs.statSync(path.join(cwd, "dist/metadata.json"));
				return [
					`${"✓".green}  ${"dist/metadata.json".padEnd(20, " ").yellow}  ${bytesToSize(stats.size).gray}`,
					`🔍  ${`${selectors.size}`.underline} selector${selectors.size === 1 ? "" : "s"}`,
				];
			})
			.catch((err) => {
				if (!err) return;
				console.log(`${"✗".red}  ${"dist/metadata.json".yellow} not written`);
				return Promise.reject(err);
			}),
	]);
}

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
		// clean = false,
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

	if (!fs.existsSync(path.dirname(output))) {
		await fsp.mkdir(path.dirname(output), { recursive: true }).catch((err) => {
			if (!err) return;
			console.log(
				`${"✗".red}  problem making the ${relativePrint(path.dirname(output), { cwd }).yellow} directory`,
			);
			return Promise.reject(err);
		});
	}

	const promises = [];

	const formatted = await prettier.format(result.css, {
		parser: "css",
		filepath: input,
		printWidth: 500,
		tabWidth: 2,
		useTabs: true,
	});

	promises.push(
		fsp
			.writeFile(output, formatted)
			.then(() => {
				const stats = fs.statSync(output);
				return `${"✓".green}  ${relativePrint(output, { cwd }).padEnd(20, " ").yellow}  ${bytesToSize(stats.size).gray}`;
			})
			.catch((err) => {
				if (!err) return;
				console.log(
					`${"✗".red}  ${relativePrint(output, { cwd }).yellow} not written`,
				);
				return Promise.reject(err);
			}),
	);

	if (result.map) {
		promises.push(
			fsp
				.writeFile(`${output}.map`, result.map.toString().trimStart())
				.then(() => {
					const stats = fs.statSync(output);
					return `${"✓".green}  ${relativePrint(`${output}.map`, { cwd }).padEnd(20, " ").yellow}  ${bytesToSize(stats.size).gray}`;
				})
				.catch((err) => {
					if (!err) return;
					console.log(
						`${"✗".red}  ${relativePrint(`${output}.map`, { cwd }).yellow} not written`,
					);
					return Promise.reject(err);
				}),
		);
	}

	return Promise.all(promises);
}

/**
 * Fetch content from glob input and optionally combine results
 * @param {(string|RegExp)[]} globs
 * @param {object} options
 * @param {string} [options.cwd=]
 * @param {string} [options.shouldCombine=false] If true, combine the assets read in into one string
 * @param {import('fast-glob').Options} [options.fastGlobOptions={}] Additional options for fast-glob
 * @returns {Promise<{ content: string, input: string }[]>}
 */
async function fetchContent(
	globs = [],
	{ cwd, shouldCombine = false, ...fastGlobOptions } = {},
) {
	const files = await fg(globs, {
		onlyFiles: true,
		...fastGlobOptions,
		cwd,
	});

	if (!files.length) return Promise.resolve([]);

	const fileData = await Promise.all(
		files.map(async (file) => ({
			input: path.join(cwd, file),
			content: await fsp.readFile(path.join(cwd, file), "utf8"),
		})),
	);

	// Combine the content into 1 file; @todo do this in future using CSS imports
	if (shouldCombine) {
		let content = "";
		fileData.forEach((dataset) => {
			if (dataset.content) content += "\n\n" + dataset.content;
		});

		return Promise.resolve([
			{
				content,
				input: fileData[0].input,
			},
		]);
	}

	return Promise.all(
		files.map(async (file) => ({
			content: await fsp.readFile(path.join(cwd, file), "utf8"),
			input: file,
		})),
	);
}

/**
 * A utility to copy a file from one local to another
 * @param {string} from
 * @param {string} to
 * @param {object} [config={}]
 * @param {string} [config.cwd=] - Current working directory for the component being built
 * @returns Promise<string|void>
 */
async function copy(from, to, { cwd, isDeprecated = true } = {}) {
	if (!fs.existsSync(from)) return;

	if (!fs.existsSync(path.dirname(to))) {
		await fsp.mkdir(path.dirname(to), { recursive: true }).catch((err) => {
			if (!err) return;
			console.log(
				`${"✗".red}  problem making the ${relativePrint(path.dirname(to), { cwd }).yellow} directory`,
			);
			return Promise.reject(err);
		});
	}

	const content = await fsp.readFile(from, { encoding: "utf-8" });
	if (!content) return;
	/** @todo add support for injecting a deprecation notice as a comment after the copyright */
	return fsp
		.writeFile(to, content, { encoding: "utf-8" })
		.then(
			() =>
				`${"✓".green}  ${relativePrint(to, { cwd }).padEnd(20, " ").yellow}  ${isDeprecated ? "-- deprecated --".gray : ""}`,
		)
		.catch((err) => {
			if (!err) return;
			console.log(
				`${"✗".red}  ${relativePrint(from, { cwd }).gray} could not be copied to ${relativePrint(to, { cwd }).yellow}`,
			);
			return Promise.reject(err);
		});
}

/**
 * The builder for the main entry point
 * @param {object} config
 * @param {string} config.cwd - Current working directory for the component being built
 * @param {boolean} config.clean - Should the built assets be cleaned before running the build
 * @returns Promise<void>
 */
async function build({ cwd = process.cwd(), clean = false } = {}) {
	const indexSourceCSS = path.join(cwd, "index.css");
	// Nothing to do if there's no input file
	if (!fs.existsSync(indexSourceCSS)) return;

	const content = await fsp.readFile(indexSourceCSS, "utf8");

	// Create the dist directory if it doesn't exist
	if (!fs.existsSync(path.join(cwd, "dist"))) {
		fs.mkdirSync(path.join(cwd, "dist"));
	}

	return Promise.all([
		processCSS(content, indexSourceCSS, path.join(cwd, "dist", "index.css"), {
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
				stripLocalSelectors: false,
				preserveVariables: false,
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
	const componentName = cwd?.split(path.sep)?.pop();

	// Nothing to do if there's no content
	if (!contentData || contentData.length === 0) return;

	const imports = contentData.map(({ input }) => input);
	const importMap = imports.map((i) => `@import "${i}";`).join("\n");

	const promises = contentData.map(async ({ content, input }) => {
		if (!content)
			return Promise.reject(
				new Error(`No content found for ${relativePrint(input, { cwd })}`),
			);
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
				map: false,
			},
		).then(async (reports = []) => {
			// Copy the build express & spectrum component tokens to the tokens package folder in src and dist output
			// (dist included b/c tokens are typically built before components in the build order)
			return Promise.all([
				copy(
					path.join(cwd, "dist", input),
					path.join(
						dirs.tokens,
						"components",
						path.basename(input, ".css"),
						`${componentName}.css`,
					),
					{ cwd, isDeprecated: false },
				),
				copy(
					path.join(cwd, "dist", input),
					path.join(
						dirs.tokens,
						"dist",
						"css",
						"components",
						path.basename(input, ".css"),
						`${componentName}.css`,
					),
					{ cwd, isDeprecated: false },
				),
			]).then((r) => [...reports, r]);
		});
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
				map: false,
			},
		).then(async (reports = []) => {
			return Promise.all([
				copy(
					path.join(cwd, "dist", "index-theme.css"),
					path.join(
						dirs.tokens,
						"components",
						"bridge",
						`${componentName}.css`,
					),
					{ cwd, isDeprecated: false },
				),
				copy(
					path.join(
						dirs.tokens,
						"components",
						"bridge",
						`${componentName}.css`,
					),
					path.join(
						dirs.tokens,
						"dist",
						"css",
						"components",
						"bridge",
						`${componentName}.css`,
					),
					{ cwd, isDeprecated: false },
				),
			]).then((r) => [...reports, r]);
		}),
	);

	// Fetch the output of index-theme.css and the index-base.css into a new file: index-theme-switcher.css
	promises.push(
		fsp.readFile(path.join(cwd, "index.css"), "utf8").then((sourceContent) =>
			processCSS(
				importMap + "\n" + sourceContent,
				path.join(cwd, "index.css"),
				path.join(cwd, "dist", "index-theme-switcher.css"),
				{
					cwd,
					clean,
					skipMapping: false,
					preserveVariables: true,
					stripLocalSelectors: false,
					referencesOnly: false,
				},
			).then(async (reports = []) => {
				return Promise.all([
					// After building, extract the available modifiers
					extractModifiers(path.join(cwd, "dist/index-theme-switcher.css"), { cwd }),
				]).then((r) => [...reports, r]);
			}),
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
			} else console.log("No assets created.".gray);

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
