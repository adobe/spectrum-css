---
"@spectrum-css/rating": major
---

#### S2 migration rating

This migrates the `rating` component to S2. Custom properties have been remapped and added per the design specification.

##### Additions

The small component variation is now the default and a t-shirt size medium variation has been added.

A tooltip may be displayed to a user indicating whether interacting with the component will clear or edit the rating. A control and documentation example have been added.

##### New mods

`--mod-rating-border-radius`
`--mod-rating-icon-height`
`--mod-rating-icon-spacing`
`--mod-rating-icon-width`
`--mod-rating-width`

##### New custom properties

`--spectrum-rating-width`
`--spectrum-rating-border-radius`
`--spectrum-rating-icon-spacing`

##### Removed mods

`--mod-rating-focus-indicator-gap`
`--mod-rating-icon-count`
`--mod-rating-icon-spacing-vertical-top`
`--mod-rating-icon-width`
`--mod-rating-indicator-border-radius`
`--mod-rating-indicator-height`

##### Removed custom properties

`--spectrum-rating-indicator-width`
`--spectrum-rating-icon-color-key-focus`
`--spectrum-rating-icon-spacing-vertical-top`
`--spectrum-rating-focus-indicator-gap`
`--spectrum-rating-indicator-height`
`--spectrum-rating-indicator-border-radius`
