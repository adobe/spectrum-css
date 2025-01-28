---
"@spectrum-css/preview": major
---

## Breaking change

This update removes the previously deprecated component documentation for **cyclebutton**, **quickaction**, **searchwithin**, and **splitbutton**.

To support the Spectrum 2 (S2) Foundations release, Storybook has been updated to toggle token packages to connect the following labels with their appropriate data sources:

- **Spectrum 1**: Flagged as the "legacy" context, this version is no longer the default for the component contexts. When selected, Storybook will load the `@spectrum-css/tokens` at release `v14.6.0` and attach the `.spectrum--legacy` class to the container.
- **Spectrum 2**: The new default context, this version represents the "S2 Foundations" release which serves as a bridge between S1 and S2. Components in this context are not fully S2 and will not exactly match specifications but they do reflect a significant move toward the S2 designs. For full details, see the token and component-level changelogs.
- **Express**: This now deprecated context is still rendered in Storybook by leveraging the `@spectrum-css/tokens` at release `v14.6.0`. Please note that Express and S1 will be removed in the next major release.

This release also includes:

- New migration documentation for S1 -> S2 updates
- Fix for the duplicate line numbers in the code preview plugin
- Updated styles to integrate Spectrum styling into the Storybook UI
