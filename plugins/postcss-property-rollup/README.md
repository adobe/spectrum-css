# postcss-property-rollup

> Combines multiple blocks of custom properties

## Installation

```sh
npm install postcss-property-rollup
```

## Usage

On the command line:

```sh
postcss -u postcss-property-rollup -o dist/index.css src/index.css
```

or in the PostCSS configuration:

```js
module.exports = {
  plugins: {
    "postcss-property-rollup": {},
  },
};
```

This plugin turns this:

```css
.lorem {
  --spectrum-actionbutton-background-color: blue;
  --spectrum-actionbutton-border-color: transparent;
}

.ipsum {
  --spectrum-actionbutton-background-color: purple;
}
```

Into this:

```css
.ipsum {
  --spectrum-actionbutton-border-color: transparent;
  --spectrum-actionbutton-background-color: purple;
}
```

The resulting selector comes from the last rule unless a `newSelector` option is provided, and all duplicate properties in the subsequent rules override the previous declarations.

## Options

### `newSelector`

Type: `string`<br>
Default: `null`

The selector to use for the combined rule. If not provided, the last selector in the list will be used.

### `ignore`

Type: `string[]`<br>
Default: `[]`

An array of selectors to ignore when combining rules.
