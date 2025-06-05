---
"@spectrum-css/fieldlabel": patch
---

#### Fix fieldlabel required icon wrapping

Addresses case where fieldlabel required icon could appear on its own line when wrapping by applying text-wrap: pretty; to the parent label class and adding a non-breaking space character between the label content and required marker.
