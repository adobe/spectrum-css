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

const fs = require("node:fs");
const { join, basename } = require("node:path");

module.exports = ({
	resolveImports = true,
	lint = true,
	verbose = true,
	minify = false,
	module = false,
	additionalPlugins = {},
	env = process.env.NODE_ENV ?? "development",
	cwd = process.cwd(),
	...options
} = {}) => {
	const isProduction = env.toLowerCase() === "production";

	if (typeof options?.map === "undefined") {
		options.map = isProduction ? false : { inline: false };
	}

	return {
		...options,
		plugins: {
			/* --------------------------------------------------- */
			/* ------------------- IMPORTS ---------------- */
			/** @link https://github.com/postcss/postcss-import#postcss-import */
			"postcss-import": resolveImports ? {
				resolve(id, basedir) {
					// Resolve these imports to the local components directory
					if (/^@spectrum-css\//.test(id)) {
						// Check if the package specifies a file or just the package name
						const packageParts = id.split("/");
						const filePath = packageParts.length > 2 ? packageParts.slice(2).join("/") : "index.css";

						if (packageParts[1] === "tokens") {
							return join(__dirname, packageParts[1], "dist", "css", filePath);
						}

						return join(__dirname, "components", packageParts[1], filePath);
					}

					return join(basedir, id);
				}
			} : false,
			/* --------------------------------------------------- */
			/* ------------------- LINTING ---------------- */
			// Linter needs to run before the minifier removes comments (such as the stylelint-ignore comments)
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
			/* --------------------------------------------------- */
			/* ------------------- SASS-LIKE UTILITIES ----------- */
			"postcss-extend": {},
			"postcss-pseudo-classes": !isProduction ? {
				restrictTo: ["focus-visible", "focus-within", "hover", "active", "disabled"],
				allCombinations: true,
				preserveBeforeAfter: false,
				prefix: "is-"
			} : false,
			"postcss-hover-media-feature": {},
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
							remove: (comment) => !comment.includes("stylelint-"),
						},
						// @todo yarn add -DW css-declaration-sorter
						cssDeclarationSorter: false, // @todo { order: "smacss" }
						normalizeWhitespace: minify || isProduction,
					},
				],
			},
			/* --------------------------------------------------- */
			/* ------------------- CLEAN-UP --------------------- */
			"postcss-licensing": {
				filename: "COPYRIGHT",
				cwd: __dirname,
				skipIfEmpty: true,
			},
			"postcss-modules": module ? {
				getJSON: (cssFileName, json) =>
					fs.writeFileSync(join(cwd, "dist", basename(cssFileName, ".css") + ".json"), JSON.stringify(json)),
				exportGlobals: true,
				generateScopedName: function (name) {
					const cleanClass = name.toLowerCase().replaceAll(/-/g, "_");
					return "_" + cleanClass;
				},
			} : false,
			/* --------------------------------------------------- */
			/* ------------------- REPORTING --------------------- */
			"postcss-reporter": verbose
				? {
					clearAllMessages: true,
					noIcon: true,
				}
				: false,
		},
	};
};
