# Spectrum CSS

Spectrum CSS provides a standard CSS implementation of the Spectrum design language for internal and 3rd party use on Adobe's platforms.

1. [Show me a demo](#show-me-a-demo)
1. [Where is the JavaScript?](#where-is-the-javascript)
1. [Using Spectrum CSS](#using-spectrum-css)
1. [Contributing](#contributing)
1. [Releasing](#releasing)

## Show me a demo

Check out the [component viewer](http://opensource.adobe.com/spectrum-css/preview) for a demo of every component included in Spectrum CSS or spin it up locally with: `yarn start`. This preview is driven by [Storybook](https://storybook.js.org/docs/web-components/get-started/introduction), a development tool that enables rapid prototyping and test suite integration.

Alternatively, you can preview the [documentation site](http://opensource.adobe.com/spectrum-css/) or spin up the site locally with: `yarn dev`.

## Where is the JavaScript?

Spectrum CSS is CSS-only, implementing only the interactivity that can be done with pure CSS. Thus, Spectrum CSS should only be used by implementations of Spectrum, or very simple applications that only need things like typography, checkboxes, text fields, etc.

Adobe maintains separate JavaScript libraries written with [web components](https://opensource.adobe.com/spectrum-web-components/) and [React](https://react-spectrum.adobe.com/react-spectrum/index.html) that use Spectrum CSS to create fully interactive Spectrum components.

## Using Spectrum CSS

The preferred method of using Spectrum CSS relies on custom properties to swap out variables for different themes and colorstops. This has the lowest bundle size and the simplest usage, but is incompatible with < IE 11.

To use Spectrum CSS with IE 11, see the [legacy usage documentation](README-legacy.md).

### Installing components

Each component is released on npm as a separate, individually versioned package inside of the [`@spectrum-css` org](https://www.npmjs.com/org/spectrum-css).

To get started, install the following components:

```shell
npm install @spectrum-css/vars @spectrum-css/typography @spectrum-css/page @spectrum-css/icon @spectrum-css/button
```

Installed components will be available in the `node_modules/@spectrum-css/` folder.

### Using components

Spectrum CSS components have build output that uses CSS custom properties to change themes and scales. Start by including the base set of variables:

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

Make sure you've included the relevant classes to choose which scale and colorstop you want:

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

Components can then be added by leveraging the code from [the documentation](http://opensource.adobe.com/spectrum-css/).

Because CSS custom properties honor the cascading nature of CSS, you can infinitely nest different colorstops and themes, [as illustrated here](https://codepen.io/lazd/pen/axXMRL).

### Modifying components

You can override variables and modify Spectrum CSS' look and feel by re-defining the custom properties in context. Look for the **Custom Property API** section in each component to determine which custom properties you can override. See [ActionButton for a complete example](https://opensource.adobe.com/spectrum-css/actionbutton.html#modified).

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

```shell
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

```shell
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

Check out the [contributing guidelines](.github/CONTRIBUTING.md) for quick start information, and head over to the [component documentation](components/README.md) for more.

### Building

Run the following commands:

```shell
yarn install
yarn start
```

Your `dist/` folder should now have a local copy of the Spectrum CSS docs and minimal CSS files, and your browser should be open with the project's preview site. Editing any of the `.css` or the `.stories.js` files in `components/*` will update the project documentation and live reload in your browser.

**Important:** Ensure you have Node.js > 10.10 installed or the build system will not run. Node.js > 12.x is preferred.

To spin up the local development environment ([Storybook](https://storybook.js.org/docs/web-components/get-started/introduction)) without first building the components, use: `SKIP_BUILD=true yarn start` as `yarn start` alone will start from a clean build.

### Documentation site

#### Local documentation site

Building the project will build and launch the project documentation site in your browser automatically.

See [site generation](site/README.md) and [documentation generation](tools/bundle-builder/docs/README.md) for more information.

#### Generating and deploying external documentation site

Checkout `nextjs` branch, pull, and install dependencies.

```shell
git checkout nextjs
git pull
yarn install
```

Update `yml` data from main

```shell
yarn importdata
```

Run `prep` script to build the static site locally

```shell
yarn prep
````

Commit changes

```shell
git commit -am '<message here>'
```

Deploy

```shell
yarn deploy
```

Push changes to `nextjs` branch

```shell
git push origin nextjs
```

### Updating Tokens / CSS variables from Spectrum DNA

Instructions for updating tokens from [Spectrum DNA](https://git.corp.adobe.com/Spectrum/spectrum-dna) can be found here:
[components/vars/README.md](components/vars/README.md)

### CLI

The following tasks are available:

* `gulp build` - Performs a build of all components and the top level package
* `gulp buildComponents` - Performs a build of all components
* `gulp dev` - Performs a lite build (custom properties only), runs browsersync and serves the documentation on the default port (3000), then starts watching components and website files
* `gulp clean` - Cleans all output files for the project and all components
* `gulp watch` - Assuming a build has already been performed, re-starts starts watching components and website files. Presumes a browser is already open to your locally served docs
* `gulp watch-relaunch` - Restarts watch and opens a new browser for the docs URL
* `gulp buildCombined` - Builds the combined output files (`dist/spectrum-*.css`)
* `gulp buildStandalone` - Builds the standalone output files (`dist/standalone/spectrum-*.css`)
* `gulp release` - Performs a release of the top-level package
* `gulp packageLint` - Lint the `package.json` file for each component in the monorepo
* `gulp readmeLint` - Generate a generic `README.md` file for each component in the monorepo

Note: `yarn dev` will run `gulp dev` above but trigger browsersync to open the documentation URL. You can set `BROWSERSYNC_OPEN=true` to change dev and watch to always open the URL.

You can set a new port for `watch` by setting `BROWSERSYNC_PORT=<port number>`, e.g. `export BROWSERSYNC_PORT=9000; gulp watch` to set the port to `9000`.

___

## Releasing

### Releasing individual components

Releasing individual components is handled by Lerna. When any component or its dependencies change, Lerna will queue that component (and all of its dependents) up for a release.

To release everything that has changed, simply run:

```shell
npm run release
```

Version numbers are automatically determined, changelogs generated, and packages published.

### Releasing the website

After performing a release, run the following command to release the website:

```shell
npm run release:site
```

### Publishing prereleases

Occasionally, it can be helpful for our subscribers to test CSS changes before they're considered ready to be part of a stable release. To facilitate this, we can publish prerelease versions.

To publish prerelease versions:

* First, be sure that you're working on a branch other than `main`.
* Once your change(s) are ready to be committed, be aware of the severity of the change(s), and be sure to author your commit message so that Lerna understands how to increase the version number(s) of the affected components.
* Once your changes are committed, you **must** build the affected package(s) locally **before** publishing them to npm. An npm task for cleaning, building, and beta publishing is available, and it can be run via the following command: `yarn release:beta-from-package`. This command will perform a full `clean` (via the `clean` task), a full `build` (via the `build` task), and will attempt to bump the version numbers in the affected package(s) (via `lerna publish --conventional-prerelease --preid beta --pre-dist-tag beta --no-private`).
* Depending on the severity of your change(s), and before publishing to npm, Lerna should show a preview of the affected package version numbers that look something like: `@spectrum-css/tag: 3.3.8 => 3.3.9-beta.0`. Additionally, at this time, Lerna will ask if you would like to continue with publishing the changes or cancel.
* Selecting `y` to publish will publish the affected package(s) to npm.

### Manual prerelease versioning & publishing

Occasionally, you may want to run a prerelease for an individual package and skip a version bump for consuming packages. It's possible to manually change a package's version number to achieve this.

* For the package that you want to prerelease, manually alter the version number in the package's `package.json` file.
  * For example, let's say you'd like to release a `beta` version of the Switch component. In the Switch's `package.json`, manually change the `version` number from its current number (`"version": "1.0.23"`) to the next appropriate semver version number (`"version": "2.0.0-beta.0"`).
* Save your changes, and commit them with the appropriate conventional commit-style commit message: `chore(switch): manual version bump for beta release` or something similar.
* You **must** run a build **before** continuing with the prerelease. An npm task for cleaning, building, and beta publishing is available, and it can be run via the following command: `yarn release:beta-from-package`. This command will perform a full `clean` (via the `clean` task), a full `build` (via the `build` task), and will attempt to publish the package (via `lerna publish --conventional-prerelease --preid beta --pre-dist-tag beta --no-private`).
* Depending on the severity of your change(s), and before publishing to npm, Lerna should show a preview of the affected package version number that looks something like: `@spectrum-css/switch: 1.0.23 => 2.0.0-beta.0`. Additionally, at this time, Lerna will ask if you would like to continue with publishing the changes or cancel.
* Selecting `y` to publish will publish the affected package(s) to npm.
