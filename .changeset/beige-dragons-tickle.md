---
"@spectrum-css/illustratedmessage": major
"@spectrum-css/dropzone": patch
---

# S2 Illustrated Message Migration

This migration contains new tokens for t-shirt sizes (S, M, L), vertical and horizontal orientation along with their maximum width, illustatrion sizes, and content spacing. Dropzone `--mod` names are renamed to match the semantic tokens in illustrated message.

## Illustrated Message

New tokens

Removed tokens
`--spectrum-illustrated-message-title-to-heading`
`--spectrum-illustrated-message-description-max-inline-size`
`--spectrum-illustrated-message-heading-max-inline-size`

## Dropzone

Renamed mods (Dropzone)
`--mod-illustrated-message-title-to-heading` > `--mod-illustrated-message-illustration-to-heading`
`--mod-illustrated-message-heading-to-body` > `--mod-illustrated-message-heading-to-description`
`--mod-illustrated-message-content-maximum-width` > `--mod-illustrated-message-vertical-maximum-width`
