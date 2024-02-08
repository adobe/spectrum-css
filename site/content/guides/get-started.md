---
layout: layouts/pages.njk
title: Get started
permalink: get-started.html
eleventyNavigation:
  title: Get started
  key: get-started
  order: 1
---

<article>

# Get started with Spectrum CSS {.spectrum-Heading .spectrum-Heading--sizeXXL .spectrum-Heading--serif #get-started}

We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that provides a hands-on way to understand how our implementation works. {.spectrum-Body .spectrum-Body--sizeXXL}

<section>

## Resources

If you're ready to jump in, here's how to set up Spectrum CSS on our GitHub: {.spectrum-Body .spectrum-Body--sizeL}

<br/>

- [Full README](https://github.com/adobe/spectrum-css/blob/main/README.md)
- [Importing icons](https://github.com/adobe/spectrum-css/blob/main/README.md#importing-ui-icons)

{.spectrum-Body .spectrum-Body--sizeL}

</section>

<section>

## Install

Spectrum CSS requires a Node.js environment with a minimum version of 14. Each component is released on npm as a distinct package inside of the [@spectrum-css org](https://www.npmjs.com/org/spectrum-css).

First, install the required button dependencies by running:

```sh
yarn add -D @spectrum-css/tokens @spectrum-css/button @spectrum-css/page
```

We definitely need the `@spectrum-css/button` package in order to add a button to our project. We're going to use the `@spectrum-css/page` component to wrap our button in some default styles. The `@spectrum-css/tokens` package provide global Spectrum CSS styling for responsiveness and themes that we will need for our components to display properly.

Installed components will be available in the node_modules/@spectrum-css/ folder.

## Applying styles

### Setting context

Spectrum CSS components utilize custom properties in order to change themes and scales. For these to apply, a couple of classes need to be added to the document's `html` tag based on the scale and theme you wish to use. For example, the following code snippet will display styling for the medium scale and light color theme:

```html
<html class="spectrum spectrum--medium spectrum--light"></html>
```

### Stylesheets

Inside the `<head>` tag, include the stylesheets that contain the design system tokens, as well as the stylesheets for the components themselves:

```html
<head>
 <!-- Include global tokens first -->
 <link
  rel="stylesheet"
  href="node_modules/@spectrum-css/tokens/dist/index.css"
 />

 <!-- Include index-vars.css for all components you're using -->
 <link
  rel="stylesheet"
  href="node_modules/@spectrum-css/page/dist/index-vars.css"
 />
 <link
  rel="stylesheet"
  href="node_modules/@spectrum-css/button/dist/index-vars.css"
 />
</head>
```

## Semantic markup

Inside your application, add the recommended markup for a Spectrum button. The example also includes the CSS class names, `spectrum-Button--fill spectrum-Button--accent`, to use a call-to-action variant.

```html
<button
 class="spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM"
>
 <span class="spectrum-Button-label">Button</span>
</button>
```

Here's what it all looks like together:

```html
<html class="spectrum spectrum--light spectrum--medium">
 <head>
  <link
   rel="stylesheet"
   href="node_modules/@spectrum-css/tokens/dist/index.css"
  />
  <link
   rel="stylesheet"
   href="node_modules/@spectrum-css/page/dist/index-vars.css"
  />
  <link
   rel="stylesheet"
   href="node_modules/@spectrum-css/button/dist/index-vars.css"
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

![Screenshot of the rendered CTA button in a browser window](../assets/images/button-screen-shot.png){.spectrum-Image--centered}

### Modifying Spectrum CSS components

You can modify the look and feel of Spectrum CSS by overriding the custom variables for a component. Look for the Custom Property API section in the component docs for a list of variables that you can set to override styles. See the [Button docs](button-accent.html#custompropertiesapi) as an example.

You can override the available mod variables listed by adding something like the following to your CSS:

```css
--mod-button-border-radius: 10px;
```

</section>

<section>

## Contribute to Spectrum CSS

This project relies on the contributions of developers like you. We welcome contributions of all kinds, from simple bug reports through to direct code contributions. You know what your project needs and we value your help in making Spectrum CSS better.

We'd love for you to contribute to the project. Please review the [contribution guidelines on our GitHub](https://github.com/adobe/spectrum-css/blob/main/.github/CONTRIBUTING.md){.spectrum-Link.spectrum-Link--quiet} to get started.

</section>

</article>
