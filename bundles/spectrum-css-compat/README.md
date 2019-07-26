# @adobe/spectrum-css@2.x
> Monolithic 2.x-compatible package

This package builds a monlithic 2.x compatible package containing backwards-compatible versions of all Spectrum CSS components.

This package should be used by teams that are unable to migrate to individually versioned components at this time, but still want to get updates to Spectrum CSS as long as they can.

## Updating

This package should be updated and released when non-breaking changes are made to any components included in `package.json`.

If breaking changes are made to any components included in `package.json`, that package's version will be frozen and will never be updated again for this package.

## Release process

1. Update any version numbers for updated components in `package.json`. Generally, version ranges will do this for you.

2. Bootstrap in the root of the project:

```
npm run bootstrap
```

3. Run the release task for `spectrum-css-compat`:

```
cd bundles/spectrum-css-compat
gulp release
```

4. Choose the appropriate version according to semver, and hit enter. The rest of the release process will happen automatically, with github pages and npm packages being published accordingly.

## CLI

The following tasks are available:

* `gulp clean` - Clean everything
* `gulp build` - Build documentation and copy build output into the `dist/` folder
* `gulp dev` - Perform a build, start a server, and watch `bundle-builder` for changes
* `gulp watch` - If a build as already been performed, start a server and watch `bundle-builder` for changes
* `gulp release` - Perform a release
