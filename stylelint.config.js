module.exports = {
	allowEmptyInput: true,
	cache: true,
	defaultSeverity: "warning",
	extends: ["stylelint-config-standard"],
	plugins: [
		"stylelint-header",
		"stylelint-selector-bem-pattern",
		"stylelint-order",
		"stylelint-use-logical",
		"@spectrum-tools/stylelint-no-missing-var",
		"@spectrum-tools/stylelint-no-unused-custom-properties",
		"@spectrum-tools/stylelint-no-unknown-custom-properties",
		"@spectrum-tools/stylelint-theme-alignment",
		// "stylelint-high-performance-animation",
	],
	ignoreFiles: [
		// Static utility assets
		"tokens/custom-*/*.css",
		"tools/generator/**/*.css",
		// Compiled and generated files
		"**/dist/**",
		".storybook/storybook-static/**/*.css",
		"**/*-generated.css",
		"tools/bundle/src/*.css",
		"**/node_modules/**",
		// Test files
		"plugins/*/expected/*.css",
		"plugins/*/fixtures/*.css",
	],
	rules: {
		/** --------------------------------------------------------------
		 * Disabled rules
		 * -------------------------------------------------------------- */
		"custom-property-empty-line-before": null,
		"declaration-block-no-redundant-longhand-properties": null,
		"declaration-empty-line-before": null,
		"import-notation": null,
		"no-descending-specificity": null,
		"no-duplicate-selectors": null,
		"number-max-precision": null,

		/** --------------------------------------------------------------
		 * Customized rule settings
		 * -------------------------------------------------------------- */
		/** @note use floats for opacity because it minifies better than percent */
		"alpha-value-notation": ["percentage", { exceptProperties: ["opacity"] }],
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
				ignoreAtRules: ["extend", "each", "include", "mixin"],
			},
		],
		"block-no-empty": [true, {
			ignore: ["comments"],
		}],
		"color-function-notation": ["modern", { ignore: ["with-var-inside"] }],
		"comment-empty-line-before": [
			"always",
			{
				except: ["first-nested"],
				ignore: ["after-comment", "stylelint-commands"],
				// don't require a newline before a passthrough flag
				ignoreComments: [
					/^\s*@passthroughs?/,
					/^\s*@deprecated?/,
					/^\s*@todo?/
				],
			},
		],
		"custom-property-pattern": [/^(spectrum|mod|highcontrast|system|_)/, {}],
		"declaration-block-no-duplicate-custom-properties": true,
		"declaration-property-value-no-unknown": [
			true,
			{
				ignoreProperties: {
					"/.+/": ["CanvasText", "preserve-parent-color"],
				},
			},
		],
		"declaration-block-no-shorthand-property-overrides": true,
		"function-no-unknown": [
			true,
			{
				severity: "warning",
			},
		],
		"max-nesting-depth": [3, { severity: "warning" }],
		"property-no-unknown": [
			true,
			{
				checkPrefixed: true,
			},
		],
		"rule-empty-line-before": [
			"always",
			{
				except: ["first-nested"],
				ignore: ["after-comment"],
			},
		],
		"selector-attribute-quotes": "always",
		"selector-class-pattern": [
			"^(spectrum)[A-Za-z0-9-]*", {
				resolveNestedSelectors: true
			}
		],
		"selector-not-notation": "complex",
		"value-keyword-case": [
			"lower",
			{
				camelCaseSvgKeywords: true,
				ignoreKeywords: ["Transparent", "Text"],
			},
		],
		"value-no-vendor-prefix": [
			true,
			{
				disableFix: true,
				severity: "warning",
			},
		],

		/** --------------------------------------------------------------
		 * Plugins
		 * -------------------------------------------------------------- */
		"csstools/use-logical": true,
		"header/header": [
			"./COPYRIGHT",
			{
				nonMatchingTolerance: 0.8,
			},
			{
				fix: true,
			},
		],
		"order/order": ["custom-properties", "declarations"],
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
		/** Performance */
		// "plugin/no-low-performance-animation-properties": [
		// 	true,
		// 	{ severity: "warning" },
		// ],

		/** --------------------------------------------------------------
		 * Local/custom plugins
		 * -------------------------------------------------------------- */
		"spectrum-tools/no-missing-var": true,
		"spectrum-tools/theme-alignment": null,
		"spectrum-tools/no-unused-custom-properties": null,
		"spectrum-tools/no-unknown-custom-properties": null,
	},
	/** --------------------------------------------------------------
	 * Overrides
	 * -------------------------------------------------------------- */
	overrides: [
		{
			files: ["components/*/index.css", "components/*/themes/spectrum.css"],
			rules: {
				"selector-class-pattern": [
					"^(spectrum-|is-|u-)[A-Za-z0-9-]+", {
						resolveNestedSelectors: true
					}
				],
				"spectrum-tools/no-unknown-custom-properties": [
					true,
					{
						/** @note this is a list of custom properties that are allowed to be unknown */
						ignoreList: [
							/^--mod-/,
							/^--system-/,
							/^--spectrum-picked-color$/,
						],
						skipDependencies: false,
						disableFix: true,
						severity: "warning",
					},
				],
				/** @note this enables reporting of unused variables in a file */
				"spectrum-tools/no-unused-custom-properties": [
					true,
					{
						ignoreList: [
							/^--mod-/,
						],
						disableFix: true,
						severity: "warning",
					},
				],
			},
		},
		{
			files: [".storybook/assets/*.css", "iframe.html*.css"],
			rules: {
				"custom-property-pattern": null,
				"color-function-notation": null,
				"selector-class-pattern": null,
				"font-family-no-missing-generic-family-keyword": null,
			},
		},
		{
			files: ["tokens*/**/*.css(?inline)?", "tokens/**/*.css"],
			rules: {
				"custom-property-pattern": [/^(spectrum|color|scale|system)/, {}],
			}
		},
		{
			/* Validate that the legacy themes don't introduce any new selectors or custom properties */
			files: ["components/*/themes/*.css"],
			rules: {
				"spectrum-tools/no-unused-custom-properties": null,
				"selector-class-pattern": [
					"^(spectrum-|is-|u-)[A-Za-z0-9-]+", {
						resolveNestedSelectors: true
					}
				],
			},
		},
		{
			/* Validate that the legacy themes don't introduce any new selectors or custom properties */
			files: ["components/*/themes/express.css", "components/*/themes/spectrum.css"],
			rules: {
				"spectrum-tools/theme-alignment": [true, {
					baseFilename: "spectrum-two",
				}],
			},
		},
		{
			/* Allow "tree shaking" of unused custom properties in the bundle */
			files: ["tools/bundle/**/*.css"],
			rules: {
				"spectrum-tools/no-unused-custom-properties": [
					true,
					{
						ignoreList: [/^--mod-/],
					},
				],
			}
		},
		{
			/* Module CSS file classes have an underscore before classes, and use underscores instead of a dash as separators (e.g. _spectrum_well) */
			files: ["*.module.css"],
			rules: {
				"selector-class-pattern": [
					"^_spectrum$|^(_)?(spectrum|is|u)(_|-)[A-Za-z0-9-_]+", {
						resolveNestedSelectors: true
					}
				],
				"keyframes-name-pattern": null,
			}
		},
	],
};
