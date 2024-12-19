---
"@spectrum-css/breadcrumb": major
---

#### Spectrum 2 migration

The breadcrumbs component is now updated to use the S2 specs and tokens. This includes updated spacing, heights, icons, colors, font sizes, etc.

There has been a major design change to the variant classes related to density and sizing, to align their terminology better with t-shirt sizes:

- The "compact" variant no longer exists. The `spectrum-Breadcrumbs--compact` class and associated custom properties are removed. The default (medium) breadcrumbs are now sized similar to what was previously called compact.
- There is a new "large" variant, which uses the `spectrum-Breadcrumbs--large` class. This is sized similarly to what was previously the default.

The breadcrumb title can now be customized in the multiline variant using an additional element that uses the typography component's heading classes.
See the documentation for details about this and the preferred sizing. The documentation also has been updated to include information about which
icon sizes should be displayed for each t-shirt size.

The component has been refactored to slim down and simplify its CSS and custom properties, by changing the values of existing custom properties for large and multiline variants.

The following mod custom properties have been removed:

- `--mod-breadcrumbs-action-button-spacing-block-between-multiline`
- `--mod-breadcrumbs-action-button-spacing-block-compact`
- `--mod-breadcrumbs-action-button-spacing-block-multiline`
- `--mod-breadcrumbs-block-size-compact`
- `--mod-breadcrumbs-block-size-multiline`
- `--mod-breadcrumbs-font-family-compact`
- `--mod-breadcrumbs-font-family-compact-current`
- `--mod-breadcrumbs-font-family-multiline`
- `--mod-breadcrumbs-font-family-multiline-current`
- `--mod-breadcrumbs-font-size-compact`
- `--mod-breadcrumbs-font-size-compact-current`
- `--mod-breadcrumbs-font-size-multiline`
- `--mod-breadcrumbs-font-size-multiline-current`
- `--mod-breadcrumbs-font-weight-compact`
- `--mod-breadcrumbs-font-weight-compact-current`
- `--mod-breadcrumbs-font-weight-multiline`
- `--mod-breadcrumbs-font-weight-multiline-current`
- `--mod-breadcrumbs-icon-spacing-block-between-multiline`
- `--mod-breadcrumbs-icon-spacing-block-compact`
- `--mod-breadcrumbs-icon-spacing-block-start-multiline`
- `--mod-breadcrumbs-text-spacing-block-between-multiline`
- `--mod-breadcrumbs-text-spacing-block-end-compact`
- `--mod-breadcrumbs-text-spacing-block-end-multiline`
- `--mod-breadcrumbs-text-spacing-block-start-compact`
- `--mod-breadcrumbs-text-spacing-block-start-multiline`

The following mod custom properties have been renamed:

- `--spectrum-breadcrumbs-action-button-spacing-inline-start` is now `--spectrum-breadcrumbs-inline-start-to-truncated-menu` to help clarify what it is used for. The general action button inline spacing is already handled by `--mod-breadcrumbs-action-button-spacing-inline`.
