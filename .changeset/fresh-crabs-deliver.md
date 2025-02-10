---
"@spectrum-css/breadcrumb": major
---

#### Spectrum 2 Migration

The breadcrumbs component is now updated to use the S2 specs and tokens. This includes updated spacing, heights, colors, font sizes, etc.

There has been a major design change to the variant classes related to density and sizing, to align their terminology better with t-shirt sizes:

- The "compact" variant no longer exists. The `spectrum-Breadcrumbs--compact` class and associated custom properties are removed. The default (medium) breadcrumbs are now sized similar to what was previously called compact.
- There is a new "large" variant, which uses the `spectrum-Breadcrumbs--sizeL` class. This is sized similarly to what was previously the default.

In the multiline variant, the size of the title item can optionally be customized using an additional child heading element that applies one of the
typography component's `spectrum-Heading--size*` classes. The preferred sizes specified in the design spec are small, medium, large (default), and
extra-large. If an additional heading element is not used within the title item, the text will still be sized correctly to the default.
