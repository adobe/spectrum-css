---
"@spectrum-css/rating": major
---

# S2 migration rating

This migrates the `rating` component to S2. Custom properties have been remapped and added per the design specification.

## Additions

The small component variation is now the default and a t-shirt size medium variation has been added.

New JavaScript logic has been added to better suppot hover interactivity in our Storybook example. Customers and consuming teams will need to implement the same (or comparable) logic.

## New mods

```css
--mod-rating-icon-width
```

## New custom properties

```css
--spectrum-rating-width
--spectrum-rating-width-medium
--spectrum-rating-width-small
--spectrum-corner-radius-medium-size-medium
--spectrum-corner-radius-medium-size-small
--spectrum-spacing-75
--spectrum-workflow-icon-size-100
--spectrum-workflow-icon-size-75
```

## Removed mods

```css
--mod-rating-focus-indicator-gap
--mod-rating-icon-count
--mod-rating-icon-spacing-vertical-top
--mod-rating-icon-width
--mod-rating-indicator-border-radius
--mod-rating-indicator-height
```

## Removed custom properties

```css
--spectrum-rating-indicator-width
--spectrum-corner-radius-100
--spectrum-neutral-subdued-content-color-default
--spectrum-neutral-subdued-content-color-down
--spectrum-neutral-subdued-content-color-hover
--spectrum-workflow-icon-size-100
```
