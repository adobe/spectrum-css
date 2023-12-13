# stylelint-no-unknown-custom-properties

> Report on any unused variable definitions

## Installation

```sh
yarn add -D @spectrum-tools/stylelint-no-unknown-custom-properties
```

## Usage

Assuming you have some variables defined and rule(s) that use them:

```css
:root {
	--prefix-component-background-color: blue;
	--prefix-component-width: 10px;
	--prefix-component-height: 10px;
	--prefix-component-size: 10px;
}

.component {
	background-color: var(--prefix-component-background-color);

	width: var(--prefix-component-width);
	height: var(--prefix-component-height);
}
```

The variables that are not used in any rule will be reported to the console.
