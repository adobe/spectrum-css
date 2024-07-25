const { join } = require("path");

module.exports = {
	allowEmptyInput: true,
	cache: true,
	defaultSeverity: "warning",
	extends: ["stylelint-config-standard", "stylelint-config-clean-order"],
	plugins: [
		"stylelint-header",
		"stylelint-selector-bem-pattern",
		"stylelint-use-logical",
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
				// don't require a newline before a passthrough flag
				ignoreComments: [/^@?passthroughs?/],
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
		/** @note use floats for opacity because it minifies better than percent */
		"alpha-value-notation": ["percentage", { exceptProperties: ["opacity"] }],
		"function-no-unknown": [
			true,
			{
				severity: "warning",
			},
		],
		/** @todo: would like to use "modern" eventually */
		"color-function-notation": null,
		"import-notation": null,
		"property-no-unknown": [
			true,
			{
				checkPrefixed: true,
			},
		],
		"declaration-block-no-duplicate-custom-properties": true,
		"declaration-property-value-no-unknown": [true, {
			ignoreProperties: {
				"color": ["CanvasText"]
			},
		}],
		"value-keyword-case": [
			"lower",
			{
				camelCaseSvgKeywords: true,
				ignoreKeywords: ["Transparent", "Text"]
			},
		],
		"selector-not-notation": "complex",
		"order/order": null,
		"order/properties-order": null,
		"header/header": [
			join(__dirname, "COPYRIGHT"),
			{
				nonMatchingTolerance: 0.8,
			},
			{
				fix: true,
			},
		],
		"csstools/use-logical": true,
		/** Performance */
		// "plugin/no-low-performance-animation-properties": [true, { severity: "warning" }],
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
				skipDependencies: false,
				disableFix: true,
				severity: "warning",
			},
		],
	},
	overrides: [
		{
			files: ["components/*/themes/*.css", "tokens/**/*.css"],
			rules: {
				"spectrum-tools/no-unused-custom-properties": null,
				"spectrum-tools/no-unknown-custom-properties": null,
			},
		},
		{
			files: ["site/**/*.css", ".storybook/assets/*.css"],
			rules: {
				"custom-property-pattern": null,
				"spectrum-tools/no-unused-custom-properties": null,
				"spectrum-tools/no-unknown-custom-properties": null,
				"color-function-notation": null,
			},
		},
	],
};
