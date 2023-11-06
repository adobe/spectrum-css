module.exports = {
    allowEmptyInput: true,
    cache: true,
    defaultSeverity: "warning",
    extends: ["stylelint-config-standard"],
    plugins: [
        "stylelint-use-logical",
		"stylelint-no-missing-parenthesis",
		"stylelint-no-missing-var",
		"stylelint-suit-naming-pattern"
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
                except: ["first-nested"],
                ignore: ["after-comment"],
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
        /** Local/custom plugins */
        "custom-rule/no-missing-parenthesis": true,
    },
};
