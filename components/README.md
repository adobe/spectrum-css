# Spectrum CSS Components

The project is broken down into separate components for each component inside of the `components/` folder.

Components are released on npm as `@spectrum-css/$COMPONENT`, where `$COMPONENT` corresponds to the folder name in this repository.

### Component structure

Each component has the following files:

* `index.css` - The scale-specific styles for the component: dimensions, layout, etc (these change between scales)
* `skin.css` - The theme-specific styles for the component: colors, box-shadows, etc (these change between color stops)
* `docs.yml` - The markup examples and documentation for the component, appearing as a single entry in the site navigation
* `docs/*.yml` - Additional examples that appear separately in the site navigation

See [documentation generation](tools/bundle-builder/docs/README.md) documentation for more information on the properties available within the `.yml` files.

### Editing an existing component

1. Run `gulp dev` in the root of the project to begin developing.
2. Edit `components/$COMPONENT/index.css` and `components/$COMPONENT/skin.css` with dimensions and color properties respectively. The documentation will live reload with your changes.
3. Edit the markup examples within `components/$COMPONENT/docs.yml` and `components/$COMPONENT/docs/*.yml` accordingly. The documentation will live reload with your changes.

**Note:** If you add dependencies in a component's `package.json`, be sure to re-run `npm run bootstrap` so they are linked appropriately.

### Adding a new component

1. Copy the directory for a smiliar component from `components/` and rename it for your new component.
2. Edit the `package.json`, resetting the verison number to `1.0.0-alpha.0`.
3. Edit the `dependencies` within the `package.json` file to use only the dependencies your component needs. All components rely on `@spectrum-css/vars` and `@spectrum-css/component-builder`, and most rely on `@spectrum-css/icon`.
4. Run `gulp dev` in the root of the project to begin developing
5. Edit `index.css` and `skin.css` with dimensions and color properties respectively.
6. Edit `docs.yml` and `docs/*.yml` to add markup examples for each of the variants of your component.

Because we use scoped packages, before it can be published with Lerna, you must manually publish the new component as public:

```
cd components/newcomponent
npm publish --access=public
```

### Releasing components

Any change to a component or a component's dependencies results in a release of that component and all associated bundles. Component releases cannot be done ala carte and must be done from the top-level, managed by lerna.

See [Releasing](/README.md#Releasing) for more information.
