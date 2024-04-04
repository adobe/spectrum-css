/*!
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const path = require("path");
const fs = require("fs");

const {
	createPlugin,
	utils: { report, ruleMessages, validateOptions }
} = require("stylelint");

const { isString, isRegExp, isBoolean } = require("stylelint/lib/utils/validateTypes");

require("colors");

const ruleName = "spectrum-tools/no-unknown-custom-properties";
const messages = ruleMessages(ruleName, {
	expected: (prop) => `Custom property ${prop.magenta} not defined`,
});

const fg = require("fast-glob");
const postcss = require("postcss");
const valueParser = require("postcss-value-parser");

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

		/** @type {Set<string>} */
		const localDefinitions = new Set();
		root.walkDecls(/^--/, ({ prop }) => {
			localDefinitions.add(prop);
		});

		const sourceFile = root.source.input.file;
		const parts = sourceFile ? sourceFile.split(path.sep) : [];

		// @todo this is a hard-coded assumption that the components directory is the root before the component name
		const rootIdx = parts.indexOf("components");
		const componentRoot = parts.slice(0, rootIdx + 2).join(path.sep);

		const sharedDefinitions = new Set();

		for (const themePath of fg.sync(["themes/*.css"], { cwd: componentRoot, absolute: true })) {
			const content = fs.readFileSync(themePath, "utf8");
			if (!content) continue;
			postcss.parse(content).walkDecls(/^--/, ({ prop }) => {
				sharedDefinitions.add(prop);
			});
		}

		function fetchResolutions(depName) {
			let req;
			try {
				req = require.resolve(depName, {
					paths: [
						path.join(componentRoot, "node_modules"), path.join(__dirname, "../../node_modules")
					]
				});
			} catch (e) {
				/* allow quiet failure for peer dependencies */
			}

			// @note: if this is failing, it's likely b/c the dependency isn't built locally
			if (!fs.existsSync(req)) return;

			const content = fs.readFileSync(req, "utf8");
			if (!content) return;

			// Fetch all defined custom properties
			postcss.parse(content).walkDecls(/^--/, ({ prop }) => {
				sharedDefinitions.add(prop);
			});
		}

		// Check dependencies for custom properties
		if (!skipDependencies && rootIdx > -1) {
			// @todo this is a hard-coded assumption
			const pkg = require(path.join(componentRoot, "package.json"));

			if (!pkg) return;

			const allDependencies = new Set([
				...(Object.keys(pkg.peerDependencies ?? {}) ?? []),
				...(Object.keys(pkg.dependencies ?? {}) ?? []),
			]);

			if (allDependencies.size === 0) return;

			// @todo this is a hard-coded assumption that we only care about spectrum-css dependencies
			for (const dep of [...allDependencies].filter(dep => dep.startsWith("@spectrum-css"))) {
				try {
					if (!dep.endsWith("vars")) fetchResolutions(dep);
					else {
						for (const d of ["spectrum-global.css", "components/index.css"]) {
							fetchResolutions(`${dep}/dist/${d}`);
						}
					}
				} catch (e) {
					/* allow quiet failure for peer dependencies */
				}
			}
		}

		/* Collect variable use information */
		root.walkDecls((decl) => {
			// Parse value and get a list of variables used
			const parsed = valueParser(decl.value);
			parsed.walk((node) => {
				if (node.type !== "function" || node.value !== "var") {
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

module.exports.ruleName = ruleName;
module.exports.messages = messages;

module.exports = createPlugin(ruleName, ruleFunction);
