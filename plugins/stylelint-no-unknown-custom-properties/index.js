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

const stylelint = require("stylelint");

const ruleName = "spectrum-tools/no-unknown-custom-properties";
const messages = stylelint.utils.ruleMessages(ruleName, {
    expected: (prop) => `Custom property '${prop}' not defined`,
});

const postcss = require("postcss");
const valueParser = require("postcss-value-parser");

/** @type {import('stylelint').Plugin} */
const plugin = stylelint.createPlugin(ruleName, (enabled, { ignore = [], checkDependencies = false } = {}) => {
    return (root, result) => {
        const validOptions = stylelint.utils.validateOptions(
            result,
            ruleName,
            {
                actual: enabled,
                possible: [Boolean, null],
            },
            {
                actual: ignore,
                possible: [String, RegExp],
            },
            {
                actual: checkDependencies,
                possible: [Boolean],
            },
        );

        if (!validOptions) return;

        /** @type {Set<string>} */
        const localDefinitions = new Set();
        const sharedDefinitions = new Set();

        root.walkDecls(/^--/, ({ prop }) => {
            localDefinitions.add(prop);
        });

        const sourceFile = root.source.input.file;
        const parts = sourceFile ? sourceFile.split(path.sep) : [];
        const rootIdx = parts.indexOf("components");
        const componentRoot = parts.slice(0, rootIdx + 2).join(path.sep);

        function fetchResolutions(depName) {
            const req = require.resolve(depName, { paths: [componentRoot] });
            if (!fs.existsSync(req)) return;

            const content = fs.readFileSync(req, "utf8");
            if (!content) return;

            postcss.parse(content).walkDecls(/^--/, ({ prop }) => {
                sharedDefinitions.add(prop);
            });
        }

        if (checkDependencies && rootIdx > -1) {
            const pkg = require(path.join(componentRoot, "package.json"));

            if (!pkg) return;

            const allDependencies = new Set([
                ...(Object.keys(pkg.peerDependencies ?? {}) ?? []),
                ...(Object.keys(pkg.devDependencies ?? {}) ?? []),
                ...(Object.keys(pkg.dependencies ?? {}) ?? []),
            ]);

            if (allDependencies.size === 0) return;

            allDependencies.forEach((dep) => {
                if (!dep.startsWith("@spectrum-css")) return;

                if (dep.endsWith("vars")) {
                    ["spectrum-global.css", "components/index.css"].forEach((d) => {
                        try {
                            fetchResolutions(`${dep}/dist/${d}`);
                        } catch (e) {
                            /* allow quiet failure for peer dependencies */
                        }
                    });
                } else {
                    try {
                        fetchResolutions(dep);
                    } catch (e) {
                        /* allow quiet failure for peer dependencies */
                    }
                }
            });
        }

        if (fs.existsSync(path.join(componentRoot, "themes/spectrum.css"))) {
            const content = fs.readFileSync(path.join(componentRoot, "themes/spectrum.css"), "utf8");
            const peerRoot = postcss.parse(content);
            peerRoot.walkDecls(/^--/, ({ prop }) => {
                sharedDefinitions.add(prop);
            });
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
                if (ignore.some((regex) => regex.test(firstNode.value))) return;
                if (localDefinitions.has(firstNode.value)) return;
                if (sharedDefinitions.has(firstNode.value)) return;

                // Second node (div) indicates fallback exists in all cases
                if (secondNode && secondNode.type === "div") return;

                return stylelint.utils.report({
                    message: messages.expected,
                    messageArgs: [firstNode.value],
                    node: decl,
                    result,
                    ruleName,
                });
            });
        });
    };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;

module.exports = plugin;
