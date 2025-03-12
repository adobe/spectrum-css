---
"@spectrum-tools/gh-action-file-diff": major
---

This update optimizes and abstracts more the approach to comparing compiled assets. The input fields no focus on gathering package sources and more heavily relies on the exports field of the package.json to determine what assets should be compared. At the end of the processing and comparison, the diff assets are generated and a website built to review the updates.
