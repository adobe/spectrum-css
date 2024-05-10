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

const { processCSS } = require("../../tasks/component-builder");

require("colors");

/**
 * The builder for the main entry point
 * @param {object} config
 * @param {string} config.cwd - Current working directory for the component being built
 * @param {boolean} config.clean - Should the built assets be cleaned before running the build
 * @returns Promise<void>
 */
async function index({ cwd = process.cwd(), clean = false } = {}) {
	// Create an index.css asset for each component
	return Promise.all(["bridge", "express", "spectrum"].map(async (dir) => {
		const outputPath = path.join(cwd, "dist", "css", "components", dir, "index.css");
		if (clean && fs.existsSync(outputPath)) {
			await fsp.unlink(outputPath);
		}

		const inputs = await fg(["dist/css/components/" + dir + "/*.css"], { cwd });
		const contents = inputs.map(input => `@import "./${path.basename(input)}";`).join("\n");
		return processCSS(contents, inputs[0], outputPath, { cwd, clean, configPath: cwd, map: false });
	}));
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
		index({ cwd, clean }),
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
