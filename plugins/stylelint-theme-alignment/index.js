/*!
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import fs from "node:fs";
import { sep } from "node:path";

import postcss from "postcss";
import valuesParser from "postcss-values-parser";
import stylelint from "stylelint";

const {
	createPlugin,
	utils: { report, ruleMessages, validateOptions }
} = stylelint;

import "colors";

const ruleName = "spectrum-tools/theme-alignment";
const messages = ruleMessages(ruleName, {
	missing: (baseFile, sourceFile) => `A base file (${baseFile}) is required to validate ${sourceFile}.`,
	// Report if a selector is in this file but not in the base file
	expected: (selector, baseFile) => `Selector "${selector}" is not used or defined in the base file (${baseFile}).`,
	// Report if a custom property is used in this file but not in the base file
	referenced: (property, baseFile) => `Custom property "${property}" is not used or defined by the base file (${baseFile}).`,
});

/** @type {import('stylelint').Plugin} */
const ruleFunction = (enabled) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: enabled,
				possible: [true],
			},
		);

		if (!validOptions) return;

		const sourceFile = root.source.input.file;
		const parts = sourceFile ? sourceFile.split(sep) : [];

		// All the parts of the source file but replace the filename with spectrum-two.css
		const baseFile = [...parts.slice(0, -1), "spectrum-two.css"].join(sep);

		// If the base file doesn't exist, throw an error
		if (!fs.existsSync(baseFile)) {
			report({
				message: messages.missing,
				messageArgs: [baseFile, sourceFile],
				node: root,
				result,
				ruleName,
			});
			return;
		}

		// Read in the base file and parse it
		const baseContent = fs.readFileSync(baseFile, "utf8");
		const baseRoot = postcss.parse(baseContent);

		/* A map of all selectors in the base file and what properties they define */
		const baseProperties = new Map();

		/* Iterate over selectors in the base root */
		baseRoot.walkRules((rule) => {
			const properties = new Set();
			rule.walkDecls((decl) => {
				// If this is a custom property, add it to the properties set
				if (decl.prop.startsWith("--")) {
					properties.add(decl.prop);
				}

				// If the value of this declaration includes a custom property, add it to the properties set
				const parsed = valuesParser.parse(decl.value);
				parsed.walk((node) => {
					if (node.type === "func" && node.value === "var") {
						properties.add(node.nodes[0].value);
					}
				});
			});

			// Add the properties set to the map
			baseProperties.set(rule.selector, properties);
		});

		/* Iterate over selectors in the source root and validate that they align with the base */
		root.walkRules((rule) => {
			// Check if this selector exists in the base
			const properties = baseProperties.get(rule.selector);

			// Report any selectors that don't exist in the base
			if (!properties) {
				report({
					message: messages.expected,
					messageArgs: [rule.selector, baseFile],
					node: rule,
					result,
					ruleName,
				});
				return;
			}

			rule.walkDecls((decl) => {
				const isProperty = decl.prop.startsWith("--");
				// @todo should report that this is setting something other than a custom property in the theme file
				if (!isProperty) {
					return;
				}

				// If this is a custom property, check if it's used in the base
				if (!properties.has(decl.prop)) {
					report({
						message: messages.referenced,
						messageArgs: [decl.prop, baseFile],
						node: decl,
						result,
						ruleName,
					});
				}
			});
		});
	};
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;

export default createPlugin(ruleName, ruleFunction);
