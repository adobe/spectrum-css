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

### `options.noFlatVariables = false`

Whether to avoid including flat variables in the output.

### `options.noSelectors = false`

Whether to avoid including selectors that use the flat variables in the output.

### `options.referencesOnly = false`

This option will only output those variables that are referencing the newly created system variabes and not the system variables themselves. This can be used as a bridge between an old and new implementation for the component.

## Usage

This plugin turns this:

```css
@container (--system: spectrum) {
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

@container (--system: express) {
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
