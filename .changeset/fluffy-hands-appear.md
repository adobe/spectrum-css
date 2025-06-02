---
"@spectrum-css/switch": patch
---

Fix active down state specificity by increasing the specificity of the active state selector. This change was necessary because the `postcss-hover-media-feature` plugin converts hover styles into a media query for devices that support hover. Without this adjustment, the hover styles could override the active down state styles due to the way CSS specificity and order are handled. By adding the additional `.spectrum-Switch` class in the active state selector, we ensure that the active state takes precedence over the hover state, maintaining the correct visual behavior of the switch component across different interaction states.
