/*!
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

const fg = require("fast-glob");
const postcss = require("postcss");
const postcssrc = require("postcss-load-config");
const prettier = require("prettier");

require("colors");

/**
 * A source of truth for commonly used directories
 * @type {object} dirs
 * @property {string} dirs.root
 * @property {string} dirs.components
 * @property {string} dirs.site
 * @property {string} dirs.publish
 */
const dirs = {
	root: path.join(__dirname, ".."),
	components: path.join(__dirname, "../components"),
	site: path.join(__dirname, "../site"),
	publish: path.join(__dirname, "../dist"),
};

/** @type {(string) => string} */
const relativePrint = (filename, { cwd = dirs.root }) => path.relative(cwd, filename);

const bytesToSize = function (bytes) {
	if (bytes === 0) return "0";

	const sizes = ["bytes", "KB", "MB", "GB", "TB"];
	// Determine the size identifier to use (KB, MB, etc)
	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
	if (i === 0) return (bytes / 1000).toFixed(2) + " " + sizes[1];
	return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
};

/**
 * Determines the package name from a file path
 * @param {string} filePath
 * @returns {string}
 */
function getPackageFromPath(filePath = process.cwd()) {
	const parts = filePath.split(path.sep);

	// Capture component name from a local or node_modules syntax
	if (parts.includes("components") || parts.includes("@spectrum-css")) {
		const index = parts.indexOf("components") ?? parts.indexOf("@spectrum-css");
		return parts[index + 1];
	}

	// Check local root-level packages such as ui-icons & tokens
	if (parts.includes("ui-icons")) return "ui-icons";
	if (parts.includes("tokens")) return "tokens";

	// This is a fallback best-guess scenario:
	// Split the path from root dir and capture the first folder as the package name
	const guessParts = path.relative(dirs.root, filePath).split(path.sep);
	return guessParts[0];
}

/**
 * This regex will find all the custom properties that start with --mod-
 * and are defined inside a var() function. The last capture group will
 * ignore any mod properties that are followed by a colon, to exclude
 * sub-component passthrough properties that should not be listed as mods.
 * @param {string} content
 * @param {RegExp} [regex=]
 * @returns Set<string>
 */
async function extractProperties(
	content,
	regex = /(--mod-(?:\w|-)+)(?!:|\w|-)/g
) {
	if (!content) return new Set();

	// assign the matches to an array through the spread operator and map the results to the first capture group
	return new Set([...content.matchAll(regex)].map((match) => match[1]) ?? []);
}

/**
 * Extract custom property modifers to report
 * @param {string} filepath
 * @param {object} [options={}]
 * @returns Promise<string|string[]|void>
 */
