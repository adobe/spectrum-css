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

require("colors");

const {
	dirs,
	relativePrint,
	cleanFolder,
	fetchContent,
} = require("../../tasks/utilities.js");

const { processCSS } = require("../../tasks/component-builder.js");

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
 * The builder for the individual themes assets for the components
 * @param {object} config
 * @param {string} config.cwd - Current working directory for the component being built
 * @param {boolean} config.clean - Should the built assets be cleaned before running the build
 * @returns Promise<void>
 */
async function build({ cwd = process.cwd(), clean = false } = {}) {
	const indexContent = await fetchContent(["index.css"], { cwd });
	// This fetches the content of the files and returns an array of objects with the content and input paths
	const contentData = await fetchContent(["themes/*.css"], { cwd, clean });
	const componentName = cwd?.split(path.sep)?.pop();

	// Nothing to do if there's no content
	if (!contentData || contentData.length === 0) return Promise.resolve();

	return Promise.all([
		...contentData.map(async ({ content, input }) => {
			if (!content)
				return Promise.reject(
					new Error(`No content found for ${relativePrint(input, { cwd })}`),
				);
			return processCSS(
				content,
				path.join(cwd, input),
				path.join(dirs.tokens, "dist", "css", "components", path.basename(input, ".css"), `${componentName}.css`),
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
			);
		}),
		// Expect this file to have component-specific selectors mapping to the system tokens but not the system tokens themselves
		...indexContent.map(async ({ content, input }) => {
			return processCSS(
				content,
				input,
				path.join(dirs.tokens, "dist", "css", "components", "bridge", `${componentName}.css`),
				{
					cwd,
					clean,
					configPath: input,
					skipMapping: false,
					stripLocalSelectors: false,
					referencesOnly: true,
					env: "production",
				},
			);
		}),
	]);
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
	// componentName = process.env.NX_TASK_TARGET_PROJECT,
	cwd = path.join(dirs.tokens),
	clean = process.env.NODE_ENV === "production"
} = {}) {
	const compiledOutputPath = path.join(cwd, "dist", "css");

	// Fetch a list of all components in the dirs.components directory
	const components = (await fg(["*/index.css"], {
		cwd: dirs.components,
	})).map((component) => path.dirname(component));

	const key = `[build] ${"@spectrum-css/tokens".cyan}`;
	console.time(key);

	return Promise.all([
		...(clean ? [cleanFolder({ cwd })] : []),
		// Combine generated global vars with the custom overrides
		Promise.all(["global", "medium", "large", "light", "dark"].map((theme) =>
			fetchContent([
                `dist/css/${theme}-vars.css`,
                `custom/${theme}-vars.css`
			], { cwd: dirs.tokens, shouldCombine: true }).then(({content, input}) => {
				console.log({content, input});
				return content ? processCSS(
					content,
					path.join(dirs.tokens, `custom/${theme}-vars.css`),
					path.join(dirs.tokens, `dist/css/${theme}-vars.css`),
					{
						cwd: dirs.tokens,
						clean,
						lint: false,
						skipMapping: false,
						referencesOnly: false,
						preserveVariables: true,
						stripLocalSelectors: false,
						map: false,
					},
				) : Promise.resolve();
			})
		)).then((r) =>
			index(["dist/css/*-vars.css"], path.join(compiledOutputPath, "index.css"), { cwd, clean })
				.then((report) => [r, report])
		),
		// Iterate over the components and build their theming layers
		Promise.all(components.map((component) =>
			build({ cwd: path.join(dirs.components, component), clean })
		)).then((r) =>
			Promise.all([
				...["spectrum", "legacy", "express"].map(theme => index([`dist/css/components/${theme}/*.css`], path.join(compiledOutputPath, "components", theme, "index.css"), { cwd, clean })),
				index(["dist/css/components/bridge/*.css"], path.join(compiledOutputPath, "components", "bridge", "index.css"), { cwd, clean }),
			]).then((report) => [r, report])
		),
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
			}
			else console.log("No assets created.".gray);

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
