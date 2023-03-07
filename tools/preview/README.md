# @spectrum-css/preview

The preview tool for Spectrum CSS is driven by [Storybook](https://storybook.js.org), a React-driven development environment that allows for in-depth exploration of components as they are being built.

- `assets`: This folder contains static, unprocessed assets for inclusion in the stories.
- `decorators`: These assets interpret the arguments provided and apply the necessary stylesheet or markup changes to reflect the desired update.
- `icons.js`: This is a custom file which imports the icon set from `@adobe/spectrum-css-workflow-icons`. It offers an importable icon-type with the a dropdown select list naming each icon and a generateSVG utility to convert that icon name to an SVG element with the appropriate classes.

Storybook files:
  - `main.js`
  - `manager.js`
  - `preview.js`
  - `preview-head.html` & `main-head.html`
