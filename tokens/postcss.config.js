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

const { join } = require("path");

module.exports = ({ env = "development", options = {} }) => {
  // const isProduction = Boolean(env === "production");

  return {
    ...options,
    plugins: {
      /* --------------------------------------------------- */
      /* ------------------- IMPORTS ---------------- */
      /** @link https://github.com/postcss/postcss-import#postcss-import */
      "postcss-import": {},
      /* --------------------------------------------------- */
      /* ------------------- ORGANIZE/DEDUPE --------------- */
      "postcss-combine-media-query": {},
      "postcss-sorting": {
        order: ["custom-properties", "declarations", "rules", "at-rules"],
        "properties-order": "alphabetical",
      },
      /** @note Merges _adjacent_ rules only; hense the sorting is first */
      "postcss-merge-rules": {},
      "postcss-combine-duplicated-selectors": {},

      "@spectrum-tools/postcss-rgb-mapping": {},

      /* --------------------------------------------------- */
      /* ------------------- POLYFILLS --------------------- */

      /**
       * @todo should we be documenting this for downstream users rather
       * than polyfilling the features ourselves? what if they want to
       * use a different support matrix?
       *
       * @note stage 2 (default); stage 4 === stable
       * @link https://github.com/csstools/postcss-plugins
       * @link https://preset-env.cssdb.org/features/#stage-2
       */
      "postcss-preset-env": {
        stage: 3,
        env,
        features: {
          "logical-properties-and-values": false,
          clamp: true,
          "color-functional-notation": true,
          "font-format-keywords": true,
          "opacity-percentage": true,
        },
      },

      /* --------------------------------------------------- */
      /* ------------------- CLEAN-UP TASKS ---------------- */
      "postcss-discard-comments": {
        removeAll: true,
      },

      /* After cleaning up comments, remove all empty rules */
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

      /* --------------------------------------------------- */
      /* ------------------- REPORTING --------------------- */
      "@spectrum-tools/postcss-prettier": {
        overrides: {
          // Extending this prevents var stacks from line-wrapping (making them easier to diff)
          printWidth: 250,
        },
        // Passing the config path saves a little time b/c it doesn't have to find it
        configFile: join(__dirname, "..", ".prettierrc")
      },

      stylelint: {
        // Passing the config path saves a little time b/c it doesn't have to find it
        configFile: join(__dirname, "../stylelint.config.js"),
        allowEmptyInput: true,
        cache: true,
        fix: true,
        ignorePath: join(__dirname, "../.stylelintignore"),
        reportNeedlessDisables: true,
        reportInvalidScopeDisables: true,
      },

      "postcss-reporter": {
        clearReportedMessages: true,
        noIcon: true,
      },
    },
  };
};
