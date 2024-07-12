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

const selectorParser = require("postcss-selector-parser");
const {
	cleanPropertyName,
	extractFallbackValue,
	getVariableName,
	checkForReplacement
} = require("./utilities");

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
			container.walkDecls(/^--[A-Z|a-z]/, (decl) => {
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
							`--${identifierName}-${cleanPropertyName(prop, { selectorPrefix })}`,
						], systemValues);

						if (replacement) {
							decl.value = replacement;
							continue;
						}

						// @note: this will be an empty variable because we didn't find a match but it will match the format of the other variables
						decl.value = decl.value.replace(new RegExp(decl.prop, "g"), `--${identifierName}-${cleanPropertyName(decl.prop, { selectorPrefix })}`);
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
