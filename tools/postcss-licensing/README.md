# postcss-licensing
>
> Prepends licensing information to CSS files

## Installation

```sh
yarn add -D postcss-licensing
postcss -u postcss-licensing -o dist/index.css src/index.css
```

## Usage

This plugin turns this:

```css
.spectrum--express {
  --spectrum-actionbutton-border-color: transparent;
  --spectrum-actionbutton-background-color: purple;
}
```

Into this:

```css
/*!
 * <copyright content>
 */

.spectrum--express {
  --spectrum-actionbutton-background-color: purple;
  --spectrum-actionbutton-border-color: transparent;
}
```
