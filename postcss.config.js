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

const { join, sep, basename } = require("path");

module.exports = ({
	file,
	to,
	splitinatorOptions = {
		noSelectors: false,
		noFlatVariables: false,
		// @todo strip out all but the references to --system- variables
		// NOT --system- definitions, only references
		referencesOnly: false,
	},
	resolveImports = true,
	shouldCombine = false,
	lint = true,
	verbose = true,
	additionalPlugins = {},
	env = process.env.NODE_ENV ?? "development",
	...options
} = {}) => {
	const isProduction = env.toLowerCase() === "production";

	if (typeof options?.map === "undefined") {
		options.map = isProduction ? false : { inline: false };
	}

	const rootPath = __dirname;
	const outputFilepath = to ?? file;
	const relativePath = outputFilepath?.replace(rootPath, "");

	const outputFilename = outputFilepath ? basename(outputFilepath, ".css") : undefined;
	const pathParts = relativePath?.split(sep) ?? [];

	if (["themes", "spectrum", "express"].some(foldername => pathParts.includes(foldername)) || outputFilename === "index-theme") {
		splitinatorOptions.noSelectors = true;
	}

	if (outputFilename === "express" || pathParts.includes("express")) shouldCombine = true;

	if (outputFilename === "index-base") {
		splitinatorOptions.noFlatVariables = true;
	}

	if (pathParts.includes("bridge")) {
		splitinatorOptions.referencesOnly = true;
	}

	return {
		...options,
		plugins: {
			/* --------------------------------------------------- */
			/* ------------------- IMPORTS ---------------- */
			/** @link https://github.com/postcss/postcss-import#postcss-import */
			"postcss-import": resolveImports ? {} : false,
			/* --------------------------------------------------- */
			/* ------------------- SASS-LIKE UTILITIES ----------- */
			"postcss-extend": {},
			"postcss-hover-media-feature": {},
			"postcss-pseudo-classes": !isProduction ? {
				restrictTo: ["focus-visible", "focus-within", "hover", "active", "disabled"],
				allCombinations: true,
				preserveBeforeAfter: false,
				prefix: "is-"
			} : false,
			/* --------------------------------------------------- */
			/* ------------------- VARIABLE PARSING -------------- */
			"postcss-splitinator": {
				processIdentifier: (identifier) =>
					identifier === "express" ? "spectrum--express" : identifier,
				...splitinatorOptions,
			},
			"postcss-combininator": shouldCombine ? {
				newSelector: ".spectrum",
			} : false,
			...additionalPlugins,
			/* --------------------------------------------------- */
			/* ------------------- POLYFILLS --------------------- */
			/**
			 * @todo should we be documenting this for downstream users rather
			 * than polyfilling the features ourselves? what if they want to
			 * use a different support matrix?
			 *
			 * @note stage 2 (default); stage 4 === stable
			 * @link https://github.com/csstools/postcss-plugins
			 * @link https://preset-env.cssdb.org/features/#stage-2
			 */
			"postcss-preset-env": {
				stage: 2,
				env,
				features: {
					"custom-properties": true,
					"logical-properties-and-values": false,
					clamp: true,
					"color-functional-notation": true,
					"dir-pseudo-class": { preserve: true },
					"nesting-rules": { noIsPseudoSelector: true },
					// https://github.com/jsxtools/focus-within
					"focus-within-pseudo-class": true,
					"font-format-keywords": true,
					"opacity-percentage": true,
					// https://github.com/csstools/postcss-plugins/tree/main/plugins/css-prefers-color-scheme
					"prefers-color-scheme-query": true,
				},
			},
			/* --------------------------------------------------- */
			/* ------------------- ORGANIZE/DEDUPE --------------- */
			"at-rule-packer": {},
			cssnano: {
				preset: [
					"cssnano-preset-advanced",
					{
						colormin: false,
						reduceIdents: false,
						discardUnused: false,
						discardComments: {
							removeAll: true
						},
						// @todo yarn add -DW css-declaration-sorter
						cssDeclarationSorter: false, // @todo { order: "smacss" }
						normalizeWhitespace: isProduction,
					},
				],
			},
			/* --------------------------------------------------- */
			/* ------------------- REPORTING --------------------- */
			stylelint: {
				cache: true,
				// Passing the config path saves a little time b/c it doesn't have to find it
				configFile: join(__dirname, "stylelint.config.js"),
				quiet: !lint,
				fix: true,
				allowEmptyInput: true,
				ignorePath: join(__dirname, ".stylelintignore"),
				reportNeedlessDisables: lint,
				reportInvalidScopeDisables: lint,
			},
			"postcss-licensing": {
				filename: "COPYRIGHT",
				cwd: __dirname,
				skipIfEmpty: true,
			},
			"postcss-reporter": verbose
				? {
					clearAllMessages: true,
					noIcon: true,
				}
				: false,
		},
	};
};
