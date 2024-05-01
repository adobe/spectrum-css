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

const path = require("path");

module.exports = ({
	// cwd,
	// from,
	// to,
	// verbose,
	env = process.env.NODE_ENV ?? "development",
	options = {},
}) => {
	if (env === "development" && !options.map) {
		options.map = { inline: false };
	}
	else options.map = false;

	return {
		...options,
		plugins: {
			/* ------------------- IMPORTS ---------------- */
			/** @link https://github.com/postcss/postcss-import#postcss-import */
			"postcss-import": {},
			"postcss-rgb-mapping": {},
			"postcss-sorting": {
				order: ["custom-properties", "declarations", "at-rules", "rules"],
				"properties-order": "alphabetical",
			},
			/* Merges _adjacent_ rules only */
			"postcss-merge-rules": {},
			/* Combines all duplicated selectors */
			"postcss-combine-duplicated-selectors": {},
			/* Remove all duplicate copyrights and add a single one at the top */
			"postcss-discard-comments": {
				remove: (comment) => {
					return (
						["Copyright", "This file contains"].some((str) => comment.includes(str)) ||
						comment.trim() === ""
					);
				},
			},
			/* After cleaning up comments, remove all empty rules */
			"postcss-discard-empty": {},
			/* Ensure the license is at the top of the file */
			"postcss-licensing": {
				filename: path.dirname(__dirname, "../COPYRIGHT"),
				skipIfEmpty: true,
			},
			/* --------------------------------------------------- */
			/* ------------------- REPORTING --------------------- */
			stylelint: {
				cache: true,
				// Passing the config path saves a little time b/c it doesn't have to find it
				configFile: path.join(__dirname, "../stylelint.config.js"),
				quiet: true,
				allowEmptyInput: true,
				ignorePath: path.join(__dirname, "../.stylelintignore"),
				reportNeedlessDisables: true,
				reportInvalidScopeDisables: true,
			},
			"postcss-reporter": {
				clearAllMessages: true,
				noIcon: true,
			},
		},
	};
};
