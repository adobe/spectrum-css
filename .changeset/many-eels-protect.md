---
"@spectrum-css/closebutton": minor
---

Currently the t-shirt sizing for Close button is using "spectrum-Closebutton" as a prefix which does not align with the use of "spectrum-CloseButton" (capital B) for the root class. This PR adds sizing classes that use the capital B and labels the lowercase B class as deprecated.

Expands Close button test coverage to include the hover and focus states.
