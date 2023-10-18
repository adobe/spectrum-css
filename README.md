# :wave: Spectrum CSS

Spectrum CSS provides a high-quality, rigorously-tested CSS implementation of the Spectrum design language for internal and 3rd party use on Adobe's platforms.

1. [Show me a demo](#show-me-a-demo)
1. [Where is the JavaScript?](#where-is-the-javascript)
1. [Using Spectrum CSS](#using-spectrum-css)
1. [Contributing](#contributing)
1. [Releasing](#releasing)

## Show me a demo

Check out the [component viewer](http://opensource.adobe.com/spectrum-css/preview) for a demo of every component included in Spectrum CSS or spin it up locally with: `yarn start`. This preview is driven by [Storybook](https://storybook.js.org/docs/web-components/get-started/introduction), a development tool that enables rapid prototyping and test suite integration.

Alternatively, you can visit our [documentation site](http://opensource.adobe.com/spectrum-css/) or spin the site up locally with: `yarn dev`.

## Where is the JavaScript?

Spectrum CSS is CSS-only, implementing only the interactivity that can be done with pure CSS. Thus, Spectrum CSS should only be used by implementations of Spectrum, or very simple applications that only need things like typography, checkboxes, text fields, etc.

Adobe maintains separate JavaScript libraries written with [web components](https://opensource.adobe.com/spectrum-web-components/) and [React](https://react-spectrum.adobe.com/react-spectrum/index.html) that use Spectrum CSS to create fully interactive Spectrum components.

## Using Spectrum CSS

Spectrum CSS components offer a dynamic experience for developers by adapting to different contexts seamlessly. Using a system of custom properties to swap out values for different themes, scales, and color contexts. This approach offers the most flexible plug-and-play experience for consumers and allows for the most efficient delivery.

### Installing components

Each component is released on npm as a separate, individually versioned package inside of the [`@spectrum-css` org](https://www.npmjs.com/org/spectrum-css).

To get started, install the following components:

```shell
yarn install @spectrum-css/vars @spectrum-css/typography @spectrum-css/page @spectrum-css/icons @spectrum-css/button
```

Installed components will be available in the `node_modules/@spectrum-css/` folder.

### Using components

Spectrum CSS components have build output that uses CSS custom properties to change themes and scales. Start by including the base set of variables:

```html
<!-- Include tokens -->
<link rel="stylesheet" href="node_modules/@spectrum-css/tokens/dist/index.css" />

<!-- Include index.css for all components you need -->
<link rel="stylesheet" href="node_modules/@spectrum-css/page/dist/index.css" />
<link rel="stylesheet" href="node_modules/@spectrum-css/typography/dist/index.css" />
<link rel="stylesheet" href="node_modules/@spectrum-css/icon/dist/index.css" />
<link rel="stylesheet" href="node_modules/@spectrum-css/button/dist/index.css" />
```

Are you leveraging any of our **legacy** components? Legacy components are those that have not yet been updated to the new token system. These include: `asset`, `assetcard`, `assetlist`, `coachmark`, `cyclebutton`, `datepicker`, `dropindicator`, `icon`, `miller`, `quickaction`, `searchwithin`, and `splitbutton`.

If so, you'll need to include the legacy variables as well. We are actively migrating these components this quarter so you should not need to include these for much longer.

```html
<!-- Include global variables first -->
<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-global.css" />

<!-- Include only the scales your application needs -->
<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-medium.css" />
<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-large.css" />

<!-- Include only the color contexts your application needs -->
<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-light.css" />
<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-dark.css" />
<link rel="stylesheet" href="node_modules/@spectrum-css/vars/dist/spectrum-darkest.css" />
```

To set the contexts for your components, add the appropriate classes to the top-level element of your application. For example, to set the scale to medium and the color context to light, add the following class to the `<body>` element:

```html
<body class="spectrum spectrum--medium spectrum--light"></body>
```

#### Express

Express is a variation on the Spectrum design theme that supports the same color contexts and scales, but uses a different set of variables to achieve a different look and feel. If you are using components that have already been migrated, you need only add `spectrum--express` to the top-level element of your application to switch to the Express theme.

If you are leveraging any of our legacy components listed above, you'll to load the `@spectrum-css/expressvars` package instead of `@spectrum-css/vars`.

```html
<html class="spectrum spectrum--medium spectrum--light spectrum--express">
    <head>
        <!-- Include only the scales your application needs -->
        <link rel="stylesheet" href="node_modules/@spectrum-css/expressvars/dist/spectrum-medium.css" />
        <link rel="stylesheet" href="node_modules/@spectrum-css/expressvars/dist/spectrum-large.css" />

        <!-- Include only the color contexts your application needs -->
        <link rel="stylesheet" href="node_modules/@spectrum-css/expressvars/dist/spectrum-light.css" />
        <link rel="stylesheet" href="node_modules/@spectrum-css/expressvars/dist/spectrum-dark.css" />
    </head>
</html>
```

Components can then be added by included using the accessible and semantic markup provided in our [documentation](http://opensource.adobe.com/spectrum-css/).

Because CSS custom properties honor the cascading nature of CSS, you can infinitely nest different color contexts and themes, [as illustrated here](https://codepen.io/lazd/pen/axXMRL).

### Modifying components

You can override variables and modify this library's look and feel by re-defining the custom properties in context. Look for the **Custom properties API** section on each component's documentation page to determine which custom properties are available. See [ActionButton for a complete example](https://opensource.adobe.com/spectrum-css/actionbutton.html#modified).

### Importing UI icons

Some components require certain iconography to render to spec. To access these icons, you'll need to use an icon loader such as [`loadicons`](https://www.npmjs.com/package/loadicons) or incorporate a loader in your bundler.

If you need to support both medium and large scales, we recommend loading from `spectrum-css-icons.svg`.

```js
<script src="node_modules/loadicons/index.js"></script>
<script>
  loadIcons('node_modules/@adobe/spectrum-css-ui-icons/dist/spectrum-css-icons.svg');
</script>
```

Based on which scales you'll be using, you can choose to load different files:

-   `@adobe/spectrum-css-ui-icons/dist/spectrum-css-icons.svg` - Both medium and large icons for responsive UIs that support both `.spectrum--medium` and `.spectrum--large`
-   `@adobe/spectrum-css-ui-icons/dist/spectrum-css-icons-medium.svg` - Medium icons only, supports `.spectrum--medium` only
-   `@adobe/spectrum-css-ui-icons/dist/spectrum-css-icons-large.svg` - Large icons only, supports `.spectrum--large` only

**Note:** If you're using `spectrum-css-icons.svg`, be sure to add `.spectrum--medium` or `.spectrum--large` to the root of your application, or both medium and large icons will be visible at the same time.

### Importing workflow icons

If your app has any level of complexity, you'll need workflow icons to represent actions. These icons are not required to render the base components, and instead are used within buttons or menu items to represent actions like share, play, justify, save, etc.

These are released within the [`@adobe/spectrum-css-workflow-icons`](https://www.npmjs.com/package/@adobe/spectrum-css-workflow-icons) package. After installing the package, you can import the entire set of icons in all sizes as follows:

```js
loadIcons("node_modules/@adobe/spectrum-css-workflow-icons/dist/spectrum-icons.svg");
```

You can then use the icons in your app. Visit the [Spectrum workflow icon list](https://spectrum.adobe.com/page/icons/) and click on any icon to get the markup.

### Language support

To take advantage of locale specific changes such as placeholders not italicizing Japanese, your application should specify a [`Content-Language` response header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language) or set the [`lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang).

In addition, set the `dir` attribute for components to render correctly.

For English, a left-to-right language:

```html
<html lang="en" dir="ltr"></html>
```

For Arabic, a right-to-left language:

```html
<html lang="ar" dir="rtl"></html>
```

### Variable fallbacks

Each component has a `dist/vars.css` file that contains declarations for each component-level variable used by the component. The CSS in `dist/index.css` references these variables, but has fallbacks for the global variables or hardcoded value to which the component-level variables resolve.

You should **not need to include `dist/vars.css`** unless:

1. You wish to reference the component-level variables used by a component in external CSS (i.e. `--spectrum-divider-medium-height`)
2. You have upgraded the token package, but do not want to update a component yet

When `vars.css` is used with an updated version of the token package, any global variables that have changed (such as a global color, `--spectrum-gray-300`), you will inherit these updates in the component. However, if the updated version of the token package has changed component-level variables (such as the height of a medium divider, `--spectrum-divider-medium-height`), you will not get those updates. As such, this file can be used to lock-in the basic visual style of a component while still allowing for system-level updates.

In most cases, this file will not be required, so you can safely ignore it. If you see unexpected visual changes creeping into components that you have not updated, `vars.css` _may_ correct them.

### Optimizing Spectrum CSS

Spectrum CSS is designed to be as flexible as possible, leaving room for optimization at the application level. Let's assume you've included a few components as dependencies in your `package.json`:

```json
{
    "name": "my-project",
    "devDependencies": {
        "@spectrum-css/button": "*^3.0.0*",
        "@spectrum-css/page": "^3.0.0",
        "@spectrum-css/vars": "^3.0.0"
    }
}
```

You've created an `index.css` that imports a few components, a scale, and a color context:

```css
@import "node_modules/@spectrum-css/vars/dist/spectrum-global.css";
@import "node_modules/@spectrum-css/vars/dist/spectrum-medium.css";
@import "node_modules/@spectrum-css/vars/dist/spectrum-light.css";
@import "node_modules/@spectrum-css/page/dist/index-vars.css";
@import "node_modules/@spectrum-css/button/dist/index-vars.css";
```

To build a more optimized bundle requires a knowledge of your full application and the browser support you target. There are many build tools and bundlers in use that can offer an approach to removing unused custom properties or classes from your final, minified and g-zipped bundle.

## Contributing

Interested in adding to the Spectrum CSS codebase? We welcome contributions! If accepted, you could end up seeing your code in applications such as Photoshop for the web.

Check out the [contributing guidelines](.github/CONTRIBUTING.md) for quick start information, and head over to the [component documentation](components/README.md) for more.

We are a supportive and welcoming community and ask all participants in the project adhere to our [code of conduct](CODE_OF_CONDUCT.md).

### Building

Run the following command to build and open the preview tool:

```shell
yarn start
```

Your `dist/` folder should now have a local copy of the Spectrum CSS docs and minimal CSS files, and your browser should be open with the project's preview site. Editing any of the `.css` or the `.stories.js` files in `components/*` will update the project documentation and live reload in your browser.

**Important:** Ensure you have Node.js >= 18 installed or the build system will not run.

This project is leveraging caching from [Nx](https://nx.dev/) to speed up the build process. If you are seeing unexpected results, you can clear the cache by running `nx reset` or `yarn nx run-many --target clean --all`.

### Documentation site

#### Local development

For development work on the documentation site, use the command:

```shell
yarn dev
```

This will build the component library and spin up the documentation site locally using [11ty](https://www.11ty.dev).

### CLI

The following tasks are available:

-   `yarn build:lib` - Performs a build of all components.
-   `yarn build <package>` - Allows you to build any component or package. To build multiple packages, separate the names by a comma or reference them using the `tag` syntax (i.e., `yarn build tag:component`).
-   `yarn dev` - Performs a component build, builds storybook, and spins up a localhost server for the documentation, then starts watching components and website files.
-   `yarn clean:lib` - Cleans all output files for the components.
-   `yarn clean <package>` - Cleans all output files for the provided package or packages.

## Releasing

### Individual components

Releasing individual components is handled by Lerna. When any component or it's dependencies change, Lerna will queue that component (and all of it's dependents) for a release.

To release everything that has changed, run:

```shell
yarn release
```

Version numbers are automatically determined, changelogs generated, and packages published. Before running the release, ensure you are [logged into npm](https://docs.npmjs.com/cli/v10/commands/npm-login) and have the appropriate permissions.

### Publishing prereleases

It can be helpful to test changes before they're considered ready to be part of a stable release. To facilitate this, we publish prerelease versions.

1. Ensure you're working on a branch other than `main`.
2. Once your change(s) are ready to be committed, be aware of the severity of the change(s), and be sure to author your commit message so that Lerna understands how to increase the version number(s) of the affected component(s).
3. Once committed, you **must** build the affected package(s) locally **before** publishing them to npm. An npm task for cleaning, building, and beta publishing is available, and it can be run via the following command: `yarn release:beta-from-package`. This command will perform a full clean and build, then attempt to bump the version numbers in the affected package(s) (via `lerna publish --conventional-prerelease --preid beta --pre-dist-tag beta --no-private`).
4. Depending on the severity of your change(s), and before publishing to npm, Lerna should show a preview of the affected package version numbers that look something like: `@spectrum-css/tag: 3.3.8 => 3.3.9-beta.0`. At this time, Lerna will ask if you would like to continue with publishing the changes or cancel.
5. Selecting `y` to publish will publish the affected package(s) to npm.

### Manual prerelease versioning & publishing

Occasionally, you may want to run a prerelease for an individual package and skip a version bump for consuming packages. It's possible to manually change a package's version number to achieve this.

1. For the package you want to prerelease, manually alter the version number in the package's `package.json` file. For example, let's say you'd like to release a `beta` version of the Switch component. In the Switch's `package.json`, manually change the `version` number from its current number (`"version": "1.0.0"`) to the next appropriate semver version number (`"version": "2.0.0-beta.0"`).
2. Save your changes, and commit them with the appropriate conventional commit-style commit message: `chore(switch): manual version bump for beta release` or something similar.
3. Do not forget to run a build **before** continuing with the prerelease. An npm task for cleaning, building, and beta publishing is available, and it can be run via the following command: `yarn release:beta-from-package`. This command will perform a full clean and build, then attempt to publish the package (via `lerna publish --conventional-prerelease --preid beta --pre-dist-tag beta --no-private`).
4. Depending on the severity of your change(s), and before publishing to npm, Lerna should show a preview of the affected package version number that looks something like: `@spectrum-css/switch: 1.0.23 => 2.0.0-beta.0`. At this time, Lerna will ask if you would like to continue with publishing the changes or cancel.
5. Selecting `y` to publish will publish the affected package(s) to npm.
