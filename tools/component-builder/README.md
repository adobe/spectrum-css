# @spectrum-css/component-builder
> Build system for Spectrum CSS components

This package uses gulp to compile CSS and build documentation for Spectrum CSS components

## CLI

The following tasks are available:

* `gulp clean` - Clean everything
* `gulp build` - Build everything
* `gulp buildLite` - Clean, then build CSS custom properties only (`index.vars`)
* `gulp buildHeavy` - Clean, then build CSS for all strategies
* `gulp buildCSS` - Build CSS for all strategies
* `gulp buildDocs` - Build documentation only

## Accessing PostCSS preprocessors

You can pull the list of preprocessors with `require('@spectrum-css/css/processors')`, but it'll probably break unless there's a local copy of `@spectrum-css/vars` in the current working directory's `node_modules` folder...
