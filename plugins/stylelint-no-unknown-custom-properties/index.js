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

import { existsSync, readFileSync } from "fs";
import { createRequire } from "module";
import { extname, join, sep } from "path";
const require = createRequire(import.meta.url);

import stylelint from "stylelint";
import { isBoolean, isRegExp, isString } from "stylelint/lib/utils/validateTypes.mjs";

const {
	createPlugin,
	utils: { report, ruleMessages, validateOptions }
} = stylelint;

import "colors";

const ruleName = "spectrum-tools/no-unknown-custom-properties";
const messages = ruleMessages(ruleName, {
	expected: (prop) => `Custom property ${prop.magenta} not defined`,
});

import { parse } from "postcss";
import valuesParser from "postcss-values-parser";

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
					ignoreList: [isString, isRegExp],
					skipDependencies: isBoolean,
				},
				optional: true,
			},
		);

		if (!validOptions) return;

		const { ignoreList = [], skipDependencies = true } = options;

		const sourceFile = root.source.input.file;
		const parts = sourceFile ? sourceFile.split(sep) : [];

		// @todo this is a hard-coded assumption that the components directory is the root before the component name
		const rootIdx = parts.indexOf("components");
		const componentRoot = parts.slice(0, rootIdx + 2).join(sep);

		// We should only be checking entry-points, i.e. index.css files
		// because others are likely to be partials or imported into main
		if (rootIdx && typeof sourceFile !== "undefined" && !sourceFile.endsWith("index.css")) return;

		const sharedDefinitions = new Set();

		function fetchResolutions(depName) {
			let req;
			try {
				req = require.resolve(depName);
			}
			catch (e) {
				/* allow quiet failure for peer dependencies */
			}

			// @note: if this is failing, it's likely b/c the dependency isn't built locally
			if (!existsSync(req)) return;

			const content = readFileSync(req, "utf8");
			if (!content) return;

			// If the file is a CSS file, parse it for custom properties
			if (extname(req) === ".css") {
				// Fetch all defined custom properties
				parse(content).walkDecls(/^--/, ({ prop }) => {
					sharedDefinitions.add(prop);
				});
			}
			else if (extname(req) === ".json") {
				const data = JSON.parse(content);
				Object.keys(data).forEach((key) => {
					if (typeof key !== "string") return;
					if (!key.startsWith("--")) {
						sharedDefinitions.add(`--spectrum-${key.replace(".", "-")}`);
					}
					else {
						sharedDefinitions.add(key);
					}
				});
			}
		}

		// Check dependencies for custom properties
		if (!skipDependencies && rootIdx > -1) {
			// @todo this is a hard-coded assumption
			const pkg = require(join(componentRoot, "package.json"));

			if (!pkg) return;

			const allDependencies = new Set([
				...(Object.keys(pkg.peerDependencies ?? {}) ?? []),
				...(Object.keys(pkg.dependencies ?? {}) ?? []),
				...(Object.keys(pkg.devDependencies ?? {}) ?? []),
			]);

			if (allDependencies.size === 0) return;

			for (const dep of [...allDependencies]) {
				try {
					fetchResolutions(dep);
				}
				catch (e) {/* allow quiet failure for peer dependencies */}
			}
		}

		/** @type {Set<string>} */
		const localDefinitions = new Set();
		root.walkDecls(/^--/, ({ prop }) => {
			localDefinitions.add(prop);
		});

		/* Collect variable use information */
		root.walkDecls((decl) => {
			// Parse value and get a list of variables used
			const parsed = valuesParser.parse(decl.value);
			parsed.walk((node) => {
				if (node.type !== "func" || node.name !== "var") {
					return;
				}

				const [firstNode, secondNode] = node.nodes;

				if (!firstNode) return;

				const isIgnored = ignoreList && ignoreList.length > 0 && ignoreList.some((regex) => regex.test(firstNode.value));
				if (isIgnored) return;

				if (localDefinitions.has(firstNode.value)) return;
				if (sharedDefinitions.has(firstNode.value)) return;

				// Second node (div) indicates fallback exists in all cases
				if (secondNode && secondNode.type === "div") return;

				return report({
					message: messages.expected,
					messageArgs: [firstNode.value],
					node: decl,
					result,
					ruleName,
				});
			});
		});
	};
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;

export default createPlugin(ruleName, ruleFunction);
