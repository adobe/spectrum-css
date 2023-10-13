/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * from:
 * .spectrum-Accordion-itemIndicator { transform: logical rotate(0deg); }
 *
 * to:
 * @note: ltr is not necessary b/c it's a 0deg rotation...
 * [dir="rtl"] .spectrum-Accordion-itemIndicator { transform: matrix(-1, 0, 0, 1, 0, 0); }
 * @todo: .spectrum-Accordion-itemIndicator:dir(rtl) { transform: matrix(-1, 0, 0, 1, 0, 0); }
 *
 * from:
 * .spectrum-Accordion-item.is-open > .spectrum-Accordion-itemHeading > .spectrum-Accordion-itemIndicator { transform: logical rotate(90deg); }
 *
 * to:
 * [dir="ltr"] .spectrum-Accordion-item.is-open > .spectrum-Accordion-itemHeading > .spectrum-Accordion-itemIndicator { transform: rotate(90deg); }
 * [dir="rtl"] .spectrum-Accordion-item.is-open > .spectrum-Accordion-itemHeading > .spectrum-Accordion-itemIndicator { transform: matrix(-1, 0, 0, 1, 0, 0) rotate(90deg); }
 */

const processed = Symbol("processed");

const selectorParser = require("postcss-selector-parser");
const valueParser = require("postcss-value-parser");

/** @type import('postcss').PluginCreator */
module.exports = ({ keyword = "logical", useDirPseudo = false } = {}) => ({
    postcssPlugin: "postcss-transform-logical",
    /**
     * @type import('postcss').Processors.Declaration
     * @description Look for transform properties with the logical keyword
     * and if found, add a direction to the selector and update the transform
     */
    Declaration: {
        transform: (decl) => {
            /* Skip if we've already processed this declaration */
            if (decl[processed]) return;

            // We only process the transform if it includes the keyword
            if (!decl.value.includes(keyword)) return;

            // These are the values for the updated transforms after parsing
            const ltrTransforms = [];
            const rtlTransforms = ["matrix(-1, 0, 0, 1, 0, 0)"];

            const rule = decl.parent;
            let rtlClone = decl.clone();

            // We need to walk the values to find the functions
            const values = valueParser(decl.value);

            if (!values || values.nodes.length === 0) {
                decl.warn(result, `could not parse ${decl.value}`, {
                    word: decl.value,
                    index: decl.sourceIndex,
                    endIndex: decl.sourceIndex + decl.value.length,
                });
                return;
            }

            values.walk((val, idx) => {
                // If the first value is not the keyword, skip the declaration entirely
                if (idx === 0 && val.value !== keyword) return false;
                if (val.type !== "function") {
                    if (val.value === keyword) return;
                    // If if it's not a function, it's likely a keyword such as inherit or none
                    return false;
                }

                if (["matrix"].includes(val.value)) {
                    throw decl.error(`logical flips cannot be performed on transforms that use ${val.value}()`, {
                        word: val.value,
                        index: val.sourceIndex,
                        endIndex: val.sourceIndex + val.value.length,
                    });
                }

                const valueString = valueParser.stringify(val);

                // If the function is not rotate, we just copy it to both LTR and RTL
                if (val.value !== "rotate") {
                    ltrTransforms.push(valueString);
                    rtlTransforms.push(valueString);
                    return;
                }

                // If the function is rotate, we need to check the value
                // If it's 0deg, we don't need to add it to either LTR or RTL
                // If it's not 0deg, we need to add it to both LTR and RTL
                const rotation = valueParser.unit(val.nodes[0]?.value);
                // Throw an error if we can't parse the rotation value
                if (!rotation || !rotation.number || typeof parseInt(rotation.number, 10) !== "number") {
                    throw decl.error("could not parse the provided rotation value", {
                        plugin: this.postcssPlugin,
                        word: val.nodes[0]?.value,
                        index: val.sourceIndex,
                        endIndex: val.sourceIndex + val.value.length,
                    });
                }

                if (parseInt(rotation.number, 10) !== 0) {
                    ltrTransforms.push(valueString);
                    rtlTransforms.push(valueString);
                }
            }, true);

            // Update the ltr transforms if necessary or remove if none were preserved
            if (ltrTransforms.length > 0) {
                decl.assign({
                    value: ltrTransforms.join(" "),
                });
            } else {
                decl.remove();
            }

            /* Flag that this declaration has been processed */
            decl[processed] = true;

            if (rtlTransforms.length === 0) return;

            const result = selectorParser((selectors) => {
                selectors.each((selector) => {
                    if (selector.type !== "selector") return;
                    if (useDirPseudo) {
                        selector.append(
                            selectorParser.pseudo({
                                value: ":dir",
                                nodes: ["rtl"],
                                sourceIndex: selector.sourceIndex,
                            }),
                        );
                    } else {
                        selector.insertAfter(
                            selector,
                            selectorParser.attribute({
                                attribute: "dir",
                                operator: "=",
                                value: '"rtl"',
                                quoteMark: '"',
                                sourceIndex: selector.sourceIndex,
                                spaces: {
                                    after: " ",
                                },
                            }),
                        );
                    }

                    return;
                });
            }).processSync(rule.selector, { lossless: false });

            if (!result) return;

            rule.cloneAfter({
                selector: result.toString(),
                raws: {
                    before: "\n",
                },
                nodes: [
                    rtlClone.assign({
                        value: rtlTransforms.join(" "),
                    }),
                ],
            });
        },
    },
});

module.exports.postcss = true;
