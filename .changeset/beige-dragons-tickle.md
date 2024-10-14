---
"@spectrum-css/illustratedmessage": major
"@spectrum-css/dropzone": major
---

# S2 Illustrated Message Migration

This migration contains new tokens for t-shirt sizes (S, M, L), vertical and horizontal orientation along with their maximum width, illustration sizes, and content spacing. Dropzone `--mod` names are renamed to match the semantic tokens in illustrated message.

## Illustrated Message

New properties
`--spectrum-illustrated-message-heading-to-description`
`--spectrum-illustrated-message-illustration-to-heading`
`--spectrum-illustrated-message-illustration-to-content`
`--spectrum-illustrated-message-description-to-action`
`--spectrum-illustrated-message-illustration-color`
`--spectrum-illustrated-message-illustration-size`
`--spectrum-illustrated-message-small-cjk-title-font-size`
`--spectrum-illustrated-message-large-cjk-title-font-size`
`--spectrum-illustrated-message-large-body-font-size`
`--spectrum-illustrated-message-horizontal-maximum-width`

New mods
`--mod-illustrated-message-description-to-action`
`--mod-illustrated-message-heading-to-description`
`--mod-illustrated-message-illustration-to-content`
`--mod-illustrated-message-horizontal-maximum-width`

Removed properties
`--spectrum-illustrated-message-title-to-heading`
`--spectrum-illustrated-message-description-max-inline-size`
`--spectrum-illustrated-message-heading-max-inline-size`
`--spectrum-illustrated-message-illustration-accent-color`
`--mod-illustrated-message-illustration-accent-color`
`--highcontrast-illustrated-message-illustration-accent-color`

## Dropzone

New mods
`--mod-drop-zone-body-to-action`
`--mod-drop-zone-illustration-to-title`

## Dropzone nested mods

Renamed mods
`--mod-illustrated-message-title-to-heading` > `--mod-illustrated-message-illustration-to-heading`
`--mod-illustrated-message-heading-to-body` > `--mod-illustrated-message-heading-to-description`
`--mod-illustrated-message-content-maximum-width` > `--mod-illustrated-message-vertical-maximum-width`
