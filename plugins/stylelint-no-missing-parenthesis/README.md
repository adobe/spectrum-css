# stylelint-no-missing-parenthesis

> Validates classnames for any missing parenthesis mostly in calc() method with multiple vars

## Description

This stylelint plugin will validate against all css properties and check to be sure that all () are properly closed.especially in places where we do larger calc() operations along with var(). This is an example of one of those places.

For e.g:

```css
.spectrum-ActionButton-hold {
	inset-inline-end: calc(
		var(
				--mod-actionbutton-edge-to-hold-icon,
				var(--spectrum-actionbutton-edge-to-hold-icon)
			) - var(--mod-actionbutton-border-width, var(--spectrum-actionbutton-border-width))
	);
}
```

## Installation

```sh
yarn add -D stylelint-no-missing-parenthesis
```

## How to use

In your stylelintrc.json add stylelint-no-missing-parenthesis to your plugins array and to your rules array like this:

```js
plugins: ['stylelint-no-missing-parenthesis'],
rules: {
  "custom-rule/no-missing-parenthesis": true,
}
```

## Usage

Wrong: Throws a lint error here

```css
.spectrum-Well-Component {
  background-color : calc(var(--prefix-component-background-color), var(--prefix-component-background-color);
}
```

Correct:

```css
.spectrum-Well-Component {
	background-color: calc(
		var(--prefix-component-background-color),
		var(--prefix-component-background-color)
	);
}
```
