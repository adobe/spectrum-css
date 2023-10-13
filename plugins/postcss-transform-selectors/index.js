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

const processed = Symbol("processed");

/** @type import('postcss').PluginCreator */
module.exports = ({ replace, transform }) => ({
    postcssPlugin: "postcss-transform-selectors",
    Rule(rule) {
        /* Skip if this has already been processed */
        if (rule[processed]) return;

        const warn = (message, word) =>
            rule.warn(message, {
                word,
                index: rule.sourceIndex,
                endIndex: rule.sourceIndex + rule.selector.length,
            });

        let hasUpdated = false;
        let selectors = rule.selectors.map((selector) => {
            if (typeof replace === "undefined" && typeof transform === "undefined") {
                return selector;
            }

            let updatedValue = selector.toString();
            if (typeof replace !== "undefined") {
                if (!Array.isArray(replace)) {
                    if (typeof replace === "string") {
                        replace = [
                            {
                                search: "*", // replace all
                                replace,
                            },
                        ];
                    } else {
                        warn(`Invalid replace type "${typeof replace}", expects an array or string`, replace);
                    }
                } else {
                    for (let r of replace) {
                        if (typeof r.replace !== "string") {
                            warn(`Invalid replace type "${typeof r.replace}", expects a string`, r.replace);
                            continue;
                        }

                        if (typeof r.search === "string") {
                            // always replace globally for strings
                            r.search = new RegExp(r.search, "g");
                        }

                        updatedValue = updatedValue.replace(r.search, r.replace);
                    }
                }
            }

            if (typeof transform === "function") {
                updatedValue = transform(updatedValue, rule);
            }

            hasUpdated = Boolean(updatedValue !== selector.toString());

            return updatedValue;
        });

        if (!hasUpdated) return;

        rule.assign({
            // This allows us to pass in comma separated selectors during the transform
            selectors: selectors.map((selector) => selector.split(",").map((s) => s.trim())).flat(),
        });
        rule[processed] = true;
    },
});

module.exports.postcss = true;
