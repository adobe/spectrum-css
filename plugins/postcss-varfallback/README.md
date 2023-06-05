# postcss-varfallback

> Use the fallback value of any var reference

## Installation

```sh
npm install postcss-varfallback
postcss -u postcss-varfallback -o dist/index.css src/index.css
```

## Usage

Assuming you have some CSS defined that uses fallback variables:

```css
:root {
	--component-background-color: blue;
}

.component {
	background-color: var(
		--mod-background-color,
		var(--component-background-color)
	);
}
```

Running it through this plugin will produce:

```css
:root {
	--component-background-color: blue;
}

.component {
	background-color: var(--component-background-color);
}
```
