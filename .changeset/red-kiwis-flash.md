---
"@spectrum-css/toast": major
---

#### S2 toast migration

This migrates the `toast` component to S2. Custom properties have been remapped per the design spec. Mods have been added and placeholder icons have been updated from the new workflow icons.

##### Tokens

| Before                       | After                        |
| ---------------------------- | ---------------------------- |
| --spectrum-corner-radius-100 | --spectrum-corner-radius-800 |

##### Mods

The following mods have been added.

`--mod-toast-font-family`
`--mod-toast-font-style`
`--mod-toast-icon-block-size`
`--mod-toast-spacing-action-button-to-close`
`--mod-toast-spacing-bottom-edge-to-close-button`
`--mod-toast-spacing-close-button-to-edge`
`--mod-toast-spacing-text-to-close-button`
`--mod-toast-spacing-top-edge-to-close-button`

##### Passthroughs

The following passthrough has been added.

`--mod-closebutton-icon-color-default`
