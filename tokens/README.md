# @spectrum-css/tokens

> Core tokens builder for Spectrum CSS

This package uses StyleDictionary to build Spectrum core tokens for CSS.

## Glossary

- **Core tokens**: The base set of design data that define the system. These are the key-value pairs that are used to build the design system and are sourced from the design team via @adobe/spectrum-tokens. You can find the relevant versioning information in the `package.json` file.
- **Custom properties**: These are CSS variables generated from the core tokens using the StyleDictionary build process. These are used in the CSS base styles to apply the design system to the components in a way that can respond to changes in color, scale, or context.
- **Context**: This terms refers to the design language an application wants to use. Contexts previously supported were Spectrum and Express. The current system supports only Spectrum but has committed to offering backward compatibility through at least December 2024.
- **Color**: This term refers to the color mode. The current system supports light and dark only. The lightest and darkest color modes were deprecated in the final version for **14.x**.
- **Scale**: This term refers to the scale of the design system. The current system supports medium and large scales. The large scale is used for mobile applications and the medium scale is used for desktop applications.

## Usage

The output is concatenated into a single `dist/index.css` for use in a vanilla HTML application. This entire file should be imported, and the relevant classes should be toggled to swap out core tokens.

On the `<body>` element, start with `.spectrum`, add in `.spectrum--light`, then `.spectrum--medium`.

For additional guidance on which assets to load, see the architecture section below.

## Architecture

All compiled assets are shipped from the `dist` folder. Most of the assets are available in the `dist/css` folder. The component-level mappings for Spectrum 1, Express, and Spectrum 2 exist in the components output as theme assets. These should be loaded with the appropriate global variables and color and scale assets from the last version of the tokens package: **v14.x**.

### Global core tokens

- `global-vars.css`: Shared global, unchanging tokens.
- `light-vars.css`: Tokens specific to the light color.
- `dark-vars.css`: Tokens specific to the dark color.
- `medium-vars.css`: Tokens specific to the medium (desktop) scale.
- `large-vars.css`: Tokens specific to the large (mobile) scale.
- `index.css`: The above files rolled up into 1 css file for convenience; best for use in a vanilla HTML application.

## Overrides and additions

Overrides and additions to core tokens can be added to `custom/*-vars.css`.

Ensure that you add new values to the appropriate color, or scale file:

- `global-vars.css` - Shared global, unchanging tokens
- `light-vars.css` - Tokens specific to the light color
- `dark-vars.css` - Tokens specific to the dark color
- `medium-vars.css` - Tokens specific to the medium (desktop) scale
- `large-vars.css` - Tokens specific to the large (mobile) scale

Values added here will be copied over and concatenated with the custom properties being generated from the core tokens by StyleDictionary.

## Breaking changes from v14 to v15

There are no additional contextual folders (i.e., `dist/css/spectrum/`) because this package supports no other theming systems outside of the component token mappings. All global tokens are found in the `dist/css` folder.

For more notes on how the token data has changed, see the [@adobe/spectrum-tokens](https://github.com/adobe/spectrum-tokens/releases) release documentation.
