---
"@spectrum-css/contextualhelp": minor
"@spectrum-css/swatch": minor
"@spectrum-css/card": minor
---

This update removes tokens defined locally that belonged in the global scope. To ensure no regressions, please upgrade your @spectrum-css/tokens package at the same time so you will pick up the component-level definitions now in the global tokens scope. References to `.spectrum--(light|dark|darkest|medium|large)` have been removed.
