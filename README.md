# Spectrum CSS [![Build Status](https://travis-ci.org/adobe/spectrum-css.svg?branch=master)](https://travis-ci.org/adobe/spectrum-css)

[![Greenkeeper badge](https://badges.greenkeeper.io/adobe/spectrum-css.svg)](https://greenkeeper.io/)

The goal of this project is to provide a standard CSS implementation of the Spectrum design language for internal and 3rd party use on Adobe's platforms.

1. [Show me a demo](#show-me-a-demo)
1. [Where is the JavaScript?](#where-is-the-javascript)
1. [Organization](#organization)
1. [Using Spectrum CSS](#using-spectrum-css)
    1. [CSS Custom Properties Strategy](#css-custom-properties-strategy)
    1. [Multi-stop Strategy](#multi-stop-strategy)
    1. [Single-stop Strategy](#single-stop-strategy)
1. [Building](#building)
1. [Testing](#testing-with-the-visual-regression-tools)
1. [Contributing](#contributing)

## Show me a demo

Check out [the documentation here](http://opensource.adobe.com/spectrum-css/), which shows every Spectrum CSS component and all of its variations on the same page.

## Where is the JavaScript?

We have found that JavaScript is where a framework or library quickly becomes opinionated and stops being easy to use with or across other frameworks. To avoid this problem, Spectrum CSS avoids implementation details that require JavaScript.  Where an element might require multiple states, the documentation here will simply show all the states in a flat, static example.  We leave it to the frameworks implementing Spectrum CSS to create JavaScript that suits their needs.

## Organization

Spectrum CSS builds output that uses custom properties so it can support multiple scales (medium, large) and color stops (light, dark, etc) with the same base CSS. This version of the output should be used, unless you need to support older browsers (IE 11).

It also builds 'multi-stop' and 'single-stop' versions of the CSS for older browsers (IE 11). This enables a consumer to either allow for multiple Spectrum colorstops in a single CSS file, or can limit the number of selectors to only those needed for a single colorstop.

Spectrum CSS organizes the CSS source files in the `src` folder. Each Spectrum element has it's own folder. That folder contains an `index.css` file for the basic structual CSS for all variants of an element. There is also a `skin.css` file to hold the values that change when the colorstop of the element is specified.

The CSS source files also contain [Topdoc](https://github.com/Topdoc/topdoc) comments with a placeholder for documentation values that are injected at build time. The source of those injected values is found in the YAML formatted files in the `docs` folder. A key part of the docs data is the `markup` node, which contains the HTML elements needed to apply the corresponding element selectors and render the elements as generated Topdoc output.

A successful build will create a `dist` folder. The `dist/docs` folder is where the Topdoc output and related template files will end up.

## Using Spectrum CSS

Spectrum CSS can be consumed as whole or in part with three distinct methods of applying colorstops.

To install Spectrum CSS, run `npm install @adobe/spectrum-css` from your project's root directory. You will be able to find everything you need for both strategies in the `node_modules/@adobe/spectrum-css/` folder.

### CSS Custom Properties Strategy

Spectrum CSS includes build output that uses CSS custom properties to change themes and scales. This is the preferred approach due to its simplicity and smaller file size, but it does not work in IE 11.

Start by including the base set of variables:

```html
<!-- Include global variables first -->
<link rel="stylesheet" href="https://unpkg.com/@adobe/spectrum-css@2.x/dist/vars/spectrum-global.css">

<!-- Include only the scales and colorstops your application needs, be sure to use the *-unique.css files -->
<link rel="stylesheet" href="https://unpkg.com/@adobe/spectrum-css@2.x/dist/vars/spectrum-medium-unique.css">
<link rel="stylesheet" href="https://unpkg.com/@adobe/spectrum-css@2.x/dist/vars/spectrum-large-unique.css">

<link rel="stylesheet" href="https://unpkg.com/@adobe/spectrum-css@2.x/dist/vars/spectrum-light-unique.css">
<link rel="stylesheet" href="https://unpkg.com/@adobe/spectrum-css@2.x/dist/vars/spectrum-dark-unique.css">

<!-- Include index-vars.css for all components you need -->
<link rel="stylesheet" href="https://unpkg.com/@adobe/spectrum-css@2.x/dist/components/icon/index-vars.css">
<link rel="stylesheet" href="https://unpkg.com/@adobe/spectrum-css@2.x/dist/components/button/index-vars.css">
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

* `dist/components/page/index.css`
* `dist/components/page/multiStops/COLORSTOP.css` for each colorstop
* `dist/components/typography/index.css`
* `dist/components/typography/multiStops/COLORSTOP.css` for each colorstop

Then, for each component you need:

* `dist/components/COMPONENT/index.css` for each component
* `dist/components/COMPONENT/multiStops/COLORSTOP.css` for each colorstop

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

* `dist/components/page/index.css`
* `dist/components/page/colorStops/COLORSTOP.css` for the single colorstop
* `dist/components/typography/index.css`
* `dist/components/typography/colorStops/COLORSTOP.css` for the single colorstop

Then, for each component you need:

* `dist/components/COMPONENT/index.css` for each component
* `dist/components/COMPONENT/colorStops/COLORSTOP.css` for the single colorstop

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

In this project, there are three sets of source files.
- `src/`: contains the source for element CSS selectors, with related attribute/value pairs.
- `docs/`: this is the 'default' markup (in [Topdoc](topdoc-link) format) that aligns with the CSS generated by this project. Documentation is generated using the metadata stored here.

## Building

Run the following commands:

```
npm install -g gulp-cli
npm install
gulp
```

Your `dist/` folder should now have a local copy of the Spectrum CSS docs and ready-to-use CSS files.

**Important:** Ensure you have NodeJS 10.x installed to build the CSS correctly (checkout [#61](https://github.com/adobe/spectrum-css/issues/61) for more information).

## Testing with the Visual Regression Tools

Under the hood, the visual regression tool is powered by a library called [BackstopJS](https://github.com/garris/BackstopJS). The idea is that by running some `gulp` tasks, the BackstopJS library will take a screenshot of every component described in the `docs/` folder using a headless chrome instance. This process is fairly intensive to run locally and has some quirks (eg, hanging chrome processes).

### Local Testing

Typical testing workflow:

1. Build the `dist/` folder with `gulp build`
2. `gulp test`
3. Wait for results to finish (approx 7 mins)
  * If this is the first run test, the results will be all failures since it has no reference pictures to compare against. Use `backstop approve` to make the screen shots taken in this run to become the new reference set.
  * If you have an existing reference set, you will get a result of which components have changed. You may also choose to again `backstop approve` the new changes to set the new reference set or continue testing.
4. Navigate to `backstop_data/html_report/index.html` to see the nicely formatted html report.

To note: If you see your tests returning with a 'Tag Not Found' image, then it's usually because of a particular chrome instance that was taking that screen shot was left hanging and timed out. Try these commands and run the test again:
MacOS and Linux:

```
pkill -f "(chrome)?(--headless)"
```

Windows PowerShell:

```
Get-CimInstance Win32_Process -Filter "Name = 'chrome.exe' AND CommandLine LIKE '%--headless%'" | %{Stop-Process $_.ProcessId}
```

### Testing Specific Components

Instead of waiting around and testing all of the components, you may supply optional arguments to the `gulp test` command like so:

```
gulp test --component button
gulp test --component button --component well
```

As long as the component name matches one of the folder names within `dist/components`, the `gulp test` command will find it and test it.

### Remote Testing with the Test Server

*Internal-to-Adobe only - for now. Follow progress on [this issue](https://github.com/adobe/spectrum-css/issues/23).*

There's a Jenkins box that's connected to this repo and will build on any branch and commit so long as it has the `Jenkinsfile` in the project root. If all goes well, you should see your commit in the status page for the JenkinsCI: [https://spectrumci.ci.corp.adobe.com/blue/organizations/jenkins/spectrum-css/activity](https://spectrumci.ci.corp.adobe.com/blue/organizations/jenkins/spectrum-css/activity).

Additonally, the Jenkins server will build the html report but will try to compare the test images against the last commit OR if the last commit's images cannot be found, it will compare against what's currently on `HEAD at master`. The html report lives under the `Artifacts` tab and is labeled `Spectrum CSS Visual Regression Report`.

You may also view all of the screenshots taken so far by Jenkins in this repo: [https://git.corp.adobe.com/Spectrum/spectrum-css-visual-reports](https://git.corp.adobe.com/Spectrum/spectrum-css-visual-reports).

To note: the JenkinsCI server will almost always have a green check mark in the commit message but should be taken with a grain a salt. The green check mark in this case means the project built succesfully BUT it does not mean the components aren't all mangled up or whatever. It is up to the developer who is committing to ensure that their commits are good and are using this tool to see how much visual change their commits are actually doing.


## Contributing

Check out the [contributing guidelines](.github/CONTRIBUTING.md)!

[topdoc-link]: https://github.com/Topdoc/topdoc/wiki

### Updating internal dependencies

*Internal-to-Adobe only - for now*

Locally clone the `spectrum-css-deps` repo. This repo contains internal, non open source dependencies needed by Spectrum CSS. Keep `spectrum-css-deps` as a sibling repo to `spectrum-css`. In `spectrum-css-deps`, run `npm run build` to generate the dependencies and `npm run copy` to copy the generated dependencies into `spectrum-css`. Then go ahead and review and commit any changes.

## Releasing

We are currently releasing this package on `npm`. We are also releasing an internal version of this package for Adobe on an internal instance of Artifactory. 

Before we get started, clean up your dependencies with the following command.

```
git checkout master
rm -rf node_modules && npm install
```

Now prepare the package for release by bumping the version (minor version bump by default), committing the changes, tagging the repo, and pushing the changes and tags up to GitHub. Run the following script which does all of this for you. 

```
npm run bump (patch/minor/major)
```

This command takes an optional argument of the type of version increase you want. You can pass either patch, minor or major. If you don't supply an argument, the command will do a minor version bump by default. You could also pass a version you want the package to be. Ex: `npm run bump 5.0.0`.

Now that we have prepared the repo for publishing, let's publish the package to `npm`! Run the following command. 

```
npm publish
```

Now let's prepare to release to artifactory. For legacy reasons, we need to update the scope from `@adobe` to `@spectrum` and add the internal only `@spectrum/spectrum-icons` dependency. We have a command that does this for you.

```
npm run prepare-artifactory
```

Now let's publish the package to artifactory. Run the following command.

```
npm publish --registry=https://artifactory.corp.adobe.com:443/artifactory/api/npm/npm-spectrum-release-local
```

Now that the package is published, let's revert the changes we did for artifactory by running the following command.

```
git checkout package.json package-lock.json
```

Now let's deploy the docs. We need to build the repo, make a copy of `dist` named after the release, checkout the `gh-pages` branch, add the new version of the docs and update references in the redirect files and commit. Run the following commands.

```
npm run build
cp -r dist 2.7.2 (replace this with the version you are releasing)
git checkout gh-pages
git add 2.7.2 (replace this with the version you are releasing)
```
Manually update the old versions in `index.html` and `icons/index.html`. 

Now do a quick sanity check of the docs by testing the docs site. Run the site in your browser with the `npm run start` command.

If everything looks good, commit and push the docs.

```
git commit -am "Deploy version 2.7.0"
git push https://github.com/adobe/spectrum-css.git gh-pages
git checkout master
```

You are all done now! Clean up your working directory. 

```
rm -rf node_modules && npm install
```
