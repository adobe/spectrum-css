---
"@spectrum-css/slider": patch
"@spectrum-css/radio": patch
---

Includes similar fixes for both Slider and Radio. Some parsers see `:pseudo:dir` as invalid, so we've changed it so that the pseudo element comes last `:dir :pseudo`.
