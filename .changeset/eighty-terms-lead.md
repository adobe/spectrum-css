---
"@spectrum-css/rating": major
---

#### S2 migration rating

This migrates the `rating` component to S2. Custom properties have been remapped and added per the design specification.

##### Additions

The medium component variation is the default and a t-shirt size medium variation has been added.

A tooltip may be displayed to a user indicating whether interacting with the component will clear or edit the rating. A control and documentation example have been added.

A rating may have a partially filled star. The width and fill of this star is controlled by adding `.is-partial` to the parent `span` with classes of `spectrum-Rating-icon` and `is-selected` and then setting `--mod-rating-icon-fill` to the necessary fill percentage (e.g. `50%`).

##### New mods

`--mod-rating-width`
`--mod-rating-height`
`--mod-rating-bottom-to-content-area`
`--mod-rating-edge-to-content-area`
`--mod-rating-top-to-content-area`
`--mod-rating-icon-fill`

##### Removed mods

`--mod-rating-icon-spacing-vertical-top`
`--mod-rating-icon-count`
`--mod-rating-indicator-border-radius`
`--mod-rating-indicator-height`

##### New custom properties

`--spectrum-rating-width`
`--spectrum-component-size-difference-down`
`--spectrum-component-size-minimum-perspective-down`
`--spectrum-corner-radius-medium-size-medium`
`--spectrum-corner-radius-medium-size-small`
`--spectrum-neutral-content-color-default`
`--spectrum-neutral-content-color-down`
`--spectrum-neutral-content-color-hover`
`--spectrum-spacing-75`
`--spectrum-workflow-icon-size-100`
`--spectrum-workflow-icon-size-75`

##### Removed custom properties

`--spectrum-rating-indicator-width`
`--spectrum-rating-icon-color-key-focus`
`--spectrum-rating-icon-spacing-vertical-top`
`--spectrum-rating-focus-indicator-gap`
`--spectrum-rating-indicator-height`
`--spectrum-rating-indicator-border-radius`
`--spectrum-accent-content-color-key-focus`
`--spectrum-border-width-200`
`--spectrum-component-top-to-workflow-icon-100`
`--spectrum-corner-radius-100`
`--spectrum-neutral-subdued-content-color-default`
`--spectrum-neutral-subdued-content-color-down`
`--spectrum-neutral-subdued-content-color-hover`
`--spectrum-neutral-subdued-content-color-key-focus`
`--spectrum-workflow-icon-size-100`
