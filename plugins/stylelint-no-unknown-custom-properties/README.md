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

## Options

### `ignoreList` (default: `[]`)

An array of strings or regular expressions that will be matched against the variable name. If a match is found, the variable will be ignored.

### `skipDependencies` (default: `true`)

If set to `false`, the plugin will pull in and read the `peerDependencies` and `dependencies` for the package in which it is installed. It will then read-in and parse the provided CSS assets and check for any variables that are defined in the package's dependencies. If any are found, those variables will not be reported as unused.
