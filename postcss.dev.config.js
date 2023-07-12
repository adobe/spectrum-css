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
const path = require("path");
const fg = require("fast-glob");

/**
 * @description This is the PostCSS config for our development code; this
 * includes assets **not** in the dist output, such as index.css or themes/*.css
 * @type import('postcss-load-config').ConfigFn
 */
module.exports = async ({ from, env = "development", map = { inline: true } }) => {
	// An array of folders to the from filepath
	const fromPath = (from && path.dirname(from).split(path.sep)) ?? [];

	// Determine if this is a themes file
	const isTheme = fromPath[fromPath.length - 1] === "themes" ? true : false;

	// Determine if this is an express file within themes
	const isExpress = isTheme && from.endsWith("express.css");

	// Determine if this is a legacy or migrated build by checking for the tokens dependency
	const componentIdx = fromPath.findIndex((dir) => dir === "components");

	// This fetches the name of the component folder
	const rootPath = componentIdx >= 0 ? fromPath.slice(0, componentIdx + 2) : process.cwd().split(path.sep);

	const pkgContent = readFileSync(path.join(rootPath.join(path.sep), "package.json"));
	const pkg = pkgContent ? JSON.parse(pkgContent) : {};
	const isLegacy = !pkg?.peerDependencies?.["@spectrum-css/tokens"];

	/* If this is an express-specific file, we only need to load the express vars assets */
	const vars = !isExpress
		? require.resolve("@spectrum-css/vars/dist/spectrum-global.css")
		: require.resolve("@spectrum-css/expressvars/dist/spectrum-global.css");

	const tokens = require.resolve("@spectrum-css/tokens");

	return {
		map: env === "development" ? map : false,
		plugins: {
			"postcss-sorting": {
				order: ["custom-properties", "declarations", "at-rules", "rules"],
				"properties-order": "alphabetical",
			},
			"postcss-combine-duplicated-selectors": {},
			/** @note Merges _adjacent_ rules only; hense the sorting is first */
			"postcss-merge-rules": {},
			"postcss-combine-media-query": {},
			/** @note this provides access to the global variable data for checking use */
			"@csstools/postcss-global-data": {
				files: fg.sync(isLegacy ? vars : tokens),
			},
			/** @note this enables reporting of unused variables in a file */
			"postcss-dropdupedvars": {
				lint: true,
			},
			"postcss-discard-empty": {},
			/* Ensure the license is at the top of the file */
			"postcss-licensing": {
				filename: "COPYRIGHT",
				cwd: __dirname,
				skipIfEmpty: true,
			},
			"perfectionist": {
				format: "expanded",
			},
			"postcss-reporter": {},
		},
	};
};
