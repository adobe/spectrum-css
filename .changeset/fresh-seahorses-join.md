---
"@spectrum-css/button": patch
---

#### refactor: remove spectrum-ButtonWithFocusRing placeholder class extend

Removes the need for the extend from this placeholder class, as the styles it provides have diverged slightly from what is in button and it was causing some unnecessary CSS to override.
This should not result in any changed visuals or behavior, as the same CSS has been integrated.