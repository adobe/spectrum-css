# Spectrum CSS Components

The project is broken down into separate components for each component inside of the `components/` folder.

Components are released on npm as `@spectrum-css/$COMPONENT`, where `$COMPONENT` corresponds to the folder name in this repository.

### Component structure

Each component has the following files:

* `index.css` - The scale-specific styles for the component: dimensions, layout, etc (these change between scales)
* `skin.css` - The theme-specific styles for the component: colors, box-shadows, etc (these change between color stops)
* `docs.yml` - The markup examples and documentation for the component, appearing as a single entry in the site navigation
* `docs/*.yml` - Additional examples that appear separately in the site navigation

See [documentation generation](/tools/bundle-builder/docs/README.md) documentation for more information on the properties available within the `.yml` files.

### Editing an existing component

1. Run `gulp dev` in the root of the project to begin developing.
2. Edit `components/$COMPONENT/index.css` and `components/$COMPONENT/skin.css` with dimensions and color properties respectively. The documentation will live reload with your changes.
3. Edit the markup examples within `components/$COMPONENT/docs.yml` and `components/$COMPONENT/docs/*.yml` accordingly. The documentation will live reload with your changes.

**Note:** If you add dependencies in a component's `package.json`, be sure to re-run `npm run bootstrap` so they are linked appropriately.

### Adding a new component

1. Copy the directory for a similar component from `components/` and rename it for your new component.
2. Edit the `package.json`, resetting the version number to `1.0.0-alpha.0`.
3. Edit the `dependencies` within the `package.json` file to use only the dependencies your component needs. All components rely on `@spectrum-css/vars` and `@spectrum-css/component-builder`, and most rely on `@spectrum-css/icon`.
4. Run `gulp dev` in the root of the project to begin developing
5. Edit `index.css` and `skin.css` with dimensions and color properties respectively.
6. Edit `docs.yml` and `docs/*.yml` to add markup examples for each of the variants of your component.

Because we use scoped packages, before it can be published with Lerna, you must manually publish the new component as public:

```
cd components/newcomponent
npm publish --access=public
```

### Component dependencies

1. If your component requires another component in order to render, it should be declared in both `devDependencies` and `peerDependencies`.
    1. The version range included in `peerDependencies` must satisfy the version included in `devDependencies`.
    1. If a component appears in `peerDependencies`, it must also appear in `devDependencies`.
    1. This goes for every class used to render the component; even if the class comes from a component that's a dependency of another component you already have a dependency on.
    1. For instance, if your component requires a button with an icon inside of it, you must explicitly include both `icon` and `button` in both `devDependencies` and `peerDependencies`.
2. If your component has an example that uses another component, but the component isn't required to render your component, it should be declared in `devDependencies` only.
    1. For instance, if your component is commonly used with a table and includes an example where it is used with a table, but doesn't require table to render itself, you should declare `table` in `devDependencies` only.


For example, `actionbar` gets its tokens from `vars`, and requires `button`, `checkbox`, `icon`, and `popover` to render, but also has an example where the component is used with a `table`. Its dependencies should be declared as follows:

```json
{
  "name": "@spectrum-css/actionbar",
  "peerDependencies": {
    "@spectrum-css/button": "^2.0.0",
    "@spectrum-css/checkbox": "^2.0.0",
    "@spectrum-css/icon": "^2.0.0",
    "@spectrum-css/popover": "^2.0.0",
    "@spectrum-css/vars": "^3.0.0-beta.0"
  },
  "devDependencies": {
    "@spectrum-css/button": "^2.0.0",
    "@spectrum-css/checkbox": "^2.0.0",
    "@spectrum-css/component-builder": "^1.0.0",
    "@spectrum-css/icon": "^2.0.0",
    "@spectrum-css/popover": "^2.0.0",
    "@spectrum-css/table": "^2.0.0",
    "@spectrum-css/vars": "^3.0.0-beta.0"
  }
}
```

The release will error out if:

1. A package is specified in `peerDependencies` that does not appear in `devDependencies`
2. The version of a package is specified in `devDependencies` satisfy the range defined for that package in `peerDependencies`

### Releasing components

Any change to a component or a component's dependencies results in a release of that component and all associated bundles. Component releases cannot be done ala carte and must be done from the top-level, managed by lerna.

See [Releasing](/README.md#Releasing) for more information.
