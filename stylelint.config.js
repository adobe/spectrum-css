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

/* @todo debug https://github.com/prettier/stylelint-prettier integration issues */

module.exports = {
  allowEmptyInput: true,
  cache: true,
  defaultSeverity: "warning",
  extends: ["stylelint-config-standard", "stylelint-config-clean-order"],
  plugins: [
    "stylelint-use-logical",
    "@spectrum-tools/stylelint-no-missing-parenthesis",
    "@spectrum-tools/stylelint-no-missing-var",
    "@spectrum-tools/stylelint-suit-naming-pattern",
    "@spectrum-tools/stylelint-no-unused-custom-properties",
    "@spectrum-tools/stylelint-no-unknown-custom-properties",
    "stylelint-order",
    "stylelint-high-performance-animation",
  ],
  rules: {
    "block-no-empty": null,
    /* Could probably dig into this further, might be useful */
    "no-descending-specificity": null,
    /* Not useful at the moment */
    "no-duplicate-selectors": null,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [/^extend/, /^container/, /^each/, /^include/, /^mixin/],
      },
    ],
    "selector-class-pattern": null,
    "declaration-empty-line-before": null,
    "custom-property-empty-line-before": null,
    "no-unknown-custom-properties": null,
    "value-no-vendor-prefix": [
      true,
      {
        disableFix: true,
        severity: "warning",
      },
    ],
    "max-nesting-depth": [3, { severity: "warning" }],
    "custom-property-pattern": [/^[a-z0-9]+(-[a-z0-9]+)*$/, {}],
    "alpha-value-notation": "percentage",
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["each", "extend"],
      },
    ],
    "function-no-unknown": [
      true,
      {
        severity: "warning",
      },
    ],
    "color-function-notation": [
      "modern",
      {
        disableFix: true,
        severity: "warning",
      },
    ],
    "import-notation": null,
    "property-no-unknown": [
      true,
      {
        checkPrefixed: true,
      },
    ],
    "declaration-block-no-duplicate-custom-properties": true,
    "declaration-property-value-no-unknown": [
      true,
      {
        ignoreProperties: {
          transform: ["/^logical/"],
        },
      },
    ],
    "value-keyword-case": [
      "lower",
      {
        camelCaseSvgKeywords: true,
      },
    ],
    "selector-not-notation": "complex",
    "csstools/use-logical": true,
    /** Prettifying */
    "order/order": ["custom-properties", "declarations", "at-rules", "rules"],
    "order/properties-order": ["alphabetical"],
    /** Performance */
    "plugin/no-low-performance-animation-properties": [
      true,
      { severity: "warning" },
    ],
    /** Local/custom plugins */
    "spectrum-tools/no-missing-parenthesis": true,
    "spectrum-tools/no-missing-var": true,
    "spectrum-tools/suit-naming-pattern": [true, { severity: "warning" }],
    /** @note this enables reporting of unused variables in a file */
    "spectrum-tools/no-unused-custom-properties": [
      true,
      {
        ignoreList: [/^--mod-/, /^--system/],
        disableFix: true,
        severity: "warning",
      },
    ],
    "spectrum-tools/no-unknown-custom-properties": [
      true,
      {
        ignoreList: [/^--mod-/, /^--spectrum-(global|alias|component)-/],
        checkPeerDependencies: true,
        disableFix: true,
        severity: "warning",
      },
    ],
  },
  overrides: [
    {
      files: ["components/*/themes/*.css"],
      rules: {
        "spectrum-tools/suit-naming-pattern": null,
        "spectrum-tools/no-unused-custom-properties": null,
        "spectrum-tools/no-unknown-custom-properties": null,
      },
    },
    {
      files: ["site/**/*.css", "storybook/assets/*.css"],
      rules: {
        "custom-property-pattern": null,
        "spectrum-tools/suit-naming-pattern": null,
        "spectrum-tools/no-unused-custom-properties": null,
        "spectrum-tools/no-unknown-custom-properties": null,
        "color-function-notation": null
      },
    },
  ],
};
