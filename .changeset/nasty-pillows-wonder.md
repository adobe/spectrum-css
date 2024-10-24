---
"@spectrum-css/dialog": patch
---

Dialog t-shirt sizes

Adds support for t-shirt sizing class names to dialog CSS. `@deprecated` comments were added to communicate that the old class names (`--small`, `--medium`, and `--large`) will be removed in S2.

| old class name          | new class name                                         |
| ----------------------- | ------------------------------------------------------ |
| spectrum-Dialog--small  | spectrum-Dialog--sizeS                                 |
| spectrum-Dialog--medium | spectrum-Dialog (the default, so no size is necessary) |
| spectrum-Dialog--large  | spectrum-Dialog--sizeL                                 |
