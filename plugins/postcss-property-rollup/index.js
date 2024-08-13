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

/**
 * @typedef Options
 * @property ignore {string[]} - List of selectors to ignore
 * @property newSelector {string} - New selector to create with the combined declarations
 */

/** @type import('postcss').PluginCreator<Options> */
module.exports = ({
	ignore = [],
	newSelector,
} = {}) => {
	return {
		postcssPlugin: "postcss-property-rollup",
		OnceExit(root, { Rule }) {
			const rules = [];
			const declarations = {};

			root.walkRules((rule) => {
				if (ignore.includes(rule.selector)) return;
				rules.push(rule);
				rule.walkDecls(/^--/, (decl) => {
					declarations[decl.prop] = decl;
					decl.remove();
				});
			});

			if (!rules.length) return;

			if (newSelector) {
				// Create a new rule with the combined declarations
				const newRule = new Rule({ selector: newSelector });
				for (const decl of Object.values(declarations)) {
					newRule.append(decl);
				}
				root.append(newRule);

				// Remove the rules from the root
				rules.forEach((rule) => {
					rule.remove();
				});

				return;
			}

			// If no new selector is provided, combine the declarations into the last rule
			const lastIdx = rules.length - 1;
			const lastRule = rules[lastIdx];

			if (!lastRule) return;

			rules.forEach((rule, index) => {
				if (index !== lastIdx) rule.remove();
			});

			for (const decl of Object.values(declarations)) {
				lastRule.append(decl);
			}
		},
	};
};

module.exports.postcss = true;
