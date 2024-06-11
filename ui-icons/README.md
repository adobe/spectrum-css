# @spectrum-css/ui-icons

> The source for UI iconography used in Spectrum CSS

This package uses SVGO to process SVGs and combines them into several sprite sheets for use in this and other projects.

_Please do not import assets from the source directory as these are fluid and not part of the semantic publishing contract. Instead, use the `dist` directory._

## Installation

```sh
yarn add -DW @spectrum-css/ui-icons
```

## Usage

### SVGs

SVGs are available in the `dist` directory The `dist` directory contains the following:

- `svg`: a folder containing all raw icon SVGs
- `spectrum-css-icons.svg`: a single sprite sheet containing all icons
- `icons.json`: a list of all SVG files available in the `svg` folder

### CSS

CSS for the icons is available from the `@spectrum-css/icon` package. See the [Icon documentation](../components/icon/README.md) for more information.

## Updating icons

Icons are available from an internal repository that is available only to Adobe employees. If you are an employee with access, follow the steps below:

1. `yarn npm login --scope a4u` to authenticate with the internal repository
2. `yarn workspace @spectrum-css/ui-icons add -D @a4u/a4u-s2-ui-icon-global-set@1.7.1` to install the latest version of the internal repository (replace `1.7.1` with the latest version available)
3. **Do not commit** the updated `ui-icons/package.json` with the new version of `@a4u/a4u-s2-ui-icon-global-set` as this blocks non-Adobe employees from installing and using the repository.

Once your environment is ready, you can run `rm -rf ui-icons/dist/svg && yarn builder ui-icons`. Expect to see the updated SVG assets populate in your `ui-icons/dist/svg` folder, an updated `icons.json` that should accurately reflect what files are in the `svg` folder, and an updated `spectrum-css-icons.svg` spritesheet containing the updated content from the new assets.

## Migrating from v1.x icons to v2.x

Iconography in v1 inclued 2 sizes, `medium` and `large`, as well as a single SVG asset that included both versions to be toggled with classes via CSS (found in folder`combined`). Icons in v2 no longer have multiple sizes and all assets are sourced from a single folder`svg` which can be found in the `dist` directory of this workspace. **Raw SVG assets can no longer be sourced from the top-level of the workspace and must be loaded from `@spectrum-css/ui-icons/dist/svg/*.svg` instead.** Please find below an outline of the new, deprecated, and unchanged icons.

| Icon name         | Migration notes |
| ----------------- | --------------- |
| Add50             | **New**         |
| Add75             | **New**         |
| Add100            | **New**         |
| Add200            | **New**         |
| Add300            | **New**         |
| Arrow75           | Deprecated      |
| Arrow100          | -               |
| Arrow200          | Deprecated      |
| Arrow300          | Deprecated      |
| Arrow400          | -               |
| Arrow500          | Deprecated      |
| Arrow600          | Deprecated      |
| Asterisk75        | Deprecated      |
| Asterisk100       | -               |
| Asterisk200       | -               |
| Asterisk300       | -               |
| Checkmark50       | -               |
| Checkmark75       | -               |
| Checkmark100      | -               |
| Checkmark200      | -               |
| Checkmark300      | -               |
| Checkmark400      | -               |
| Checkmark500      | Deprecated      |
| Checkmark600      | Deprecated      |
| Chevron50         | -               |
| Chevron75         | -               |
| Chevron100        | -               |
| Chevron200        | -               |
| Chevron300        | -               |
| Chevron400        | -               |
| Chevron500        | Deprecated      |
| Chevron600        | Deprecated      |
| CornerTriangle75  | -               |
| CornerTriangle100 | -               |
| CornerTriangle200 | -               |
| CornerTriangle300 | -               |
| Cross75           | -               |
| Cross100          | -               |
| Cross200          | -               |
| Cross300          | -               |
| Cross400          | -               |
| Cross500          | -               |
| Cross600          | -               |
| Dash50            | -               |
| Dash75            | -               |
| Dash100           | -               |
| Dash200           | -               |
| Dash300           | -               |
| Dash400           | Deprecated      |
| Dash500           | Deprecated      |
| Dash600           | Deprecated      |
| DragHandle75      | **New**         |
| DragHandle100     | **New**         |
| DragHandle200     | **New**         |
| DragHandle300     | **New**         |
| Gripper100        | **New**         |
| SingleGripper     | Deprecated      |
| DoubleGripper     | Deprecated      |
| TripleGripper     | Deprecated      |
| LinkOut100        | **New**         |
| LinkOut200        | **New**         |
| LinkOut300        | **New**         |
| LinkOut400        | **New**         |
