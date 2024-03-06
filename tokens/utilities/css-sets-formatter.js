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
 * What do we want to do here
 *
 * For values that have a light and dark value, i.e.,
 * gray-50: { sets: { light: { value: rgb(255,255,255) }, dark: { value: rbg(29,29,29) } } }
 *
 * as a light-dark() value:
 * —-spectrum-gray-50: light-dark(rgb(255,255,255), rgb(29,29,29));
 *
 * under .spectrum or :root
 */
module.exports = {
	name: "css/sets",
	// dictionary -> keys: 'properties', 'allProperties', 'tokens', 'allTokens', 'getReferences', 'usesReference', '_properties'
	formatter: ({ dictionary, platform, _, options }) => {
		const isReferenceToken = (token) => typeof token === "string" && token.match(/^\{(\w+)\}$/);
		const cleanReferenceToken = (token) => token.replace(/\{|\}/g, '');
		const varAssembly = (token) => `var(--${platform.prefix ? `${platform.prefix}-` : ""}${cleanReferenceToken(token)})`;
		const lightDarkAssembly = (light, dark) => {
			if (light && dark) return `light-dark(${light}, ${dark})`;
			if (light) return light;
			return dark;
		}
		const valueFormatter = (key, token, config = {}) => {
			const { context } = config;

			/* We can't do anything without a token value */
			if (!token) return;

			/* If a path is present and the first value */
			if (token.path && token.path.length && token.path[0] !== key) {
				return varAssembly(token.path[0]);
			}

			/* Start by checking the original value */
			if (token.original) {
				if (isReferenceToken(token.original.ref)) {
					return varAssembly(token.original.ref);
				} else if (typeof token.original.value === "string") {
					return token.original.value;
				}
			}

			/* Next check the reference value if it exists */
			if (token.ref) {
				const processedValue = valueFormatter(key, token.ref, config);
				if (processedValue) return processedValue;
			}

			/* Check if the original values used a reference value */
			if (isReferenceToken(token.value)) {
				return varAssembly(token.value);
			} else if (typeof token.value === "string") {
				return token.value;
			}

			if (!token.sets) return;

			if (context && token.sets[context]) {
				const processedValue = valueFormatter(key, token.sets[context], config);
				if (processedValue) return processedValue;
			}

			if (!options.sets) return;

			for (const c of options.sets) {
				if (token.sets[c]) {
					const processedValue = valueFormatter(key, token.sets[c], config);
					if (processedValue) return processedValue;
				}
			}
		};

		const resultSet = new Map();

		Object.entries(dictionary.properties).forEach(([key, value]) => {
			const name = `${platform.prefix}-${key}`;
			const variants = value.sets ? Object.keys(value.sets) : [];

			if (variants.length) {
				if (["light", "dark"].some(c => variants.includes(c))) {
					const lightValue = valueFormatter(key, value.sets.light, { context: 'light' });
					const darkValue = valueFormatter(key, value.sets.dark, { context: 'dark' });

					let assignedValue;
					// If the light & dark values are the same, just use the first value
					if (typeof lightValue !== "undefined" && lightValue === darkValue) {
						assignedValue = lightValue;
					} else {
						assignedValue = lightDarkAssembly(lightValue, darkValue);
					}

					if (assignedValue) resultSet.set(name, assignedValue);

					return;
				}

				variants.forEach(v => {
					const processedValue = valueFormatter(key, value, { context: v });
					if (processedValue) resultSet.set(name, processedValue);
				});
			}

			/* No variants */
			const processedValue = valueFormatter(value);
			if (processedValue) resultSet.set(name, processedValue);
		});

		const resultList = [];
		resultSet.forEach((value, key) => {
			// Just add it to the result list
			if (typeof value === "string") {
				resultList.push(`--${key}: ${value}`);
			} else {
				resultList.push(`--${key}: ${lightDarkAssembly(value.light, value.dark)}`);
			}
		});

		const selector = options.selector ? options.selector : ":root";
		console.log({ selector, options });

		return `${selector} {\n  ${resultList.join(`;\n  `)}\n}\n`;
	},
};
