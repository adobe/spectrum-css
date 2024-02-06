# stylelint-no-missing-var

> Validates classnames for any missing var before a custom property

## Description

This stylelint plugin will validate against all custom properties in css and lints when it fails to find var before a custom property. This plugin also works for custom property defined in other sources too.

## Installation

```sh
yarn add -D stylelint-no-missing-var
```

## How to use

In your stylelintrc.json add stylelint-no-missing-var to your plugins array and to your rules array like this:

```js
plugins: ['stylelint-no-missing-var'],
rules: {
  "custom-rule/no-missing-var": true,
}
```

## Usage

Wrong: Throws an error here

```css
.spectrum-Well-Component {
	background-color: (--prefix-component-background-color);
}
```

Correct:

```css
.spectrum-Well-Component {
	background-color: var(--prefix-component-background-color);
}
```
