/* eslint-disable no-console */
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
	root: path.join(__dirname, "../.."),
	components: path.join(__dirname, "../../components"),
	site: path.join(__dirname, "../../site"),
	publish: path.join(__dirname, "../../dist"),
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
	...postCSSOptions
} = {}) {
	if (!content) return Promise.reject(new Error("This function requires content be provided"));

	const { plugins, options = {} } = await postcssrc(
		{
			cwd,
			env: process.env.NODE_ENV ?? "development",
			from: input,
			to: output,
			verbose: false,
			...postCSSOptions,
		},
		path.join(__dirname, "..") // This is the path to the directory where the postcss.config.js lives
	);

	const result = await postcss(plugins).process(content, options);

	if (result.messages) {
		result.messages.forEach(message => console.log(message));
	}

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
		const formatted = await prettier.format(result.css.trimStart(), { parser: "css", printWidth: 300 });
		promises.push(
			fsp.writeFile(output, formatted, { encoding: "utf-8" }).then(() => {
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
 * The main entry point for this tool; this builds a combined token asset
 * @returns Promise<void>
 */
async function main() {
	const key = `[build] ${"@spectrum-css/tokens".cyan}`;
	console.time(key);

	return Promise.all([
		fetchContent(["*.css", "spectrum/*.css"], {
			cwd: path.join(__dirname, "..", "dist", "css"),
			shouldCombine: false,
		}).then(contents => {
			const combined = contents.reduce((result, item) => {
				// Replace :root with .spectrum--<context>
				const basename = path.basename(item.input, ".css")?.replace("custom-", "")?.replace("-vars", "");
				// If filename is dark-vars.css, replace :root with .spectrum--dark
				// If filename is light-vars.css, replace :root with .spectrum--light
				// If filename is medium-vars.css, replace :root with .spectrum--medium
				// If filename is large-vars.css, replace :root with .spectrum--large
				if (["dark", "light", "large", "medium"].includes(basename)) {
					return result + "\n\n" + item.content.replace(/:root/g, `.spectrum--${basename}`);
				}
				else {
					return result + "\n\n" + item.content.replace(/:root/g, ".spectrum");
				}
			}, "");

			// Output result into dist/index.css
			return processCSS(combined, contents[0].input, "dist/index.css", { cwd: path.join(__dirname, "..") });
		}),
		fetchContent(["express/*.css"], {
			cwd: path.join(__dirname, "..", "dist", "css"),
			shouldCombine: false,
		}).then(contents => {
			const combined = contents.reduce((result, item) => {
				// Replace :root with .spectrum--<context>
				const basename = path.basename(item.input, ".css")?.replace("custom-", "")?.replace("-vars", "");
				if (["dark", "light", "large", "medium"].includes(basename)) {
					return result + "\n\n" + item.content.replace(/:root/g, `.spectrum.spectrum--express.spectrum--${basename}`);
				}
				else {
					return result + "\n\n" + item.content.replace(/:root/g, ".spectrum.spectrum--express");
				}
			}, "");

			// Output result into dist/index.css
			return processCSS(combined, contents[0].input, "dist/index-express.css", { cwd: path.join(__dirname, "..") });
		}),
		fetchContent(["legacy/*.css"], {
			cwd: path.join(__dirname, "..", "dist", "css"),
			shouldCombine: false,
		}).then(contents => {
			const combined = contents.reduce((result, item) => {
				// Replace :root with .spectrum--<context>
				const basename = path.basename(item.input, ".css")?.replace("custom-", "")?.replace("-vars", "");
				if (["dark", "light", "large", "medium"].includes(basename)) {
					return result + "\n\n" + item.content.replace(/:root/g, `.spectrum--${basename}`);
				}
				else {
					return result + "\n\n" + item.content.replace(/:root/g, ".spectrum");
				}
			}, "");

			// Output result into dist/index.css
			return processCSS(combined, contents[0].input, "dist/index-legacy.css", { cwd: path.join(__dirname, "..") });
		})
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

exports.default = main;
