# postcss-droproot

> Remove :root rules

## Installation

```sh
npm install postcss-droproot
postcss -u postcss-droproot -o dist/index.css src/index.css
```

## Usage

Let's say you have `:root {}` rules you want gone. This plugin turns this:

```css
:root {
	--prefix-component-background-color: blue;
}
```

Into this:

```

```
