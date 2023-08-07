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

const fsp = require("fs").promises;
const path = require("path");

const fg = require("fast-glob");

const postcss = require("postcss");
const valueParser = require("postcss-value-parser");

const varDir = path.join(
	path.dirname(
		require.resolve("@spectrum-css/vars", {
			paths: [process.cwd(), path.join(process.cwd(), "../../")],
		})
	),
	".."
);

function getVarValues(root) {
	const variables = new Map();

	root.walkRules((rule) => {
		rule.walkDecls((decl) => {
			if (!decl.prop.startsWith("--")) return;
			variables.set(decl.prop, decl.value);
		});
	});

	return variables;
}

async function getAllComponentVars() {
	const variableList = new Map();
	for (const file of await fg(
		[`css/components/*.css`, `css/globals/*.css`, `custom.css`],
		{
			cwd: varDir,
		}
	)) {
		const content = await fsp.readFile(path.join(varDir, file), "utf8");
		if (!content) continue;

		const root = postcss.parse(content);
		if (!root) continue;

		getVarValues(root).forEach((value, name) => {
			variableList.set(name, value);
		});
	}
	return variableList;
}

async function readDNAVariables(file) {
	const content = await fsp.readFile(path.join(varDir, "css", file));
	if (!content) return new Map();

	const root = postcss.parse(content);
	if (!root) return new Map();

	return getVarValues(root);
}

const staticVars = new Map();
const allVars = new Map();
async function fetchVars() {
	if (staticVars.size > 0 && allVars.size > 0) return true;

	if (staticVars.size === 0) {
		[
			"staticAliases",
			"fontGlobals",
			"dimensionGlobals",
			"colorGlobals",
			"animationGlobals",
		].forEach(async (file) => {
			const dna = await readDNAVariables(`globals/spectrum-${file}.css`);
			dna.forEach((value, name) => {
				staticVars.set(name, value);
			});
		});
	}

	if (allVars.size === 0) {
		// Read in all variables so we have the value they resolve to
		(await getAllComponentVars()).forEach((value, name) => {
			allVars.set(name, value);
		});
	}

	return true;
}

module.exports = postcss.plugin(
	"postcss-custom-properties-mapping",
	function () {
		return async function (root) {
			await fetchVars();

			root.walkRules((rule) => {
				rule.walkDecls((decl) => {
					if (/(^|[^\w-])var\([\W\w]+\)/.test(decl.value)) {
						let value = valueParser(decl.value);

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
								let v = node.nodes[0].value;

								// If the value is static, replace the variable with the value.
								// Otherwise, change the variable name to the mapped name.
								if (staticVars[v]) {
									nodes.splice(
										index,
										1,
										...valueParser(`var(${v}, ${staticVars[v]})`).nodes
									);
								} else if (allVars.has(v)) {
									nodes.splice(
										index,
										1,
										...valueParser(`var(${v}, ${allVars.get(v)})`).nodes
									);
								}
							}
						});

						decl.value = value.toString();
					}
				});
			});
		};
	}
);
