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

const ruleName = "spectrum-tools/no-missing-var";
const messages = {
    expected: (property) => `Missing 'var' before custom property "${property}"`,
};

const plugin = stylelint.createPlugin(ruleName, (enabled, _options, context) => {
    return (root, result) => {
        if (!enabled) return;

        root.walkDecls((decl) => {
            const value = decl.value.replace(/\s/g, ""); // Remove whitespace
            const regex = /(?<!var\(\S*)--\S+\b/;
            if (regex.test(value)) {
                if (context.fix) {
                    decl.value = value.replace(regex, `var(${value.match(regex)[0]})`);
                } else {
                    stylelint.utils.report({
                        message: messages.expected(value.match(regex)[0]),
                        node: decl,
                        result,
                        ruleName,
                    });
                }
            }
        });
    };
});

module.exports = plugin;
module.exports.ruleName = ruleName;
module.exports.messages = messages;
