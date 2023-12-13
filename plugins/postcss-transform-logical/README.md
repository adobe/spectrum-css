# postcss-transform-logical

> Adds logical property support for transforms.

## Installation

```sh
yarn add -DW @spectrum-tools/postcss-transform-logical
```

## Usage

```sh
postcss -u @spectrum-tools/postcss-transform-logical -o dist/index.css src/index.css
```

## Options

No options available at this time. Please open an issue if you have a use case.

## Examples

This plugin turns this:

```css
.component {
	transform: logical rotate(0deg);
}
```

Into this:

```css
[dir="rtl"] .component {
	transform: matrix(-1, 0, 0, 1, 0, 0);
}
```
