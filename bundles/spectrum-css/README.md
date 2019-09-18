# @spectrum-css/spectrum-css@latest
> Bundle package

This package builds a bundle package containing the latest versions of all Spectrum CSS components.

This package should be used by teams that are in the progress of migrating to individually versioned components, who want to pick up breaking changes, but do not yet want to switch to individually versioned components.

## Updating

This package should be updated and released when any changes are made to any components included in `package.json`.

If breaking changes are made to any components, this package's major version number will also increment.

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
cd bundles/spectrum-css
npm run release
```

## CLI

See [`bundle-builder` CLI](/tools/bundle-builder#cli).
