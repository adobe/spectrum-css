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

const { hideBin } = require("yargs/helpers");
const yargs = require("yargs");

const fg = require("fast-glob");

const { processCSS } = require("../../tasks/component-builder.js");

require("colors");

const {
	copy,
	dirs,
	writeAndReport,
	runAndReportToConsole,
	fetchContent,
	getAllComponentNames,
} = require("../../tasks/utilities.js");

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
 * Compile the theming assets for each component
 * @param {Object} config
 * @param {string} [config.cwd=process.cwd()] - Current working directory for the component
 * @returns {Promise<void>}
 */
async function componentTheming() {
	const components = getAllComponentNames();

	return Promise.all(components.map(async (component) => {
		// Directory for the component
		const componentDir = path.join(dirs.components, component);

		// If no themes directory exists, there's nothing to do
		if (!fs.existsSync(path.join(componentDir, "themes"))) {
			return Promise.resolve(`No themes for ${component.yellow}.`);
		}

		// This fetches the content of the files and returns an array of objects with the content and input paths
		const contentData = await fetchContent(["themes/*.css"], { cwd: componentDir, shouldCombine: false });
		console.log(contentData);

		// Nothing to do if there's no content
		if (!contentData || contentData.length === 0) {
			return Promise.resolve(`No content in themes for ${component}`);
		}

		const imports = contentData.map(({ input }) => `@import "${input}";`).join("\n");

		const sharedPostCSSConfig = {
			cwd: componentDir,
			configPath: componentDir,
			map: false,
			env: "production",
		};

		return Promise.all([
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
		]);
	}));
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
			combinedContent[0].content ? writeAndReport(combinedContent[0].content, path.join(cwd, "dist", "css", file)) : Promise.resolve()
		);
	}

	return Promise.all(promises);
}

async function workflow({ cwd }) {
	return Promise.all([
		componentTheming(),
		// Wait for all the custom files to be processed
		appendCustomOverrides({ cwd }),
	]).then((r) => Promise.all([
		index(
			["dist/css/components/bridge/*.css"],
			path.join(cwd, "dist", "css", "components", "bridge", "index.css"),
			{ cwd, clean }
		),
		...["spectrum", "legacy", "express"].map(theme => index(
			[`dist/css/components/${theme}/*.css`],
			path.join(cwd, "dist", "css", "components", theme, "index.css"),
			{ cwd, clean }
		)),
		index(
			["dist/css/*-vars.css"],
			path.join(cwd, "dist", "css", "index.css"),
			{ cwd, clean }
		).then((reports) =>
			copy(path.join(cwd, "dist", "css", "index.css"), path.join(cwd, "dist", "index.css"), { cwd, isDeprecated: false })
				.then((reps) => [reports, reps]))
	]).then((r2) => [r, r2]));
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
	cwd = dirs.tokens,
	clean,
} = {}) {
	if (typeof clean === "undefined") {
		clean = process.env.NODE_ENV === "production";
	}

	return runAndReportToConsole((cwd) => ([
		// workflow({ cwd }),
		componentTheming(),
	]), {
		taskLabel: "build",
		taskIcon: "🔨",
		folderName: "tokens",
		cwd,
	});
}

exports.default = main;

let {
	cwd = dirs.tokens,
	clean = true,
	// @todo allow to run against local main or published versions
} = yargs(hideBin(process.argv)).argv;

main({ cwd, clean });
