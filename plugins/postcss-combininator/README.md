# postcss-combininator

> Combines multiple blocks of custom properties

## Installation

```sh
yarn install @spectrum-tools/postcss-combininator
```

## Usage

```sh
postcss -u @spectrum-tools/postcss-combininator -o dist/index.css src/index.css
```

This plugin turns this:

```css
.spectrum {
	--spectrum-actionbutton-background-color: blue;
	--spectrum-actionbutton-border-color: transparent;
}

.spectrum--express {
	--spectrum-actionbutton-background-color: purple;
}
```

Into this:

```css
.spectrum--express {
	--spectrum-actionbutton-border-color: transparent;
	--spectrum-actionbutton-background-color: purple;
}
```

The resulting selector comes from the last rule, and all duplicate properties in the subsequent rules override the previous declarations.
