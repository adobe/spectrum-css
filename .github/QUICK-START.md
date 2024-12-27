# Quick start guide

This guide will show you how to quickly install Spectrum CSS and use it to display the Button component.

## Install using Node/yarn

Install the components you want along with their dependencies. Here's an example:

```shell
yarn add -DW @spectrum-css/tokens @spectrum-css/typography @spectrum-css/page @spectrum-css/icon @spectrum-css/button
```

Spectrum CSS components utilize custom properties in order to change themes and scales. For these to apply, a couple of classes need to be added to the document’s `<html>` tag based on the [visual language](https://github.com/adobe/spectrum-css?tab=readme-ov-file#visual-language), [scale](https://github.com/adobe/spectrum-css?tab=readme-ov-file#scales), and [theme](https://github.com/adobe/spectrum-css?tab=readme-ov-file#themes-colorstops) you wish to use. For example, the following code snippet will display styling for the default Spectrum visual language using medium scale and light color theme:

```html
<html class="spectrum spectrum--medium spectrum--light"></html>
```

Use the `index.css` files in your project to include component and global styles ([Spectrum and Express contexts](https://github.com/adobe/spectrum-css?tab=readme-ov-file#visual-language), [background theme/colorstop](https://github.com/adobe/spectrum-css?tab=readme-ov-file#themes-colorstops), [platform scaling](https://github.com/adobe/spectrum-css?tab=readme-ov-file#scales), etc.) for the component. If you don't need all of the global styles, peek at the docs for [including assets](https://github.com/adobe/spectrum-css?tab=readme-ov-file#including-assets)). Use this file by including the stylesheet (plus stylesheets for dependencies) in the `<head>` tag:

```html
<head>
  <!-- Include global tokens depedency first -->
  <link
    rel="stylesheet"
    href="node_modules/@spectrum-css/tokens/dist/index.css"
  />

  <!-- Include index.css for the components you're using -->
  <link
    rel="stylesheet"
    href="node_modules/@spectrum-css/button/dist/index.css"
  />
</head>
```

Inside the `<body>` tag, add the markup for your component (Spectrum button in our example). The example also includes the CSS class names `spectrum-Button--fill` and `spectrum-Button--accent`, to use the accent variant:

```html
<button
  class="spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM"
>
  <span class="spectrum-Button-label">Button</span>
</button>
```

To put it all together, your final html file will look like this:

```html
<html class="spectrum spectrum--light spectrum--medium">
  <head>
    <link
      rel="stylesheet"
      href="node_modules/@spectrum-css/tokens/dist/index.css"
    />
    <link
      rel="stylesheet"
      href="node_modules/@spectrum-css/button/dist/index.css"
    />
  </head>
  <body>
    <button
      class="spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM"
    >
      <span class="spectrum-Button-label">Button</span>
    </button>
  </body>
</html>
```

## Include files from a CDN

Another way to include Spectrum CSS components in your project is to use a CDN to link to the components you want, plus their dependencies, in the `<head>` tag of your HTML. If you choose to use a CDN, please note that Spectrum CSS doesn't manage a CDN, cannot confirm the availability or up-time of external CDNs, and doesn't recommend using a CDN for Spectrum CSS in a production environment.
