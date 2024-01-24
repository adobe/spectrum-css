# postcss-custom-properties-passthrough

> Allows passthrough of custom properties without identifying them as unused.

## Installation

```sh
npm install postcss-custom-properties-passthrough
postcss -u postcss-custom-properties-passthrough -o dist/index.css src/index.css
```

## Usage

This plugin turns this:

```css
.spectrum {
 x--spectrum-actionbutton-background-color: blue;
 x--spectrum-actionbutton-border-color: transparent;

 background-color: xvar(--spectrum-actionbutton-background-color);
 border-color: xvar(--spectrum-actionbutton-border-color);
}
```

Into this:

```css
.spectrum {
 --spectrum-actionbutton-background-color: blue;
 --spectrum-actionbutton-border-color: transparent;

 background-color: var(--spectrum-actionbutton-background-color);
 border-color: var(--spectrum-actionbutton-border-color);
}
```
