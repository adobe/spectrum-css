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

const { processCSS, fetchContent } = require("../../tasks/component-builder");

require("colors");

/**
 * The builder for the main entry point
 * @param {object} config
 * @param {string} config.cwd - Current working directory for the component being built
 * @param {boolean} config.clean - Should the built assets be cleaned before running the build
 * @returns Promise<void>
 */
async function build({ cwd = process.cwd(), clean = false } = {}) {
	// Nothing to do if there's no input file
	if (clean && fs.existsSync(path.join(cwd, "dist", "index.css"))) {
		await fsp.unlink(path.join(cwd, "dist", "index.css"));
	}

	let contents = await fetchContent(["dist/css/*-vars.css", "custom/*-vars.css"], { cwd });
	// Sort the contents by filename and then by foldername (ensure custom tokens are last)
	contents = contents.sort((a, b) => {
		const aFilename = path.basename(a.input);
		const bFilename = path.basename(b.input);
		if (aFilename !== bFilename) return aFilename.localeCompare(bFilename);

		const aFoldername = path.dirname(a.input);
		const bFoldername = path.dirname(b.input);
		return aFoldername.localeCompare(bFoldername) * -1;
	});

	// Next we combine like-named files into one file
	const combined = [];
	let current = contents[0];
	current.content = `/*# source: ${current.input} */\n${current.content}`;
	for (let i = 1; i < contents.length; i++) {
		if (path.basename(contents[i].input) === path.basename(current.input)) {
			current.content += `\n\n/*# source: ${contents[i].input} */\n${contents[i].content}`;
			continue;
		}

		combined.push(current);
		current = contents[i];
	}

	// Push the last entry into the combined array
	combined.push(current);

	// Write the combined files to the dist folder
	const promises = [
		Promise.all(combined.map(async ({ content, input }) => {
			const output = path.join(cwd, "dist", "css", path.basename(input));
			return processCSS(content, input, output, { cwd, clean, configPath: cwd });
		}))
	];

	// Next we combine all the new files into 1 index file, changing the :root selectors to the name of the file
	const collection = combined.map(({ input, content }) => {
		const filename = path.basename(input, ".css");
		const scope = filename.replace("-vars", "");
		let selector = ".spectrum";
		if (scope !== "global") selector += `--${scope}`;
		return content.replaceAll(/:root/g, selector);
	}).join("\n\n");

	promises.push(
		processCSS(collection, path.join(cwd, combined?.[0].input), path.join(cwd, "dist", "index.css"), { cwd, clean, configPath: cwd })
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
	cwd,
	clean,
} = {}) {
	if (typeof clean === "undefined") {
		clean = process.env.NODE_ENV === "production";
	}

	const key = `[build] ${"@spectrum-css/tokens".cyan} index`;
	console.time(key);

	return Promise.all([
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

exports.default = main;
