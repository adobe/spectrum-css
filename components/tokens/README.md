# @spectrum-css/tokens

> Core tokens builder for Spectrum CSS

This package uses StyleDictionary to build Spectrum core tokens for CSS.

## Output

The output is concatenated into a single `dist/index.css` for use in Spectrum CSS. This entire file should be imported, and the relevant classes should be toggled to swap out core tokens.

On the `<html>` element, start with `.spectrum`, add in `.spectrum--light`, then `.spectrum--medium`. To switch to Express, add `.spectrum--express`.

## Overrides and additions

Overrides and additions to core tokens can be added to `custom.css`.

Ensure that you correctly scope any added tokens:

- `.spectrum` - Global, unchanging tokens or tokens specific to the Spectrum flavor
- `.spectrum--express` - Tokens specific to the Express flavor
- `.spectrum--lightest` - Tokens specific to the light color stop (soon to be deprecated)
- `.spectrum--light` - Tokens specific to the light color stop
- `.spectrum--dark` - Tokens specific to the dark color stop
- `.spectrum--darkest` - Tokens specific to the darkest color stop
- `.spectrum--medium` - Tokens specific to the medium (desktop) scale
- `.spectrum--large` - Tokens specific to the large (mobile) scale
- `.spectrum--express.spectrum--*` - Tokens specific to the Express flavor for any of the above color stops and scales
