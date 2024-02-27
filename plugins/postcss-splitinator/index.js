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

/**
 * @typedef Options
 * @property {boolean} [noFlatVariables=false]
 * @property {boolean} [noSelectors=false]
 * @property {(identifierValue: string, identifierName: string) => string} [processIdentifier]
 * @property {(selector: string, prop: string) => string} [getName]
 * @property {import('webpack').LoaderContext<{}>} loaderContext - The webpack context
*/

/** @type import('postcss').PluginCreator<Options> */
module.exports = ({
	noFlatVariables = false,
	noSelectors = false,
	processIdentifier,
	getName = (selector, prop) => {
		selector = selector.replace(/^:where\((.*?)\)$/, "$1");

		// This regex is designed to pull spectrum-ActionButton out of a selector
		let baseSelectorMatch = selector.match(/^\.([a-z]+-[\A-Z][^-. ]+)/);
		if (baseSelectorMatch) {
			const [, baseSelector] = baseSelectorMatch;
			const baseSelectorRegExp = new RegExp(baseSelector, "gi");
			prop = prop.replace(baseSelectorRegExp, "");
			selector = baseSelector + selector.replace(baseSelectorRegExp, "");
		}

		selector = selector.replace(/is-/g, "");

		let selectorParts = selector.replace(/\s+/g, "").replace(/,/g, "").split(".");

		return (
			"--" +
			(`system-` + `${selectorParts.join("-")}-${prop.substr(2)}`)
				.replace(/-+/g, "-")
				.toLowerCase()
		);
	},
	loaderContext,
}) => {
	return {
		postcssPlugin: "postcss-splitinator",
		Once() {
			if (loaderContext) {
				loaderContext.addDependency(
					path.resolve(__dirname),
				);
			}
		},
		OnceExit(root, { Rule, Declaration }) {
			const selectorMap = {};

			root.walkAtRules(/container/, (container) => {
				const [, identifierName, identifierValue] = container.params.match(
					/\(\s*--(.*?)\s*[:=]\s*(.*?)\s*\)/
				);

				const rule = new Rule({
					selector: `.${
						typeof processIdentifier === "function"
							? processIdentifier(identifierValue, identifierName)
							: identifierValue
					}`,
					source: container.source,
				});

				if (!noFlatVariables) {
					container.parent.insertAfter(container, rule);
				}

				container.walkDecls(/^--/, (decl) => {
					// Process rules that match multiple selectors separately to avoid weird var names and edge cases
					// note: this doesn't support :where() and is likely brittle!
					const selectors = decl.parent.selector.split(/\s*,\s*/);
					selectors.forEach((selector) => {
						const variableName = getName(selector, decl.prop);
						const newDecl = decl.clone({
							prop: variableName,
						});
						newDecl.raws.before = "\n  ";

						if (!noFlatVariables) {
							rule.append(newDecl);
						}

						const selectorNode = selectorMap.has(selector) ? selectorMap.get(selector) : new Map();

						const parsed = valueParser(decl.value);

						parsed.walk((node) => {
							if (node.type !== "function" || node.value !== "var") return;

							const override = node.nodes?.[0]?.value;
							if (!override) return;

							let fallback = node.nodes?.[2];
							if (fallback) {
								if (fallback.nodes.length) {
									fallback = valueParser.stringify(fallback.nodes);
								}

								// The final declaration should have the override present
								selectorNode.set(decl.prop, `var(${override}, var(${variableName}))`);

								// The system-level declaration should only have the fallback
								newDecl.value = `var(${fallback})`;
							} else selectorNode.set(decl.prop, `var(${variableName})`);

							selectorMap.set(selector, selectorNode);
						});
					});
				});

				container.remove();
			});

			if (noSelectors) return;

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
	};
};

module.exports.postcss = true;
