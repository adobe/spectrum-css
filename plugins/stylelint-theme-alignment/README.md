# stylelint-no-unused-custom-properties

> Remove or report on unused variable definitions

## Installation

```sh
yarn add -D @spectrum-tools/stylelint-no-unused-custom-properties
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

The variables that are not used in any rule will be removed from the output or reported to the console:

```css
:root {
  --prefix-component-background-color: blue;
  --prefix-component-width: 10px;
  --prefix-component-height: 10px;
}

.component {
  background-color: var(--prefix-component-background-color);

  width: var(--prefix-component-width);
  height: var(--prefix-component-height);
}
```

To allow variables to be defined without being used, such as when you want to pass custom properties down to a child component, you can add a `/* @passthrough */` comment to the variable definition:

```css
:root {
  /* @passthrough */
  --nested-component-background-color: blue;
  --prefix-component-width: 10px;
  --prefix-component-height: 10px;
  --prefix-component-size: 10px;
}
```

To allow a group of properties to be passed down, you can prefix the set with `/* @passthrough start */` and suffix it with `/* @passthrough end */`:

```css
:root {
  /* @passthrough start */
  --nested-component-background-color: blue;
  --nested-component-width: 10px;
  /* @passthrough end */

  --prefix-component-height: 10px;
  --prefix-component-size: 10px;
}
```

## Options

### `ignoreList` (default: `[]`)

An array of strings or regular expressions that will be matched against the variable name. If a match is found, the variable will be ignored.
