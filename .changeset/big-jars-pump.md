---
`@spectrum-css/inlinealert`: major
---

#### S2 migration in-line alert

This migrates the `in-line alert` component to Spectrum 2. Custom properties have been updated and added per the design specification.

Subtle and bold treatments have been added for each badge variant.

To use the subtle treatment, you will need to apply the `spectrum-InLineAlert--subtle` class:

```html
<div
	class="spectrum-InLineAlert spectrum-InLineAlert--info spectrum-InLineAlert--subtle"
>
	<div class="spectrum-InLineAlert-header">
		Info variant with subtle fill
		<svg
			focusable="false"
			aria-hidden="true"
			role="img"
			class=" spectrum-Icon spectrum-Icon--sizeM spectrum-InLineAlert-icon "
			id="icon-52w58"
			aria-label="InfoCircle"
		>
			<title id="InfoCircle">Info Circle</title>
			<use xlink:href="#icon-info-circle" href="#icon-info-circle"></use>
		</svg>
	</div>
	<div class="spectrum-InLineAlert-content">This is an alert.</div>
</div>
```

To use the bold treatment (which is reserved for high-attention alerts only), you will need to apply the `spectrum-InLineAlert--bold` class:

```html
<div
	class="spectrum-InLineAlert spectrum-InLineAlert--info spectrum-InLineAlert--bold"
>
	<div class="spectrum-InLineAlert-header">
		Info variant with bold fill
		<svg
			focusable="false"
			aria-hidden="true"
			role="img"
			class=" spectrum-Icon spectrum-Icon--sizeM spectrum-InLineAlert-icon "
			id="icon-mty2x"
			aria-label="InfoCircle"
		>
			<title id="InfoCircle">Info Circle</title>
			<use xlink:href="#icon-info-circle" href="#icon-info-circle"></use>
		</svg>
	</div>
	<div class="spectrum-InLineAlert-content">This is an alert.</div>
</div>
```

Because subtle and bold treatments draw a similar level of attention you should choose only one to use consistently within a single product.

##### New mods

`--mod-inlinealert-border-and-icon-color-neutral`
`--mod-inlinealert-min-spacing-header-to-icon`
`--mod-inlinealert-spacing-content-link-button`
`--mod-inlinealert-spacing-header-content`

##### Removed mods

`--mod-inlinealert-spacing-header-content-button`
`--mod-inlinealert-spacing-header-to-icon`

##### New custom properties

`--spectrum-inlinealert-min-spacing-header-to-icon`
`--spectrum-inlinealert-spacing-content-link-button`
`--spectrum-inlinealert-spacing-header-content`

##### Removed custom properties

`--spectrum-inlinealert-spacing-header-content-button`
`--spectrum-inlinealert-spacing-header-to-icon`
