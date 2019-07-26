# Spectrum CSS [![Build Status](https://travis-ci.org/adobe/spectrum-css.svg?branch=master)](https://travis-ci.org/adobe/spectrum-css)

Spectrum CSS provides a standard CSS implementation of the Spectrum design language for internal and 3rd party use on Adobe's platforms.

1. [Show me a demo](#show-me-a-demo)
1. [Where is the JavaScript?](#where-is-the-javascript)
1. [Using Spectrum CSS](#using-spectrum-css)
1. [Project structure](#project-structure)
1. [Building](#building)
1. [Contributing](#contributing)
1. [Testing](#testing)
1. [Releasing](#releasing)

## Show me a demo

Check out [the documentation site](http://opensource.adobe.com/spectrum-css/) for a demo of every component included in Spectrum CSS.

## Where is the JavaScript?

Spectrum CSS is CSS-only, implementing only the interactivity that can be done with pure CSS. Thus, Spectrum CSS should only be used by implementations of Spectrum, or very simple applications that only need things like typography, checkboxes, textfields, etc.

Adobe maintains separate JavaScript libraries written with React, Angular, and web components that use Spectrum CSS to create fully interactive Spectrum components. These libraries will be open sourced soon.

## Using Spectrum CSS

The preferred method of using Spectrum CSS relies on custom properties to swap out variables for different themes and colorstops. This has the lowest bundle size and the simplest usage, but is incompatible with < IE 11

To use Spectrum CSS with IE 11 or without, see the [legacy usage documentation](README-legacy.md).

## Installing components

Each component is released on npm as a separate, individually versioned package inside of the [`@spectrum-css` org](https://www.npmjs.com/org/spectrum-css).

To get started, install the following components:

```
npm install @spectrum-css/vars @spectrum-css/typography @spectrum-css/page @spectrum-css/icons @spectrum-css/button
```

Installed components will be available in the `node_modules/@spectrum-css/` folder.

If you are an existing user of Spectrum CSS and rely on the previous monolithic package format, see the [legacy usage documentation](README-legacy.md) for details.

## Using components

Spectrum CSS components have build output that uses CSS custom properties to change themes and scales. This has the lowest bundle size and the simplest usage, but is incompatible with IE 11.

To use Spectrum CSS with IE 11, see the [legacy usage documentation](README-legacy.md).

If you're targeting modern browsers, start by including the base set of variables:

```html
<!-- Include global variables first -->
<link rel="stylesheet" href="https://unpkg.com/@spectrum-css/vars@^1.0.0-alpha/dist/spectrum-global.css">

<!-- Include only the scales your application needs -->
<link rel="stylesheet" href="https://unpkg.com/@spectrum-css/vars@^1.0.0-alpha/dist/spectrum-medium.css">
<link rel="stylesheet" href="https://unpkg.com/@spectrum-css/vars@^1.0.0-alpha/dist/spectrum-large.css">

<!-- Include only the colorstops your application needs -->
<link rel="stylesheet" href="https://unpkg.com/@spectrum-css/vars@^1.0.0-alpha/dist/spectrum-lightest.css">
<link rel="stylesheet" href="https://unpkg.com/@spectrum-css/vars@^1.0.0-alpha/dist/spectrum-light.css">
<link rel="stylesheet" href="https://unpkg.com/@spectrum-css/vars@^1.0.0-alpha/dist/spectrum-dark.css">
<link rel="stylesheet" href="https://unpkg.com/@spectrum-css/vars@^1.0.0-alpha/dist/spectrum-darkest.css">

<!-- Include index-vars.css for all components you need -->
<link rel="stylesheet" href="https://unpkg.com/@spectrum-css/page@^1.0.0-alpha/dist/index-vars.css">
<link rel="stylesheet" href="https://unpkg.com/@spectrum-css/typography@^1.0.0-alpha/dist/index-vars.css">
<link rel="stylesheet" href="https://unpkg.com/@spectrum-css/icons@^1.0.0-alpha/dist/index-vars.css">
<link rel="stylesheet" href="https://unpkg.com/@spectrum-css/button@^1.0.0-alpha/dist/index-vars.css">
```

Then, make sure you've included the relevant classes to choose which scale and colorstop you want:

```html
<body class="spectrum spectrum--medium spectrum--light">
```

Then you can use components by copy/pasting their code from [the documentation](http://opensource.adobe.com/spectrum-css/).

With the magic of CSS custom properties, you can infinitely nest different color stops and themes, [as illustrated here](https://codepen.io/lazd/pen/axXMRL).

Additionally, you can override variables and customize Spectrum CSS' look and feel by re-defining the custom properties in context, [like so](https://codepen.io/lazd/pen/ROvOPO). See the source in `components/*/index-vars.css` to determine which custom properties you can override.

### Importing UI icons

Some components require certain "UI icons" to render. To get these icons, you'll need to use [`loadicons`](https://www.npmjs.com/package/loadicons).

For most use cases, you'll want to use `spectrum-css-icons.svg` so you have support for both scales:

```js
<script src="https://unpkg.com/loadicons@1.0.0/index.js"></script>
<script>
  loadIcons('https://unpkg.com/@spectrum-css/icons@^1.0.0-alpha/dist/spectrum-css-icons.svg');
</script>
```

Based on which scales you'll be using, you can choose to load different files:

* `@spectrum-css/icons/dist/spectrum-css-icons.svg` - Both medium and large icons for responsive UIs that support both `.spectrum--medium` and `.spectrum--large`
* `@spectrum-css/icons/dist/spectrum-css-icons-medium.svg` - Medium icons only, supports `.spectrum--medium` only
* `@spectrum-css/icons/dist/spectrum-css-icons-large.svg` - Large icons only, supports `.spectrum--large` only


**Note:** If you're using `spectrum-css-icons.svg`, be sure to add `.spectrum--medium` or `.spectrum--large` to the `<html>` element, or you'll see both medium and large icons at once.

### Importing workflow icons

If your app has any level of complexity, you'll need "workflow" icons to indicate actions. These icons are not required to render the base components, and instead are used within buttons or menu items for actions like share, play, justify, save, etc.

These icons are released within in the monolithic package as `@adobe/spectrum-css/dist/icons/spectrum-icons.svg`. You can import the entire set of icons in all sizes as follows:

```js
loadIcons('https://unpkg.com/@adobe/spectrum-css@^2.14.0-alpha/dist/icons/spectrum-icons.svg');
```

You can then use the icons in your app. Visit the [Spectrum CSS workflow icon list](http://opensource.adobe.com/spectrum-css/icons/) and click on any icon to get the markup.

### Language support

To take advantage of locale specific changes such as placeholders not italicizing Japanese, your application should specify a [`Content-Language` response header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language) or set the [`lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang).

```html
<html lang="ja">
```

## Project structure

The project is broken down into separate components for each component inside of the `components/` folder.

Each package has the following files:

* `index.css` - The scale-specific styles for the component: dimensions, layout, etc (these change between scales)
* `skin.css` - The theme-specific styles for the component: colors, box-shadows, etc (these change between color stops)
* `docs.yml` - The markup examples and documentation for the component
* `docs/*.yml` - Additional examples that appear separately in the navigation

See [documentation generation](tools/bundle-builder/docs/README.md) documentation for more information on the properties available within the `.yml` files.

### Documentation site

Building the project will build and launch the project documentation site in your browser automatically.

See [site generation](tools/bundle-builder/site/README.md) and [documentation generation](tools/bundle-builder/docs/README.md) documentation for more information.

## Building

Run the following commands:

```
npm install -g gulp-cli
npm install
gulp dev
```

Your `dist/` folder should now have a local copy of the Spectrum CSS docs and minimal CSS files, and your browser should be open with the project documentation. Editing any of the `.css` or `.yml` files in `components/*` will update the project documentation and live reload in your browser.

**Important:** Ensure you have Node.js > 10.10 installed or the build system will not run. Node.js > 12.x is preferred.

### CLI

The following tasks are available:

- `gulp build` - Performs a build of all components and the top level package
- `gulp buildComponents` - Performs a build of all components
- `gulp dev` - Performs a lite build (custom properties only), opens your browser with the documentation site, then starts watching components and website files
- `gulp clean` - Cleans all output files for the project and all components
- `gulp watch` - Assuming a build has already been performed, immediately opens your browser with the documentation site, then starts watching components and website files
- `gulp buildCombined` - Builds the combined output files (`dist/spectrum-*.css`)
- `gulp buildStandalone` - Builds the standalone output files (`dist/standalone/spectrum-*.css`)
- `gulp release` - Performs a release of the top-level package


## Contributing

Check out the [contributing guidelines](.github/CONTRIBUTING.md)!

[topdoc-link]: https://github.com/Topdoc/topdoc/wiki

### Editing an existing component

1. Run `gulp dev` in the root of the project to begin developing.
2. Edit `components/$COMPONENT/index.css` and `components/$COMPONENT/skin.css` with dimensions and color properties respectively. The documentation will live reload with your changes.
3. Edit the markup examples within `components/$COMPONENT/docs.yml` accordingly. The documentation will live reload with your changes.

**Note:** If you add dependencies, be sure to re-run `npm run bootstrap` so they are linked appropriately.

### Adding a new component

1. Copy the directory for a smiliar component from `components/` and rename it for your new component.
2. Edit the `package.json`, resetting the verison number to `1.0.0-alpha.0`.
3. Edit the `dependencies` within the `package.json` file to use only the dependencies your component needs. All components rely on `vars`, and most rely on `icons`.
4. Run `gulp dev` in the root of the project to begin developing.
5. Edit `index.css` and `skin.css` with dimensions and color properties respectively.
6. Edit `docs.yml` to add markup examples for each of the variants of your component.

## Testing

To perform manual testing of the latest version of each component:

```
gulp dev
```

To perform manual testing of the backwards-compatible monolithic bundle:

```
cd bundles/spectrum-css-compat
gulp dev
```

## Releasing

3 separate types of releases must be done:

### Individual package releses

Run `npm run release-all` to release changed individual components.

### Monolithic latest release

Run `npm run release` to release the latest monolithic bundle. Ensure that you update the major version number in the top level `package.json` if any of the individual components have had a major version bump.

### Monolithic backwards-compatible release

Assuming proper version ranges have been employed, and `npm run bootstrap` has been ran, you can simply run the following:

```
cd bundles/spectrum-css-compat
npm run release
```
