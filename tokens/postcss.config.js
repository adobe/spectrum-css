/*!
 * Copyright 2023 Adobe. All rights reserved.
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

// const path = require("path");

module.exports = () => ({
	plugins: {
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
					cssDeclarationSorter: false, // @todo { order: "smacss" }
				},
			],
		},
		"postcss-licensing": {
			filename: "../COPYRIGHT",
		},
	},
});
