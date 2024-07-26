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

const fg = require("fast-glob");
const postcss = require("postcss");
const prettier = require("prettier");
const valuesParser = require("postcss-values-parser");

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
	tokens: path.join(__dirname, "../tokens"),
	site: path.join(__dirname, "../site"),
	publish: path.join(__dirname, "../dist"),
	storybook: path.join(__dirname, "../.storybook"),
};

const timeInMs = (seconds, nanoseconds) => (seconds * 1000000000 + nanoseconds) / 1000000;

/** @type {(string) => string} */
const relativePrint = (filename, { cwd = dirs.root } = {}) => path.relative(cwd, filename);

const bytesToSize = function (bytes) {
	if (bytes === 0) return "0";

	const sizes = ["bytes", "KB", "MB", "GB", "TB"];
	// Determine the size identifier to use (KB, MB, etc)
	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
	if (i === 0) return (bytes / 1000).toFixed(2) + " " + sizes[1];
	return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
};

/**
 * A utility to resolve the prettier settings and format the content
 * @param {string} content
 * @param {object} [options={}]
 * @param {string} [options.filePath=process.cwd()] - The file path to resolve the prettier settings from
 * @param {object} [prettierSettings={}] - Additional prettier settings to apply
 * @returns {Promise<string>}
*/
async function pretty(content, {
	filepath = process.cwd(),
	...prettierSettings
} = {}) {
	let options = fs.existsSync(filepath) ? await prettier.resolveConfig(filepath) : {};
	// Combine the prettier settings with the provided settings
	options = { ...options, ...prettierSettings };

	// If no parser was provided or inferred, return the string as is
	if (typeof options?.parser == "undefined" || path.extname(filepath).endsWith("map")) {
		return content;
	}

	return prettier.format(content?.trim(), options);
}

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
 * @param {{ [string]: (string)[] }} [meta={}]
 * @returns { [string]: string[] }
 */
function extractProperties(
	content,
	meta = {},
) {
	if (!content) return new Set();

	const found = {};

	// Process CSS content through the valuesParser an postcss to capture
	// all the custom properties defined and used in the CSS
	postcss.parse(content).walkDecls((decl) => {
		Object.entries(meta).forEach(([key, values]) => {
			found[key] = found[key] ?? new Set();

			values.forEach((value) => {
				if (decl.prop.startsWith("--") && decl.prop.startsWith(`--${value}-`)) {
					found[key].add(decl.prop);
				}
			});

			// Parse the value of the declaration to extract custom properties
			valuesParser.parse(decl.value).walk((node) => {
				if (node.type !== "word" || !node.isVariable) return;

				// Extract the custom property name from the var() function
				values.forEach((value) => {
					if (node.value.startsWith(`--${value}-`)) {
						found[key].add(node.value);
					}
				});
			});
		});
	});

	// Sort the custom properties alphabetically and return them as an array
	Object.keys(found).forEach((key) => {
		found[key] = [...found[key]].sort();
	});

	return found;
}

/**
 * Remove all files and folders from the provided directory's dist folder
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
 * If the output directory does not exist, create it (recursively)
 * @param {string} output - The output file path
 * @param {object} [options={}]
 * @param {string} [options.cwd=] - The current working directory, used for relative path printing
 * @returns Promise<void>
 */
async function makeOutputDir(output, { cwd = process.cwd() } = {}) {
	const outputDir = path.dirname(output);
	if (fs.existsSync(outputDir)) return Promise.resolve();

	return fsp.mkdir(outputDir, { recursive: true }).catch((err) => {
		if (!err) return;
		return Promise.reject(
			new Error(`${"✗".red}  problem making the ${relativePrint(outputDir, { cwd }).yellow} directory`)
		);
	});
}
/**
 * Inject a deprecation notice into the content after the copyright
 * @param {string} filepath - The file path to inject the notice into
 * @param {object} [options={}]
 * @param {string} [options.notice="This file will be removed in a future release"] - The deprecation notice to inject
 * @param {string} [options.filepath] - The file path to inject the notice into
 * @returns {Promise<void>}
 */
async function injectDeprecationNotice(content, {
	notice = "This file will be removed in a future release",
	filepath,
} = {}) {
	const ext = filepath && path.extname(filepath).replace(".", "")?.toLowerCase();

	let commentFormat = "\n/* @deprecation: %s */\n\n";
	switch (ext) {
		case "md":
		case "markdown":
			commentFormat = "\n_Note_: %s.\n\n";
			break;
		case "js":
			commentFormat = "\n/** @deprecation: %s */\n\n";
			break;
	}

	notice = commentFormat.replace("%s", notice);

	// Parse the content with to find where the copyright notice ends
	// and inject the deprecation notice after it; should work for CSS and JS
	const lines = content.split("\n");
	const index = lines.findIndex(line => line.toLowerCase().includes("copyright"));
	// If the match is found, inject the deprecation notice after the comment block
	// by reading in the subsequent lines and finding the closing comment tag */
	if (index > -1) {
		const closingComment = lines.slice(index).findIndex(line => line.includes("*/"));
		if (closingComment > -1) {
			// Inject the deprecation notice after the closing comment tag
			lines.splice(index + closingComment + 1, 0, notice);
		}
	}
	else {
		// If no match is found, inject the deprecation notice at the top of the file
		lines.unshift(notice);
	}

	return lines.join("\n");
}

/**
 * If the output directory does not exist, create it (recursively)
 * @param {string} content - The content to write to the file
 * @param {string} filepath - The output file path
 * @param {object} [options={}]
 * @param {string} [options.cwd=process.cwd()] - The current working directory, used for relative path printing
 * @param {string} [options.isDeprecated=false] - If true, the file is marked as deprecated
 * @returns Promise<string|void>
 */
async function writeAndReport(content, filepath, {
	cwd = process.cwd(),
	isDeprecated = false,
	parser = "css"
} = {}) {
	// If the content is empty, return early
	if (!content || content.trim() === "") return Promise.resolve();

	// Ensure the output directory exists
	await makeOutputDir(filepath, { cwd });

	// If the file is marked as deprecated, inject a deprecation notice
	if (isDeprecated) await injectDeprecationNotice(content, { filepath });

	return pretty(content, { filepath, parser }).then(formatted =>
		fsp.writeFile(filepath, formatted).then(() => {
			const stats = fs.statSync(filepath);
			return `${"✓".green}  ${relativePrint(filepath, { cwd }).padEnd(20, " ").yellow}  ${bytesToSize(stats.size).gray}  ${isDeprecated ? "-- deprecated --".gray : ""}`;
		}).catch(() => {
			return `${"✗".red}  ${relativePrint(filepath, { cwd }).yellow} not written`;
		})
	);
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

module.exports = {
	dirs,
	pretty,
	timeInMs,
	relativePrint,
	bytesToSize,
	getPackageFromPath,
	extractProperties,
	fetchContent,
	makeOutputDir,
	writeAndReport,
	injectDeprecationNotice,
	cleanFolder,
};
