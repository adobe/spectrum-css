# @spectrum-css/spectrum-css@latest
> Bundle package

This package builds a bundle package containing the latest versions of all Spectrum CSS components.

This package should be used by teams that are in the progress of migrating to individually versioned components, who want to pick up breaking changes, but do not yet want to switch to individually versioned components.

## Updating

This package should be updated and released when any changes are made to any components included in `package.json`.

If breaking changes are made to any components, this package's major version number will also increment.

## Release process

1. Run the release script in the root of the project:

```
npm run release
```

2. Run the release script in the bundle itself. Version numbers will be updated automatically, the package will be published, and the documentation site will be deployed.

```
cd bundles/spectrum-css
npm run release
```

## CLI

The following tasks are available:

* `gulp clean` - Clean everything
* `gulp build` - Build documentation and copy build output into the `dist/` folder
* `gulp dev` - Perform a build, start a server, and watch `bundle-builder` for changes
* `gulp watch` - If a build as already been performed, start a server and watch `bundle-builder` for changes
