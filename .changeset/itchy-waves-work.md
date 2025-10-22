---
"@spectrum-css/stepper": major
---

### Number field S2 Migration

This work migrations the stepper/number field component to Spectrum 2! 🎉 The S1 stepper was very minimal, and didn't align with SWC or React's implementation. This migration should bring parity to the CSS component. New features include:

- the display name for this component has changed from `stepper` to `number field` (based on design's, React's and SWC's naming conventions.)
  - _**Note:**_ The NPM package name has remained as "stepper," and hasn't yet changed to "number field.""
- an error state with alert icon
- optional help text
- embedded field label & optional positions

#### Quick overview

Because of all the new features and to align more with design, SWC and React, below is a quick recap of the following tokens & classes that have been renamed in the CSS:

- All `.spectrum-Stepper*` class names have been converted to `.spectrum-NumberField*`
- The `.hide-stepper` class has been converted to `.spectrum-NumberField--hiddenStepper`
- Custom properties have been renamed from `--spectrum-stepper*` to `--spectrum-numberfield*`
- Markup has changed
- Styling lives on different elements
- Lots more Chromatic test coverage

#### Markup

Following React's lead, the markup of the number field has changed. More obviously, help text and field label components are embedded into `.spectrum-NumberField`, instead of necessitating separate components. The number field now incorporates an error state that better reflects the embedded textfield's error state, so there is now an alert icon within the markup in an invalid number field. Additionally, a new `.spectrum-NumberField-inputs` containing wrapper was introduced to encapsulate the textfield element and infield button elements. This container allowed for some extra alignment styles for those 2 elements and then freed up the opportunity to introduced an "unstyled" `input` (as described more below). Custom classes were also added to the nested textfield and input elements to ensure styles for number field were passed correctly to the correct elements (`.spectrum-NumberField-textfield` and `.spectrum-NumberField-input`).

Stemming from the infield button S2 migration, there is also an extra container for the inline (previously "stacked") stepper buttons.

#### Styling

The `.spectrum-NumberField-textfield` div is where the S2 design language lives (instead of on the input element), while the actual `input` (`.spectrum-NumberField-input`) is unstyled and incorporated more subtly. Breaking changes were introduced in all previous custom properties, where any `--spectrum-stepper-*` properties were renamed to `--spectrum-numberfield-*`. This also applied to class names, where `.spectrum-Stepper` changed to `.spectrum-NumberField`. The `hide-stepper` class has also been updated to match our class naming conventions (`.spectrum-NumberField--hiddenStepper`).
