# @spectrum-css/bundle-builder

> Build system for Spectrum CSS bundle packages

This package builds a bundle packages with the versions of components specific in your the bundle's `package.json`.

## Docs

See the [docs generation documentation](docs/README.md) for details on documentation generation.

## Site

See the [site generation documentation](site/README.md) for details on site generation as well as editing and updating the site.

## Usage

Install the package:

```sh
npm install --save-dev @spectrum-css/bundle-builder
```

Create a `gulpfile.js` with the following:

```js
module.exports = require("@spectrum-css/bundle-builder");
```

Add the following scripts to `package.json`:

```json
{
	"scripts": {
		"build": "gulp build",
		"prepack": "gulp prePack",
		"postpublish": "gulp postPublish"
	}
}
```

Then you can use the commands below inside of your project to build and release a Spectrum CSS bundle package.

## CLI

The following tasks are available:

- `gulp build` - Build every component, generate the documentation site, generate individual docs for each component
- `gulp dev` - Perform a build, start a server, and watch for changes
- `gulp watch` - If a build as already been performed, start a server and watch for changes

Build output appears in the `dist/` folder.
