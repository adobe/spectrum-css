# Spectrum CSS [![Build Status](https://travis-ci.org/adobe/spectrum-css.svg?branch=main)](https://travis-ci.org/adobe/spectrum-css)

Spectrum CSS provides a standard CSS implementation of the Spectrum design language for internal and 3rd party use on Adobe's platforms.

1. [Show me a demo](#show-me-a-demo)
1. [Where is the JavaScript?](#where-is-the-javascript)
1. [Using Spectrum CSS](#using-spectrum-css)
1. [Contributing](#contributing)
1. [Testing](#testing)
1. [Releasing](#releasing)

## Show me a demo

Check out [the documentation site](http://opensource.adobe.com/spectrum-css/) for a demo of every component included in Spectrum CSS.

## Where is the JavaScript?

Spectrum CSS is CSS-only, implementing only the interactivity that can be done with pure CSS. Thus, Spectrum CSS should only be used by implementations of Spectrum, or very simple applications that only need things like typography, checkboxes, text fields, etc.

Adobe maintains separate JavaScript libraries written with React, Angular, and web components that use Spectrum CSS to create fully interactive Spectrum components. These libraries will be open sourced soon.

## Using Spectrum CSS

The preferred method of using Spectrum CSS relies on custom properties to swap out variables for different themes and colorstops. This has the lowest bundle size and the simplest usage, but is incompatible with < IE 11

To use Spectrum CSS with IE 11 or without, see the [legacy usage documentation](README-legacy.md).

### Installing components

Each component is released on npm as a separate, individually versioned package inside of the [`@spectrum-css` org](https://www.npmjs.com/org/spectrum-css).

To get started, install the following components:

```
npm install @spectrum-css/vars @spectrum-css/typography @spectrum-css/page @spectrum-css/icon @spectrum-css/button
```

Installed components will be available in the `node_modules/@spectrum-css/` folder.

If you are an existing user of Spectrum CSS and rely on the previous bundle package format, see the [legacy usage documentation](README-legacy.md) for details.

### Using components

Spectrum CSS components have build output that uses CSS custom properties to change themes and scales. This has the lowest bundle size and the simplest usage, but is incompatible with IE 11.

To use Spectrum CSS with IE 11, see the [legacy usage documentation](README-legacy.md).

If you're targeting modern browsers, start by including the base set of variables:

```html
<!-- Include global variables first -->
<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-global.css">

<!-- Include only the scales your application needs -->
<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-medium.css">
<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-large.css">

<!-- Include only the colorstops your application needs -->
<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-light.css">
<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-dark.css">
<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-darkest.css">

<!-- Include tokens -->
<link rel="stylesheet" href="node_modules/@spectrum-css/tokens/dist/index.css">

<!-- Include index-vars.css for all components you need -->
<link rel="stylesheet" href="node_modules/@spectrum-css/page/dist/index-vars.css">
<link rel="stylesheet" href="node_modules/@spectrum-css/typography/dist/index-vars.css">
<link rel="stylesheet" href="node_modules/@spectrum-css/icon/dist/index-vars.css">
<link rel="stylesheet" href="node_modules/@spectrum-css/button/dist/index-vars.css">
```

Then, make sure you've included the relevant classes to choose which scale and colorstop you want:
```html
<html class="spectrum spectrum--medium spectrum--light">
```

To switch to Express, load vars from `@spectrum-css/expressvars` instead of `@spectrum-css/vars` and add the `.spectrum--express` class to the `<html>` element:

```html
<html class="spectrum spectrum--medium spectrum--light spectrum--express">
<head>
  <!-- Include only the scales your application needs -->
  <link rel="stylesheet" href="node_modules/@spectrum-css/expressvars/dist/spectrum-medium.css">
  <link rel="stylesheet" href="node_modules/@spectrum-css/expressvars/dist/spectrum-large.css">

  <!-- Include only the colorstops your application needs -->
  <link rel="stylesheet" href="node_modules/@spectrum-css/expressvars/dist/spectrum-light.css">
  <link rel="stylesheet" href="node_modules/@spectrum-css/expressvars/dist/spectrum-dark.css">
</head>
```

Then you can use components by copy/pasting their code from [the documentation](http://opensource.adobe.com/spectrum-css/).

With the magic of CSS custom properties, you can infinitely nest different color stops and themes, [as illustrated here](https://codepen.io/lazd/pen/axXMRL).

### Customizing components

You can override variables and customize Spectrum CSS' look and feel by re-defining the custom properties in context. Look for the **Custom Property API** section in each component to determine which custom properties you can override. See [ActionButton for a complete example](https://opensource.adobe.com/spectrum-css/actionbutton.html#customized).

### Importing UI icons

Some components require certain "UI icons" to render. To get these icons, you'll need to use [`loadicons`](https://www.npmjs.com/package/loadicons).

For most use cases, you'll want to use `spectrum-css-icons.svg` so you have support for both scales:

```js
<script src="node_modules/loadicons/index.js"></script>
<script>
  loadIcons('node_modules/@spectrum-css/icon/dist/spectrum-css-icons.svg');
</script>
```

Based on which scales you'll be using, you can choose to load different files:

* `@spectrum-css/icon/dist/spectrum-css-icons.svg` - Both medium and large icons for responsive UIs that support both `.spectrum--medium` and `.spectrum--large`
* `@spectrum-css/icon/dist/spectrum-css-icons-medium.svg` - Medium icons only, supports `.spectrum--medium` only
* `@spectrum-css/icon/dist/spectrum-css-icons-large.svg` - Large icons only, supports `.spectrum--large` only


**Note:** If you're using `spectrum-css-icons.svg`, be sure to add `.spectrum--medium` or `.spectrum--large` to the `<html>` element, or you'll see both medium and large icons at once.

### Importing workflow icons

If your app has any level of complexity, you'll need "workflow" icons to indicate actions. These icons are not required to render the base components, and instead are used within buttons or menu items for actions like share, play, justify, save, etc.

These icons are released within the [`@adobe/spectrum-css-workflow-icons`](https://www.npmjs.com/package/@adobe/spectrum-css-workflow-icons) package. After installing the package, you can import the entire set of icons in all sizes as follows:

```js
loadIcons('node_modules/@adobe/spectrum-css-workflow-icons/dist/spectrum-icons.svg');
```

You can then use the icons in your app. Visit the [Spectrum workflow icon list](https://spectrum.adobe.com/page/icons/) and click on any icon to get the markup.

### Language support

To take advantage of locale specific changes such as placeholders not italicizing Japanese, your application should specify a [`Content-Language` response header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language) or set the [`lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang).

In addition, you must set the `dir` attribute for components to render correctly.

For English, a left-to-right language:
```html
<html lang="en" dir="ltr">
```

For Arabic, a right-to-left language:

```html
<html lang="ar" dir="rtl">
```

### Variable fallbacks

Each component has a `dist/vars.css` file that contains declarations for each component-level variable used by the component. The CSS in `dist/index-vars.css` references these variables, but has fallbacks for the global variables or hardcoded value that that the component-level variables resolve to.

As such, **you do not need to include `dist/vars.css`** unless:

1. You wish to reference the component-level variables used by a component in external CSS (i.e. `--spectrum-divider-medium-height`)
2. You have upgraded `@spectrum-css/vars`, but have not updated a component (such as `@spectrum-css/divider`) and do not want to update the component-level variables used by that component

When this file is imported, if in updated version of `@spectrum-css/vars` changed global variables (such as a global color, `--spectrum-global-color-gray-300`), you will get those updates. However, if the updated version of `@spectrum-css/vars` changed component-level variables (such as the height of a medium divider, `--spectrum-divider-medium-height`), you will not get those updates. As such, this file can be used to lock-in the basic visual style of a component while still allowing for system-level updates.

In most cases, this file will not be required, so you can safely ignore it. If you see unexpected visual changes creeping into components that you have not updated, `dist/vars.css` may correct them.

### Optimizing Spectrum CSS

Spectrum CSS is designed to be as flexible as possible, and as such, leaves room for optimization. Let's assume you've included a few components as dependencies in your `package.json`:

```json
{
  "name": "my-project",
  "devDependencies": {
    "@spectrum-css/button": "^3.0.0",
    "@spectrum-css/page": "^3.0.0",
    "@spectrum-css/vars": "^3.0.0"
  }
}
```

You've created an `index.css` that imports a few components, a scale, and a color-theme:

```css
@import 'node_modules/@spectrum-css/vars/dist/spectrum-global.css';
@import 'node_modules/@spectrum-css/vars/dist/spectrum-medium.css';
@import 'node_modules/@spectrum-css/vars/dist/spectrum-light.css';
@import 'node_modules/@spectrum-css/page/dist/index-vars.css';
@import 'node_modules/@spectrum-css/button/dist/index-vars.css';
```

To build an more optimized bundle, you can employ a few simple PostCSS plugins. First, install them:

```sh
npm i postcss-import postcss-varfallback postcss-dropunusedvars cssnano --save-dev
```

Next, create a `postcss.config.js`:

```js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-varfallback'),
    require('postcss-dropunusedvars'),
    require('cssnano')
  ],
};
```

Finally, include PostCSS in your build process, or run it from the command line:

```sh
postcss -o dist/index.min.css index.css
```

`dist/index.min.css` file will contain a much slimmer version of Spectrum CSS customized to only include the variables used by the components that you imported. If you've referenced any of variables Spectrum CSS defines in your CSS, they will be perserved as well.

If you need an even smaller bundle, you can employ a tool such as [PurifyCSS](https://github.com/purifycss/purifycss) to strip unused CSS classes from the output.

### Customizing Spectrum CSS

You can employ `postcss-transformselectors` to change the classnames Spectrum CSS uses. For instance, you may want to use bare `h1`/`h2`/`h3` instead of `.spectrum-Heading.spectrum-Heading--size*`.

To do this, first install the plugin:

```js
npm i postcss-transformselectors --save-dev
```

Then, add something like this to your `postcss.config.js`:

```js
module.exports = {
  plugins: [
    require('postcss-transformselectors')({
      replace: [
        { search: '.spectrum-Heading--sizeXXL', replace: 'h1' },
        { search: '.spectrum-Heading--sizeXL', replace: 'h2' },
        { search: '.spectrum-Heading--sizeL', replace: 'h3' }
      ],
      transform: (selector) => {
        if (selector.startsWith('.spectrum-Heading')) {
          // Operate on each selector in a selector list
          return selector.split(',')
            .map(selectorPart => {
              // Create separate selectors for each reference to .spectrum-Heading
              return ['h1', 'h2', 'h3'].map(h => {
                return selectorPart.replace('.spectrum-Heading', h);
              }).join(',');
            })
            .join(',');
        }

        // Don't mess with things that don't have .spectrum-Heading in them
        return selector;
      }
    })
  ]
};
```

## Contributing

Check out the [contributing guidelines](.github/CONTRIBUTING.md) for quick start information, and head over to the [component documentation](components/README.md) and [bundle documentation](bundles/README.md) for more information.

### Building

Run the following commands:

```
yarn global add gulp-cli
yarn install
gulp dev
```

Your `dist/` folder should now have a local copy of the Spectrum CSS docs and minimal CSS files, and your browser should be open with the project documentation. Editing any of the `.css` or `.yml` files in `components/*` will update the project documentation and live reload in your browser.

**Important:** Ensure you have Node.js > 10.10 installed or the build system will not run. Node.js > 12.x is preferred.

### Documentation site

#### Local development

Building the project will build and launch the project documentation site in your browser automatically.

See [site generation](site/README.md) and [documentation generation](tools/bundle-builder/docs/README.md) for more information.

#### Generating and deploying external documentation site

Checkout `nextjs` branch, pull, and install dependencies.

```
git checkout nextjs
git pull
yarn install
```

Update `yml` data from main

```
yarn importdata
```

Run `prep` script to build the static site locally

```
yarn prep
````

Commit changes

```
git commit -am '<message here>'
```

Deploy

```
yarn deploy
```

Push changes to `nextjs` branch

```
git push origin nextjs
```

### Updating Tokens / CSS variables from Spectrum DNA
Instructions for updating tokens from [Spectrum DNA](https://git.corp.adobe.com/Spectrum/spectrum-dna) can be found here:
[components/vars/README.md](components/vars/README.md)


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
- `gulp packageLint` - Lint the `package.json` file for each component in the monorepo
- `gulp readmeLint` - Generate a generic `README.md` file for each component in the monorepo



## Testing

Visual regression testing is implemented by [BackstopJS](https://github.com/garris/BackstopJS). To avoid browser rendering inconsistent issue, the test needs to run with a docker container.

### Setup docker

Install docker on your machine [Download Docker](https://hub.docker.com/search/?type=edition&offering=community&architecture=amd64)

### Reference bitmap images

The reference bitmap images are published as an NPM package [@spectrum-css/spectrum-css-vr-test-assets-essential](https://www.npmjs.com/package/@spectrum-css/spectrum-css-vr-test-assets-essential). Before the test, please try to upgrade this package.

`yarn upgrade @spectrum-css/spectrum-css-vr-test-assets-essential`

### Start VRT dev server mode

`VRT=true yarn run dev`

### Testing CLI targets

The following yarn scripts are available for testing:

- `yarn run backstop:docker:test` - Run all the visual regression tests.
- `yarn run backstop:docker:test button` - Run test for `button` component only.

___


## Releasing

### Releasing individual components

Releasing individual components is handled by Lerna. When any component or its dependencies change, Lerna will queue that component (and all of its dependents) up for a release.

To release everything that has changed, simply run:

```
npm run release
```

Version numbers are automatically determined, changelogs generated, and packages published.

### Releasing the website

After performing a release, run the following command to release the website:

```
npm run release:site
```

### Releasing bundles

Bundles are released with a separate command, intended to be ran after individual components are released. To release bundles, simply run:

```
npm run release:bundles
```

Version numbers for dependencies and then bundle itself will be updated automatically, a changelog generated, the package published, and the documentation site deployed.

### Publishing prereleases

Occasionally, it can be helpful for our subscribers to test CSS changes before they're considered ready to be part of a stable release. To facilitate this, we can publish prerelease versions.

To publish prerelease versions:

* First, be sure that you're working on a branch other than `main`.
* Once your change(s) are ready to be committed, be aware of the severity of the change(s), and be sure to author your commit message so that Lerna understands how to increase the version number(s) of the affected components.
* Once your changes are committed, run the following command to bump the version numbers (a `beta` release is shown in this example): `npx lerna publish --conventional-prerelease --preid beta --pre-dist-tag beta`
* Depending on the severity of your change(s), Lerna should show a preview of your version numbers that look something like: `@spectrum-css/tag: 3.3.8 => 3.3.9-beta.0`
* If the version number(s) look correct, you should be ready to publish to npm by running: `npm publish`
