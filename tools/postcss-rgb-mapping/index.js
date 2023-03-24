/*!
 * Copyright 2023 Adobe. All rights reserved.
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

/** @typedef {object} Options */

/**
 * @type {import('postcss').PluginCreator<Options>}
 * @param {Options} options
 * @returns {import('postcss').Plugin}
 */
module.exports = () => {
    return {
        postcssPlugin: 'postcss-rgb-mapping',
        /** @type {import('postcss').DeclarationProcessor} */
        DeclarationExit(decl, { css }) {
            const { prop, value } = decl;
            /*
             * If the property is not a custom prop, or
             * if the property is a custom prop and ends with 'rgb', or
             * if the value is not an rgb or rgba value, or
             * if the value is an rgba value with a var() function
             * then return without processing.
             */
            if (
                !prop.startsWith('--') ||
                prop.endsWith('rgb') ||
                !value.startsWith('rgb') ||
                value.includes('rgba(var(')
            ) return;

            /* Grep out the r, g, b, and a values from the value */
            const [,r,g,b,a] = value?.match(/rgba?\(([0-9]+), ?([0-9]+), ?([0-9]+)(?:, ?([0-1]|0\.[0-9]+))?\)/);

            /* If any of the values are undefined, return without processing */
            if (!r || !g || !b) {
                css.warn(`Unable to parse out rgb values: ${value}`, { node: decl });
                return;
            }

            /* Create a new declaration with the rgb values separated out */
            decl.cloneBefore({
                prop: `${prop}-rgb`,
                value: `${r}, ${g}, ${b}`,
            });

            /* Update the original declaration value to point to the new variable */
            if (a) {
                decl.cloneBefore({
                    prop: `${prop}-opacity`,
                    value: a,
                });
            }
            decl.assign({
                value: `rgba(var(${prop}-rgb)${a ? `, var(${prop}-opacity)` : ''})`,
            });

            return;
        },
    };
};

module.postcss = true;
