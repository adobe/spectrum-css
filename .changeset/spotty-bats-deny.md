---
"@spectrum-css/card": major
---

Previously:

```css
.spectrum-Card.is-selected::before {
	background-color: rgba(
		var(--spectrum-card-selected-background-color-rgb),
		var(--spectrum-card-selected-background-opacity)
	);
}
```

Styles now use `--spectrum-card-selection-background-color` which maps to a transparent global property of `--spectrum-transparent-(black|white)-600` depending on color context.

Updated:

```css
.spectrum-Card.is-selected::before {
	background-color: var(--spectrum-card-selection-background-color);
}
```

#### Removed variants

Removed the quiet variant which is no longer supported in Spectrum 2.
