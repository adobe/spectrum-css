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

const valuesParser = require("postcss-values-parser");

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

// Reformat pseudo functions to use dash-formatted names
const formatPseudos = (selector) => {
	const pseudoRegex = /:(\w+)(\((.*?)\))?/g;
	const matches = [...selector.matchAll(pseudoRegex)];
	if (!matches || matches.length === 0) return selector;

	let replacement = "";
	for (const match of matches) {
		const [, query, , value] = match;

		if (!["where", "is"].includes(query)) {
			replacement = replacement + `-${query}`;
		}

		if (value) {
			if (value.includes(",")) {
				replacement = replacement + `-${value.split(",").join("-")}`;
			}
			else {
				replacement = replacement + `-${value}`;
			}
		}
	}

	return selector.replaceAll(pseudoRegex, replacement);
};

/**
 * Replace combinators with logical descriptions to create a more readable variable name
 * @param {string} selector
 * @returns {string} An updated selector with the combinators replaced by logical descriptions
 */
function replaceCombinators(selector) {
	return selector
		.replace(/ \+ /g, "-next-to-")
		.replace(/ > /g, "-child-of-")
		.replace(/ ~ /g, "-sibling-of-")
		.replace(/ /g, "-descendant-of-");
}

/**
 * Get the base selector for a given selector
 * @param {string} selector
 * @param {string} selectorPrefix
 * @returns {string} The base selector
 */
function getBaseSelector(selector, selectorPrefix) {
	// Default to the selector prefix if no base selector is found
	let baseSelector = selectorPrefix;

	// This regex is designed to pull spectrum-<ComponentName> out of a selector
	let baseSelectorMatch = selector.match(new RegExp(`^.(${selectorPrefix}-[A-Z][^\\W-.\\s]+)`));
	if (baseSelectorMatch) {
		const [, foundSelector] = baseSelectorMatch;
		// @note is there any way this will capture a passthrough selector instead of the base selector for the component?
		// @todo need to write a test case to verify this
		if (foundSelector) baseSelector = foundSelector;
	}

	return baseSelector;
}

/**
 * Fallback function to process the name of the new variable
 * @param {string} selector
 * @param {string} prop
 * @param {{ identifierName: string, identifierValue: string, selectorPrefix: string }} options
 * @returns {string} The new variable name
 */
function getVariableName(selector, prop, { identifierName, identifierValue, selectorPrefix }) {
	const baseSelector = getBaseSelector(selector, selectorPrefix);

	const cleanPropertyName = (prop) => prop
		// Remove the base selector
		.replace(new RegExp(baseSelector, "gi"), "")
		// Remove the identifers if they exist
		.replace(new RegExp(selectorPrefix, "gi"), "")
		.replace(new RegExp(identifierName, "gi"), "")
		.replace(new RegExp(identifierValue, "gi"), "")
		// Remove mod from the new property name
		.replace(/mod/g, "")
		// Remove state-based prefix
		.replace(/is-/g, "")
		// If a string has a lowercase letter followed by an uppercase letter, insert a dash between them
		.replace(/([a-z])([A-Z])/g, "$1-$2")
		// Remove all whitespace
		.replace(/\s+/g, "")
		// Remove non-alphanumeric characters
		.replace(/\W/g, "-")
		// Replace multiple dashes with a single dash
		.replace(/-+/g, "-")
		// Remove any leading or trailing dashes
		.replace(/^-/g, "")
		.replace(/-$/g, "");

	let propertyName = selector;
	// @note what about :root, :host, or other special selectors?
	propertyName = formatPseudos(propertyName);
	propertyName = replaceCombinators(propertyName);

	return `--${identifierName}-${baseSelector}-${cleanPropertyName(`${propertyName}-${prop}`)}`.toLowerCase();
}

