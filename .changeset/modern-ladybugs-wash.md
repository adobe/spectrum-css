---
"@spectrum-css/breadcrumb": patch
---

Ensures disabled breadrumb items behave as expected. They are conditionally left out of tab order depending on their `isDisabled` value. Uses [aria-disabled="true"] and applies `is-disabled` class to `.spectrum-Breadcrumb-itemLink`.
