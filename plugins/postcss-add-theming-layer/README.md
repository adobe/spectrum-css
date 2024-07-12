# postcss-add-theming-layer

> Leveraging style container queries to create an abstraction layer for supporting multiple theming systems.

## Installation

Add the dependency to your project:

```sh
npm install postcss-add-theming-layer
```

or

```sh
yarn add -DW postcss-add-theming-layer
```

Use the plugin in your PostCSS configuration:

```js
module.exports = {
  plugins: {
    "postcss-add-theming-layer": {},
  },
};
```

or as part of your CLI command:

```sh
postcss -u postcss-add-theming-layer -o dist/index.css src/index.css
```

## Options

### `selectorPrefix` [string]

This optional input will prefix the new theming layer selector with the provided string. This can be useful if you want to namespace the injected selectors for the new theming layer to avoid conflicts.

### `skipMapping` [boolean=false]

Skip the mapping of the variables to the system variables. This can be useful if you only want to extract the variables and not map them to the system variables.

### `preserveVariables` [boolean=true]

When used with `skipMapping`, this option will preserve the variables defined inside the container query in the output by injecting them to the root selector.

### `referencesOnly` [boolean=false]

This option will only output those variables that are referencing the newly created system variables and not the system variables themselves. This can be used as a bridge between an old and new implementation for the component.

### `stripLocalSelectors` [boolean=false]

This option will remove the local selectors (those that map to system variables) from the output leaving only the system definitions.

### `processIdentifier` [(identifierValue: string, identifierName: string) => string]`

Customize the selectors that variables are placed in. Passed the value and key of the variable that was passed to the container, i.e. `identifierValue = spectrum` and `identifierName = system` for the example below. By default, `identifierName` is used as-is.

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

@container style(--system: modern) {
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
.legacy {
  --system-component-background-color: blue;
  --system-component-selected-background-color: darkblue;
}

.modern {
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

## Usage notes

This plugin will ignore any underscore-prefixed variables, as they are considered private and not part of the theming layer.
