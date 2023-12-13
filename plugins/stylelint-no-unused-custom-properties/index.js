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

const stylelint = require("stylelint");

const ruleName = "spectrum-tools/no-unused-custom-properties";
const messages = stylelint.utils.ruleMessages(ruleName, {
    expected: (prop) => `Unused custom property ${prop} defined`,
});

const valueParser = require("postcss-value-parser");

/** @type {import('stylelint').Rule<Record<string, string | RegExp | Array<string | RegExp>>>} */
const plugin = stylelint.createPlugin(ruleName, (enabled, { allowList = [], ignoreList = [] } = {}, context) => {
    return (root, result) => {
        if (!enabled) return;

        const validOptions = stylelint.utils.validateOptions(
            result,
            ruleName,
            {
                actual: ignoreList,
                possible: [String, RegExp],
            },
            {
                actual: allowList,
                possible: [String, RegExp],
            },
        );

        if (!validOptions) return;

        const usedAnywhere = new Set();
        const usedInProps = new Set();
        const relationships = new Map();

        function trackRelationships(decl) {
            const usedInDecl = new Set();

            // Parse value and get a list of variables used
            const parsed = valueParser(decl.value);
            parsed.walk((node) => {
                if (node.type !== "function" || node.value !== "var" || !node.nodes.length) {
                    return;
                }

                const varName = node.nodes[0].value;

                usedInDecl.add(varName);
                usedAnywhere.add(varName);

                if (decl.prop.startsWith("--")) {
                    usedInProps.add(varName);
                }
            });

            // Store every variable referenced by this var
            if (decl.prop.startsWith("--") && usedInDecl.size > 0) {
                for (let varName of usedInDecl) {
                    const previous = relationships.has(varName) ? relationships.get(varName) : [];
                    relationships.set(varName, [...new Set([...previous, decl.prop])]);
                }
            }
        }

        /* Collect a set of all allowed passthroughs */
        const allowedPassthroughs = new Set();
        root.walkComments((comment) => {
            if (!/^\s*@passthroughs?\s*(\s+start)?/g.test(comment.text)) return;

            // Look for a start or end indicator
            const start = /^\s*@passthroughs?\s+start/.test(comment.text);
            const end = /^\s*@passthroughs?\s+end/.test(comment.text);

            let nextLine = comment.next();

            // If there is neither a start, nor end identifier, capture the next line
            if (!start && !end && nextLine && nextLine.type === "declaration" && nextLine.prop.startsWith("--")) {
                allowedPassthroughs.add(nextLine.prop);
                trackRelationships(nextLine);
            }

            if (!start || end) return;

            // If this comment is a start indicator, capture the declarations after it until the end indicator
            while (nextLine) {
                if (nextLine.type === "decl" && nextLine.prop.startsWith("--")) {
                    allowedPassthroughs.add(nextLine.prop);
                    trackRelationships(nextLine);
                } else if (nextLine.type === "comment" && /^\s*@passthroughs?\s*(\s+end)?$/.test(nextLine.text)) {
                    break;
                }

                nextLine = nextLine.next();
            }
        });

        /* Collect variable use information */
        root.walkDecls((decl) => trackRelationships(decl));

        root.walkDecls(/^--/, (decl) => {
            // Check if this variable is unused
            if (
                !usedAnywhere.has(decl.prop) &&
                !(ignoreList.length ? ignoreList.some((regex) => regex.test(decl.prop)) : true) &&
                (allowList.length ? allowList.some((regex) => regex.test(decl.prop)) : true) &&
                !allowedPassthroughs.has(decl.prop)
            ) {
                if (context.fix) {
                    decl.remove();
                } else {
                    stylelint.utils.report({
                        message: messages.expected,
                        messageArgs: [decl.prop],
                        node: decl,
                        result,
                        ruleName,
                    });
                }

                return;
            }

            if (usedInProps.has(decl.prop)) return;

            // Drop a variable if everything that references it has been removed
            if (!relationships.has(decl.prop)) return;
            const relatives = relationships.get(decl.prop);

            // Check if everything that references this variable has been removed
            const keep = relatives.reduce((keep, relatedVar) => {
                if (usedAnywhere.has(relatedVar) || allowedPassthroughs.has(relatedVar)) return true;
                return keep;
            }, false);

            if (keep) return;

            if (context.fix) {
                decl.remove();
            } else {
                stylelint.utils.report({
                    message: messages.expected,
                    messageArgs: [decl.prop],
                    node: decl,
                    result,
                    ruleName,
                });
            }
        });
    };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;

module.exports = plugin;
