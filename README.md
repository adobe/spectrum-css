<div align="right">

![GitHub Actions build status on main](https://img.shields.io/github/actions/workflow/status/adobe/spectrum-css/production.yml?branch=main&style=for-the-badge&label=main) <br/> ![GitHub Actions build status on spectrum-two](https://img.shields.io/github/actions/workflow/status/adobe/spectrum-css/production.yml?branch=spectrum-two&style=for-the-badge&label=spectrum-two)

</div>

<h1 align="center">Spectrum CSS</h1>
<h3 align="center">A CSS-implementation of the Spectrum design language</h3>

<img src="assets/spectrum-css_illustration_desktop.png">

## Features

* 📖 **Robust documentation**: Spectrum CSS is designed to be used in partnership with [Spectrum's detailed usage guidelines](https://spectrum.adobe.com/).
* 🎨 **Flexible**: Our CSS is customizable, powerful, and designed to work with any JavaScript framework.
* 🧪 **Rigorously tested**: These individually-versioned components have been vetted to be accessible and inclusive of global audiences.
* 📱 **Multi-platform support**: We support evergreen browsers (minus one version) for scalability and flexibility.

&nbsp;&nbsp;&nbsp;&nbsp; [<img src="https://img.shields.io/badge/Get%20started-F0F0F0?style=for-the-badge&logo=adobe&logoColor=%23FF0000"/>](https://opensource.adobe.com/spectrum-css/get-started.html) &nbsp; [<img src="https://img.shields.io/badge/Storybook-F0F0F0?style=for-the-badge&logo=storybook&logoColor=%23FF4785"/>](https://opensource.adobe.com/spectrum-css/preview/)

## Using Spectrum CSS

The preferred method of using Spectrum CSS relies on custom properties to swap out variables for different themes and contexts. This results in the lowest bundle sizes and is one of the simpler approaches.

### Functionality

Spectrum CSS is CSS-only, implementing only the interactivity that can be done with pure CSS. We do include some lightweight JS-based interaction for demonstration purposes only in our Storybook and documentation. Spectrum CSS should only be used by implementations of Spectrum, or very simple applications that only need things like typography, checkboxes, text fields, etc.

Adobe maintains separate libraries written with [web components](https://opensource.adobe.com/spectrum-web-components/) and [React](https://react-spectrum.adobe.com/react-spectrum/index.html) that work in partnership with Spectrum CSS to create fully interactive Spectrum components.

The [Spectrum Web Components](<https://opensource.adobe.com/spectrum-web-components/>) library directly imports Spectrum CSS and optimizes it for use with web components.

### Installing components

Each component is released on npm as a separate, individually versioned package inside of the [@spectrum-css](https://www.npmjs.com/org/spectrum-css) org.

To incorporate Spectrum CSS into your project, you install only the components you need:

```shell
yarn add -DW @spectrum-css/tokens @spectrum-css/typography @spectrum-css/page @spectrum-css/icon @spectrum-css/button
```

Installed components will be available in the `node_modules/@spectrum-css/` folder of your project.

All components in this library have a peer dependency on [`@spectrum-css/tokens`](tokens), which is a local package that serves up the [Spectrum design tokens](https://github.com/adobe/spectrum-tokens) as CSS custom properties (via [Style dictionary](https://amzn.github.io/style-dictionary/#/)). These custom properties are leveraged in all components to create a cohesive visual language and to allow for easy theming. If you choose not to use the provided `@spectrum-css/tokens` package, you must define your own custom properties or your components will not render correctly. Overriding the tokens is not recommended, however, modifying styles is supported through the use of component-specific `--mod` prefixed properties. More on this below.

### Using components in your project

Spectrum CSS components have build output that is designed to be used in a variety of ways. The most common way to use Spectrum CSS is to include the `dist/index.css` file for each component you need in your project.

* `index.css` - This file includes the component's styles and variable definitions. In this version, token-driven CSS properties<sup>[1](#token-footnote)</sup> are mapped to empty `--mod` prefixed variables (for customization) with a fallback to variables prefixed with `--system` (used in adjusting results accordion to context or theme) or `--spectrum` (sourced from the design tokens). This is the file most commonly used to incorporate Spectrum CSS into a project.
  * This file loads both the `.spectrum` and `.spectrum--express` contexts which are used to toggle components between two different visual styles. The `.spectrum` context is the default.

* `index-vars.css` - _Deprecated_. This file is identical to `index.css`. It is provided as a fallback for older implementations that may have been using it and will be removed. It is recommended to use `index.css` instead.

* `index-base.css`: This file mimics the `index.css` output, but does not include the `.spectrum` or `.spectrum--express` contexts.
  * When using Spectrum CSS in a product that is rendering only one visual language (i.e. only loading the `.spectrum` context), you can use `index-base.css` plus the preferred context from the `themes` directory. i.e., loading `index-base.css` and `themes/spectrum.css` to render the default Spectrum visual language.
  * This approach can also be used when you have defined and written your own visual language and only need the base styles from Spectrum CSS. To wire up your own visual language, you would need to define your own custom properties that match those defined in the `themes/*.css` assets.

* `index-theme.css`: This file provides only the visual language for a component. It is used in conjunction with `index-base.css` and when loaded together, results in a similar result to `index.css`.

<sup><a name="token-footnote">1</a></sup>: Token-driven CSS properties are properties whose values are mapped to a value in the `@spectrum-css/tokens` package. These values represent design-language and are meant to be used across platforms. Properties specific to web-based implementations will not have a token value assigned and thus not all CSS properties will use custom properties.

#### Including assets

Start by including the base set of variables:

```css
/* Include tokens */
@import "node_modules/@spectrum-css/tokens/dist/index.css";

/*
  For components with no other contexts available, load the
  index.css file from the component's package. These are components
  that do not have a spectrum or express context available.
*/
@import "node_modules/@spectrum-css/page/dist/index.css";
@import "node_modules/@spectrum-css/typography/dist/index.css";
@import "node_modules/@spectrum-css/icon/dist/index.css";

/*
  For components with multiple contexts available, load only the context you need (spectrum or express) by sourcing index-base.css and the theme you need from the themes directory.
*/
@import "node_modules/@spectrum-css/button/dist/index-base.css";
@import "node_modules/@spectrum-css/button/dist/themes/spectrum.css";
```

Tokens values are mapped to context-specific classes which can be applied to the `<html>` element or at any place in your DOM where you wish to encapsulate or alter the visual language of your Spectrum components.

All available contexts should be defined in order to load all the appropriate custom properties for the components you are using.

#### Visual language

* `.spectrum` - The default visual language for Spectrum CSS
* `.spectrum--express` - A variant of the standard visual language

#### Scales

Scales represent the browsing context of the user. They are used to adjust the size of components to improve readability and usability on different devices.

* `.spectrum--medium` - The default scale for Spectrum CSS, used for desktop and tablet devices
* `.spectrum--large` - A larger scale for Spectrum CSS, used for mobile devices and other small screens to create a more touch-friendly experience

#### Themes (colorstops)

Themes represent the color scheme of the user's browsing context. They are used to adjust the color of components to improve readability and usability in different environments.

* `.spectrum--light` - The default theme for Spectrum CSS, used for light mode
* `.spectrum--dark` - A darker theme for Spectrum CSS, used for dark mode

Other modes are available but are in the process of being deprecated and should not be used in new projects.

#### Example

Put together, we would define the context for our application in the following way:

```html
<html class="spectrum spectrum--medium spectrum--light"></html>
```

To switch to Express, **add** the `.spectrum--express` class to the `<html>` element:

```html
<html class="spectrum spectrum--medium spectrum--light spectrum--express"></html>
```

Note the `spectrum--express` class is added to the existing classes; `spectrum` should always be present to ensure the correct visual language is loaded.

Components can then be added by following the semantic guidance found in the [Spectrum CSS documentation](http://opensource.adobe.com/spectrum-css/).

Because CSS custom properties honor the cascading nature of CSS, you can infinitely nest different contexts. For example, you could have a `.spectrum--dark` context inside of a `.spectrum--light` context, and components will honor the innermost context.

### Modifying components

You can override variables and modify Spectrum CSS' look and feel by re-defining the custom properties in context. Look for the **Custom Property API** section in each component to determine which custom properties you can override. See [Action Button for a complete example](https://opensource.adobe.com/spectrum-css/actionbutton.html#custompropertiesapi).

### Importing UI icons

Some components require certain "UI icons" to render. These icons are released within the [`@spectrum-css/ui-icons`](https://www.npmjs.com/package/@spectrum-css/ui-icons) package and are used by components like `@spectrum-css/icon` and `@spectrum-css/actionbutton`.

Based on which scales you'll be using, you can choose to load different files:

* `spectrum-css-icons.svg` - Both medium and large icons for responsive UIs that support both `.spectrum--medium` and `.spectrum--large`

* `spectrum-css-icons-medium.svg` - Medium icons only, supports `.spectrum--medium` only

* `spectrum-css-icons-large.svg` - Large icons only, supports `.spectrum--large` only

**Note:** If you're using `spectrum-css-icons.svg`, be sure to add `.spectrum--medium` or `.spectrum--large` to the `<html>` element, or you'll see both medium and large icons at once.

### Importing workflow icons

If your app has any level of complexity, you'll need "workflow" icons to indicate actions. These icons are not required to render the base components, and instead are used within buttons or menu items for actions like share, play, justify, save, etc.

These icons are released within the [`@adobe/spectrum-css-workflow-icons`](https://www.npmjs.com/package/@adobe/spectrum-css-workflow-icons) package. Visit the [Spectrum workflow icon list](https://spectrum.adobe.com/page/icons/) and click on any icon to get the SVG markup.

### Language support

To take advantage of locale specific changes such as placeholders not italicizing Japanese, your application should specify a [`Content-Language` response header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language) or set the [`lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang).

In addition, you should set the `dir` attribute for components to render correctly.

For English, a left-to-right language:

```html
<html lang="en" dir="ltr"></html>
```

For Arabic, a right-to-left language:

```html
<html lang="ar" dir="rtl"></html>
```

### Browser support

We maintain a relatively modern codebase that supports the latest two versions of evergreen web browsers. The current list of browsers officially supported by Spectrum CSS can be found in the browserslist section of the project's package.json file. This setting is used by the build tools when the source files are built. If you require additional browser support for your project, the CSS can processed further with your chosen tools.

* latest 2 Edge versions
* latest 2 Chrome versions
* latest 2 Firefox versions
* latest 2 Safari versions
* latest 2 iOS versions

### Optimizing Spectrum CSS

Spectrum CSS is designed to be as modern and flexible as possible, and as such, leaves room for consumers to optimize in their own way. There are many tools and techniques you can use to optimize CSS for your project such as tree shaking, purging, and minification. If you are loading the entire set of `@spectrum-css/tokens` for example, you can safely tree shake the tokens to only include the variables you are using, often leading to a significant reduction in file size.

## Contributing

A very special thank you to all of our [contributors](<https://github.com/adobe/spectrum-css/graphs/contributors>) without whom this project would not be possible.

Want to join the team? Check out the [contributing guidelines](.github/CONTRIBUTING.md) for quick start information.

### Getting started

To get started with Spectrum CSS, you'll start by cloning the repository:

```shell
git clone https://github.com/adobe/spectrum-css.git
```

or if you're using the GitHub CLI:

```shell
gh repo clone adobe/spectrum-css
```

To ensure your Node environment is always aligned with the project, we strongly recommend using [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating). Once you have nvm installed, you can run:

```shell
nvm use
```

This will ensure the correct version of node is installed and used for the project. You always want to run nvm use when you first clone the project and whenever you switch branches.

<!-- TODO: link to a script for the command line to automatically run nvm -->

Then, install the dependencies:

```shell
yarn install
```

**Important:** Requires >= Node 18.8.1 and Yarn 1.22.0.

To spin up the local development environment, run:

```shell
yarn start
```

This will spin up the project's [Storybook](https://storybook.js.org/docs/web-components/get-started/introduction). Editing any of the `*.css` or the `*.stories.js` files in `components/*` will live reload in your browser.

This project is leveraging caching from [Nx](https://nx.dev/) to speed up the build process. If you are seeing unexpected results, you can clear the cache by running `yarn nx reset`.

### Tasks

The following tasks are available:

* `yarn clean` - Cleans all output files for the project and all components
* `yarn build` - Performs a build of all components
* `yarn build:all` - Performs a build of all components, documentation site, and storybook
* `yarn dev` - Performs a component build, runs storybook, and serves the documentation on the default port (3000), then starts watching components and website files
* `yarn compare`: This compares the current version of components with the previous versions published to NPM and output a list of all the changes that have been made. This is useful for reviewing changes before a release. The information is provided in the command-line output as well as in a simple web page that is opened in your default browser upon completion. The web page includes links to the visual diffs for each component when the file sizes have changed.
  * Components with no changes are not included in the output.
  * To run comparisons on one or multiple components, `yarn compare` accepts a list of components as arguments. For example, `yarn compare button` will compare the current version of the button component with the previous version published to NPM. `yarn compare button checkbox` will compare the current version of the button and checkbox components with the previous versions published to NPM.
  * Named components should be space-separated.
  * Running `yarn compare` with no inputs will automatically run against all packages.
  * **Note** that you must run `yarn build` before running `yarn compare` to ensure that the latest build is being compared.
* `yarn lint`: Provides helpful updates and warnings for a component's package.json file. This helps keep all components in alignment.
  * Use `yarn lint --fix` to automatically fix any issues that are found.
  * To run on a single component, use `yarn linter accordion` (where `accordion` is the name of the component or components you want to lint).
* `yarn refresh:env`: This copies values for the project's `.env` file (an asset never committed to the repo as it contains login secrets) by using the `.env.example` file as a template. This script is useful when you need to update the `.env` file with new values from the `.env.example` file or when you checkout or clean the repo and need to restore the `.env` file.

### Documentation

To spin up the [documentation site](http://opensource.adobe.com/spectrum-css/) locally:

```sh
yarn dev
```
