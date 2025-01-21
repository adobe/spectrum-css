---
"@spectrum-css/pickerbutton": patch
"@spectrum-css/progressbar": patch
"@spectrum-css/calendar": patch
"@spectrum-css/stepper": patch
"@spectrum-css/radio": patch
"@spectrum-css/dial": patch
---

Fixes to align `spectrum-two` with `s2-foundations-redux`/`main`, mostly defining unused custom properties, but addresses any other lint warnings or inconsistencies noted in the following components:

**Calendar**: Defines 1 previously undefined custom property to align with `main` and `s2-foundations-redux`
**Dial**: Defines 6 previously undefined custom properties, removes 3 unused custom properties
**Pickerbutton**: Defines 9 previously undefined custom properties to align with `main` and `s2-foundations-redux`
**Progressbar**: Removes 3 unused custom properties, reverts background-color to background to accommodate gradients
**Radio**: Defines 4 previously undefined custom properties to align with `main` and `s2-foundations-redux`
**Stepper**: moves high contrast block further down to align with other components' CSS structure, defines multiple undefined custom properties, adds disable-next-line comment to suppress no-unused-custom-properties warning
