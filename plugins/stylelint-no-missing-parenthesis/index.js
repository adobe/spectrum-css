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

const ruleName = "spectrum-tools/no-missing-parenthesis";
const messages = stylelint.utils.ruleMessages(ruleName, {
    expected: (value) => `Missing or extra parentheses in "${value}"`,
});

/** @type {import('stylelint').Plugin} */
const plugin = stylelint.createPlugin(ruleName, (enabled) => {
    return (root, result) => {
        if (!enabled) return;

        root.walkDecls((decl) => {
            if ((decl.value.match(/\(/g) || []).length !== (decl.value.match(/\)/g) || []).length) {
                stylelint.utils.report({
                    message: messages.expected,
                    messageArgs: [decl.value],
                    node: decl,
                    result,
                    ruleName,
                });
            }
        });
    };
});

exports.ruleName = ruleName;
exports.messages = messages;

module.exports = plugin;
