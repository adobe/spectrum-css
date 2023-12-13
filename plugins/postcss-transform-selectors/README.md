# postcss-transform-selectors

> Re-map and transform selectors

## Installation

```sh
yarn add -D @spectrum-tools/postcss-transform-selectors
```

## Usage

In your `postcss.config.js`, pass `options` to the plugin:

```js
module.exports = {
	plugins: [
		require("@spectrum-tools/postcss-transform-selectors")({
			replace: [
				// replace all instaces of .button in a selector with .btn (will catch .button:hover)
				// when search is a string, replaces are automatically made global
				{ search: ".button", replace: ".btn" },
				// replace all double dashes in classnames with an underscore
				// note the g flag (global) is used to ensure every instance in a selector is replaced
				{ search: /\.(.*?)--([^ ]*?)/g, replace: ".$1_$2" },
			],
			// lowercase all classnames
			// you can use the PostCSS Rule object to determine the new selector (i.e. based off rule.parent)
			transform: (selector, rule) => selector.toLowerCase(),
		}),
	],
};
```

### `options.replace`

An array of objects with `{ search: RegExp | string, replace: string }`.

### `options.transform`

A function that takes `(selector, rule)` and returns a new selector.
