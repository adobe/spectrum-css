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

const { readFileSync } = require("fs");
const { join, dirname } = require("path");

const fg = require("fast-glob");
const postcss = require("postcss");

const litePreset = require("cssnano-preset-lite");
const preset = litePreset({
	normalizeWhitespace: false,
	discardComments: {
		removeAll: true,
	},
});

const varDir = dirname(
	require.resolve("@spectrum-css/vars/package.json", {
		paths: [process.cwd(), __dirname],
	})
);

const tokenDir = dirname(
	require.resolve("@spectrum-css/tokens/package.json", {
		paths: [process.cwd(), __dirname],
	})
);

/**
 * Compile a map of all variables and their values defined in the provided CSS
 * @param {import('postcss').Root} root
 * @param {Map<string, string>} [variableMap=new Map()] - an existing map of variable names to values
 * @returns {Map<string, string>} variableMap - map of variable names to values
 */
function getVarsDefined(root, variableMap = new Map()) {
	/** @todo should we include an ignorelist here? */
	root.walkDecls(/^--/, (decl) => {
		variableMap.set(decl.prop, decl.value);
	});

	return variableMap;
}

/**
 *
 * @param {string|string[]} from
 * @returns {Promise<Map<string, string>>} variableMap - map of variable names to values
 */
function readVariablesFromFiles(from, { cwd = varDir } = {}) {
	const files = fg.sync(from, { cwd, absolute: true });

	let variableMap = new Map();
	files.map(async (file) => {
		const contents = readFileSync(file, "utf-8");
		const root = postcss.parse(contents);
		variableMap = getVarsDefined(root, variableMap);
	});

	return variableMap;
}

module.exports = ({
	cwd = process.cwd(),
	verbose = true,
	splitinatorOptions = {},
	varsOnly = false,
	additionalPlugins = [],
	webpackLoaderContext,
	...options
} = {}) => {
	const allVars = new Map();
	// Get vars in ALL components + all static vars
	const tokens = readVariablesFromFiles([
		`index.css`,
	], { cwd: tokenDir }) ?? {};

	tokens.forEach((value, name) => {
		// Prefer the component's vars over the theme's vars
		if (allVars.has(name)) return;
		allVars.set(name, value);
	});

	// Read in all static vars
	const staticVars = readVariablesFromFiles(["dist/globals/*.css"]) ?? {};

	// Read in all variables so we have the value they resolve to
	const extraVars = readVariablesFromFiles([
		`dist/components/*.css`,
		`dist/*.css`,
	]) ?? {};

	staticVars.forEach((value, name) => {
		// Prefer the component's vars over the theme's vars
		if (allVars.has(name)) return;
		allVars.set(name, value);
	});

	extraVars.forEach((value, name) => {
		// Prefer the component's vars over the theme's vars
		if (allVars.has(name)) return;
		allVars.set(name, value);
	});

	return {
		...options,
		plugins: [
			require("postcss-import")({
				root: cwd,
				addModulesDirectories: [join(cwd, "node_modules"), join(__dirname, "node_modules")],
			}),
			require("postcss-nesting")({
				noIsPseudoSelector: true
			}),
			require("postcss-extend")(),
			require("postcss-rgb-mapping")(),
			require("@spectrum-tools/postcss-splitinator")({
				processIdentifier: (identifier) => {
					return identifier === "express" ? "spectrum--express" : identifier;
				},
				...splitinatorOptions,
				loaderContext: webpackLoaderContext,
			}),
			require("@spectrum-tools/postcss-custom-properties-mapping")({
				allVars,
				staticVars,
				loaderContext: webpackLoaderContext,
			}),
			...(varsOnly ? [require("@spectrum-tools/postcss-vars-only")({
				globalVars: allVars,
				ignoreList: [/^--mod/, /^--highcontrast/],
				verbose,
				loaderContext: webpackLoaderContext,
			})] : []),
			...additionalPlugins,
			require("cssnano")({
				preset,
				plugins: [
					[
						require("autoprefixer"), { remove: false }
					]
				],
			}),
			require("postcss-sorting")({
				order: ["custom-properties", "declarations", "at-rules", "rules"],
				"properties-order": "alphabetical",
			}),
			/* Merges _adjacent_ rules only */
			require("postcss-merge-rules"),
			require("postcss-combine-duplicated-selectors")({}),
			/* This removes all copyright comments so we can add a single one at the top of the file */
			require("postcss-discard-comments")({
				removeAllButFirst: true,
				remove: (comment) => {
					return (
						["Copyright", "This file contains"].some((str) => comment.includes(str)) ||
						comment.trim() === ""
					);
				},
			}),
			/* After cleaning up comments, remove all empty rules */
			require("postcss-discard-empty")(),
			/* Ensure the license is at the top of the file */
			require("postcss-licensing")({
				filename: "COPYRIGHT",
				skipIfEmpty: true,
			}),
			...(verbose ? [
				require("postcss-reporter")({
					clearReportedMessages: true,
				})
			] : []),
		],
	};
};
