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
        "stylelint-selector-bem-pattern",
        "stylelint-use-logical",
        "@spectrum-tools/stylelint-no-missing-parenthesis",
        "@spectrum-tools/stylelint-no-missing-var",
        "@spectrum-tools/stylelint-no-unused-custom-properties",
        "@spectrum-tools/stylelint-no-unknown-custom-properties",
        "stylelint-high-performance-animation",
    ],
    rules: {
        "at-rule-empty-line-before": [
            "always",
            {
                except: ["blockless-after-blockless", "first-nested"],
                ignore: ["after-comment", "first-nested"],
                ignoreAtRules: ["extend"],
            },
        ],
        "at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: ["extend", "container", "each", "include", "mixin"],
            },
        ],
        "rule-empty-line-before": [
            "always",
            {
                except: ["first-nested", "after-single-line-comment"],
                ignore: ["after-comment", "first-nested"],
            },
        ],
        "selector-attribute-quotes": null,
        "block-no-empty": null,
        /* Could probably dig into this further, might be useful */
        "no-descending-specificity": null,
        /* Not useful at the moment */
        "no-duplicate-selectors": null,
        "selector-class-pattern": null,
        "declaration-empty-line-before": null,
        "comment-empty-line-before": [
            "always",
            {
                except: ["first-nested"],
                ignore: ["after-comment", "stylelint-commands"],
                ignoreComments: [/^passthroughs?/],
            },
        ],
        "declaration-block-no-redundant-longhand-properties": null,
        "custom-property-empty-line-before": null,
        "value-no-vendor-prefix": [
            true,
            {
                disableFix: true,
                severity: "warning",
            },
        ],
        "max-nesting-depth": [3, { severity: "warning" }],
        "custom-property-pattern": [/^(spectrum|mod|highcontrast|system)/, {}],
        "alpha-value-notation": "percentage",
        "function-no-unknown": [
            true,
            {
                severity: "warning",
            },
        ],
        /* @todo: would like to use "modern" eventually */
        "color-function-notation": null,
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
        /** Performance */
        "plugin/no-low-performance-animation-properties": [true, { severity: "warning" }],
        "plugin/selector-bem-pattern": [
            {
                preset: "suit",
                presetOptions: { namespace: "spectrum" },
                utilitySelectors: /^\.(is|u)-[A-z0-9]+$/,
                componentName: /^[A-Z][A-z0-9]+$/,
            },
            {
                severity: "warning",
            },
        ],
        /** Local/custom plugins */
        "spectrum-tools/no-missing-parenthesis": true,
        "spectrum-tools/no-missing-var": true,
        /** @note this enables reporting of unused variables in a file */
        "spectrum-tools/no-unused-custom-properties": [
            true,
            {
                ignoreList: [/^--mod-/, /^--highcontrast-/, /^--system-/],
                disableFix: true,
                severity: "warning",
            },
        ],
        "spectrum-tools/no-unknown-custom-properties": [
            true,
            {
                /** @note this is a list of custom properties that are allowed to be unknown */
                ignoreList: [
                    /^--mod-/,
                    /^--highcontrast-/,
                    /^--system-/,
                    /^--spectrum-(global|alias|component)-/,
                    /^--spectrum-animation-/,
                ],
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
                "spectrum-tools/no-unused-custom-properties": null,
                "spectrum-tools/no-unknown-custom-properties": null,
            },
        },
        {
            files: ["components/*/dist/**/*.css"],
            rules: {},
        },
        {
            files: ["site/**/*.css", "storybook/assets/*.css"],
            rules: {
                "custom-property-pattern": null,
                "spectrum-tools/no-unused-custom-properties": null,
                "spectrum-tools/no-unknown-custom-properties": null,
                "color-function-notation": null,
            },
        },
    ],
};
