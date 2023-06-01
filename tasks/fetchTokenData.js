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

/** @todo Can this be converted to a postcss plugin? */

const postcss = require("postcss");
const valueParser = require("postcss-value-parser");

/**
 * @typedef {string} TokenCategory - the category of the token
 *
 * @typedef {string} Token - the name of the token
 *
 * @typedef {{ [key: TokenCategory]: Map<Token, { fallback: (Token|string)[], file: import('path').PathLike, selector: string }[]> }} TokenMetadata
 *
 * @typedef {Map<TokenCategory, (string|RegExp)[]>} BucketConfig - the rules for assigning tokens to the buckets
 */

/**
 * Determine if a provided node is a var function
 * @param {import('postcss-value-parser').Node} node - the node to check
 * @returns {boolean} - true if the node is a var function
 */
const isVarFunc = (node) =>
	Boolean(node && node.type === "function" && node.value === "var");

/**
 * Determine if a provided string is a token
 * @param {string} str - the string to check
 * @returns {boolean} - true if the node is a token string
 */
const isToken = (str) => Boolean(str && str.startsWith("--"));

/**
 * Determine if a provided string contains a var function
 * @param {string} str - the string to check
 * @returns {boolean} - true if the string contains a var function
 */
const hasToken = (str) => Boolean(str && str.match(/var\(--/));

/**
 * Fetches the custom property details from provided CSS content;
 * content is broken down into user-defined buckets
 * @param {string} content - the CSS content
 * @param {BucketConfig} bucketConfig - the rules for assigning tokens to the buckets
 * @param {TokenMetadata} ret - an optional object to add the token metadata to
 * @returns {TokenMetadata}
 */
module.exports = function (
	content,
	bucketConfig,
	ret = undefined,
	{ from } = {}
) {
	if (!content) return;

	/* If no bucket config is provided, return; we can't process the CSS without categories */
	if (!bucketConfig) return;

	/**
	 * Initialize the return object; each bucket will be a map keyed by the token name, the value,
	 * is an array of objects containing the fallbacks, selector, and file where the token is used.
	 * @type TokenMetadata
	 */
	ret =
		ret ??
		[...bucketConfig.keys()].reduce(
			(acc, key) => ({ ...acc, [key]: new Map() }),
			{}
		);

	/**
	 * Parse the token and determine which bucket to put it in
	 * @param {string} token - the token to parse
	 * @returns {string|undefined} - the bucket key or undefined if no match
	 */
	const getBucketKey = (token) => {
		if (!token || typeof token !== "string") return;
		const bucketName = [...bucketConfig.keys()].find((key) => {
			const regexes = bucketConfig.get(key) ?? [];
			if (!key || regexes.length === 0) return false;
			return regexes.reduce((acc, regex) => {
				if (token.match(regex)) return true;
				return acc;
			}, false);
		});
		if (!bucketName) return;
		return bucketName;
	};

	/**
	 * Need a function to parse the token and determine which bucket to put it in.
	 * @param {Token} token - the token to which the value is assigned
	 * @param {{ selector: string, file: import('path').PathLike, fallback: Token|Token[] }} args - the selector and file where the token is defined
	 * @returns {boolean} - true if the token was added to the bucket
	 */
	const addToBucket = (token, settings = {}) => {
		let key;
		if (!isToken(token) || !(key = getBucketKey(token))) return false;

		// Can't add a value to a bucket if the key or token is missing
		if (!key || !token) return false;

		/* Add to the bucket if it does not yet contain the token */
		if (!ret[key].has(token)) {
			ret[key].set(token, [settings]);
			return true;
		}

		/* If the token already exists, merge the data */
		const argsArray = ret[key].get(token);
		for (const args of argsArray) {
			/* Validate that the objects are identical */
			const shouldUpdate = Object.entries(args)
				.map(([k, v]) => {
					if (settings[k] !== v) return true;
					return false;
				})
				.every((bool) => bool === true);

			if (!shouldUpdate) continue;

			/* Add the value to the list of values */
			ret[key].set(token, [...argsArray, settings]);
			return true;
		}

		return false;
	};

	// If a property matches one of the regex, it should always be first in the stack.
	postcss.parse(content, { from }).walkRules((rule) => {
		rule.walkDecls((decl) => {
			/* If the declaration does not contain a token, no need to process */
			if (!isToken(decl.prop) && !hasToken(decl.value)) return;

			/**
			 * Start by checking if the property is a token and if it matches a defined bucket
			 * Note the inline variable assignment for key; this both:
			 * 1. checks if the token belongs in one of the user-provided buckets
			 * 2. captures the bucket key for use inside the loop
			 */
			// @todo should I pre-parse the value into fallbacks or do that in the addToBucket function?
			const foundMatch = addToBucket(decl.prop, {
				selector: rule.selector,
				file: decl.source.input.file,
				fallback: decl.value,
			});

			if (foundMatch) return;

			// Stop processing if there was no match for the property and there are no tokens in the value
			if (!hasToken(decl.value)) return;

			// Next we walk the assigned values to see if any of them are/contains tokens
			valueParser(decl.value).walk((node) => {
				if (!isVarFunc(node)) return;
				let value;
				if (node.nodes.length > 1) {
					const foundNode = node.nodes
						.slice(1)
						?.find((n) => n.type === "word" || isVarFunc(n));
					if (foundNode) value = valueParser.stringify(foundNode);
				}

				if (!isToken(node.nodes[0].value)) return;

				addToBucket(node.nodes[0].value, {
					selector: rule.selector,
					file: decl.source.input.file,
					fallback: value,
				});
			});
		});
	});

	/* Sort the buckets alphabetically */
	for (const key of Object.keys(ret)) {
		ret[key] = new Map([...ret[key]].sort());
	}

	return ret;
};
