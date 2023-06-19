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
const fg = require("fast-glob");

/**
 * @typedef {import('postcss-load-config').ConfigContext} ConfigContext
 * @typedef {import('postcss-load-config').Config} Config
 * @typedef {object} CustomOptions
 * @property {boolean} [isLegacy=false]
 * @property {boolean} [keepVars=true]
 * @property {boolean} [notNested=true]
 * @property {boolean} [secondNotNested=true]
 * @property {object} [splitinatorOptions={}]
 * @property {boolean} [splitinatorOptions.noFlatVariables=false]
 * @property {boolean} [splitinatorOptions.noSelectors=false]
 * @property {(identifierValue: string, identifierName?: string) => string} [splitinatorOptions.processIdentifier]
 * @property {(selector: string, property: string) => string} [splitinatorOptions.getName]
 */

/**
 * @type (ctx: ConfigContext & CustomOptions) => Config;
 */
module.exports = async ({
	// cwd, parser, stringifier, syntax,
	// to,
	from,
	env = "development",
	map,
	/* --- Begin custom config options --- */
	keepVars = true,
	// notNested = true,
	// secondNotNested = true,
	// splitinatorOptions = {},
	/* --- End custom config options --- */
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
	const pkg = rootDir
		? await fsp
				.readFile(path.join(rootDir, "package.json"))
				.then(JSON.parse)
				.catch(() => {})
		: {};
	const isLegacy = !pkg?.peerDependencies?.["@spectrum-css/tokens"];

	/* This removes all copyright comments so we can add a single one at the top of the file */
	// const commentsDenylist = ["Copyright", "This file contains"];

	/* If this is an express-specific file, we only need to load the express vars assets */
	const vars = !isExpress
		? require.resolve("@spectrum-css/vars/dist/spectrum-global.css") ??
		  path.resolve(__dirname, "components/vars/dist/spectrum-global.css")
		: require.resolve("@spectrum-css/expressvars/dist/spectrum-global.css") ??
		  path.resolve(
				__dirname,
				"components/expressvars/dist/spectrum-global.css"
		  );

	const tokens =
		require.resolve("@spectrum-css/tokens") ??
		path.resolve(__dirname, "components/tokens/dist/index.css");

	return {
		map: env === "development" ? map : false,
		plugins: {
			// "postcss-import": {},
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
			/** @note this provides access to the global variable data for checking use */
			"@csstools/postcss-global-data": {
				files: fg.sync(isLegacy ? vars : tokens),
			},
			/**
			 * @note this enables reporting or removal of unused variables in a file
			 * @todo this is a linting step, not a build step; should not remove vars
			 */
			"postcss-dropunusedvars": isLegacy && !keepVars ? { fix: false } : false,
			/**
			 * @note this enables reporting of unused variables in a file
			 * @todo can we flag this to do reporting only in the linter?
			 */
			"postcss-dropdupedvars": {},
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
