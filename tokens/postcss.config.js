/*!
 * Copyright 2024 Adobe. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const { join } = require("path");

module.exports = () => ({
	plugins: {
		// "postcss-import": {},
		"postcss-rgb-mapping": {},
		"postcss-sorting": {
			order: ["custom-properties", "declarations", "at-rules", "rules"],
			"properties-order": "alphabetical",
		},
		cssnano: {
			preset: [
				"cssnano-preset-advanced",
				{
					colormin: false,
					discardComments: { removeAll: true },
					// @todo yarn add -DW css-declaration-sorter
					cssDeclarationSorter: false, // @todo { order: "smacss" },
					normalizeWhitespace: false,
				},
			],
		},
		stylelint: {
			cache: true,
			// Passing the config path saves a little time b/c it doesn't have to find it
			configFile: join(__dirname, "..", "stylelint.config.js"),
			quiet: true,
			fix: true,
			allowEmptyInput: true,
			ignorePath: join(__dirname, "..", ".stylelintignore"),
		},
		"postcss-licensing": {
			filename: "../COPYRIGHT",
		},
	},
});
