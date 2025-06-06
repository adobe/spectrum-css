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

import { sep } from "node:path";

import stylelint from "stylelint";
import { isRegExp, isString } from "stylelint/lib/utils/validateTypes.mjs";

const {
	createPlugin,
	utils: { report, ruleMessages, validateOptions }
} = stylelint;

import "colors";

const ruleName = "spectrum-tools/no-unused-custom-properties";
const messages = ruleMessages(ruleName, {
	expected: (prop) => `Unused custom property ${prop.magenta} defined`,
	referenced: (prop) => `Custom property ${prop.magenta}'s references have been removed`,
});

import valuesParser from "postcss-values-parser";

/** @type {import('stylelint').Plugin} */
const ruleFunction = (enabled, { ignoreList = [] } = {}, context = {}) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: enabled,
				possible: [true],
			},
			{
				actual: ignoreList,
				possible: [isString, isRegExp],
				optional: true
			},
		);

		if (!validOptions) return;

		// Convert strings to regexes if necessary
		if (ignoreList.length) {
			ignoreList = ignoreList.map((regex) => regex instanceof RegExp ? regex : new RegExp(regex));
		}

		const sourceFile = root.source.input.file;
		const parts = sourceFile ? sourceFile.split(sep) : [];

		// @todo this is a hard-coded assumption that the components directory is the root before the component name
		const rootIdx = parts.indexOf("components");

		// We should only be checking entry-points, i.e. index.css files
		// because others are likely to be partials or imported into main
		if (rootIdx && typeof sourceFile !== "undefined" && !sourceFile.endsWith("index.css")) return;

		/* A list of all custom properties used anywhere in the file */
		const usedAnywhere = new Set();
		/* A list of custom properties that are used by a CSS property (NOT a variable) */
		const usedInProps = new Set();
		/* A map keyed by custom property name, with a list of all variables that use it */
		const relationships = new Map();

		function trackRelationships(decl) {
			const isCustomProperty = decl.prop.startsWith("--");
			const usedInDecl = new Set();

			// Parse value and get a list of variables used
			const parsed = valuesParser.parse(decl.value);
			parsed.walk((node) => {
				if (node.type !== "func" || node.name !== "var" || !node.nodes.length) {
					return;
				}

				const varName = node.nodes[0].value;

				usedInDecl.add(varName);
				usedAnywhere.add(varName);

				if (!isCustomProperty) {
					usedInProps.add(varName);
				}
			});

			// Store every variable referenced by this var
			if (isCustomProperty && usedInDecl.size > 0) {
				for (let varName of usedInDecl) {
					const previous = relationships.has(varName) ? relationships.get(varName) : [];
					relationships.set(varName, [...new Set([...previous, decl.prop])]);
				}
			}
		}

		function cleanOrReport(decl, message = messages.expected) {
			if (context.fix) {
				decl.remove();
			}
			else {
				report({
					message,
					messageArgs: [decl.prop],
					node: decl,
					result,
					ruleName,
				});
			}
		}

		/* Collect a set of all allowed passthroughs */
		const allowedPassthroughs = new Set();
		root.walkComments((comment) => {
			const startRegex = /^\s*@passthroughs?(\s+start)?/g;
			const endRegex = /^\s*@passthroughs?\s+end/g;

			if (!/@passthrough/g.test(comment.text)) return;

			// Look for a start or end indicator
			const start = startRegex.test(comment.text);
			const end = endRegex.test(comment.text);

			let nextLine = comment.next();

			// If there is neither a start, nor end identifier, capture the next line
			if (!start && !end && nextLine && nextLine.type === "declaration" && nextLine.prop.startsWith("--")) {
				allowedPassthroughs.add(nextLine.prop);
			}

			if (!start || end) return;

			// If this comment is a start indicator, capture the declarations after it until the end indicator
			while (nextLine) {
				switch(nextLine.type) {
					case "rule":
						nextLine = nextLine.nodes[0];
						break;
					case "decl":
						if (nextLine.prop.startsWith("--")) {
							allowedPassthroughs.add(nextLine.prop);
						}
					// eslint-disable-next-line no-fallthrough -- intentional fallthrough
					default:
						nextLine = nextLine.next();
				}
			}
		});

		/* Collect variable use information */
		root.walkDecls((decl) => trackRelationships(decl));

		/* Iterate through custom properties declared and report on their usage */
		root.walkDecls(/^--/, (decl) => {
			// No need to report on ignored properties or those used as passthroughs
			const isIgnored = ignoreList.length ? ignoreList.some((regex) => regex.test(decl.prop)) : false;
			const isPassthrough = allowedPassthroughs.has(decl.prop);

			if (isIgnored || isPassthrough) return;

			// If this variable is used in a CSS property, don't report it
			if (usedInProps.has(decl.prop)) return;

			// Check if this variable is not used anywhere in the file
			// or is used by a CSS property (NOT a variable)
			if (!usedAnywhere.has(decl.prop)) {
				cleanOrReport(decl);
				return;
			}

			// Check if this variable is not used by another variable
			if (!relationships.has(decl.prop) || relationships.get(decl.prop)?.length === 0) return;

			// Then iterate through all the variables that use it and check if they are used anywhere
			const relatives = relationships.get(decl.prop);
			// Check if everything that references this variable has been removed
			const keep = relatives.reduce((keep, relatedVar) => {
				if (usedAnywhere.has(relatedVar)) return true;
				if (allowedPassthroughs.has(relatedVar)) return true;
				if(usedInProps.has(relatedVar)) return true;

				return keep;
			}, false);

			if (keep) return;

			cleanOrReport(decl, messages.referenced);
		});
	};
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;

export default createPlugin(ruleName, ruleFunction);
