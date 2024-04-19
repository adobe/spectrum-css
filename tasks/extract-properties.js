/*!
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const postcss = require("postcss");
const parser = require("postcss-value-parser");
const tokens = require("@adobe/spectrum-tokens/dist/json/variables.json");

const globalRegex = /--spectrum-((-?\w+)+)/g;

const cacheMap = new Map();

const getNestedContext = (data, contexts = {}) => {
	if (!data) return;
	if (typeof data === "string") return data;
	if (data?.value) return data.value;
	if (data?.sets) {
		const { context, theme, scale } = contexts;
		if (data?.sets?.[context]) return getNestedContext(data?.sets?.[context], contexts);
		if (data?.sets?.[theme]) return getNestedContext(data?.sets?.[theme], contexts);
		if (data?.sets?.[scale]) return getNestedContext(data?.sets?.[scale], contexts);
	}
	return;
};

const checkTokens = (key, { context = "spectrum", theme = "light", scale = "desktop", verbose = true } = {}) => {
	if (!key) return;
	// Side-step the tokens object if we have a cache hit
	if (cacheMap.has(`--spectrum-${key}`)) return cacheMap.get(`--spectrum-${key}`);

	// No tokens object? We can't do anything more
	if (!tokens) return;

	// Remove any leading -- from the key
	if (key.startsWith("--")) key = key.replace("--", "");

	// No token data for this key? We can't do anything more
	if (!tokens[key]) return;
	// @todo need a way to capture the description and/or different contexts
	const found = getNestedContext(tokens[key], { context, theme, scale });
	if (found) {
		// Is this a nested token?
		if (found.includes("--")) {
			if (verbose) console.log({ key, found });
			const check = walkValue(found);
			if (verbose) console.log(check);
		}
		// Found a result, cache it for later to avoid re-processing
		cacheMap.set(`--spectrum-${key}`, found);
		return found;
	}
	if (verbose) console.log("⚠️ No value found for ", key);
	return;
};

// Remove any newlines or tabs from the value
const cleanValue = (value) => value.replace(/[\n|\t]/g, "");

const walkValue = (value, { verbose = true } = {}) => {
	let foundKey;
	let foundValue = "";
	let foundDescription = value;
	// This will walk the values with the var function resolution first, working backwards through the function
	parser(value).walk((node) => {
		// We are looking for var functions
		if (node.type !== "function" || node.value !== "var") return;

		// Iterate over the nodes inside the var function
		node.nodes.forEach((child, _, arr) => {
			if (child.type !== "word") return;
			if (!child.value.startsWith("--")) return;

			// Check if the value is a reference to another token
			// Start by checking the cache
			if (cacheMap.has(child.value)) {
				const result = walkValue(cacheMap.get(child.value), { verbose });
				console.log(result, cacheMap.get(child.value));
				if (result.foundValue) {
					foundValue = result.foundValue;
				}
			}
			else {
				// Check the tokens object
				const v = checkTokens(child.value);
				console.log({v});
				if (v) {
					foundValue = walkValue(v, { verbose });
				}
			}

			// Update the value in the array
			if (foundValue) {
				console.log({foundValue});
				arr.push({ type: "div", value: "," }, { type: "word", value: foundValue });
			}
		});

		value = parser.stringify(node);
		console.log({value});
	});

	return { foundKey, foundValue, foundDescription };
};

/**
 * This regex will find all the custom properties that start with --mod-
 * and are defined inside a var() function. The last capture group will
 * ignore any mod properties that are followed by a colon, to exclude
 * sub-component passthrough properties that should not be listed as mods.
 * @param {string} content
 * @param {RegExp} [regex=]
 * @returns Set<string>
 */
async function extractProperties(
	content,
	regex = /(--mod-(?:\w|-)+)(?!:|\w|-)/g,
	{ verbose = true } = {},
) {
	const data = {};
	if (!content) return data;

	const parsedContent = postcss.parse(content);

	// Cache all the custom properties to be used later
	// @todo, need a way to resolve tokens inside functions
	parsedContent.walkDecls(/^--/, (decl) => {
		const value = decl.value;
		// Is this a nested token?
		if (value.includes("--")) {
			if (verbose) console.log({ prop: decl.prop, value });
			const check = walkValue(value);
			if (verbose) console.log(check);
		}
		// @todo should I try to resolve this value against tokens now?
		cacheMap.set(decl.prop, value);

		// If the value is a reference to another token, cache that too
		if (value.includes("var(")) {
			// Check for any references to core tokens
			[...value.matchAll(globalRegex)].forEach((key) => {
				if (!key || !key[1]) return;
				// If the token is a reference to another token, cache both
				checkTokens(key[1]);
			});
		}
	});

	// Find all the custom properties that match the regex
	parsedContent.walkDecls((decl) => {
		let foundKey, foundValue, foundDescription;

		// Start by checking the value of the declaration
		if (regex.test(decl.value)) {
			const result = walkValue(decl.value);
			if (result.foundKey) foundKey = result.foundKey;
			if (result.foundValue) foundValue = result.foundValue;
			if (result.foundDescription) foundDescription = result.foundDescription;
		}
		// Next check the property name
		else if (
			regex.test(decl.prop) &&
            !Object.keys(data).includes(decl.prop.replace("--", ""))
		) {
			foundKey = decl.prop.replace("--", "");
			foundValue = cleanValue(decl.value);
		}

		if (!foundKey) return;

		if (foundValue) {
			// Clean up any newlines or tabs
			foundValue = cleanValue(foundValue);

			// Check if the value is a reference to another token
			[...foundValue.matchAll(globalRegex)].forEach((key) => {
				if (!key || !key[1]) return;
				const v = checkTokens(key[1]);
				if (v) {
					foundDescription = foundValue;
					foundValue = v;
				}
			});

			if (foundValue.startsWith("--")) {
				if (verbose) console.log(foundValue, cacheMap.get(foundValue));

				// Che	ck the rest of the content for the actual value
				parsedContent.walkDecls(foundValue, (decl) => {
					let v = cleanValue(decl.value);
					if (v && v.includes("var")) {
						foundDescription = v;
						foundValue = checkTokens(cleanValue(decl.value));
					}
					else {
						foundValue = v;
					}
				});
			}
		}

		if (!data[foundKey]) {
			data[foundKey] = {
				value: foundValue,
				description: foundDescription,
				control: foundKey.includes("color") ? "color" : "text",
			};
		}
	});

	// Replace any references to other tokens
	Object.entries(data).forEach(([key, { value }]) => {
		if (!value) return;
		if (!value.startsWith("--")) return;
		if (data[value.replace("--", "")]) {
			data[key].value = data[value.replace("--", "")].value;
		}
	});

	return data;
}

module.exports = { extractProperties };
