/*!
Copyright 2024 Adobe. All rights reserved.
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
*/

/** @type import('postcss').PluginCreator<Options> */
module.exports = ({
	noFlatVariables = false,
	referencesOnly = false,
}) => ({
	postcssPlugin: "postcss-splitinator",
	OnceExit(root) {
		if (!referencesOnly && !noFlatVariables) return;

		root.walkRules((rule) => {
			if (referencesOnly) {
				if (rule.selector !== ":root") rule.remove();
			}

			if (noFlatVariables) {
				if (rule.selector === ":root") rule.remove();
			}

			// Remove all declarations that don't reference a variable
			rule.walkDecls((decl) => {
				if (referencesOnly && !decl.prop.startsWith("--")) {
					decl.remove();
				}
			});
		});
	},
});

module.exports.postcss = true;
