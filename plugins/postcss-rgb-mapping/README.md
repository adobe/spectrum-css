# postcss-rgb-mapping

> Remaps rgb(a) values to an `rgb` postfixed variable. If an opacity is found, creates a separate `opacity` postfixed variable.

## Installation

```sh
yarn add -D postcss-rgb-mapping
```

## Usage

Via the command line:

```sh
postcss -u postcss-rgb-mapping -o dist/index.css src/index.css
```

This plugin turns this:

```css
.spectrum--lightest {
	--spectrum-seafoam-100: rgba(206, 247, 243);
	--spectrum-seafoam-200: rgba(170, 241, 234, 0.5);
}
```

Into this:

```css
.spectrum--lightest {
	--spectrum-seafoam-100-rgb: 206, 247, 243;
	--spectrum-seafoam-100: rgba(var(--spectrum-seafoam-100-rgb));
	--spectrum-seafoam-200-rgb: 170, 241, 234;
	--spectrum-seafoam-200-opacity: 0.5;
	--spectrum-seafoam-200: rgba(
		var(--spectrum-seafoam-200-rgb),
		var(--spectrum-seafoam-200-opacity)
	);
}
```