async function extractModifiers(filepath, { cwd } = {}) {
	if (!fs.existsSync(filepath)) return Promise.resolve();

	const content = await fsp.readFile(filepath, { encoding: "utf-8" });

	/* Remove duplicates using a Set and sort the results (default is alphabetical) */
	const found = await extractProperties(content);
	const spectrum = await extractProperties(content, /(--spectrum-(?:\w|-)+)(?!:|\w|-)/g);
	const system = await extractProperties(content, /(--system-(?:\w|-)+)(?!:|\w|-)/g);
	const highContrast = await extractProperties(content, /(--highcontrast-(?:\w|-)+)(?!:|\w|-)/g);

	const selectors = new Set();
	const root = postcss.parse(content);
	root.walkRules(rule => {
		if (rule.selectors) {
			rule.selectors.forEach((selector) => {
				selectors.add(selector);
			});
		}
	});

	if (!fs.existsSync(path.join(cwd, "dist"))) {
		fs.mkdirSync(path.join(cwd, "dist"));
	}

	const promises = [];
	if (found.size > 0) {
		// If the metadata folder doesn't exist, create it
		if (!fs.existsSync(path.join(cwd, "metadata"))) {
			fs.mkdirSync(path.join(cwd, "metadata"));
		}
	}

	promises.push(
		fsp.writeFile(
			path.join(cwd, "dist/metadata.json"),
			(await prettier.format(
				JSON.stringify({
					selectors: [...selectors].sort(),
					mods: [...found].sort(),
					spectrum: [...spectrum].sort(),
					system: [...system].sort(),
					a11y: [...highContrast].sort(),
				}, null, 2),
				{ parser: "json" }
			)),
			{ encoding: "utf-8" }
		).then(() => {
			const stats = fs.statSync(path.join(cwd, "dist/metadata.json"));
			return [
                `${"✓".green}  ${"dist/metadata.json".padEnd(20, " ").yellow}  ${bytesToSize(stats.size).gray}`,
                `🔍  ${`${found.size}`.underline} modifiable custom propert${found.size === 1 ? "y" : "ies"}`,
                `🔍  ${`${selectors.size}`.underline} selector${found.size === 1 ? "" : "s"}`,
			];
		}).catch((err) => {
			if (!err) return;
			console.log(`${"✗".red}  ${"dist/metadata.json".yellow} not written`);
			return Promise.reject(err);
		})
	);

	return Promise.all(promises);
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
 * @returns {Promise<(string|void)[]>} Returns either the CSS content or void
 */
async function processCSS(content, input, output, {
	cwd,
	// clean = false,
	configPath = __dirname,
	...postCSSOptions
} = {}) {
	if (!content) return Promise.reject(new Error("This function requires content be provided"));

	const { plugins, options } = await postcssrc(
		{
			cwd,
			env: process.env.NODE_ENV ?? "development",
			from: input,
			to: output,
			verbose: false,
			...postCSSOptions,
		},
		configPath // This is the path to the directory where the postcss.config.js lives
	);

	const result = await postcss(plugins).process(content, options);

	if (result.error) return Promise.reject(result.error);

	if (!result.css) return Promise.reject(new Error(`No CSS was generated from the provided content for ${relativePrint(input, { cwd })}`));

	if (!fs.existsSync(path.dirname(output))) {
		await fsp.mkdir(path.dirname(output), { recursive: true }).catch((err) => {
			if (!err) return;
			// @todo pretty print these are relative paths
			console.log(`${"✗".red}  problem making the ${relativePrint(path.dirname(output), { cwd }).yellow} directory`);
			return Promise.reject(err);
		});
	}

	const promises = [];

	if (result.css) {
		const formatted = await prettier.format(result.css.trimStart(), { parser: "css", printWidth: 500 });
		promises.push(
			fsp.writeFile(output, formatted).then(() => {
				const stats = fs.statSync(output);
				return `${"✓".green}  ${relativePrint(output, { cwd }).padEnd(20, " ").yellow}  ${bytesToSize(stats.size).gray}`;
			}).catch((err) => {
				if (!err) return;
				console.log(`${"✗".red}  ${relativePrint(output, { cwd }).yellow} not written`);
				return Promise.reject(err);
			})
		);
	}

	if (result.map) {
		promises.push(
			fsp.writeFile(`${output}.map`, result.map.toString().trimStart()).then(() => {
				const stats = fs.statSync(output);
				return `${"✓".green}  ${relativePrint(`${output}.map`, { cwd }).padEnd(20, " ").yellow}  ${bytesToSize(stats.size).gray}`;
			}).catch((err) => {
				if (!err) return;
				console.log(`${"✗".red}  ${relativePrint(`${output}.map`, { cwd }).yellow} not written`);
				return Promise.reject(err);
			})
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
async function fetchContent(globs = [], {
	cwd,
	shouldCombine = false,
	...fastGlobOptions
} = {}) {
	const files = await fg(globs, {
		onlyFiles: true,
		...fastGlobOptions,
		cwd,
	});

	if (!files.length) return Promise.resolve([]);

	const fileData = await Promise.all(
		files.map(async (file) => ({
			input: path.join(cwd, file),
			content: await fsp.readFile(path.join(cwd, file), "utf8")
		}))
	);

	// Combine the content into 1 file; @todo do this in future using CSS imports
	if (shouldCombine) {
		let content = "";
		fileData.forEach(dataset => {
			if (dataset.content) content += "\n\n" + dataset.content;
		});

		return Promise.resolve([{
			content,
			input: fileData[0].input
		}]);
	}

	return Promise.all(
		files.map(async (file) => ({
			content: await fsp.readFile(path.join(cwd, file), "utf8"),
			input: file,
		}))
	);
}

/**
 * The builder for the main entry point
 * @param {object} config
 * @param {string} config.cwd - Current working directory for the component being built
 * @returns Promise<void>
 */
async function cleanFolder({ cwd = process.cwd() } = {}) {
	// Nothing to do if there's no input file
	if (!fs.existsSync(path.join(cwd, "dist"))) return Promise.resolve();

	return fsp.rm(path.join(cwd, "dist"), { recursive: true, force: true }).then(() => fsp.mkdir(path.join(cwd, "dist")));
}

/**
 * The builder for the main entry point
 * @param {object} config
 * @param {string} config.cwd - Current working directory for the component being built
 * @param {boolean} config.clean - Should the built assets be cleaned before running the build
 * @returns Promise<void>
 */
async function build({ cwd = process.cwd(), clean = false } = {}) {
	// Nothing to do if there's no input file
	if (!fs.existsSync(path.join(cwd, "index.css"))) return;

	const content = await fsp.readFile(path.join(cwd, "index.css"), "utf8");

	return processCSS(content, path.join(cwd, "index.css"), path.join(cwd, "dist", "index.css"), { cwd, clean })
		.then(async (reports) =>
		// After building, extract the available modifiers
			extractModifiers(path.join(cwd, "dist/index.css"), { cwd })
			// Return the console output to be logged
				.then(r => [r, ...reports])
		);
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
	if (!cwd && (componentName)) {
		cwd = path.join(dirs.components, componentName);
	}

	if (!componentName) {
		componentName = cwd ? getPackageFromPath(cwd) : process.env.NX_TASK_TARGET_PROJECT;
	}

	if (typeof clean === "undefined") {
		clean = process.env.NODE_ENV === "production";
	}

	const key = `[build] ${`@spectrum-css/${componentName}`.cyan}`;
	console.time(key);

	return Promise.all([
		...(clean ? [cleanFolder({ cwd })] : []),
		build({ cwd, clean }),
	]).then((report) => {
		const logs = report.flat(Infinity).filter(Boolean);

		console.log(`\n\n${key} 🔨`);
		console.log(`${"".padStart(30, "-")}`);

		if (logs && logs.length > 0) {
			logs.sort((a,) => {
				if (a.includes("✓")) return -1;
				if (a.includes("🔍")) return 0;
				return 1;
			}).forEach(log => console.log(log));
		}
		else console.log("No assets created.".gray);

		console.log(`${"".padStart(30, "-")}`);
		console.timeEnd(key);
		console.log("");

	}).catch((err) => {

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
