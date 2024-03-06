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

/**
 *
 * @param {{}} config
 * @param {"desktop"|"mobile"} config.scale
 * @param {"spectrum"|"express"} config.theme
 * @returns {import('style-dictionary').File}
 */
module.exports = function ({ color, scale, theme } = {}) {
	const isSpectrum = !theme || (theme && theme === "spectrum");
	const isScale = scale && ["desktop", "mobile"].some(context => scale === context);
	const isColor = color && ["light", "dark"].some(context => color === context);

	const selectors = [];
	let selector = ".spectrum";

	let scope;
	if (isScale) {
		scope =
			{
				desktop: "medium",
				mobile: "large",
			}[scale];

		if (scope === "medium") selectors.push(selector);
		selector += `.spectrum--${scope}`;
	}

	if (isColor) {
		scope = color;

		if (scope === "light") selectors.push(selector);
		selector += `.spectrum--${scope}`;
	}

	// postfix the selector with the subsystem name
	if (isSpectrum) {
		selectors.push(selector);
	}  else {
		selector += `.spectrum--${theme}`;
		selectors.push(selector);
	}

	// Returns true if the token should be included in the rendered data set
	function filter({ path }) {
		// Fetch the sets for this token
		const tokenSets = path.filter((_, idx, array) => array[idx - 1] == "sets");

		if (tokenSets.includes("wireframe")) return false;

		/* Lightest and darkest values are deprecated */
		if (["lightest", "darkest"].some(color => tokenSets.includes(color))) return false;

		if (!scale && !color) {
			if (!theme && !["spectrum", "express"].some(t => tokenSets.includes(t))) return true;
			if (theme && tokenSets.includes(theme)) return true;
		} else if (color) {
			if (!tokenSets.includes(color)) return false;
			if (!theme && !["spectrum", "express"].some(t => tokenSets.includes(t))) return true;
			if (theme && tokenSets.includes(theme)) return true;
		}  else {
			if (!tokenSets.includes(scale)) return false;
			if (!theme && !["spectrum", "express"].some(t => tokenSets.includes(t))) return true;
			if (theme && tokenSets.includes(theme)) return true;
		}

		return false;
	}

	let destination = "global-vars.css";
	if (theme && scope) destination = `${theme}/${scope}-vars.css`;
	else if (scope) destination = `${scope}-vars.css`;
	else if (color) destination = `${color}-vars.css`;
	else if (theme) destination = `${theme}/global-vars.css`;

	return {
		format: "css/sets",
		options: {
			showFileHeader: false,
			outputReferences: true,
			selector: selectors.join(", "),
			sets: [scale, theme].filter(Boolean),
		},
		destination,
		filter,
	};
};
