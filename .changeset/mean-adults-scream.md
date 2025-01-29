---
"@spectrum-css/tokens": minor
---

Add JSON to token package exports.

Remove CSS files from commit history (but continue to build and ship them in the releases).

Stop physically copying the `dist/css/index.css` to `dist/index.css` and instead, map `dist/index.css` in the package exports to the same `dist/css/index.css` file.
