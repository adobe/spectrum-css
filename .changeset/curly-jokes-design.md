---
"@spectrum-tools/postcss-rgb-mapping": minor
---

Adds new functionality to better handle tokens that reference other transparent tokens.

When a custom properties below is defined as another, specifically "transparent," variable, such as:

```css
--disabled-static-white-background-color: var(--spectrum-transparent-white-100);
```

...the plugin can now convert this single custom property into its `-rgb` and `-opacity` postfixed variables, that each correspond to the `-rgb` and `-opacity` variables of the definition's transparent token. It then reassembles the original, using and referencing these newly created variables.

```css
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
```
