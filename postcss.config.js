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

// const path = require("path");
// const fg = require("fast-glob");

module.exports = ({
	// cwd, parser, stringifier, syntax, from, to,
	from,
	env = "development",
	map = { inline: true },
	isLegacy = false,
	keepVars = false,
	splitinatorOptions = {},
	// additionalPlugins = {},
	notNested = true,
	secondNotNested = true,
}) => {
	const isExpress = from && from.includes("express.css") ? true : false;

	/* This removes all copyright comments so we can add a single one at the top of the file */
	const commentsDenylist = ["This file contains"];

	// const vars =
	// 	require.resolve("@spectrum-css/vars/dist/spectrum-global.css") ??
	// 	path.resolve(__dirname, "components/vars/dist/spectrum-global.css");
	// const express =
	// 	require.resolve("@spectrum-css/expressvars/dist/spectrum-global.css") ??
	// 	path.resolve(__dirname, "components/expressvars/dist/spectrum-global.css");
	// const tokens =
	// 	require.resolve("@spectrum-css/tokens") ??
	// 	path.resolve(__dirname, "components/tokens/dist/index.css");

	return {
		map: env === "development" ? map : false,
		plugins: {
			// "@csstools/postcss-global-data": {
			// 	files: fg.sync(isLegacy ? (!isExpress ? vars : express) : tokens),
			// },
			"postcss-import": {},
			"postcss-combine-media-query": {},
			"postcss-remapvars": isLegacy ? {} : false,
			"postcss-nested": {},
			"postcss-splitinator": !isLegacy
				? {
						processIdentifier: (identifier) => {
							if (identifier === "express") {
								return "spectrum--express";
							}
							return identifier;
						},
						...splitinatorOptions,
				  }
				: false,
			"postcss-inherit": {},
			// @todo: 'postcss-advanced-variables': {},
			// @todo: 'postcss-each': {},
			"postcss-logical": isLegacy ? {} : false, // @todo can we drop this?
			"postcss-transform-logical": {},
			"postcss-dir-pseudo-class": isLegacy ? {} : false, // @todo can we drop this?
			// "postcss-custom-properties-passthrough": {},
			"postcss-calc": {},
			// "postcss-custom-properties-mapping": isLegacy && keepVars ? {} : false,
			"postcss-notnested":
				isLegacy && notNested ? { replace: ".spectrum" } : false,
			"postcss-svg": isLegacy ? {} : false,
			// this enables reporting or removal of unused variables in a file
			"postcss-dropunusedvars": !keepVars
				? {
						fix: isLegacy ? false : true,
				  }
				: false,
			"postcss-dropdupedvars": {}, // @todo this is a linting step, not a build step; should not merge with dupes
			"postcss-droproot": isLegacy ? {} : false, // @todo do we still need this?
			"postcss-focus-ring": {},
			...additionalPlugins,
			// "postcss-notnested": isLegacy && secondNotNested ? {} : false,
			"postcss-sorting": {
				order: ["custom-properties", "declarations", "at-rules", "rules"],
				"properties-order": "alphabetical",
			},
			/* Merges _adjacent_ rules only */
			"postcss-merge-rules": {},
			"postcss-combine-duplicated-selectors": {},
			"postcss-combininator": !isLegacy && isExpress ? {} : false,
			autoprefixer: {},
			// @todo migrate to preset-env
			// 'postcss-preset-env': {
			// 	browsers: [
			// 	  'last 2 Edge versions',
			// 	  'last 2 Chrome versions',
			// 	  'last 2 Firefox versions',
			// 	  'last 2 Safari versions',
			// 	  'last 2 iOS versions'
			// 	],
			// 	stage: 2,
			// 	features: {
			// 	  'nesting-rules': true,
			// 	},
			//   },
			"postcss-discard-comments": {
				//removeAll: true,
				remove: (comment) => {
					return (
						commentsDenylist.some((str) => comment.includes(str)) ||
						comment.trim() === ""
					);
				},
			},
			"postcss-discard-empty": {},
			/* Ensure the license is at the top of the file */
			"postcss-licensing": {
				filename: "COPYRIGHT",
				skipIfEmpty: true,
			},
			"postcss-reporter": {},
		},
	};
};
