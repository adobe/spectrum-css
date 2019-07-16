# Spectrum CSS [![Build Status](https://travis-ci.org/adobe/spectrum-css.svg?branch=master)](https://travis-ci.org/adobe/spectrum-css)

The goal of this project is to provide a standard CSS implementation of the Spectrum design language for internal and 3rd party use on Adobe's platforms.

1. [Show me a demo](#show-me-a-demo)
1. [Where is the JavaScript?](#where-is-the-javascript)
1. [Organization](#organization)
1. [Using Spectrum CSS](#using-spectrum-css)
    1. [CSS Custom Properties Strategy](#css-custom-properties-strategy)
    1. [Multi-stop Strategy](#multi-stop-strategy)
    1. [Single-stop Strategy](#single-stop-strategy)
1. [Building](#building)
1. [Contributing](#contributing)

## Show me a demo

Check out [the documentation here](http://opensource.adobe.com/spectrum-css/), which shows every Spectrum CSS component and all of its variations on the same page.

## Where is the JavaScript?

We have found that JavaScript is where a framework or library quickly becomes opinionated and stops being easy to use with or across other frameworks. To avoid this problem, Spectrum CSS avoids implementation details that require JavaScript.  Where an element might require multiple states, the documentation here will simply show all the states in a flat, static example.  We leave it to the frameworks implementing Spectrum CSS to create JavaScript that suits their needs.

## Organization

Spectrum CSS builds output that uses custom properties so it can support multiple scales (medium, large) and color stops (light, dark, etc) with the same base CSS. This version of the output should be used, unless you need to support older browsers (IE 11).

It also builds 'multi-stop' and 'single-stop' versions of the CSS for older browsers (IE 11). This enables a consumer to either allow for multiple Spectrum colorstops in a single CSS file, or can limit the number of selectors to only those needed for a single colorstop.

A successful build will create a `dist/` folder. The `dist/docs/` folder is where the documentation will end up.

## Using Spectrum CSS

Spectrum CSS can be consumed as whole or in part with three distinct methods of applying colorstops.

## Individually versioned packages

Each component is released on npm as a separate, individually versioned package inside of the [`@spectrum-css` org](https://www.npmjs.com/org/spectrum-css).

To get started, install the following packages in addition to the components you require:

```
npm install @spectrum-css/vars @spectrum-css/typography @spectrum-css/page @spectrum-css/icons
```

Installed components will be available in the `node_modules/@spectrum-css/` folder.

Then, use one of the strategies outlined below to include the CSS files in your project.


## Monolithic package

For backwards compatibility purposes, a monolithic package is available with all components.

To install it, run the following:

```
npm install @adobe/spectrum-css
```

The package will be installed to `node_modules/@adobe/spectrum-css/`. All of the same files included in the individually versioned releases are present, albeit within `dist/components/`.


### CSS Custom Properties Strategy

Spectrum CSS includes build output that uses CSS custom properties to change themes and scales. This is the preferred approach due to its simplicity and smaller file size, but it does not work in IE 11.

Start by including the base set of variables:

```html
<!-- Include global variables first -->
<link rel="stylesheet" href="https://unpkg.com/@spectrum-css/vars@^1.0.0-alpha/dist/spectrum-global.css">

<!-- Include only the scales and colorstops your application needs -->
<link rel="stylesheet" href="https://unpkg.com/@spectrum-css/vars@^1.0.0-alpha/dist/spectrum-medium.css">
<link rel="stylesheet" href="https://unpkg.com/@spectrum-css/vars@^1.0.0-alpha/dist/spectrum-large.css">
<link rel="stylesheet" href="https://unpkg.com/@spectrum-css/vars@^1.0.0-alpha/dist/spectrum-light.css">
<link rel="stylesheet" href="https://unpkg.com/@spectrum-css/vars@^1.0.0-alpha/dist/spectrum-dark.css">

<!-- Include index-vars.css for all components you need -->
<link rel="stylesheet" href="https://unpkg.com/@spectrum-css/page@^1.0.0-alpha/dist/index-vars.css">
<link rel="stylesheet" href="https://unpkg.com/@spectrum-css/typography@^1.0.0-alpha/dist/index-vars.css">
<link rel="stylesheet" href="https://unpkg.com/@spectrum-css/icon@^1.0.0-alpha/dist/index-vars.css">
<link rel="stylesheet" href="https://unpkg.com/@spectrum-css/button@^1.0.0-alpha/dist/index-vars.css">
```

Then, make sure you've included the relevant classes to choose which scale and colorstop you want:

```html
<body class="spectrum spectrum--medium spectrum--light">
```

Then you can use components by copy/pasting their code from [the documentation](http://opensource.adobe.com/spectrum-css/).

One advantage of this approach is you can infinitely nest different color stops and themes, [as illustrated here](https://codepen.io/lazd/pen/axXMRL).

Additionally, you can override variables and customize Spectrum CSS' look and feel by re-defining the custom properties in context, [like so](https://codepen.io/lazd/pen/ROvOPO). See the source in `index-vars.css` to determine which custom properties you can override.


### Multi-stop Strategy

The first method of applying colorstops, *multistop*, makes it possible to have any number of colorstops on the same page. This method results in slightly larger CSS files with more selectors, but is the method most products will use as dark and light colorstops are commonly mixed in Spectrum designs.

1. To get all Spectrum components, include `dist/spectrum-core.css` then `dist/spectrum-COLORSTOP.css` for each colorstop you need (where `COLORSTOP` is light, dark, etc).

2. To get only the CSS for components and colorstops you need, include the following to start:

* `node_modules/@spectrum-css/page/dist/index.css`
* `node_modules/@spectrum-css/page/dist/multiStops/COLORSTOP.css` for each colorstop
* `node_modules/@spectrum-css/typography/dist/index.css`
* `node_modules/@spectrum-css/typography/dist/multiStops/COLORSTOP.css` for each colorstop

Then, for each component you need:

* `node_modules/@spectrum-css/COMPONENT/dist/index.css` for each component
* `node_modules/@spectrum-css/COMPONENT/dist/multiStops/COLORSTOP.css` for each colorstop

Set `<body class="spectrum spectrum--light">` to skin the page with light colors, and add `<div class="spectrum--dark">` wherever you need dark styles, or any combination of the above.

Note that, due to CSS selector specificity, whatever colorstop you import last will win if you nest colorstops 3 levels deep. That is, if you first import the `light` colorstop, the the `dark` colorstop, and you have the following HTML, the 3rd button ends up dark.

```html
<body class="spectrum spectrum--light">
  <button class="spectrum-Button">I'm light!</button>

  <div class="spectrum--dark">
    <button class="spectrum-Button">I'm dark!</button>

    <div class="spectrum--light">
      <button class="spectrum-Button">I'm still dark!</button>
    </div>
  </div>
</body>
```

### Single-stop Strategy

The second method of applying colorstops, *singlestops*, makes it so it's only possible to have a single colorstop on the page at once. This method results in less selectors and smaller CSS files.

1. To get all Spectrum components for a specific colorstop, include only `dist/standalone/spectrum-COLORSTOP.css`.

2. To get only the CSS for components you need and a single colorstop, include the following to start:

* `node_modules/@spectrum-css/page/dist/index.css`
* `node_modules/@spectrum-css/page/dist/colorStops/COLORSTOP.css` for the single colorstop
* `node_modules/@spectrum-css/typography/dist/index.css`
* `node_modules/@spectrum-css/typography/dist/colorStops/COLORSTOP.css` for the single colorstop

Then, for each component you need:

* `node_modules/@spectrum-css/COMPONENT/dist/index.css` for each component
* `node_modules/@spectrum-css/COMPONENT/dist/colorStops/COLORSTOP.css` for the single colorstop

As there is CSS for only one color stop present, simply set `<body class="spectrum">`. If mixing with individual components using the *multistop* strategy, you can add `class="spectrum--dark"` on `<body>` or anywhere else, but it only affects components whose colorstops were imported using the individual component multistop strategy.

### Import Order and Components

With Spectrum CSS, dependency management between components is the responsibility of the consumer, you. The framework you're building likely has dependencies itself, such as `dropdown` depends on `button`, and each of the components includes its CSS. If this is the case, you'll get the CSS in the right order automatically, since `dropdown` is going to depend on `button`, and `button` will import the necessary CSS.

However, if you're doing a more manual inclusion of CSS files, the easiest thing to do is to use the fully built `dist/spectrum-core.css` + `dist/spectrum-light.css` or `dist/standalone/spectrum-light.css` files described above. If you need only specific components, be sure to follow the order in `src/components.css` so components can override styles of their dependencies.

### Import Order and Colorstops

If your pages are light by default, with some dark elements embedded within (shell, etc), you should import the light colorstop first, adding `.spectrum--light` to an outer container (affecting the whole page), and adding `.spectrum--dark` to an inner container when you need dark elements (affecting only elements inside of it). That is, the import order of colorstops should match the nesting on your page.

### Scale support

Spectrum CSS supports two scale sizes:

* Medium - Desktop
* Large - Mobile

#### Medium only

By default, when you import `index.css` for each component or `spectrum-core.css`, you'll get the Medium scale.

#### Large only

If your site is always mobile, you can get large by default by importing `index-lg.css` for individual components, or `spectrum-core-lg.css` for all components.

#### Medium and Large

If you need to display both Medium and Large, you can import `index.css` and `index-diff.css` for individual components, or `spectrum-core.css` and `spectrum-core-diff.css` for all components.

You can then switch scales by adding the `.spectrum--large`  or `.spectrum--medium` class on the `<html>` element.

Note that the Spectrum CSS UI icons must change as well, see below for a full example.

### Importing Icons

To get icons, you'll need to use the `loadIcons()` function. This function lives in the [`loadicons` project](https://www.npmjs.com/package/loadicons) as well as `icons/loadIcons.js` and has the following signature:

```js
loadIcons(svgURL {String}, callback {Function});
```

The callback function has the following signature:

```js
function(error {Error}, svg {SVGElement})
```

First, you'll need the Spectrum CSS UI icons, which come in multiple flavors:

* `icons/spectrum-css-icons.svg` - Both medium and large icons for responsive UIs
* `icons/spectrum-css-icons-medium.svg` - Medium icons only, for desktop display
* `icons/spectrum-css-icons-large.svg` - Large icons only, for mobile display

For most use cases, you'll want to use `spectrum-css-icons.svg` so you have support for both scales:

```js
loadIcons('icons/spectrum-css-icons.svg');
```

If you're using `icons/spectrum-css-icons.svg`, be sure to add `.spectrum--medium` or `.spectrum--large` to the `<html>` element, or you'll see both medium and large icons at once.

Finally, you'll need _workflow_ icons for your app. These are currently **Adobe-internal-only** (sorry!) and live in `icons/spectrum-icons.svg` (if you have your local repo set up with all internal Adobe bits properly). This file contains all of the Spectrum icons. If you're using React Spectrum, you'll import each icon where it's used. If you're not, you can import the entire set of icons in all sizes as follows:

```js
loadIcons('icons/spectrum-icons.svg');
```

You can then use the icons in your app. Visit the [Spectrum CSS workflow icon list](http://opensource.adobe.com/spectrum-css/icons/) and click on any icon to get the markup.


### Lang support

To take advantage of locale specific change, for instance, placeholders not italicizing Japanese, applications should specify a response header for the language, a meta tag lang, or declare a lang attribute on their element. That's lowest to highest priority, so a meta tag can be overridden by an inline attribute.

## Project Structure

The project is broken down into separate packages for each component inside of the `packages/` folder.

Each package has the following files:

* `index.css` - The scale-specific styles for the component -- basically dimensions, layout, etc (these change between scales)
* `skin.css` - The theme-specific styles for the component -- basically colors (these change between color stops)
* `docs.yml` - The markup examples and documentation for the component


## Building

Run the following commands:

```
npm install -g gulp-cli
npm install
npm run bootstrap
gulp dev
```

Your `dist/` folder should now have a local copy of the Spectrum CSS docs and ready-to-use CSS files, and your browser should be open with the project documentation. Editing any of the packages within the project will update the project documentation and live reload in your browser

**Important:** Ensure you have NodeJS 10.x installed to build the CSS correctly (checkout [#61](https://github.com/adobe/spectrum-css/issues/61) for more information).

## Contributing

Check out the [contributing guidelines](.github/CONTRIBUTING.md)!

[topdoc-link]: https://github.com/Topdoc/topdoc/wiki

## Releasing
