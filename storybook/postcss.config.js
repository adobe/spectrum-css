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

/**
 * @todo: Importing commons assets such as extends brings along all their comments
 * which is not ideal. We should be able to strip them out or make the extends available
 * to all components without having to import them.
 */

const { join } = require("path");

/**
 * @description This PostCSS config determines which file
 * to load based on env variable
 * @type import('postcss-load-config').ConfigFn
 */
module.exports = ({ env = "development", file, options = {} }) => {
    const isProduction = Boolean(env === "production");

    const isNodeModules = Boolean(file.dirname && file.dirname.includes("node_modules"));
    if (isNodeModules)
        return {
            ...options,
            plugins: {},
        };

    return {
        ...options,
        plugins: {
            /* --------------------------------------------------- */
            /* ------------------- IMPORTS ---------------- */
            /** @link https://github.com/postcss/postcss-import#postcss-import */
            "postcss-import": {
                root: process.cwd(),
                addModulesDirectories: [join(process.cwd(), "node_modules"), join(__dirname, "node_modules")],
            },
            /* --------------------------------------------------- */
            /* ------------------- POLYFILLS --------------------- */
            /** @note [CSS-289] Coordinating with SWC */
            // "postcss-hover-media-feature": {},
            /**
             * @todo should we be documenting this for downstream users rather
             * than polyfilling the features ourselves? what if they want to
             * use a different support matrix?
             *
             * @note stage 2 (default); stage 4 === stable
             * @link https://github.com/csstools/postcss-plugins
             * @link https://preset-env.cssdb.org/features/#stage-2
             */
            "postcss-preset-env": !isProduction
                ? {
                      stage: 3,
                      env,
                      features: {
                          "logical-properties-and-values": false,
                          clamp: true,
                          "color-functional-notation": true,
                          "dir-pseudo-class": { preserve: true },
                          "nesting-rules": false, // { noIsPseudoSelector: true },
                          // "focus-visible-pseudo-class": true,
                          // https://github.com/jsxtools/focus-within
                          "focus-within-pseudo-class": true,
                          "font-format-keywords": true,
                          "not-pseudo-class": true,
                          "opacity-percentage": true,
                          // https://github.com/csstools/postcss-plugins/tree/main/plugins/css-prefers-color-scheme
                          "prefers-color-scheme-query": true,
                      },
                  }
                : {},
            /* --------------------------------------------------- */
            /* ------------------- CLEAN-UP TASKS ---------------- */
            "postcss-discard-comments": {
                removeAll: isProduction,
            },
            cssnano: {
                preset: [
                    "lite",
                    {
                        normalizeWhitespace: false,
                        discardComments: true,
                        orderedValues: {},
                        mergeRules: {},
                        uniqueSelectors: {},
                        cssDeclarationSorter: {},
                    },
                ],
            },
            /* Ensure the license is at the top of the file */
            "postcss-licensing": {
                filename: "COPYRIGHT",
                cwd: __dirname,
                skipIfEmpty: true,
            },
            /* --------------------------------------------------- */
            /* ------------------- REPORTING --------------------- */
            "@spectrum-tools/postcss-prettier": {},
            "postcss-reporter": {
                clearReportedMessages: true,
            },
        },
    };
};
