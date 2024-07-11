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
const selectorParser = require("postcss-selector-parser");

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
			processIdentifier = (identifierValue) => selectorPrefix && selectorPrefix !== identifierValue ? `.${selectorPrefix}--${identifierValue}` : `.${identifierValue}`;
		}

		/**
		 * Clean the property name to be used as a variable name
		 * @param {string} prop
		 * @returns {string} The clean variable name
		 */
		function cleanPropertyName(prop) {
			return prop ? prop
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
				.toLowerCase() : prop;
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
		 * @returns {string} The base selector
		 */
		function getBaseSelector(selector) {
			let baseSelector;

			if (!selector || !selector.nodes) return baseSelector;

			// This regex is designed to pull spectrum-<ComponentName> out of a selector
			const baseRegex = new RegExp(`^(${selectorPrefix ? `${selectorPrefix}-` : ""}[A-Z][^\\W-.\\s]+)`);

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
				return cleanPropertyName(found[0].toLowerCase());
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
			return baseSelector ? cleanPropertyName(baseSelector) : baseSelector;
		}

		/**
		 * Fallback function to process the name of the new variable
		 * @param {string} selector
		 * @param {string} prop
		 * @param {{ identifierName: string, identifierValue: string, selectorPrefix: string }} options
		 * @returns {string} The new variable name
		 */
		function getVariableName(selector, prop, { identifierName, identifierValue }) {
			const baseSelector = getBaseSelector(selector) ?? "";

			const clean = (prop) => prop ? cleanPropertyName(
				prop
					.replace(new RegExp(selectorPrefix, "gi"), "")
					// Remove the identifers if they exist
					.replace(new RegExp(baseSelector, "gi"), "")
					// Check for identifiers in the property name that don't include the dash
					.replace(new RegExp(baseSelector?.replace(/-/g, ""), "gi"), "")
					.replace(new RegExp(identifierName, "gi"), "")
					.replace(new RegExp(identifierValue, "gi"), "")
			) : prop;

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
						case " ":
							property.push("descendant-of");
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
			property = property.filter((value, index) => property.indexOf(value) === index).filter(Boolean);

			return `--${[identifierName, baseSelector, clean([...property, prop].filter(Boolean).join("-"))].join("-").toLowerCase()}`;
		}

		/**
		 * Check for a replacement value based on the provided guesses
		 * @param {import('postcss').Declaration} decl
		 * @param {string} replace
		 * @param {string[]} guesses
		 * @param {string[]} systemValues
		 * @returns {string|undefined|void} The updated declaration value
		 */
		function checkForReplacement(decl, replace, guesses = [], systemValues = []) {
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

		// This object will store the mappings for each selector
		const systemMap = new Map();
		const conversionMap = new Map();

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

			const selectorMap = systemMap.get(identifierName) ?? {};

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
				selectorParser((selectors) => {
					selectors.each((s) => {
						// Check if the property is already mapped
						const variableName = getVariableName(s, decl.prop, {
							identifierName,
							identifierValue,
							selectorPrefix
						});

						const newDecl = decl.clone({
							prop: variableName,
						});
						newDecl.raws.before = "\n  ";

						const uniqueSet = conversionMap.get(decl.prop) ?? new Set();
						conversionMap.set(decl.prop, uniqueSet.add(variableName));

						if (!referencesOnly) {
							rule.append(newDecl);
						}

						const selector = s.toString();
						selectorMap[selector] = selectorMap[selector] ?? {};

						const selectorNode = selectorMap[selector];

						// Check for fallbacks in the var() function
						const fallbackValue = extractFallbackValue(decl.value);
						if (fallbackValue) {
							// The final declaration should have the override present
							selectorNode[decl.prop] = `var(${fallbackValue}, var(${variableName}))`;

							// The system-level declaration should only have the fallback
							newDecl.value = `var(${fallbackValue})`;
						}
						else {
							selectorNode[decl.prop] = `var(${variableName})`;
						}

						selectorMap[selector] = selectorNode;
					});
				}).processSync(decl.parent.selector, { lossless: false });
			});

			systemMap.set(identifierName, selectorMap);

			if (rule) {
				rule.walkDecls((decl) => {
					const convertedProps = [...conversionMap.keys()];

					if (!convertedProps.some((key) => decl.value.includes(key))) return;

					// loop over all the updated properties and update internal references to the new variables
					for (let [prop, mappedValues] of conversionMap.entries()) {
						// Check if this key exists in the value
						if (!decl.value.match(new RegExp(`${prop}[^-]`))) continue;

						const systemValues = [...mappedValues];

						// If there is only one system variable, replace all instances of the prop with the system variable
						if (systemValues.length === 1) {
							decl.value = decl.value.replace(new RegExp(prop, "g"), systemValues[0]);
							continue;
						}

						const replacement = checkForReplacement(decl, prop, [
							`--${identifierName}-${cleanPropertyName(prop)}`,
						], systemValues);

						if (replacement) {
							decl.value = replacement;
							continue;
						}

						// @note: this will be an empty variable because we didn't find a match but it will match the format of the other variables
						decl.value = decl.value.replace(new RegExp(decl.prop, "g"), `--${identifierName}-${cleanPropertyName(decl.prop)}`);
					}
				});
			}

			container.remove();
		});

		// Our job here is done
		if (skipMapping) return;
		if (stripLocalSelectors) return;

		for (let [, selectorMap] of systemMap.entries()) {
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
		}
	},
});

module.exports.postcss = true;
