/** @import { ExtractResult, CssPropsConfig } from '../types' */

import postcss from "postcss";
const parser = require("postcss-selector-parser");

/**
 * Get extracted Custom Property.
 * @param {import('postcss').Node} node
 * @param {CssPropsConfig} [options={}]
 * @returns {ExtractResult}
 */
export const getExtractedCustomProperty = (
	node,
	{
		prefix,
		ignoreSelectors = [],
		ignoreCustomProperties = [],
		ignoreMediaQueries = [],
	} = {},
) => {
	let key;

	// Find out if the key is a custom property.
	// @todo we should probably also gather data from used custom properties
	if (!(node.type === "decl" && node.prop.startsWith("--"))) return { key };


	// If a prefix is provided, check that the node.content starts with that string.
	if (prefix && ! node.prop.startsWith(prefix)) return { key };

	// If the key is in the ignore list, skip it.
	// Test using a regex if the key is in the ignore list.
	if (ignoreCustomProperties.some((regex) => regex.test(node.prop))) return { key };

	key = node.prop;
	const value = node.value.replace(/\n/g, " ").replace(/\s+/g, " ").trim();

	const result = [];

	// Determine what the selector is containing the custom property.
	parser((selectors => {
		selectors.each(selectorNode => {
			const selector = selectorNode.toString().trim();

			// If the selector is in the ignore list, skip it.
			if (ignoreSelectors.includes(selector)) return;

			let metadata = {
				selector,
				value,
			};

			// Find out if the node is within an at-rule.
			if (node.parent?.parent?.type === "atrule") {
				// If the at-rule is in the ignore list, skip it.
				if (ignoreMediaQueries.includes(node.parent.parent.params)) return;

				metadata.media = `@media ${node.parent.parent.params}`;
			}

			// Look for any comments that might provide context.
			if (node.prev() && node.prev().type === "comment" && node.prev().text.startsWith("@")) {
				// @todo handle multiline comments with more than 1 set of @key value pairs
				const commentType = node.prev().text.replace(/^@([a-z]+)\s.*/, "$1").trim();
				const commentContent = node.prev().text.replace(/^@([a-z]+)\s/, "").trim();

				if (commentType.toLowerCase().startsWith("ignore")) {
					return;
				}

				if (commentType.toLowerCase().startsWith("deprecate")) {
					metadata.isDeprecated = true;
				}

				metadata.description = commentContent;
			}

			result.push(metadata);
		});
	})).processSync(node.parent.selector);

	return { key, value: result };
};

/**
 * @param {string} content -- CSS styles to extract custom properties from.
 * @param {CssPropsConfig & import('postcss').ProcessOptions} options
 * @returns {ExtractResult}
 */
export const extract = (content, options) => {
	/** @type {import('postcss').ProcessOptions} */
	const postcssOptions = {
		map: false,
		...options
	};

	/** @type {import('postcss').Root} */
	const root = postcss.parse(content, postcssOptions);

	/**
	 * This object is keyed by custom property names and contains arrays of their values;
	 * for simple mode, the value is just the value string.
	 * for full mode, the value is an object containing the value string and any other relevant data
	 * such as the selector, media query, or name.
	 *
	 * @type {ExtractResult}
	 */
	let output = new Map();

	/* Fetch all declarations so we can being to extract custom properties */
	root.walkDecls((decl) => {
		const { key, value } = getExtractedCustomProperty(decl, options);
		if (!key) return;
		if (!value || value === "") return;

		let data = output.get(key) || [];

		if (Array.isArray(value)) data.push(...value);
		else data.push(value);

		output.set(key, data);
	});

	return [...output.entries()].sort().reduce((acc, [key, value]) => {
		acc[key] = value;
		return acc;
	}, {});
};

export const orderBySelector = (properties) => {
	return Object.entries(properties).reduce((acc, [key, props]) => {
		for (const { selector, value, media } of props) {

			const selectorProps = acc[selector] ?? {};

			if (media) {
				const mediaProps = selectorProps?.[media] ?? {};
				mediaProps[key] = value;
				selectorProps[media] = mediaProps;
			}
			else {
				selectorProps[key] = value;
			}

			acc[selector] = selectorProps;
		}

		return acc;
	}, {});
};
