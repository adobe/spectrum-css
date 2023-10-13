/*!
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const path = require("path");

const postcss = require("postcss");
const prettier = require("prettier");

const selectorParser = require("postcss-selector-parser");

const isCompoundSelector = (node) => {
    let ret = false;
    selectorParser((selectors) => {
        if (selectors.length > 1) ret = true;
    }).processSync(node.selector);
    return ret;
};

const hasType = (node, type) => {
    let ret = false;
    selectorParser((selectors) => {
        selectors.each((s) => {
            if (s.nodes.some((n) => n.type === type)) {
                ret = true;
            }
        });
    }).processSync(node.selector);
    return ret;
};

const hasModifier = (node, exceptions = []) => {
    let ret = false;
    selectorParser((selectors) => {
        selectors.each((s) => {
            s.nodes.forEach((n) => {
                if (n.type !== "class") return;
                if (n.value.includes("--") && !exceptions.some((e) => e.test(n.value))) {
                    ret = true;
                }
            });
        });
    }).processSync(node.selector);
    return ret;
};

const isRoot = (node) => {
    let ret = false;
    selectorParser((selectors) => {
        selectors.each((s) => {
            s.nodes.forEach((n) => {
                if (n.type !== "class") return;
                if ([/^spectrum$/, /^spectrum--express$/].some((e) => e.test(n.value))) {
                    ret = true;
                }
            });
        });
    }).processSync(node.selector);
    return ret;
};

// Capture the longest selector length in the set
const selectorLength = (node) => {
    let ret = 0;
    selectorParser((selectors) => {
        selectors.each((s) => {
            if (s.nodes.length > ret) ret = s.nodes.length;
        });
    }).processSync(node.selector);
    return ret;
};

/** @type import('postcss').ConfigFn */
module.exports = () => ({
    postcssPlugin: "postcss-prettier",
    async OnceExit(root) {
        /**
         * compareFn(a, b) return value	sort order
         *    > 0     sort a after b, e.g. [b, a]
         *    < 0     sort a before b, e.g. [a, b]
         *    === 0   keep original order of a and b
         */
        root.nodes.sort((a, b) => {
            // AtRules go to the bottom
            if (a.type === "atrule" && b.type === "rule") return 1;
            if (a.type === "rule" && b.type === "atrule") return -1;

            if (a.type === "rule" && b.type === "rule") {
                if (isRoot(a) && !isRoot(b)) return -1;
                if (!isRoot(a) && isRoot(b)) return 1;

                // Push pseudo selectors down
                if (hasType(a, "pseudo") && !hasType(b, "pseudo")) return 1;
                if (!hasType(a, "pseudo") && hasType(b, "pseudo")) return -1;

                // Sort by selector length
                if (selectorLength(a) > selectorLength(b)) return 1;
                if (selectorLength(a) < selectorLength(b)) return -1;

                // Push modifiers down
                const exceptions = [/--express$/];
                if (hasModifier(a, exceptions) && !hasModifier(b, exceptions)) return 1;
                if (!hasModifier(a, exceptions) && hasModifier(b, exceptions)) return -1;

                // Push compound selectors down
                if (isCompoundSelector(a) && !isCompoundSelector(b)) return -1;
                if (!isCompoundSelector(a) && isCompoundSelector(b)) return 1;
            }

            return 0;
        });

        const cwd = root.source.input.file ? path.dirname(root.source.input.file) : process.cwd();
        const options = await prettier.resolveConfig(cwd);
        const cleanRoot = await prettier
            .format(root.toString(), {
                ...options,
                parser: "css",
            })
            .then((result) => postcss.parse(result));

        root.removeAll();
        root.append(cleanRoot);
    },
});

module.exports.postcss = true;
