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

const { join, sep, basename } = require("path");

module.exports = ({
	file,
	cwd,
	to,
	splitinatorOptions = {
		noSelectors: false,
		noFlatVariables: false,
		// @todo strip out all but the references to --system- variables
		// NOT --system- definitions, only references
		referencesOnly: false,
	},
	combine = false,
	lint = true,
	verbose = true,
	additionalPlugins = {},
	env = process.env.NODE_ENV ?? "development",
	...options
} = {}) => {
	const rootPath = __dirname;
	const outputFilepath = to ?? file;
	const relativePath = outputFilepath?.replace(rootPath, "");
	const outputFilename = outputFilepath ? basename(outputFilepath, ".css") : undefined;
	const pathParts = relativePath?.split(sep) ?? [];

	const isBridge = pathParts.includes("bridge");
	const isTheme = ["themes", "spectrum", "express"].some(foldername => pathParts.includes(foldername)) || outputFilename === "index-theme";
	const isExpress = outputFilename === "express" || pathParts.includes("express");

	if (env === "development" && !options.map) {
		options.map = { inline: false };
	}
	else options.map = false;

	if (isTheme) {
		splitinatorOptions.noSelectors = true;
	}

	if (isExpress) {
		combine = true;
	}

	if (outputFilename === "index-base") {
		splitinatorOptions.noFlatVariables = true;
	}

	if (isBridge) {
		splitinatorOptions.referencesOnly = true;
	}

	/*
		This deconstruction has to do with how options are passed
		to the postcss config via storybook
	*/
	if (cwd && cwd.endsWith(".storybook")) {
		additionalPlugins = {
			...additionalPlugins,
			"postcss-pseudo-classes": {
				restrictTo: ["focus-visible", "focus-within", "hover", "active", "disabled"],
				allCombinations: true,
				preserveBeforeAfter: false,
				prefix: "is-"
			},
		};
	}

	return {
		...options,
		plugins: {
			/* --------------------------------------------------- */
			/* ------------------- IMPORTS ---------------- */
			/** @link https://github.com/postcss/postcss-import#postcss-import */
			"postcss-import": {},
			/* --------------------------------------------------- */
			/* ------------------- SASS-LIKE UTILITIES ----------- */
			"postcss-extend": {},
			"postcss-hover-media-feature": {},
			/* --------------------------------------------------- */
			/* ------------------- VARIABLE PARSING -------------- */
			"postcss-add-theming-layer": {
				processIdentifier: (identifier) =>
					identifier === "express" ? "spectrum--express" : identifier,
				...splitinatorOptions,
			},
			"postcss-property-rollup": combine ? {} : false,
			"postcss-sorting": {
				order: ["custom-properties", "declarations", "at-rules", "rules"],
				"properties-order": "alphabetical",
			},
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
					"logical-properties-and-values": false,
					clamp: true,
					"color-functional-notation": true,
					"dir-pseudo-class": { preserve: true },
					"nesting-rules": { noIsPseudoSelector: true },
					// "focus-visible-pseudo-class": true,
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
						discardComments: { removeAll: true },
						// @todo yarn add -DW css-declaration-sorter
						cssDeclarationSorter: false, // @todo { order: "smacss" }
						normalizeWhitespace: false,
					},
				],
			},
			"postcss-licensing": {
				filename: "./COPYRIGHT",
			},
			/* --------------------------------------------------- */
			/* ------------------- REPORTING --------------------- */
			stylelint: lint
				? {
					cache: true,
					// Passing the config path saves a little time b/c it doesn't have to find it
					configFile: join(__dirname, "stylelint.config.js"),
					quiet: !verbose,
					allowEmptyInput: true,
					ignorePath: join(__dirname, ".stylelintignore"),
					reportNeedlessDisables: true,
					reportInvalidScopeDisables: true,
				}
				: false,
			"postcss-reporter": verbose
				? {
					clearAllMessages: true,
					noIcon: true,
				}
				: false,
		},
	};
};
