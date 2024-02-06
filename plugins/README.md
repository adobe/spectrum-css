# Stylelint for Adobe Spectrum CSS

Design tokens are supported by linting rules, which warn you if a token is deprecated, missing, missing vars or using deprecated formatting. Design token lint rules are provided by the Adobe Design System Stylelint plugins.

If you are an Adobe employee, you must configure the lint rule in your repository and keep it up-to-date. If you are a partner developer, we strongly recommend you to use it as well.

## Installation

```sh
yarn add -D stylelint-no-missing-var stylelint-suit-naming-pattern stylelint-use-logical
```

## Configuration

Add the plugins to your Stylelint configuration file (i.e., `.stylelintrc.js`).

```js
module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: [
    "stylelint-use-logical",
    "stylelint-suit-naming-pattern",
    "stylelint-no-missing-var",
  ],
};
```

Enable any desired rules. The rules and options shown below are strongly recommended

```json
module.exports = {
    "rules" : {
        "rule-empty-line-before": null,
        "block-no-empty": null,
        "at-rule-empty-line-before": null,
        "at-rule-no-unknown": null,
        "no-descending-specificity": null,
        "selector-class-pattern": null,
        "declaration-empty-line-before": null,
        "custom-property-empty-line-before": null,
        "comment-whitespace-inside": null,
        "comment-empty-line-before": null,
        "no-duplicate-selectors": null,
        "property-no-vendor-prefix": null,
        "max-nesting-depth": 2,
        "csstools/use-logical": true,
        "custom-rule/no-missing-var": true,
        "custom-rule/suit-naming-pattern": true,
        "custom-property-pattern": "^[a-zA-Z0-9]+(-[a-z0-9]([a-zA-Z0-9]+)?)+$",
        "alpha-value-notation": null,
        "color-function-notation": null,
        "import-notation": null,
        "no-empty-source": null,
        "property-no-unknown": true,
        "declaration-property-value-no-unknown": true,
        "value-keyword-case":null,
        "selector-not-notation":null
    }
}
```
