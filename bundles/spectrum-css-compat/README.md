# @adobe/spectrum-css@2.x
> 2.x-compatible bundle package

This package builds a 2.x compatible bundle package containing backwards-compatible versions of all Spectrum CSS components.

This package should be used by teams that are unable to migrate to individually versioned components at this time, but still want to get updates to Spectrum CSS as long as they can.

## Updating

This package should be updated and released when non-breaking changes are made to any components included in `package.json`.

If breaking changes are made to any components included in `package.json`, that package's version will be frozen and will never be updated again for this package.

## Release process

1. Run the release script in the root of the project to release individual components:

```
npm run release
```

2. Run the release script. Version numbers will be updated automatically, the package will be published, and the documentation site will be deployed.

To release all bundles:
```
npm run release-bundles
```

To release only this bundle:
```
cd bundles/spectrum-css-compat
npm run release
```

## CLI

See [`bundle-builder` CLI](/tools/bundle-builder#cli).
