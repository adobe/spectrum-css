---
"@spectrum-css/card": major
---

Previously:

```css
.spectrum-Card.is-selected::before {
	background-color: rgba(
		var(
			--mod-card-selected-background-color-rgb,
			var(--spectrum-card-selected-background-color-rgb)
		),
		var(--spectrum-card-selected-background-opacity)
	);
}
```

Styles now use `--spectrum-card-selection-background-color` which maps to a transparent global property of `--spectrum-transparent-(black|white)-600` depending on color context.

Updated:

```css
.spectrum-Card.is-selected::before {
	background-color: var(
		--mod-card-background-color-selected,
		var(--spectrum-card-selection-background-color)
	);
}
```

#### Removed variants

Removed the quiet variant which is no longer supported in Spectrum 2.

#### Removed/replaced properties

- `--mod-card-selected-background-color-rgb`. Use `--mod-card-background-color-selected` to override the selected background color.
- `--mod-card-content-margin-top-quiet`. Use `--mod-card-content-margin-top` with appropriate selectors to override.
- `--mod-card-minimum-width-quiet`. Use `--mod-card-minimum-width` with appropriate selectors to override.
- `--mod-card-actions-background-color-rgb`. No replacement, using token value `--spectrum-card-selection-background-color` directly.
- `--mod-card-actions-background-color-opacity`. No replacement, using token value `--spectrum-card-selection-background-color` directly.
