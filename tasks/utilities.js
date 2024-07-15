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

const postcss = require("postcss");
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

module.exports = {
	dirs,
	timeInMs,
	relativePrint,
	bytesToSize,
	getPackageFromPath,
	extractProperties,
	cleanFolder,
};
