# postcss-splitinator

> Splits custom properties organized by classes into named tokens

## Installation

Add the dependency to your project:

```sh
npm install postcss-splitinator
```

or

```sh
yarn add -DW postcss-splitinator
```

Use the plugin in your PostCSS configuration:

```js
module.exports = {
  plugins: [
    require("postcss-splitinator")({
      // options
    }),
  ],
};
```

or as part of your CLI command:

```sh
postcss -u postcss-splitinator -o dist/index.css src/index.css
```

## Options

### `options.getName = function(selector, prop)`

Customize the creation of variable names. By default, as SUIT naming convention is assumed and variable names are created accordingly.

### `options.processIdentifier = function(identifierValue, identifierName)`

Customize the selectors that variables are placed in. Passed the value and key of the variable that was passed to the container, i.e. `identifierValue = spectrum` and `identifierName = system` for the example below. By default, `identifierName` is used as-is.

### `options.skipMapping = false`

Skip the mapping of the variables to the system variables. This can be useful if you only want to extract the variables and not map them to the system variables.

### `options.preserveVariables = false`

When used with `skipMapping`, this option will preserve the variables defined inside the container query in the output by injecting them to the root selector.

### `options.stripLocalSelectors = false`

This option will remove the local selectors (those that map to system variables) from the output leaving only the system definitions.

### `options.referencesOnly = false`

This option will only output those variables that are referencing the newly created system variables and not the system variables themselves. This can be used as a bridge between an old and new implementation for the component.

## Usage

This plugin turns this:

```css
@container style(--system: legacy) {
  .component {
    --background-color: blue;
  }
  .component.is-selected {
    --background-color: darkblue;
  }
  .component .icon {
    --color: gray;
  }
}

@container style(--system: express) {
  .component {
    --background-color: purple;
  }
  .component.is-selected {
    --background-color: darkpurple;
  }
  .component .icon {
    --color: white;
  }
}
```

Into this:

```css
.spectrum {
  --system-component-background-color: blue;
  --system-component-selected-background-color: darkblue;
}

.spectrum--express {
  --system-component-background-color: purple;
  --system-component-selected-background-color: darkpurple;
}

.component {
  --background-color: var(--system-component-background-color);
}

.component.is-selected {
  --background-color: var(--system-component-selected-background-color);
}
```