/**
 * @typedef Options
 * @property {string} [selectorPrefix] - The prefix to use for the new selectors
 * @property {boolean} [skipMapping=false] - Skip the mapping of the variables to the system variables. This can be useful if you only want to extract the variables and not map them to the system variables.
 * @property {boolean} [preserveVariables=false] - When used with `skipMapping`, this option will preserve the variables defined inside the container query in the output by injecting them to the root selector.
 * @property {boolean} [referencesOnly=false] - This option will only output those variables that are referencing the newly created system variables and not the system variables themselves. This can be used as a bridge between an old and new implementation for the component.
 * @property {boolean} [stripLocalSelectors=false] - This option will remove the local selectors (those that map to system variables) from the output leaving only the system definitions.
 * @property {(identifierValue: string, identifierName: string) => string} [processIdentifier] - A function that processes the identifier value and creates a new selector
*/

/** @type import('postcss').PluginCreator<Options> */
module.exports = ({
	selectorPrefix,
	skipMapping = false,
	preserveVariables = true,
	referencesOnly = false,
	stripLocalSelectors = false,
	processIdentifier,
}) => ({
	postcssPlugin: "postcss-splitinator",
	OnceExit(root, { Rule, Declaration }) {
		// Fallback function to process the identifier value and create a new selector
		if (typeof processIdentifier !== "function") {
			// If the base prefix exists and differs from the identifier value, append the identifier value to the base prefix as the new class name
			processIdentifier = (identifierValue) => selectorPrefix && selectorPrefix !== identifierValue ? `.${selectorPrefix}-${identifierValue}` : `.${identifierValue}`;
		}

		// This object will store the mappings for each selector
		const selectorMap = {};

		// Step 1: loop over all the container style queries and create a new selector for each
		// to be used as a theming toggle for components where style queries are not natively supported
		// @todo should there be a support check around this?
		root.walkAtRules(/container/, (container) => {
			if (skipMapping) {
				if (preserveVariables) {
					// Iterate over each rule in the container and append them to the root
					container.walkRules((rule) => {
						root.append(rule);
					});
				}

				container.remove();
				return;
			}

			// Extract the custom property name and it's value to use in creating the new selector
			// Identifier name is the prefix used for the custom properties created for the bridge
			// Identifier value is used to create the new selector
			const [, identifierName, identifierValue] = container.params.match(
				/\(\s*--(.*?)\s*[:=]\s*(.*?)\s*\)/
			);

			// Create a new rule using this selector to attach the new system-level custom properties
			let rule;

			// If we're only interested in references, we can skip the next step of appending the new rule
			if (!referencesOnly) {
				rule = new Rule({
					selector: processIdentifier(identifierValue, identifierName),
					source: container.source,
				});

				container.parent.insertAfter(container, rule);
			}

			// Iterate over each custom property in the container to create a new mapping that supports the new selector
			container.walkDecls(/^--/, (decl) => {
				// Process rules that match multiple selectors separately to avoid weird var names and edge cases
				// note: this doesn't support :where() and is likely brittle!
				const selectors = decl.parent.selector.split(/\s*,\s*/);
				selectors.forEach((selector) => {
					const variableName = getVariableName(selector, decl.prop, {
						identifierName,
						identifierValue,
						selectorPrefix
					});
					const newDecl = decl.clone({
						prop: variableName,
					});
					newDecl.raws.before = "\n  ";

					if (!referencesOnly) rule.append(newDecl);

					const selectorNode = (selectorMap[selector] =
						selectorMap[selector] || {});

					// Check for fallbacks in the var() function
					// todo: use valueparser instead of a regex
					const fallbackValue = extractFallbackValue(decl.value);
					if (fallbackValue) {
						// The final declaration should have the override present
						selectorNode[
							decl.prop
						] = `var(${fallbackValue}, var(${variableName}))`;

						// The system-level declaration should only have the fallback
						newDecl.value = `var(${fallbackValue})`;
					}
					else {
						selectorNode[decl.prop] = `var(${variableName})`;
					}
				});
			});

			container.remove();
		});

		// Our job here is done
		if (skipMapping) return;
		if (stripLocalSelectors) return;

		// This adds the new selectors to the root with their respective system-level mappings
		for (let [selector, props] of Object.entries(selectorMap)) {
			const rule = new Rule({ selector });

			for (let [prop, value] of Object.entries(props)) {
				const decl = new Declaration({ prop, value });
				decl.raws.before = "\n  ";

				rule.append(decl);
			}

			root.append(rule);
		}
	},
});

module.exports.postcss = true;
