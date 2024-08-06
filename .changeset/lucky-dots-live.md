---
"@spectrum-css/icon": patch
---

Removes legacy normalization CSS for Icon SVGs that changed the overflow property. This is to fix a reported issue with clipping in iOS mobile for Express and Safari for MacOS.
The original CSS declaration was for Internet Explorer 9/10/11 and could be removed because IE 11 is not supported.
