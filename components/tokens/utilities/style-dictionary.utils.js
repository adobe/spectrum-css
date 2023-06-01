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

module.exports = function ({ setName, subSystemName } = {}) {
	const baseConfig = {
		format: "css/sets",
		options: {
			showFileHeader: false,
			outputReferences: true,
		},
	};

	const sets = [setName, subSystemName].filter(Boolean);
	if (!sets.length) {
		return {
			...baseConfig,
			destination: "global-vars.css",
			filter: (token) => !token.path.includes("sets"),
			options: {
				...baseConfig.options,
				selector: ".spectrum",
			},
		};
	}

	const isGlobal = !setName;
	const isSpectrum = subSystemName && subSystemName === "spectrum";

	let selector = "";
	if (isGlobal || (subSystemName && !isSpectrum)) {
		// postfix the selector with the subsystem name
		selector = `.spectrum${
			subSystemName && !isSpectrum ? `--${subSystemName}` : ""
		}`;
	}

	let scope =
		{
			desktop: "medium",
			mobile: "large",
		}[setName] ?? setName;

	if (isGlobal) scope = "global";
	else if (setName && scope) {
		selector += `.spectrum--${scope}`;
	}

	const selectors = [
		selector ?? null,
		// Apply all light colors as lightest for backwards compat
		// @todo does this need a deprecation notice?
		setName === "light" ? selector.replace("light", "lightest") : null,
	].filter(Boolean);

	const getSets = (token) =>
		token.path.filter((_, idx, array) => array[idx - 1] == "sets");

	function filter(token) {
		// Fetch the sets for this token
		const tokenSets = getSets(token);

		if (tokenSets.includes("wireframe")) return false;

		if (!setName) {
			if (!subSystemName && tokenSets.length === 0) {
				return true;
			}

			if (
				subSystemName &&
				tokenSets.length === 1 &&
				tokenSets.includes(subSystemName)
			) {
				return true;
			}
		} else {
			if (!tokenSets.includes(setName)) return false;

			if (!subSystemName && tokenSets.length === 1) {
				return true;
			}

			if (
				subSystemName &&
				tokenSets.length === 2 &&
				tokenSets.includes(subSystemName)
			) {
				return true;
			}
		}

		return false;
	}

	return {
		...baseConfig,
		destination: `${subSystemName ? `${subSystemName}/` : ""}${scope}-vars.css`,
		filter,
		options: {
			...baseConfig.options,
			selector: selectors.join(", "),
			sets,
		},
	};
};
