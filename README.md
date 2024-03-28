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
* 📱 **Multi-platform support**: We support [evergreen browsers](https://github.com/adobe/spectrum-css?tab=readme-ov-file#browser-support) for scalability and flexibility.

&nbsp;&nbsp;&nbsp;&nbsp; [<img src="https://img.shields.io/badge/Get%20started-F0F0F0?style=for-the-badge&logo=adobe&logoColor=%23FF0000"/>](https://opensource.adobe.com/spectrum-css/get-started.html) &nbsp; [<img src="https://img.shields.io/badge/Storybook-F0F0F0?style=for-the-badge&logo=storybook&logoColor=%23FF4785"/>](https://opensource.adobe.com/spectrum-css/preview/)

## Using Spectrum CSS

The preferred method of using Spectrum CSS relies on custom properties to swap out variables for different themes and contexts. This results in the lowest bundle sizes and is one of the simpler approaches.

Want to get a component up and running as soon as possible? Check out the [quick start guide](https://github.com/adobe/spectrum-css/blob/main/.github/QUICK-START.md).

### Functionality

Spectrum CSS is CSS-only, implementing only the interactivity that can be done with pure CSS. We do include some lightweight JS-based interaction for demonstration purposes only in our [Storybook](https://opensource.adobe.com/spectrum-css/preview/). Spectrum CSS should only be used by implementations of Spectrum, or very simple applications that only need things like typography, checkboxes, text fields, etc.

Adobe maintains separate libraries written with [web components](https://opensource.adobe.com/spectrum-web-components/) and [React](https://react-spectrum.adobe.com/react-spectrum/index.html) that work in partnership with Spectrum CSS to create fully interactive Spectrum components.

The [Spectrum Web Components](<https://opensource.adobe.com/spectrum-web-components/>) library directly imports Spectrum CSS and optimizes it for use with web components.

### Installing components

Each component is released on npm as a separate, individually versioned package inside of the [@spectrum-css](https://www.npmjs.com/org/spectrum-css) org.

To incorporate Spectrum CSS into your project, you install the components you need along with any peer dependencies you need for your implementation. Most peer dependencies are optional and can bring additional features when installed along with a component. For example a button can be rendered with or without an icon; so if your use-case leverages an icon with your button, you'll want to install icon as a peer dependency.

```shell
yarn add -DW @spectrum-css/tokens @spectrum-css/typography @spectrum-css/page @spectrum-css/icon @spectrum-css/button
```

Installed components will be available in the `node_modules/@spectrum-css/` folder of your project.

All components in this library have a peer dependency on [`@spectrum-css/tokens`](tokens), which is a local package that serves up the [Spectrum design tokens](https://github.com/adobe/spectrum-tokens) as CSS custom properties (via [Style dictionary](https://amzn.github.io/style-dictionary/#/)). These custom properties are leveraged in all components to create a cohesive visual language and to allow for easy theming. If you choose not to use the provided `@spectrum-css/tokens` package, you must define your own custom properties or your components will render with a significant number of missing styles. When overriding certain styles is necessary, modifying styles is supported through the use of component-specific `--mod` prefixed properties. [More on this below](https://github.com/adobe/spectrum-css?tab=readme-ov-file#modifying-components).

### Using components in your project

Spectrum CSS components have build output that is designed to be used in a variety of ways:

* `index.css` - _Preferred and most commonly used to incorporate Spectrum CSS into a project_. This file includes the component's styles and variable definitions. In this version, token-driven CSS properties<sup>[1](#token-footnote)</sup> are mapped to empty `--mod` prefixed variables (for customization) with a fallback to variables prefixed with `--spectrum` (sourced from the design tokens).
  * This file loads both the `.spectrum` and `.spectrum--express` contexts which are used to toggle components between two different [visual styles](https://github.com/adobe/spectrum-css?tab=readme-ov-file#visual-language). The `.spectrum` context is the default.

* `index-vars.css` - _Deprecated_. This file is identical to `index.css`. It is provided as a fallback for older implementations that may have been using it and will be removed. It is recommended to use `index.css` instead.

* `index-base.css`: This file mimics the `index.css` output, but does not include the `.spectrum` or `.spectrum--express` contexts.
  * If your product only requires the `.spectrum` context, you can use `index-base.css` plus `themes/spectrum.css` from the `themes` directory to render the default Spectrum visual language.
    * The `.spectrum--express` context, on the other hand, is dependent on/expands on the default `.spectrum` context. This means if you only want to use the Express context, you still need to include `themes/spectrum.css`. In this case, we recommend using `index.css` instead since it includes both contexts by default.
  * This approach can also be used when you have defined and written your own visual language and only need the base component styles from Spectrum CSS. To wire up your own visual language, you would need to define your own custom properties that match those defined in the `themes/*.css` assets.

* `index-theme.css`: This file provides only the visual language for a component. It is used in conjunction with `index-base.css` and when loaded together, provides the same result as using `index.css` by itself.

<sup><a name="token-footnote">1</a></sup>: Token-driven CSS properties are properties whose values are mapped to a value in the `@spectrum-css/tokens` package. These values represent design-language and are meant to be used across platforms. In contrast, properties specific to web-based implementations will not have a token value assigned, so not all CSS properties will use custom properties.

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
  Recommended: For components with multiple contexts available, if you
  want access to all contexts, load the index.css file, which includes
  all contexts and component variables.
*/
@import "node_modules/@spectrum-css/button/dist/index.css";

/*
  If you only need the spectrum visual context: For components with
  multiple contexts available, load only the spectrum context by sourcing
  index-base.css and the spectrum theme from the themes directory.
*/
@import "node_modules/@spectrum-css/button/dist/index-base.css";
@import "node_modules/@spectrum-css/button/dist/themes/spectrum.css";
```

Tokens values are mapped to context-specific classes which can be applied to the `<html>` element or any place in your DOM where you wish to encapsulate or alter the visual language of your Spectrum components.

All contexts you want to use must be defined in order to load all the appropriate custom properties for the components you are using.

#### Global variables
##### Visual language

* `.spectrum` - The default visual language for Spectrum CSS
* `.spectrum--express` - A variant of the standard visual language. _This visual language will be deprecated in Spectrum 2_.

##### Scales

Scales represent the browsing context of the user. They are used to adjust the size of components to improve readability and usability on different devices.

* `.spectrum--medium` - The default scale for Spectrum CSS, used for desktop and tablet devices
* `.spectrum--large` - A larger scale for Spectrum CSS, used for mobile devices and other small screens to create a more touch-friendly experience

##### Themes (colorstops)

Themes represent the color scheme of the user's browsing context. They are used to adjust the color of components to improve readability and usability in different environments.

* `.spectrum--light` - The default theme for Spectrum CSS, used for light mode
* `.spectrum--dark` - A darker theme for Spectrum CSS, used for dark mode

Other themes are available but are in the process of being deprecated and should not be used in new projects.

#### Context example

Put together, we would define the context for our application in the following way:

```html
<html class="spectrum spectrum--medium spectrum--light"></html>
```

To switch to Express, **add** the `.spectrum--express` class to the `<html>` element:

```html
<html class="spectrum spectrum--medium spectrum--light spectrum--express"></html>
```

Note the `spectrum--express` class is added to the existing classes; `spectrum` should always be present to ensure the correct visual language is loaded.

Because CSS custom properties honor the cascading nature of CSS, you can infinitely nest different contexts. For example, you could have a `.spectrum--dark` context inside of a `.spectrum--light` context, and components will honor the innermost context.

### Modifying components

You can override variables and modify Spectrum CSS' look and feel by re-defining the custom properties in context. Look for the **Custom Property API** section in each component to determine which custom properties you can override. See [Action Button for a complete example](https://opensource.adobe.com/spectrum-css/actionbutton.html#custompropertiesapi).

### Importing UI icons

Some components require certain "UI icons" to render. These icons are released within the [`@spectrum-css/ui-icons`](https://www.npmjs.com/package/@spectrum-css/ui-icons) package and are used by components like `@spectrum-css/icon` and `@spectrum-css/actionbutton`.

Based on [which scales](https://github.com/adobe/spectrum-css?tab=readme-ov-file#scales) you'll be using, you can choose to load different files:

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

We maintain a modern codebase that supports the latest two versions of evergreen web browsers. The current list of browsers officially supported by Spectrum CSS can be found in the browserslist section of the project's [package.json file](https://github.com/adobe/spectrum-css/blob/main/package.json). This setting is used by the build tools when the source files are built. If you require additional browser support for your project, the CSS can be processed further with your chosen tools.

* latest 2 Edge versions
* latest 2 Chrome versions
* latest 2 Firefox versions
* latest 2 Safari versions
* latest 2 iOS versions

### Optimizing Spectrum CSS

Spectrum CSS is designed to be as modern and flexible as possible, and as such, leaves room for consumers to optimize in their own way. There are many tools and techniques you can use to optimize CSS for your project such as tree shaking, purging, and minification. If you are loading the entire set of `@spectrum-css/tokens` for example, you can safely tree shake the tokens to only include the variables you are using, often leading to a significant reduction in file size.

## Contributing

A very special thank you to all of our [contributors](<https://github.com/adobe/spectrum-css/graphs/contributors>) without whom this project would not be possible.

Want to join the team? Check out the [contributing guidelines](.github/CONTRIBUTING.md) to get started.

## Tasks

The following tasks are available:

| Command | Description | Examples |
| --- | --- | --- |
| `clean` | Cleans all output files for the project and all components | `yarn clean` |
| `build` | Performs a build of all components | `yarn build` |
| `build:all` | Performs a build of all components, documentation site, and storybook | `yarn build:all` |
| `dev` | Performs a component build and serves the documentation on the default port (3000) | `yarn dev` |
| `compare` | This compares the current version of components with the previous versions published to NPM and output a list of all the changes that have been made. This is useful for reviewing changes before a release. The information is provided in the command-line output as well as in a simple web page that is opened in your default browser upon completion. The web page includes links to the visual diffs for each component when the file sizes have changed. <ul><li>Components with no changes are not included in the output.</li><li>To run comparisons on one or multiple components, `compare` accepts a list of components as arguments. For example, `yarn compare button` will compare the current version of the button component with the previous version published to NPM. `yarn compare button checkbox` will compare the current version of the button and checkbox components with the previous versions published to NPM.</li><li>Named components should be space-separated.</li><li>Running `compare` with no inputs will automatically run against all packages.</li></ul> | `yarn compare`<br/>`yarn compare accordion`<br/>`yarn compare accordion actionbutton` |
| `lint` | Provides helpful updates and warnings for a component's package.json file. This helps keep all components in alignment. Use `format` to automatically fix any issues that are found. To run on a single component, use `yarn linter accordion` (where `accordion` is the name of the component or components you want to lint). | `yarn lint`<br/>`yarn linter accordion`<br/>`yarn linter accordion actionbutton` |
| `format` | Provides helpful updates and warnings for a component's package.json file. This helps keep all components in alignment. To run on a single component, use `yarn formatter accordion` (where `accordion` is the name of the component or components you want to lint). | `yarn format`<br/>`yarn formatter accordion`<br/>`yarn formatter accordion actionbutton` |
| `refresh:env` | This copies values for the project's `.env` file (an asset never committed to the repo as it contains login secrets) by using the `.env.example` file as a template. This script is useful when you need to update the `.env` file with new values from the `.env.example` file or when you checkout or clean the repo and need to restore the `.env` file. | `yarn refresh:env` |

## Troubleshooting

As of February of 2024, the Spectrum CSS project has moved to a new tokens system (@spectrum-css/tokens instead of @spectrum-css/vars). If you are using Spectrum CSS and see that your styles are off, or not applying at all, ensure that you are using the correct tokens package for the component.
