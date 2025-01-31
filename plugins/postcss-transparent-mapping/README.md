# postcss-transparent-mapping

> Remaps values that reference a transparent token to `rgb` and `opacity` postfixed variables.

## Installation

```sh
yarn add -D @spectrum-tools/postcss-transparent-mapping
postcss -u postcss-transparent-mapping -o dist/index.css src/index.css
```

## Usage

This plugin turns this:

```css
.elements {
  --spectrum-transparent-white-100-rgb: 215, 134, 255;
  --spectrum-transparent-white-100-opacity: 0.71;
  --spectrum-transparent-white-100: rgba(var(--spectrum-transparent-white-100-rgb), var(--spectrum-transparent-white-100-opacity));
  --spectrum-disabled-static-white-content-color: var(--spectrum-transparent-white-100);
  --spectrum-transparent-black-400-rgb: 0, 1, 100;
  --spectrum-transparent-black-400-opacity: 0.47;
  --spectrum-transparent-black-400: rgba(var(--spectrum-transparent-black-400-rgb), var(--spectrum-transparent-black-400-opacity));
  --spectrum-disabled-static-black-content-color: var(--spectrum-transparent-black-400);
}
```

Into this:

```css
.elements {
  --spectrum-transparent-white-100-rgb: 215, 134, 255;
  --spectrum-transparent-white-100-opacity: 0.71;
  --spectrum-transparent-white-100: rgba(var(--spectrum-transparent-white-100-rgb), var(--spectrum-transparent-white-100-opacity));
  --spectrum-disabled-static-white-content-color-rgb: 215, 134, 255;
  --spectrum-disabled-static-white-content-color-opacity: 0.71;
  --spectrum-disabled-static-white-content-color: rgba(var(--spectrum-disabled-static-white-content-color-rgb), var(--spectrum-disabled-static-white-content-color-opacity));
  --spectrum-transparent-black-400-rgb: 0, 1, 100;
  --spectrum-transparent-black-400-opacity: 0.47;
  --spectrum-transparent-black-400: rgba(var(--spectrum-transparent-black-400-rgb), var(--spectrum-transparent-black-400-opacity));
  --spectrum-disabled-static-black-content-color-rgb: 0, 1, 100;
  --spectrum-disabled-static-black-content-color-opacity: 0.47;
  --spectrum-disabled-static-black-content-color: rgba(var(--spectrum-disabled-static-black-content-color-rgb), var(--spectrum-disabled-static-black-content-color-opacity));
}
```
