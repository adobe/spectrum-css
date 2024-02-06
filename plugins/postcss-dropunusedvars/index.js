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

const valueParser = require("postcss-value-parser");

/**
 * @typedef {Object} Options
 * @property {boolean} [fix=true]
 */

/** @type import('postcss').PluginCreator<Options> */
module.exports = ({ fix = true }) => {
	return {
		postcssPlugin: "postcss-dropunusedvars",
		OnceExit(root, { result }) {
			const usedAnywhere = [];
			const usedInProps = [];
			const variableRelationships = {};

			root.walkDecls((decl) => {
				const usedInDecl = [];
				const isVar = decl.prop.startsWith("--");
				const matches = decl.value.match(/var\(.*?\)/g);

				if (matches) {
					// Parse value and get a list of variables used
					const parsed = valueParser(decl.value);
					parsed.walk((node) => {
						if (node.type === "function" && node.value === "var") {
							if (node.nodes.length) {
								const varName = node.nodes[0].value;
								usedInDecl.push(varName);
								usedAnywhere.push(varName);
								if (!isVar) {
									usedInProps.push(varName);
								}
							}
						}
					});
				}

				// Store every variable referenced by this var
				if (isVar && usedInDecl.length) {
					for (let varName of usedInDecl) {
						variableRelationships[varName] = variableRelationships[varName] || [];
						variableRelationships[varName].push(decl.prop);
					}
				}
			});

			// Drop unused variable definitions
			root.walkDecls(/^--/, (decl) => {
				const varName = decl.prop;

				// Note if it seems like this variable is unused
				if (!usedAnywhere.includes(varName)) {
					if (!fix)
						decl.warn(result, `⚠️ ${varName} unused variable definition`, {
							word: varName,
							index: decl.sourceIndex,
						});
					else decl.remove();

					return;
				}

				if (!usedInProps.includes(varName)) {
					// Drop a variable if everything that references it has been removed
					const relatedVars = variableRelationships[varName];

					if (!relatedVars || relatedVars.length === 0) return;

					// Check if everything that references this variable has been removed
					const keep = Object.entries(relatedVars).reduce(
						(keep, [, relatedVar]) => {
							if (usedAnywhere.includes(relatedVar)) return true;
							else return keep;
						},
						false
					);

					if (keep) return;

					if (fix) decl.remove();
					else {
						decl.warn(result, `⚠️ ${varName} unused variable definition`, {
							word: varName,
							index: decl.sourceIndex,
						});
					}
				}
			});
		},
	};
};

module.exports.postcss = true;
