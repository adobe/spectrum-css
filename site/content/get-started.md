---
layout: pages.njk
title: Get started
permalink: get-started/
eleventyNavigation:
    key: Get started
    order: 1
---

:::::: article

## Get started with Spectrum CSS {.spectrum-Heading .spectrum-Heading--sizeXXL .spectrum-Heading--serif #get-started}

We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that's a hands-on way to understand how our implementation works.

::: section

### Resources

If you're ready to jump in, here's how to set up Spectrum CSS on our GitHub:

- [Full README](https://github.com/adobe/spectrum-css/blob/main/README.md)
- [Importing icons](https://github.com/adobe/spectrum-css/blob/main/README.md#importing-ui-icons)

:::

::: section

### Tutorial: add a Spectrum button

This introductory exercise will show you how to quickly add a Spectrum button to your project.

#### Installing Spectrum CSS

Spectrum CSS requires a Node.js environment with a minimum version of 10.
First, install the required button dependencies by running:

```sh
yarn add -D @spectrum-css/vars @spectrum-css/button @spectrum-css/page
```

#### Setting up global variables

Create a new HTML file (e.g., `button.html`) in your project's root folder.

or displaying a button in Spectrum's light color theme and medium scale, a couple of classes need to be added to the document's `<html>` tag:

```html
<html class="spectrum spectrum--medium spectrum--light">
```

#### Adding Spectrum CSS

Inside the `<head>` tag, include the stylesheets that contain the design system tokens for global variables, scales, and color themes, as well as the stylesheets for the components themselves:

```html
<head>
  <link rel='stylesheet' href='node_modules/@spectrum-css/vars/dist/spectrum-global.css'>
  <link rel='stylesheet' href='node_modules/@spectrum-css/vars/dist/spectrum-medium.css'>
  <link rel='stylesheet' href='node_modules/@spectrum-css/vars/dist/spectrum-light.css'>
  <link rel='stylesheet' href='node_modules/@spectrum-css/button/dist/index-vars.css'>
</head>
```

Inside the `<body>` tag, add the markup for a Spectrum button. Note that the example also includes the CSS class name, `spectrum-Button--fill spectrum-Button--accent`, to use the call to action (CTA) option.

```html
<button class="spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM">
    <span class="spectrum-Button-label">Button</span>
</button>
 ```

Here's what your final button.html file should look like:

```html
<html class="spectrum spectrum--light spectrum--medium">
  <head>
    <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-global.css">
    <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-medium.css">
    <link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-light.css">
    <link rel="stylesheet" href="node_modules/@spectrum-css/page/dist/index-vars.css">
    <link rel="stylesheet" href="node_modules/@spectrum-css/button/dist/index-vars.css">
  </head>
  <body>
    <button class="spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM">
      <span class="spectrum-Button-label">Button</span>
    </button>
  </body>
</html>
```

![Screenshot of the rendered CTA button in a browser window](../img/button-screen-shot.png){.spectrum-CenteredImage}

:::

::: section

### Contribute to Spectrum CSS

We'd love for you to contribute to the Spectrum CSS project. Review the [contribution guidelines on our GitHub](https://github.com/adobe/spectrum-css/blob/main/.github/CONTRIBUTING.md){.spectrum-Link.spectrum-Link--quiet} to get started.

:::

::::::
