# @spectrum-css/ui-icons

> The source for UI iconography used in Spectrum CSS

This package uses [SVGO](https://github.com/svg/svgo) to process SVGs and combines them into several sprite sheets for use in this and other projects.

_Please do not import assets from the source directory as these are fluid and not part of the semantic publishing contract. Instead, use the `dist` directory._

## Installation

```sh
yarn add -DW @spectrum-css/ui-icons
```

## Usage

### SVGs

SVGs are available in the `dist` directory. They are organized by size. The `dist` directory contains the following:

- `medium`: assets to be used in desktop display formats
- `large`: assets to be used in mobile display formats
- `combined`: assets to be used in products requiring both desktop and mobile display icons to swap quickly or be used in parallel
- `spectrum-css-icons.svg`: a single sprite sheet containing all icons
- `spectrum-css-icons-medium.svg`: a single sprite sheet for medium icons
- `spectrum-css-icons-large.svg`: a single sprite sheet for large icons

### CSS

CSS for the icons is available from the `@spectrum-css/icon` package. See the [Icon documentation](../components/icon/README.md) for more information.
