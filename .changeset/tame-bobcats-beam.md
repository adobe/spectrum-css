---
"@spectrum-css/alertbanner": major
---

#### Spectrum 2 migration

Alert banner now uses Spectrum 2 tokens and specifications. In this new design, the divider has been removed.

The following changes have been made to the mod custom properties:

- `--mod-alert-banner-size` was renamed to `--mod-alert-banner-inline-size`
- `--mod-alert-banner-neutral-background` was previously misspelled. The mod `--mod-alert-banner-background` was also added, which will take precendence over the variant background mods.
- `--mod-alert-banner-top-text` was renamed to `--mod-alert-banner-top-to-text`
- `--mod-alert-banner-top-icon` was renamed to `--mod-alert-banner-top-to-icon`
- `--mod-alert-banner-bottom-text` was renamed to `--mod-alert-banner-bottom-to-text`
- `--mod-alert-banner-start-edge` was renamed to `--mod-alert-banner-inline-start-to-content`
- `--mod-alert-banner-edge-to-button` was renamed to `--mod-alert-banner-block-edge-to-button`
- The spacing on either side of the close button is now controlled by two separate mods; `--mod-alert-banner-close-button-to-inline-end` and `--mod-alert-banner-close-button-to-content`. The previous `--mod-alert-banner-close-button-spacing` has been removed.
- A new mod `--mod-alert-banner-inline-end-to-content` was added, which handles the inline end spacing when the alert banner does not have a close button. Or when there is neither a close button or an action button.
