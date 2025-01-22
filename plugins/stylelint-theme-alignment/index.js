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
import { basename, relative, sep } from "node:path";

import postcss from "postcss";
import valuesParser from "postcss-values-parser";
import stylelint from "stylelint";
import { isString } from "stylelint/lib/utils/validateTypes.mjs";

const {
	createPlugin,
	utils: { report, ruleMessages, validateOptions }
} = stylelint;

import "colors";

const ruleName = "spectrum-tools/theme-alignment";
const messages = ruleMessages(ruleName, {
	missing: (baseFile, sourceFile, rootPath) => `A base file (${relative(rootPath, baseFile)}) is required to validate ${relative(rootPath, sourceFile)}.`,
	// Report if a selector is in this file but not in the base file
	expected: (selector, baseFile, rootPath) => `Selector "${selector}" is not used or defined in the base file (${relative(rootPath, baseFile)}).`,
	// Report if a custom property is used in this file but not in the base file
	referenced: (property, baseFile, rootPath) => `Custom property "${property}" is not used or defined by the base file (${relative(rootPath, baseFile)}).`,
});

/** @type {import('stylelint').Plugin} */
const ruleFunction = (enabled, options = {}) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: enabled,
				possible: [true],
			},
			{
				actual: options,
				possible: {
					baseFilename: isString,
				},
				optional: true,
			},
		);

		if (!validOptions) return;


		const { baseFilename = "spectrum" } = options;

		const sourceFile = root.source.input.file;
		const parts = sourceFile ? sourceFile.split(sep) : [];
		const isTheme = parts[parts.length - 2] === "themes";
		const filename = parts[parts.length - 1];

		if (!isTheme || basename(filename, ".css") === baseFilename) return;

		// All the parts of the source file but replace the filename with the baseFilename
		const baseFile = [...parts.slice(0, -1), `${baseFilename}.css`].join(sep);
		const rootPath = parts.slice(0, -2).join(sep);

		// If the base file doesn't exist, throw an error
		if (!fs.existsSync(baseFile)) {
			report({
				message: messages.missing,
				messageArgs: [baseFile, sourceFile, rootPath],
				node: root,
				result,
				ruleName,
			});
			return;
		}

		// Read in the base file and parse it
		const baseContent = fs.readFileSync(baseFile, "utf8");
		const baseRoot = postcss.parse(baseContent);

		/* A list of all selectors in the base file */
		const baseSelectors = new Set();
		/* A list of all properties in the base file */
		const baseProperties = new Set();

		/* Iterate over selectors in the base root */
		baseRoot.walkRules((rule) => {
			rule.selectors.forEach((selector) => {
				// Add this selector to the selectors set
				baseSelectors.add(selector);
			});

			rule.walkDecls((decl) => {
				// If this is a custom property, add it to the properties set
				if (decl.prop.startsWith("--")) {
					baseProperties.add(decl.prop);
				}

				// If the value of this declaration includes a custom property, add it to the properties set
				const parsed = valuesParser.parse(decl.value);
				parsed.walk((node) => {
					if (node.type === "func" && node.value === "var") {
						baseProperties.add(node.nodes[0].value);
					}
				});
			});
		});

		/* Iterate over selectors in the source root and validate that they align with the base */
		root.walkRules((rule) => {
			rule.selectors.forEach((selector) => {
				// Check if this selector exists in the base
				if (!baseSelectors.has(selector)) {
					// Report any selectors that don't exist in the base
					report({
						message: messages.expected,
						messageArgs: [selector, baseFile, rootPath],
						node: rule,
						result,
						ruleName,
					});
					return;
				}
			});

			rule.walkDecls((decl) => {
				const isProperty = decl.prop.startsWith("--");
				// @todo should report that this is setting something other than a custom property in the theme file
				if (!isProperty) {
					return;
				}

				// If this is a custom property, check if it's used in the base
				if (!baseProperties.has(decl.prop)) {
					report({
						message: messages.referenced,
						messageArgs: [decl.prop, baseFile, rootPath],
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
