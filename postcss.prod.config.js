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

const path = require("path");

/**
 * @description This is the PostCSS config for our production code; this
 * includes assets in the **dist** output
 * @type import('postcss-load-config').ConfigFn
 */
module.exports = ({ file, to, map = false }) => {
	// Determine if this is a themes file
	const isTheme = file?.dirname?.split(path.sep)?.pop() === "themes" ? true : false;

	// Determine if this is a legacy or migrated build by checking for the tokens dependency
	const pkg = require(path.join(process.cwd(), "package.json"));
	const isLegacy = !pkg?.peerDependencies?.["@spectrum-css/tokens"];

	return {
		map,
		plugins: {
			"postcss-import": {},
			"postcss-sorting": {
				order: ["custom-properties", "declarations", "at-rules", "rules"],
				"properties-order": "alphabetical",
			},
			"postcss-combine-duplicated-selectors": {},
			/**
			 * @note Merges _adjacent_ rules only; hense the sorting is done first
			 */
			"postcss-merge-rules": {},
			"postcss-combine-media-query": {},
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
						noFlatVariables: !!(file?.basename === "index-base.css"),
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
			// "postcss-custom-properties-mapping": isLegacy && keepVars ? {} : false,
			"postcss-notnested":
				isLegacy ? { replaceWith: ".spectrum" } : false,
			"postcss-notnested": isLegacy ? {} : false,
			/**
			 * @note this is only running on updated components in the themes/express.css file
			 * it's somewhat heavy-handed as it will remove the previous selector
			 * @todo do we need this still?
			 */
			// "postcss-combininator": !isLegacy && isExpress ? {} : false,
			/** @todo where is this sourced from; might be able to remove in favor of preset-env **/
			"postcss-focus-ring": {},
			"postcss-preset-env": {
				/**
				 * @note stage 2 (default); stage 4 === stable
				 * @link https://preset-env.cssdb.org/features/#stage-2
				 */
				stage: 2,
			},
			"postcss-discard-comments": { removeAll: true },
			"postcss-discard-empty": {},
			/* Ensure the license is at the top of the file */
			"postcss-licensing": {
				filename: "COPYRIGHT",
				cwd: __dirname,
				skipIfEmpty: true,
			},
			"perfectionist": {
				format: "compact",
			},
			"postcss-reporter": {},
		},
	};
};
