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

const {
  createPlugin,
  utils: { report, ruleMessages, validateOptions }
} = require("stylelint");

require("colors");

const ruleName = "spectrum-tools/no-missing-var";
const messages = ruleMessages(ruleName, {
    expected: (property) => `Missing ${'var'.yellow} function around custom property ${property.magenta}`,
});

/** @type {import('stylelint').Plugin} */
const ruleFunction = (enabled, _options, context) => {
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

        root.walkDecls((decl) => {
            const value = decl.value.replace(/\s/g, ""); // Remove whitespace
            if (!value) return;

            const regex = /(?<!var\(\S*)--\S+\b/;
            if (regex.test(value)) {
                if (context.fix) {
                    decl.value = value.replace(regex, `var(${value.match(regex)[0]})`);
                } else {
                    const prop = value.match(regex)?.[0];
                    if (!prop) return;

                    report({
                        message: messages.expected(prop),
                        node: decl,
                        result,
                        ruleName,
                    });
                }
            }
        });
    };
};

module.exports.ruleName = ruleName;
module.exports.messages = messages;

module.exports = createPlugin(ruleName, ruleFunction);
