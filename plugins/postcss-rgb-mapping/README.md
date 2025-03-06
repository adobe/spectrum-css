# postcss-rgb-mapping

> Remaps rgb(a) values to an `rgb` postfixed variable. If an opacity is found, creates a separate `opacity` postfixed variable.
> Also remaps values that reference a transparent token (for example, `transparent-black-300`) to `rgb` and `opacity` postfixed variables.

## Installation

```sh
yarn add -D @spectrum-tools/postcss-rgb-mapping
postcss -u postcss-rgb-mapping -o dist/index.css src/index.css
```

## Usage

This plugin turns this:

```css
.spectrum--lightest {
	--spectrum-seafoam-100: rgba(206, 247, 243);
	--spectrum-seafoam-200: rgba(170, 241, 234, 0.5);
	--spectrum-transparent-white-100-rgb: 100, 100, 100;
	--spectrum-transparent-white-100-opacity: 0.5;
	--spectrum-transparent-white-100: rgba(
		var(--spectrum-transparent-white-100-rgb),
		var(--spectrum-transparent-white-100-opacity)
	);
	--disabled-static-white-background-color: var(
		--spectrum-transparent-white-100
	);
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
	--spectrum-transparent-white-100-rgb: 100, 100, 100;
	--spectrum-transparent-white-100-opacity: 0.5;
	--spectrum-transparent-white-100: rgba(
		var(--spectrum-transparent-white-100-rgb),
		var(--spectrum-transparent-white-100-opacity)
	);
	--disabled-static-white-background-color-rgb: var(
		--spectrum-transparent-white-100-rgb
	);
	--disabled-static-white-background-color-opacity: var(
		--spectrum-transparent-white-100-opacity
	);
	--disabled-static-white-background-color: rgba(
		var(--disabled-static-white-background-color-rgb),
		var(--disabled-static-white-background-color-opacity)
	);
}
```
