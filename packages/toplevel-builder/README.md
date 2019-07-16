# @spectrum-css/toplevel-builder
> Build system for monolithic Spectrum CSS packages

This package builds a monolithic 2.x compatible package with the versions of components specific in your project `package.json`.

## Usage

Install the package:

```
npm install --save-dev @spectrum-css/toplevel-builder
```

Create a `gulpfile.js` with the following:

```js
module.exports = require('@spectrum-css/toplevel-builder');
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

Then you can use the commands below inside of your project to build and release a monolithic Spectrum CSS package.

## CLI

The following tasks are available:

* `gulp clean` - Clean everything
* `gulp build` - Build documentation and copy build output into the `dist/` folder
* `gulp dev` - Perform a build, start a server, and watch `toplevel-builder` for changes
* `gulp watch` - If a build as already been performed, start a server and watch `toplevel-builder` for changes
* `gulp release` - Perform a release
