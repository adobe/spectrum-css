---
"@spectrum-css/menu": minor
---

This handles a few remaining items from the initial S2 migration:

- update to use the correct "LinkOut" icon (previously unavailable)
- add "Unavailable" icon
  - the functionality in WC will be to open an explanatory popover

Additionally, per design review, updates were made regarding valid feature combos:

- **Not allowed:**
  - external links with: thumbnails, drill-in, unavailable, or selection modes
  - thumbnails with: drill-in, external links
  - new "unavailable" with: selection modes, external links
