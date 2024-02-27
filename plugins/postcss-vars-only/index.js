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

const PROCESSED = Symbol("processed");

const parser = require("postcss-selector-parser");
const valueParser = require("postcss-value-parser");

/**
 * @typedef Options
 * @property {string} rootClass - the name of the root class to use for the component
 * @property {Map<string, string>} globalVars - a map of global variables to use for the component
 * @property {string[]} ignoreList - a list of patterns to ignore when looking for variables
 * @property {import('webpack').LoaderContext<{}>} loaderContext - The webpack context
 */

/** @type import('postcss').PluginCreator<Options> */
module.exports = function ({
	rootClass,
	globalVars = new Map(),
	ignoreList = [],
	loaderContext,
} = {}) {
	return {
		postcssPlugin: "postcss-vars-only",
		Once() {
			if (loaderContext) {
				loaderContext.addDependency(
					path.resolve(__dirname),
				);
			}
		},
		OnceExit(root) {
			const selectorList = [/spectrum-[A-Z]\w+/];

			// Get vars defined inside of the component
			const definedVariables = new Map();

			// Find all custom properties used in the component
			const usedVariables = new Set();

			// Get the first rule in the document
			let rootRule;

			root.walkRules((rule) => {
				if (rule[PROCESSED]) return;
				rule[PROCESSED] = true;

				if (!rootRule) {
					// Create a rule for the final catch-all set of classes
					rootRule = rule.clone({
						selector: rootClass ? `.${rootClass}` : "",
						nodes: [],
					});

					rootRule.raws.before = "\n\n";
					rootRule.raws.after = "\n";
					rootRule.raws.between = "\n";
				}

				/** @todo should this use the rootClass data */
				parser((selectors) => {
					selectors.walkClasses((selectorNode) => {
						const selector = selectorNode.value;

						const matches = selectorList.reduce((collection, regex) => {
							const match = selector.match(regex);
							if (match && match?.[0]) return [...collection, match[0]];
							return collection;
						}, []);

						if (matches && matches.length > 0) {
							// Use set to dedupe the list of selectors, sort alphabetically
							rootRule.selectors = [...new Set([...rootRule.selectors, `.${matches[0]}`])].sort();
						}
					});
				}).processSync(rule.selector);

				/** @todo does this need to include class/context data in which it's defined */
				/** @todo should we include an ignorelist here? */
				rule.walkDecls((decl) => {
					const isVariableDefinition = decl.prop.startsWith("--");
					const usesVariable = /(^|[^\w-])var\([\W\w]+\)/g.test(decl.value);

					if (isVariableDefinition) {
						definedVariables.set(decl.prop, decl.value);
					}

					// match custom property inclusions
					if (!usesVariable) {
						decl.remove();
						return;
					}

					const parsed = valueParser(decl.value);

					// Don't process custom properties within URLs, it does nothing and breaks parcel
					// see https://github.com/parcel-bundler/parcel/issues/3881
					if (!parsed || !parsed.nodes || parsed.nodes.length === 0 || parsed.nodes[0].value === "url") {
						decl.remove();
						return;
					}

					parsed.walk((node) => {
						if (node.type !== "function" || node.value !== "var") return;

						const varName = node.nodes?.[0]?.value;
						if (!varName) return;

						// Find out if the property is already defined on the root rule
						const existing = rootRule.nodes.find((n) => n.prop === varName);
						if (existing) return;

						// Skip ignored var patterns
						if (ignoreList.length > 0 && ignoreList.some((ignore) => varName.match(ignore))) {
							return;
						}

						if (varName.startsWith("--")) usedVariables.add(varName);

						let newValue;

						// Prefer the component's defined vars for the value
						if (definedVariables.has(varName)) {
							newValue = definedVariables.get(varName);
						}

						if (!newValue && globalVars.has(varName)) {
							// Then prefer the tokens mapped to components
							newValue = globalVars.get(varName);

							// Add this to our list of defined variables as a type of caching
							// so we don't have to look it up again
							definedVariables.set(varName, newValue);
						}

						if (!newValue || typeof newValue === "undefined" || newValue.includes(varName)) {
							return false;
						}

						// Otherwise, add a new property to the root rule
						const newDecl = decl.clone({
							prop: varName,
							value: newValue,
							raws: {
								...decl.raws,
								// Normalize whitespace
								before: "\n  ",
							}
						});

						rootRule.append(newDecl);

						return false;
					});

					decl.remove();
				});

				if (rule[PROCESSED]) rule.remove();
			});

			if (rootRule?.nodes?.length) {
				// Clean up the formatting of the selectors
				rootRule.selectors = rootRule.selectors.map((selector, idx, list) => {
					if (idx === list.length - 1) return selector.trim() + " ";
					return selector.trim();
				});

				// Add the new root rule to the document
				root.append(rootRule);
			}
		},
	};
};

module.exports.postcss = true;
