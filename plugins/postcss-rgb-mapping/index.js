/*!
 * Copyright 2023. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const valueParser = require("postcss-value-parser");
const processed = Symbol("processed");

/** @typedef {object} Options */

/**
 * @type {import('postcss').PluginCreator<Options>}
 * @param {Options} options
 * @returns {import('postcss').Plugin}
 */
module.exports = () => ({
    postcssPlugin: "postcss-rgb-mapping",
    /** @type {import('postcss').DeclarationProcessor} */
    Declaration(decl) {
        if (decl[processed]) return;

        const { prop, value } = decl;

        /* Determine if this property is a custom property */
        const isCustomProp = prop.startsWith("--");

        /* Parse the value for it's parts */
        const parsedValue = valueParser(value) || [];
        /* Determine if the value has an rgb or rgba value */
        const hasRGBValue = parsedValue.nodes.length
            ? parsedValue.nodes.some(
                  (node) => node.type === "function" && ["rgb", "rgba"].some((func) => node.value === func),
              )
            : false;

        /*
         * If the property is not a custom prop, or
         * if the property is a custom prop and ends with 'rgb', or
         * if the value is not an rgb or rgba value, or
         * if the value is an rgba value with a var() function
         * then return without processing.
         */
        if (!isCustomProp || !hasRGBValue || parsedValue.nodes.length === 0) {
            return;
        }

        const rgba = parsedValue.nodes.find(
            (node) => node.type === "function" && ["rgb", "rgba"].some((func) => node.value === func),
        );

        const [r, g, b, a] = rgba.nodes.reduce((acc, node) => {
            if (node.type === "word" && node.value) acc.push(node.value);
            return acc;
        }, []);

        /* If any of the values are undefined, return without processing */
        if (!r || !g || !b) return;

        /* Create a new declaration with the rgb values separated out */
        const rgbProp = decl.cloneBefore({
            prop: `${prop}-rgb`,
            value: `${r}, ${g}, ${b}`,
        });

        rgbProp[processed] = true;

        /* Update the original declaration value to point to the new variable */
        if (a) {
            const opacity = decl.cloneBefore({
                prop: `${prop}-opacity`,
                value: a,
            });
            opacity[processed] = true;
        }

        decl.assign({
            value: `rgba(var(${prop}-rgb)${a ? `, var(${prop}-opacity)` : ""})`,
        });
        decl[processed] = true;
    },
});

module.exports.postcss = true;
