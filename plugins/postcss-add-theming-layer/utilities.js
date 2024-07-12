/*!
 * Copyright 2024 Adobe. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at <http://www.apache.org/licenses/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const valuesParser = require("postcss-values-parser");

/**
 * Clean the property name to be used as a variable name
 * @param {string} prop
 * @param {{ selectorPrefix: string }} options
 * @returns {string} The clean variable name
 */
function cleanPropertyName(prop, { selectorPrefix = "" } = {}) {
	if (!prop) return;
	return (
		prop
			// Remove the provided prefix if used
			.replace(new RegExp(selectorPrefix, "gi"), "")
			// Remove mod from the new property name
			.replace(/-?mod-/g, "-")
			// Remove state-based prefix
			.replace(/is-/g, "")
			// Remove the internal identifier marker
			.replace(/^_/g, "")
			// If a string has a lowercase letter followed by an uppercase letter, insert a dash between them
			.replace(/([a-z])([A-Z])/g, "$1-$2")
			// If a string has two uppercase letters followed by a lowercase letter, insert a dash between them
			.replace(/([A-Z])([A-Z])([a-z])/g, "$1-$2$3")
			.replace(/([a-z])([0-9])/g, "$1-$2")
			// Remove all whitespace
			.replace(/\s+/g, "")
			// Remove non-alphanumeric characters
			.replace(/\W/g, "-")
			// Replace multiple dashes with a single dash
			.replace(/-+/g, "-")
			// Remove any leading or trailing dashes
			.replace(/^-/g, "")
			.replace(/-$/g, "")
			.toLowerCase()
	);
}

/**
 * Extract the fallback value from a var() function
 * @param {string} declValue
 * @returns {string} The fallback value
 */
function extractFallbackValue(declValue) {
	const parsed = valuesParser.parse(declValue);
	let fallbackValue;

	parsed.walk((node) => {
		if (node.type === "function" && node.value === "var") {
			// Assuming the second argument of the var() function is the fallback
			const fallbackNode = node.nodes[2];
			if (fallbackNode) {
				// Convert the fallback node back to a string
				fallbackValue = valuesParser.stringify(fallbackNode);
			}
		}
	});

	return fallbackValue;
}

/**
 * Get the base selector for a given selector
 * @param {string} selector
 * @param {{ selectorPrefix: string }} options
 * @returns {string} The base selector
 */
function getBaseSelector(selector, { selectorPrefix = "" } = {}) {
	let baseSelector;

	if (!selector || !selector.nodes) return baseSelector;

	// This regex is designed to pull spectrum-<ComponentName> out of a selector
	const baseRegex = new RegExp(
		`^(${selectorPrefix ? `${selectorPrefix}-` : ""}[A-Z][^\\W-.\\s]+)`,
	);

	// Iterate over the selector nodes to find a common root class name
	const found = [];
	selector.each((node) => {
		if (node.type !== "class") return;
		if (!node.value) return;

		const value = node.value ?? node.toString();
		const matches = value.match(baseRegex);
		if (!matches) return;

		const [, foundSelector] = matches;
		if (foundSelector) found.push(foundSelector);
	});

	if (found.length === 1) {
		return cleanPropertyName(found[0].toLowerCase(), { selectorPrefix });
	}

	let countMap = new Map();

	// Find and return the most common base selector in the array
	found.forEach((s) => countMap.set(s, (countMap.get(s) || 0) + 1));

	let count = 0;
	for (let [s, c] of countMap.entries()) {
		if (c > count) {
			baseSelector = s;
			count = c;
		}
	}

	// Remove the selector prefix from the returned base selector
	return baseSelector ? cleanPropertyName(baseSelector, { selectorPrefix }) : baseSelector;
}

/**
 * Fallback function to process the name of the new variable
 * @param {string} selector
 * @param {string} prop
 * @param {{ identifierName: string, identifierValue: string, selectorPrefix: string }} options
 * @returns {string} The new variable name
 */
function getVariableName(
	selector,
	prop,
	{ selectorPrefix = "", identifierName, identifierValue } = {},
) {
	const baseSelector = getBaseSelector(selector) ?? "";

	const clean = (prop) =>
		prop &&
		cleanPropertyName(
			prop
				.replace(new RegExp(selectorPrefix, "gi"), "")
				// Remove the identifers if they exist
				.replace(new RegExp(baseSelector, "gi"), "")
				// Check for identifiers in the property name that don't include the dash
				.replace(new RegExp(baseSelector?.replace(/-/g, ""), "gi"), "")
				.replace(new RegExp(identifierName, "gi"), "")
				.replace(new RegExp(identifierValue, "gi"), ""),
			{ selectorPrefix }
		);

	let property = [];

	function processSelector(node) {
		if (node.type === "pseudo") {
			property.push(node.value.slice(1));
		}
		else if (node.type === "tag") {
			property.push(node.value);
		}
		else if (node.type === "combinator") {
			switch (node.value) {
				case " ": // Descendant combinator
					break;
				case ">":
					property.push("child-of");
					break;
				case "+":
					property.push("next-to");
					break;
				case "~":
					property.push("sibling-of");
					break;
			}
		}
		else if (node.type === "class") {
			if (node.value === baseSelector) return;
			property.push(clean(node.value));
			return;
		}

		if (!node.nodes) return;
		node.each(processSelector);
	}

	selector.each(processSelector);

	// Dedupe the property array, removing the 2nd instance of a property
	property = property
		.filter((value, index) => property.indexOf(value) === index)
		.filter(Boolean);

	return `--${[identifierName, baseSelector, clean([...property, prop].filter(Boolean).join("-"))].filter(Boolean).join("-").toLowerCase()}`;
}

/**
 * Check for a replacement value based on the provided guesses
 * @param {import('postcss').Declaration} decl
 * @param {string} replace
 * @param {string[]} guesses
 * @param {string[]} systemValues
 * @returns {string|undefined|void} The updated declaration value
 */
function checkForReplacement(
	decl,
	replace,
	guesses = [],
	systemValues = [],
) {
	if (!decl || !replace || guesses.length === 0) return;

	const replacer = new RegExp(replace, "g");

	for (const g of guesses) {
		if (systemValues.includes(g)) {
			return decl.value.replace(replacer, g);
		}

		const values = systemValues.filter((value) => value.startsWith(g));
		if (values.length === 0) continue;

		if (values.length === 1) {
			return decl.value.replace(replacer, values[0]);
		}

		if (values.length > 1) {
			return decl.value.replace(replacer, values[0]);
		}

		continue;
	}
}

module.exports = {
	cleanPropertyName,
	extractFallbackValue,
	getBaseSelector,
	getVariableName,
	checkForReplacement,
};
