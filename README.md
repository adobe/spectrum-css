# Spectrum CSS [![Build Status](https://travis-ci.org/adobe/spectrum-css.svg?branch=master)](https://travis-ci.org/adobe/spectrum-css)

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

Spectrum CSS is CSS-only, implementing only the interactivity that can be done with pure CSS. Thus, Spectrum CSS should only be used by implementations of Spectrum, or very simple applications that only need things like typography, checkboxes, textfields, etc.

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
<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-lightest.css">
<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-light.css">
<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-dark.css">
<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-darkest.css">

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

**Note:**  If you are importing SVG icon sprite sheets, the `.spectrum--medium`/`.spectrum--large` classes should be added to the `<html>` element so UI icons render in the correct size in IE 11. For browsers that support custom properties, or if you're not using SVG sprite sheets for UI icons and are manually managing icon sizing in your implementation, `.spectrum--medium`/`.spectrum--large` can be added to the `<body>` or other element.

Then you can use components by copy/pasting their code from [the documentation](http://opensource.adobe.com/spectrum-css/).

With the magic of CSS custom properties, you can infinitely nest different color stops and themes, [as illustrated here](https://codepen.io/lazd/pen/axXMRL).

Additionally, you can override variables and customize Spectrum CSS' look and feel by re-defining the custom properties in context, [like so](https://codepen.io/lazd/pen/ROvOPO). See the source in `components/*/index-vars.css` to determine which custom properties you can override.

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

These icons are released within in the bundle package as `@spectrum-css/spectrum-css/dist/icons/spectrum-icons.svg`. You can import the entire set of icons in all sizes as follows:

```js
loadIcons('node_modules/@adobe/spectrum-css-workflow-icons/dist/spectrum-icons.svg');
```

You can then use the icons in your app. Visit the [Spectrum workflow icon list](https://spectrum.adobe.com/page/icons/) and click on any icon to get the markup.

### Language support

To take advantage of locale specific changes such as placeholders not italicizing Japanese, your application should specify a [`Content-Language` response header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language) or set the [`lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang).

```html
<html lang="ja">
```

### Variable fallbacks

Each component has a `dist/vars.css` file that contains declarations for each component-level variable used by the component. The CSS in `dist/index-vars.css` references these variables, but has fallbacks for the global variables or hardcoded value that that the component-level variables resolve to.

As such, **you do not need to include `dist/vars.css`** unless:

1. You wish to reference the component-level variables used by a component in external CSS (i.e. `--spectrum-rule-medium-height`)
2. You have upgraded `@spectrum-css/vars`, but have not updated a component (such as `@spectrum-css/rule`) and do not want to update the component-level variables used by that component

When this file is imported, if in updated version of `@spectrum-css/vars` changed global variables (such as a global color, `--spectrum-global-color-gray-300`), you will get those updates. However, if the updated version of `@spectrum-css/vars` changed component-level variables (such as the height of a medium Rule, `--spectrum-rule-medium-height`), you will not get those updates. As such, this file can be used to lock-in the basic visual style of a component while still allowing for system-level updates.

In most cases, this file will not be required, so you can safely ignore it. If you see unexpected visual changes creeping into components that you have not updated, `dist/vars.css` may correct them.

___

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

Update `yml` data from master

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


___

## Testing

Visual regression testing is implemented by [BackstopJS](https://github.com/garris/BackstopJS). In order to avoid browser rendering inconsistent issue on different environments, the test needs to run inside of docker container.

### Setup docker

Install docker on your machine [Download Docker](https://hub.docker.com/search/?type=edition&offering=community&architecture=amd64)

### Backstop reference bitmap

The reference bitmaps are hosted in a adobe internal repo and published as [@spectrum-css/spectrum-css-vr-test-asset](https://www.npmjs.com/package/@spectrum-css/spectrum-css-vr-test-asset). All the reference bitmaps are generated within docker instance. If you want to run test with native environment, you have to regenerate the reference yourself.

### Start dev server with Browsersync notification turnoff

`gulp dev`

### Testing CLI targets

The following npm scripts are available for testing:

- `npm run backstop:approve` - Identical to [backstop approve](https://github.com/garris/BackstopJS#approving-changes)
- `npm run backstop:test` - Run test in your local native environment
- `npm run backstop:clean` - Clean up all the testing reports and test images
- `npm run backstop:docker:test` - Run test in your local docker container
- `npm run backstop:ci:test` - Run test in a continuous integration environment like [Travis-CI](https://travis-ci.org/adobe/spectrum-css)
- `npm run kill-zombies` - Kill zombies Chromium instances on your local machine

Both `backstop:test` and `backstop:docker:test` accept arguments to customize your test run:

- `npm run backstop:docker:test` - Run test for all the components with color stop as `light` and scale as `medium`.
- `npm run backstop:docker:test button` - Run test for `button` and its dependents components like action bar, toast etc with color stop as `light` and scale as `medium`.
- `npm run backstop:docker:test themes=lightest,light scales=medium,large radio` - Run test for `radio` and its dependents components with color stop as `lightest` and `light` and scale as `medium` and `large`. It means that a single scenario will run 4 times.
- `npm run backstop:docker:test themes=lightest,light,dark,darkest scales=medium,large` - Run test for all the components with all the color and scale combinations. It means that a single scenario will be run 8 times.

___


## Releasing

### Releasing individual components

Releasing individual components is handled by Lerna. When any component or its dependencies change, Lerna will queue that component (and all of its dependents) up for a release.

To release everything that has changed, simply run:

```
npm run release
```

Version numbers are automatically determined, changelogs generated, and packages published.

### Releasing bundles

Bundles are released with a separate command, intended to be ran after individual components are released. To release bundles, simply run:

```
npm run release-bundles
```

Version numbers for dependencies and then bundle itself will be updated automatically, a changelog generated, the package published, and the documentation site deployed.
