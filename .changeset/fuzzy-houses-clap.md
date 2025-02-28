---
"@spectrum-css/picker": patch
---

fix(picker): update S2 border-color for picker default open state from gray-500 to gray-800
Previously, the --spectrum-picker-border-color-default-open was gray-500, but the spec shows it as gray-800. This change aligns the component with the spec by updating the --spectrum-picker-border-color-default-open to gray-800.
