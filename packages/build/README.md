# @spectrum-css/build
> Build system for Spectrum CSS components

This package uses gulp to compile CSS and build documentation for Spectrum CSS components

## CLI

The following tasks are defined

* `gulp build` - Build everything
* `gulp buildCSS` - Build CSS only
* `gulp buildDocs` - Build documentation only

## Accessing PostCSS preprocessors

You can pull the list of preprocessors with `require('@spectrum-css/css/processors')`, but it'll probably break unless there's a local copy of `@spectrum-css/vars` in the current working directory's `node_modules` folder...
