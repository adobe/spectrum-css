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

const { processCSS } = require("../../tasks/component-builder.js");
const { copy, dirs, fetchContent } = require("../../tasks/utilities.js");

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
	const contents = inputs.map(input => `@import "${path.basename(input)}";`).join("\n");
	if (!contents) return;
	return processCSS(contents, inputs[0], outputPath, { cwd, clean, configPath: cwd, map: false, resolveImports: true });
}

/**
 * Compile the theming assets for each component
 * @param {Object} config
 * @param {string} [config.cwd=process.cwd()] - Current working directory for the component
 * @returns
 */
async function componentTheming() {
	const components = fs.readdirSync(dirs.components).filter((file) => fs.existsSync(path.join(dirs.components, file, "package.json")));

	const promises = [];
	for (const component of components) {
		const componentDir = path.join(dirs.components, component);
		if (!fs.existsSync(path.join(componentDir, "themes"))) continue;

		// This fetches the content of the files and returns an array of objects with the content and input paths
		const contentData = await fetchContent(["themes/*.css"], { cwd: componentDir });

		// Nothing to do if there's no content
		if (!contentData || contentData.length === 0) continue;

		const imports = contentData.map(({ input }) => `@import "${input}";`).join("\n");

		const sharedPostCSSConfig = {
			cwd: componentDir,
			configPath: componentDir,
			map: false,
			env: "production",
		};

		promises.push(
			// Create a bridge asset for each component
			processCSS(
				imports,
				path.join(componentDir, "index.css"),
				path.join(
					dirs.tokens,
					"dist",
					"css",
					"components",
					"bridge",
					`${component}.css`,
				),
				{
					skipMapping: false,
					stripLocalSelectors: false,
					referencesOnly: true,
					...sharedPostCSSConfig,
				},
			),
			...contentData.map(async ({ content, input }) => {
				return processCSS(content, path.join(componentDir, input), path.join(dirs.tokens, "dist", "css", "components", path.basename(input, ".css"), `${component}.css`), {
					skipMapping: false,
					// Only output the new selectors with the system mappings
					stripLocalSelectors: true,
					referencesOnly: false,
					preserveVariables: true,
					...sharedPostCSSConfig,
				});
			}),
		);
	}

	return Promise.all(promises);
}

/**
 * Append custom/*-vars.css files to the end of the dist/css/*-vars.css files
 * @param {Object} config
 * @param {string} [config.cwd=process.cwd()] - Current working directory for the component
 * @returns
 */
async function appendCustomOverrides({ cwd = process.cwd() } = {}) {
	const promises = [];

	// Add custom/*-vars.css to the end of the dist/css/*-vars.css files and run through postcss before writing back to the dist/css/*-vars.css file
	const customFiles = await fg(["*-vars.css"], { cwd: path.join(cwd, "custom"), onlyFiles: true });
	for (const file of customFiles) {
		// Read in the custom file and the dist file and combine them into one file
		const combinedContent = await fetchContent([
			path.join("dist", "css", file),
			path.join("custom", file)
		], { cwd, shouldCombine: true });

		promises.push(
			combinedContent[0].content ? fsp.writeFile(path.join(cwd, "dist", "css", file), combinedContent[0].content) : Promise.resolve()
		);
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

	const compiledOutputPath = path.join(cwd, "dist", "css");

	return Promise.all([
		componentTheming(),
		// Wait for all the custom files to be processed
		appendCustomOverrides({ cwd }),
	]).then(async (r) => {
		return Promise.all([
			...["spectrum", "legacy", "express"].map(theme => index(
				[`dist/css/components/${theme}/*.css`],
				path.join(compiledOutputPath, "components", theme, "index.css"),
				{ cwd, clean }
			)),
			index(
				["dist/css/components/bridge/*.css"],
				path.join(compiledOutputPath, "components", "bridge", "index.css"),
				{ cwd, clean }
			),
			index(
				["dist/css/*-vars.css"],
				path.join(compiledOutputPath, "index.css"),
				{ cwd, clean }
			).then((reports) =>
				copy(path.join(compiledOutputPath, "index.css"), path.join(cwd, "dist", "index.css"), { cwd, isDeprecated: false })
					.then((reps) => [reports, reps]))
		]).then((reports) => {
			return [r, reports];
		});
	}).then((report) => {
		const logs = report.flat(Infinity).filter(Boolean);

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
	});
}

exports.default = main;
