---
`@spectrum-css/inlinealert`: major
---

#### S2 migration in-line alert

This migrates the `in-line alert` component to S2. Custom properties have been remapped and added per the design specification.

Subtle and bold styles have been added for each badge variant.

##### New mods

`--mod-inlinealert-border-and-icon-color-neutral`
`--mod-inlinealert-min-spacing-header-to-icon`
`--mod-inlinealert-spacing-content-link-button`
`--mod-inlinealert-spacing-header-content`

##### Removed mods

`--mod-inlinealert-spacing-header-content-button`
`--mod-inlinealert-spacing-header-to-icon`

##### New custom properties

`.spectrum-InLineAlert--info--bold`
`.spectrum-InLineAlert--info--bold .spectrum-InLineAlert-icon`
`.spectrum-InLineAlert--info--subtle`
`.spectrum-InLineAlert--info--subtle .spectrum-InLineAlert-icon`
`.spectrum-InLineAlert--negative--bold`
`.spectrum-InLineAlert--negative--bold .spectrum-InLineAlert-icon`
`.spectrum-InLineAlert--negative--subtle`
`.spectrum-InLineAlert--negative--subtle .spectrum-InLineAlert-icon`
`.spectrum-InLineAlert--neutral`
`.spectrum-InLineAlert--neutral .spectrum-InLineAlert-icon`
`.spectrum-InLineAlert--neutral--bold`
`.spectrum-InLineAlert--neutral--bold .spectrum-InLineAlert-icon`
`.spectrum-InLineAlert--neutral--subtle`
`.spectrum-InLineAlert--neutral--subtle .spectrum-InLineAlert-icon`
`.spectrum-InLineAlert--notice--bold`
`.spectrum-InLineAlert--notice--bold .spectrum-InLineAlert-icon`
`.spectrum-InLineAlert--notice--subtle`
`.spectrum-InLineAlert--notice--subtle .spectrum-InLineAlert-icon`
`.spectrum-InLineAlert--positive--bold`
`.spectrum-InLineAlert--positive--bold .spectrum-InLineAlert-icon`
`.spectrum-InLineAlert--positive--subtle`
`.spectrum-InLineAlert--positive--subtle .spectrum-InLineAlert-icon`
`--spectrum-inlinealert-bold-background-color-informative`
`--spectrum-inlinealert-bold-background-color-negative`
`--spectrum-inlinealert-bold-background-color-neutral`
`--spectrum-inlinealert-bold-background-color-notice`
`--spectrum-inlinealert-bold-background-color-positive`

##### Removed custom properties

`--spectrum-inlinealert-spacing-header-content-button`
`--spectrum-inlinealert-spacing-header-to-icon`
