---
"@spectrum-css/checkbox": major
---

#### Checkbox S2 Migration

Checkbox's control and color tokens have been updated by the latest S2 tokens:

**Updates**

- Checkbox has a background color token: `--spectrum-checkbox-background-color`
- New typography additions: line-height, font-weight, and font style
- `spectrum-Checkbox--sizeM` is now the default style settings of the component.
- Fixed typo in `--mod-focus-indicator-thickness`
- Removed interactive state selectors in `--emphasized` variant that was overriding other variants
- Refactored WHCM settings for read-only and disabled states

##### New tokens

`--spectrum-component-size-width-ratio-down`
`--spectrum-checkbox-bottom-to-text(S)`
`--spectrum-checkbox-bottom-to-text(M)`
`--spectrum-checkbox-bottom-to-text(L)`
`--spectrum-checkbox-bottom-to-text(XL)`
`--spectrum-checkbox-top-to-control (S)`
`--spectrum-checkbox-top-to-control (M)`
`--spectrum-checkbox-top-to-control (L)`
`--spectrum-checkbox-top-to-control (XL)`
`--spectrum-accent-content-color-default`
`--spectrum-accent-content-color-hover`
`--spectrum-accent-content-color-down`
`--spectrum-accent-content-color-key-focus`

##### Modified tokens

`--spectrum-checkbox-checkmark-color`
`--spectrum-checkbox-invalid-color-down`
`--spectrum-checkbox-control-color-default`
`--spectrum-checkbox-control-color-hover`
`--spectrum-checkbox-control-color-down`
`--spectrum-checkbox-control-color-focus`
