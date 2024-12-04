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

module.exports = function ({ setName } = {}) {
	let selector = ".spectrum";

	const baseConfig = {
		format: "css/sets",
		options: {
			showFileHeader: false,
			outputReferences: true,
		},
	};

	if (!setName) {
		return {
			...baseConfig,
			destination: "global-vars.css",
			filter: (token) => !token.path.includes("sets"),
			options: {
				...baseConfig.options,
				selector,
			},
		};
	}

	const isGlobal = !setName;

	let scope =
		{
			desktop: "medium",
			mobile: "large",
		}[setName] ?? setName;

	if (isGlobal) scope = "global";
	selector = isGlobal ? ".spectrum" : `.spectrum--${scope}`;

	const getSets = (token) =>
		token.path.filter((_, idx, array) => array[idx - 1] == "sets");

	function filter(token) {
		// Fetch the sets for this token
		const tokenSets = getSets(token);

		if (tokenSets.includes("wireframe")) return false;

		if (!setName) {
			if (tokenSets.length === 0) {
				return true;
			}
		}
		else {
			if (!tokenSets.includes(setName)) return false;

			if (tokenSets.length === 1) {
				return true;
			}
		}

		return false;
	}

	return {
		...baseConfig,
		destination: `${scope}-vars.css`,
		filter,
		options: {
			...baseConfig.options,
			selector,
			sets: setName ? [setName] : [],
		},
	};
};
