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
*/

const valueParser = require("postcss-value-parser");

/** @type import('postcss').PluginCreator<Options> */
module.exports = () => {
	return {
		postcssPlugin: "postcss-varfallback",
		Declaration(decl) {
			function getFallbackNode(node) {
				const nodes = node.nodes;
				if (nodes && nodes.length === 3) {
					// It's got a fallback, go deeper
					return getFallbackNode(nodes[2]);
				}

				return node;
			}

			const parsed = valueParser(decl.value);
			if (!parsed.nodes || !parsed.nodes.length) {
				return node.value;
			}

			parsed.walk((node) => {
				if (node.type === "function" && node.value === "var") {
					// If it's a var, recursively find the fallback
					const fallbackNode = getFallbackNode(node);

					// Replace node properties with the fallback
					node.type = fallbackNode.type;
					node.value = fallbackNode.value;
					node.nodes = fallbackNode.nodes;

					// Do not investigate children
					return false;
				}
			});

			decl.value = valueParser.stringify(parsed);
		},
	};
};

module.exports.postcss = true;
