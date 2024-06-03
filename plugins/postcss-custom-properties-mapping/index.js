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

const { readFileSync } = require("fs");

const postcss = require("postcss");
const fg = require("fast-glob");
const valueParser = require("postcss-value-parser");

/**
 * @typedef {Object} Options
 */

/** @type import('postcss').PluginCreator<Options> */
module.exports = ({
	tokenDir,
	staticFiles = [],
	extendedFiles = [],
} = {}) => {
	const fetchVariablesFromFiles = (files, { cwd }) => {
		files = fg.sync(files, {
			cwd,
			absolute: true,
			onlyFiles: true,
			allowEmpty: true,
		});

		const variableList = {};
		files.forEach((file) => {
			const css = readFileSync(file, "utf8");
			const root = postcss.parse(css);

			root.walkDecls((decl) => {
				variableList[decl.prop] = decl.value;
			});
		});

		return variableList;
	};

	return {
		postcssPlugin: "postcss-custom-properties-mapping",
		prepare() {
			const fetchStatic = staticFiles.length > 0 && tokenDir;
			const fetchExtended = extendedFiles.length > 0 && tokenDir;

			const staticVars = fetchStatic ? fetchVariablesFromFiles(staticFiles, { cwd: tokenDir }) : {};
			const extendedVars = fetchExtended ? fetchVariablesFromFiles(extendedFiles, { cwd: tokenDir }) : {};

			return {
				Declaration(decl) {
					// match custom property inclusions
					if (!/(^|[^\w-])var\([\W\w]+\)/.test(decl.value)) return;

					const value = valueParser(decl.value);

					if (
						value.nodes &&
						value.nodes[0] &&
						value.nodes[0].value === "url"
					) {
						// Don't process custom properties within URLs, it does nothing and breaks parcel
						// see https://github.com/parcel-bundler/parcel/issues/3881
						return;
					}

					value.walk((node, index, nodes) => {
						if (node.type === "function" && node.value === "var") {
							const v = node.nodes[0].value;

							// If the value is static, replace the variable with the value.
							// Otherwise, change the variable name to the mapped name.
							if (staticVars[v]) {
								nodes.splice(
									index,
									1,
									...valueParser(`var(${v}, ${staticVars[v]})`).nodes
								);
							} else if (extendedVars[v]) {
								nodes.splice(
									index,
									1,
									...valueParser(`var(${v}, ${extendedVars[v]})`).nodes
								);
							}
						}
					});

					decl.value = value.toString();
				},
			};
		},
	};
};

module.exports.postcss = true;
