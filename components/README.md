# Spectrum CSS Components

The project is broken down into separate components for each component inside of the `components/` folder.

Components are released on npm as `@spectrum-css/$COMPONENT`, where `$COMPONENT` corresponds to the folder name in this repository.

## Component structure

Each component has the following files:

- `index.css` - The scale-specific styles for the component: dimensions, layout, etc (these change between scales)
- `metadata/*.yml` - The markup examples and documentation for the component; also makes additional examples possible that appear separately in the site navigation.
- `themes/*.css` - The theme-specific styles for the component.
- `stories/*.stories.js` and `stories/template.js` - The storybook assets for rendering components in the Storybook tool and eventually to be used for visual regression testing.

## Editing an existing component

1. Run `gulp dev` in the root of the project to begin developing.
2. Edit `components/$COMPONENT/index.css` with dimensions and color properties. The documentation will live reload with your changes.
3. Edit the markup examples within `components/$COMPONENT/metadata/*.yml`. The documentation will live reload with your changes.

## Adding a new component

1. Generate a new component using the `yarn new component` command. The generator will prompt you to answer questions about your component.
2. Edit the `dependencies` within the `package.json` file to use only the dependencies your component needs. All components rely on `@spectrum-css/tokens` and `@spectrum-css/component-builder-simple`, and most rely on `@spectrum-css/icon`. **Note: If you are working on a legacy component, it will dependend on `@spectrum-css/vars` and `@spectrum-css/component-builder` instead. This is expected.**
3. Once your folder has been generated, you can run `yarn dev` in the root of the project to begin developing.
4. The `index.css` file is where most of your styles will be added.
5. Inside the `stories` directory you will find a `template.js` and an `*.stories.js` file.
   - In the `*.stories.js` file, define the available knobs and properties for your component, as well as any standard variations you want to surface in [Storybook](https://storybook.js.org/docs/react/writing-stories/introduction).
   - Update the `template.js` file with the markup, using [lit-html syntax](https://lit.dev/docs/templates/overview/) to adjust results based on the provided settings from the Storybook knobs.
6. Edit your `metadata/*.yml` to add markup examples for each of the variants of your component.

Because we use scoped packages, before it can be published with Lerna, you must manually publish the new component as public:

```shell
cd components/newcomponent
npm publish --access=public
```

## Component dependencies

1. If your component requires another component in order to render, it should be declared in both `devDependencies` and `peerDependencies`.
   1. The version range included in `peerDependencies` must satisfy the version included in `devDependencies`.
   2. If a component appears in `peerDependencies`, it must also appear in `devDependencies`.
   3. This goes for every class used to render the component; even if the class comes from a component that's a dependency of another component you already have a dependency on.
   4. For instance, if your component requires a button with an icon inside of it, you must explicitly include both `icon` and `button` in both `devDependencies` and `peerDependencies`.
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

## Releasing components

Any change to a component or a component's dependencies results in a release of that component and all components dependent on that asset. Component releases cannot be done ala carte and must be done from the top-level, managed by lerna.

See [Releasing](/README.md#Releasing) for more information.
