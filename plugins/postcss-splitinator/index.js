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
*/

/** @type import('postcss').PluginCreator<Options> */
module.exports = ({
	noFlatVariables = false,
	noSelectors = false,
	referencesOnly = false,
	processIdentifier,
	getName = (selector, prop) => {
		selector = selector.replace(/^:where\((.*?)\)$/, "$1");

		// This regex is designed to pull spectrum-ActionButton out of a selector
		let baseSelectorMatch = selector.match(/^\.([a-z]+-[A-Z][^-. ]+)/);
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
			(`system-${selectorParts.join("-")}-${prop.substr(2)}`)
				.replace(/-+/g, "-")
				.toLowerCase()
		);
	},
}) => ({
	postcssPlugin: "postcss-splitinator",
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

					const selectorNode = (selectorMap[selector] =
						selectorMap[selector] || {});

					// Check for fallbacks
					// todo: use valueparser instead of a regex
					const fallbackMatch = decl.value.match(
						/var\(\s*(.*?)\s*,\s*var\(\s*(.*?)\s*\)\)/
					);
					if (fallbackMatch) {
						const [, override, fallback] = fallbackMatch;

						// The final declaration should have the override present
						selectorNode[
							decl.prop
						] = `var(${override}, var(${variableName}))`;

						// The system-level declaration should only have the fallback
						newDecl.value = `var(${fallback})`;
					} else {
						selectorNode[decl.prop] = `var(${variableName})`;
					}
				});
			});

			container.remove();
		});

		if (noSelectors) return;

		if (referencesOnly) {
			// Empty out the root so we only have the references to --system- variables
			// Keep the copyright notice at the top
			// Find the copyright comment
			let comment = root.first;
			while (comment?.type !== "comment") {
				comment = comment.next();
				// Check the comment for the word "Copyright"
				if (comment?.text.match(/Copyright/)) break;
			}

			root.removeAll();
			if (comment) root.append(comment);
		}

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
