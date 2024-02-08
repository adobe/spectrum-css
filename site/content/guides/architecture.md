---
layout: layouts/pages.njk
title: Component architecture
permalink: architecture/
eleventyNavigation:
  title: Architecture
  key: architecture
  order: 6
---

<article>

# Component architecture {.spectrum-Heading .spectrum-Heading--sizeXXL .spectrum-Heading--serif #architectures}

The project is broken down into separate components for each component inside of the `components/` folder.

Components are released on npm as `@spectrum-css/$COMPONENT`, where `$COMPONENT` corresponds to the folder name in this repository.

## Structure

Each component has the following files:

- `index.css` - The scale-specific styles for the component: dimensions, layout, etc (these change between scales)
- `metadata/*.yml` - The markup examples and documentation for the component; also makes additional examples possible that appear separately in the site navigation.
- `themes/*.css` - The theme-specific styles for the component.
- `stories/*.stories.js` and `stories/template.js` - The assets for rendering components in Storybook and for visual regression testing.

The following asset will only be seen in legacy components that have not yet migrated to the new tokens system:

- `skin.css` - The theme-specific styles for the component: colors, box-shadows, etc (these change between color stops)

## Editing an existing component

1. Run `gulp dev` in the root of the project to begin developing.
2. Edit `components/$COMPONENT/index.css` and `components/$COMPONENT/skin.css` with dimensions and color properties respectively. The documentation will live reload with your changes.
3. Edit the markup examples within `components/$COMPONENT/metadata/*.yml`. The documentation will live reload with your changes.

## Adding a new component

1. Generate a new component using the `yarn new component` command. The generator will prompt you to answer questions about your component.
2. Edit the `dependencies` within the `package.json` file to use only the dependencies your component needs. All components rely on `@spectrum-css/tokens`, and most rely on `@spectrum-css/icon`. **Note: If you are working on a legacy component, it will dependend on `@spectrum-css/vars` instead. This is expected.**
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

1. If your component leverages another component for rendering, it should be declared as a peer dependency. Any components leverages in variations but are not required to render the component should be declared as an optional peer dependency.
   - The version range included in `peerDependencies` should be as permissive as possible to allow for the greatest flexibility in consuming the component. For example, if a component is first compatible with `@spectrum-css/button` at version `2.1.0`, the`peerDependencies` should be set to `>=2.1`. If a breaking change is introduced in `@spectrum-css/button@3.0.0`, the`peerDependencies` should be updated to `>=3` unless it is compatible with both versions, in which case you can use the more open-ended syntax `>=2.1 <=3`.
2. If your component has an example that uses another component, such as in the documentation or storybook preview, but the component doesn't require it or use it in a variant, it's not necessary to declare it in the package.json.
   - If your component is commonly used with a table and includes an example where it is used with a table, but doesn't require table to render itself, you don't have to declare `@spectrum-css/table` as a dependency.

Another example: `actionbar` gets its tokens from `vars`, and requires `button`, `checkbox`, `icon`, and `popover` to render, but also has an example where the component is used with a `table`. The checkbox variant is possible but not required according to the design documentation. Its dependencies should be declared as follows:

```json
{
	"name": "@spectrum-css/actionbar",
	"peerDependencies": {
		"@spectrum-css/button": ">=2",
		"@spectrum-css/checkbox": ">=2",
		"@spectrum-css/icon": ">=2",
		"@spectrum-css/popover": ">=2",
		"@spectrum-css/vars": ">=3"
	},
	"peerDependenciesMeta": {
		"@spectrum-css/checkbox": {
			"optional": true
		}
	}
}
```

## Releasing components

Any change to a component or a component's dependencies results in a release of that component and all components dependent on that asset. Component releases cannot be done ala carte and must be done from the top-level, managed by lerna.

See [Releasing](/README.md#Releasing) for more information.

</article>
