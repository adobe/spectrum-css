---
"@spectrum-css/checkbox": major
---

### Spectrum 2 checkbox migration

Checkbox's control and color tokens have been updated by the latest S2 tokens:

#### Updates

- Checkbox has a background color token: `--spectrum-checkbox-background-color`
- New typography additions: line-height, font-weight, and font style
- `spectrum-Checkbox--sizeM` is now the default style settings of the component.
- Removed interactive state selectors in `--emphasized` variant that was overriding other variants
- Refactored WHCM settings for read-only and disabled states

#### New tokens

`--spectrum-component-size-width-ratio-down`
`--spectrum-checkbox-bottom-to-text`
`--spectrum-checkbox-top-to-control`
`--spectrum-accent-content-color-default`
`--spectrum-accent-content-color-hover`
`--spectrum-accent-content-color-down`
`--spectrum-accent-content-color-key-focus`

#### Updated tokens

`--spectrum-checkbox-checkmark-color`
`--spectrum-checkbox-invalid-color-down`
`--spectrum-checkbox-control-color-default`
`--spectrum-checkbox-control-color-hover`
`--spectrum-checkbox-control-color-down`
`--spectrum-checkbox-control-color-focus`
