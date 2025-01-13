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

const { processCSS } = require("../../tasks/component-builder.js");
const { fetchContent } = require("../../tasks/utilities.js");

require("colors");

/**
 * The builder for the main entry point
 * @param {object} config
 * @param {string} config.cwd - Current working directory for the component being built
 * @param {boolean} config.clean - Should the built assets be cleaned before running the build
 * @returns Promise<void>
 */
async function index(inputGlob, outputPath, { cwd = process.cwd(), clean = false } = {}) {
	// Create an index.css asset for each component
	if (clean && fs.existsSync(outputPath)) {
		await fsp.unlink(outputPath);
	}

	const inputs = await fg(inputGlob, { cwd });
	const contents = inputs.map(input => `@import "${input}";`).join("\n");
	if (!contents) return;
	return processCSS(contents, undefined, outputPath, { cwd, clean, configPath: cwd, map: false, resolveImports: true });
}

/**
 * Append custom/*-vars.css files to the end of the dist/css/*-vars.css files
 * @param {Object} config
 * @param {string} [config.cwd=process.cwd()] - Current working directory for the component
 * @returns {Promise<string[]>}
 */
async function appendCustomOverrides({ cwd = process.cwd() } = {}) {
	const globalFiles = await fg(["*-vars.css"], { cwd: path.join(cwd, "dist", "css"), onlyFiles: true });

	// Clean up the generated files from style-dictionary
	const promises = globalFiles.map(file => processCSS(undefined, path.join("dist", "css", file), path.join("dist", "css", file), { cwd, configPath: cwd }));

	for (const theme of ["express", "spectrum"]) {
		// Add custom/*-vars.css to the end of the dist/css/*-vars.css files and run through postcss before writing back to the dist/css/*-vars.css file
		const customFiles = await fg(["*-vars.css"], { cwd: path.join(cwd, `custom-${theme}`), onlyFiles: true });
		const themeFiles = await fg(["*-vars.css"], { cwd: path.join(cwd, "dist", "css", theme), onlyFiles: true });

		for (const file of [...new Set([...themeFiles, ...customFiles])]) {
			// Read in the custom file and the dist file and combine them into one file
			const combinedContent = await fetchContent([
				path.join("dist", "css", theme, file),
				path.join(`custom-${theme}`, file)
			], { cwd, shouldCombine: true });

			if (!combinedContent || !combinedContent[0].content) continue;

			promises.push(
				processCSS(combinedContent[0].content, path.join(cwd, "dist", "css", theme, file), path.join(cwd, "dist", "css", theme, file), { cwd, configPath: cwd })
			);
		}
	}

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
	cwd = process.cwd(),
	clean,
} = {}) {
	if (typeof clean === "undefined") {
		clean = process.env.NODE_ENV === "production";
	}

	const key = `[build] ${"@spectrum-css/tokens".cyan} index`;
	console.time(key);

	const compiledOutputPath = path.join(cwd, "dist");

	// Wait for all the custom files to be processed
	return appendCustomOverrides({ cwd }).then(async (r) =>
		Promise.all([
			...["spectrum", "express"].map(theme => Promise.all([
				index(
					[`dist/css/${theme}/*-vars.css`],
					path.join(compiledOutputPath, "css", theme, "index.css"),
					{ cwd, clean }
				),
			])),
			index(
				["dist/css/*.css", "dist/css/spectrum/*-vars.css", "dist/css/express/*-vars.css"],
				path.join(compiledOutputPath, "index.css"),
				{ cwd, clean }
			),
		]).then((reports) => {
			const logs = [reports, r].flat(Infinity).filter(Boolean);

			console.log(`\n\n${key} 🔨`);
			console.log(`${"".padStart(30, "-")}`);

			if (logs && logs.length > 0) {
				logs.sort((a,) => {
					if (!a || typeof a !== "string") return 1;
					if (a.includes("✓")) return -1;
					if (a.includes("🔍")) return 0;
					return 1;
				}).forEach(log => {
					// Strip the ../../tokens/ from the paths
					console.log(log.replace(/(\.\.\/)+tokens\//g, ""));
				});
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
		})
	);
}

exports.default = main;
