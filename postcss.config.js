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

const fsp = require("fs").promises;
const path = require("path");
// const fg = require("fast-glob");

module.exports = ({
	// cwd, parser, stringifier, syntax,
	to,
	from,
	env = "development",
	map,
	/* --- Begin custom config options --- */
	keepVars = true,
	notNested = true,
	secondNotNested = true,
}) => {
	map = map ?? env === "development" ? { inline: true } : false;

	// An array of folders to the from filepath
	const fromPath = from ? path.dirname(from)?.split(path.sep) : [];

	// Determine if this is a themes file
	const isTheme = fromPath?.pop() === "themes" ? true : false;

	// Determine if this is an express file within themes
	const isExpress =
		isTheme && from && from.endsWith("express.css") ? true : false;

	// Determine if this is a legacy or migrated build by checking for the tokens dependency
	const componentIdx = fromPath?.findIndex((dir) => dir === "components");
	const rootDir =
		componentIdx && fromPath ? fromPath[componentIdx + 1] : process.cwd();
	const pkg = rootDir ? require(path.join(process.cwd(), "package.json")) : {};
	const isLegacy = !pkg?.peerDependencies?.["@spectrum-css/tokens"];

	/* This removes all copyright comments so we can add a single one at the top of the file */
	const commentsDenylist = ["Copyright", "This file contains"];

	/* If this is an express-specific file, we only need to load the express vars assets */
	// const vars = !isExpress
	// 	? require.resolve("@spectrum-css/vars/dist/spectrum-global.css") ??
	// 	  path.resolve(__dirname, "components/vars/dist/spectrum-global.css")
	// 	: require.resolve("@spectrum-css/expressvars/dist/spectrum-global.css") ??
	// 	  path.resolve(
	// 			__dirname,
	// 			"components/expressvars/dist/spectrum-global.css"
	// 	  );

	// const tokens =
	// 	require.resolve("@spectrum-css/tokens") ??
	// 	path.resolve(__dirname, "components/tokens/dist/index.css");

	return {
		map,
		plugins: {
			"postcss-import": {},
			/** @todo should this be run on uncommitted code? */
			// "postcss-sorting": {
			// 	order: ["custom-properties", "declarations", "at-rules", "rules"],
			// 	"properties-order": "alphabetical",
			// },
			/** @todo should this be run on uncommitted code? */
			// "postcss-combine-duplicated-selectors": {},
			/**
			 * @todo should this be run on uncommitted code?
			 * @note Merges _adjacent_ rules only; hense the sorting is done first
			 */
			// "postcss-merge-rules": {},
			/** @todo should this be run on uncommitted code? */
			// "postcss-combine-media-query": {},
			/** @note this provides access to the global variable data for checking use */
			// "@csstools/postcss-global-data": {
			// 	files: fg.sync(isLegacy ? vars : tokens),
			// },
			/** @todo remove after migrated: clearbutton, menu, table, tabs, treeview */
			"postcss-remapvars": isLegacy ? {} : false,
			/**
			 * @note only used in migrated builds
			 *
			 * @todo could this be broken out into smaller, focused plugins?
			 *
			 * @note processIdentifier: this functions as a kind of style query polyfill
			 * @example @\container (--spectrum: express) -> .spectrum--express
			 * @todo need to convert to @\container style (...) syntax
			 * @link https://blog.logrocket.com/new-css-style-queries/
			 * @link https://developer.chrome.com/blog/style-queries/
			 *
			 * @note noFlatVariables: used for dist/index-base.css
			 * @note noSelectors: used for themes/*.css
			 */
			"postcss-splitinator": !isLegacy
				? {
						processIdentifier: isTheme
							? (identifierValue, identifierName) => {
									if (identifierName !== "system") return;
									if (identifierValue !== "spectrum") {
										return `spectrum--${identifierValue}`;
									}
									return identifierValue;
							  }
							: undefined,
						noSelectors: !!isTheme,
						noFlatVariables: !!(path.basename(to) === "index-base.css"),
				  }
				: false,
			/** @note inherit: used in *button, icon, modal, picker, popover, quickaction, table, tooltip, underlay */
			"postcss-inherit": {},
			/**
			 * @note custom plugin to transform transforms; might just hardcode these in future
			 * @used accordion, actionbutton, assetlist, breadcrumb, calendar, menu, pagination, slider, treeview (9 files)
			 **/
			"postcss-transform-logical": {},
			// "postcss-custom-properties-passthrough": {},
			/** @todo might be able to remove this; not sure it's doing anything */
			// "postcss-calc": {},
			// "postcss-custom-properties-mapping": isLegacy && keepVars ? {} : false,
			"postcss-notnested":
				isLegacy && notNested ? { replaceWith: ".spectrum" } : false,
			/**
			 * @note this enables reporting or removal of unused variables in a file
			 * @todo this is a linting step, not a build step; should not remove vars
			 */
			"postcss-dropunusedvars": !isLegacy || !keepVars ? { fix: true } : false,
			/**
			 * @note this enables reporting or removal of unused variables in a file
			 */
			"postcss-dropdupedvars": {},
			"postcss-notnested": isLegacy && secondNotNested ? {} : false,
			/**
			 * @note this is only running on updated components in the themes/express.css file
			 * it's somewhat heavy-handed as it will remove the previous selector
			 * @todo do we need this still?
			 */
			// "postcss-combininator": !isLegacy && isExpress ? {} : false,
			/** @note this is the legacy nesting utility; swap this out for the preset-env nesting (closer to spec) */
			"postcss-nested": {},
			/**
			 * @todo where is this sourced from; might be able to remove in favor of preset-env
			 **/
			"postcss-focus-ring": {},
			"postcss-preset-env": {
				/**
				 * @note stage 2 (default); stage 4 === stable
				 * @link https://preset-env.cssdb.org/features/#stage-2
				 */
				stage: 2,
				/** @link https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env/FEATURES.md */
				features: {
					/**
					 * @note this is in stage 2 so we have to toggle it off until todo is resolved
					 * @todo migrate from postcss-nested to this instead; requires code updates
					 **/
					"nesting-rules": false,
				},
			},
			"postcss-discard-comments": {
				removeAll: true,
				// remove: (comment) => {
				// 	return (
				// 		commentsDenylist.some((str) => comment.includes(str)) ||
				// 		comment.trim() === ""
				// 	);
				// },
			},
			"postcss-discard-empty": {},
			/* Ensure the license is at the top of the file */
			"postcss-licensing": {
				filename: "COPYRIGHT",
				cwd: __dirname,
				skipIfEmpty: true,
			},
			"postcss-reporter": {},
		},
	};
};
