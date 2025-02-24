# Change Log

## 2.0.0-next.0

### Major Changes

- [#2352](https://github.com/adobe/spectrum-css/pull/2352) [`a25e0a9`](https://github.com/adobe/spectrum-css/commit/a25e0a99e5a4736ab4e607e00739343101a2633b) Thanks [@pfulton](https://github.com/pfulton)! - # Breaking change

  Iconography in v1 inclued 2 sizes, `medium` and `large`, as well as a single SVG asset that included both versions to be toggled with classes via CSS (found in folder`combined`). Icons in v2 no longer have multiple sizes and all assets are sourced from a single folder`svg` which can be found in the `dist` directory of this workspace. **Raw SVG assets can no longer be sourced from the top-level of the workspace and must be loaded from `@spectrum-css/ui-icons/dist/svg/*.svg` instead.** Please find below an outline of the new, deprecated, and unchanged icons.

  | Icon name         | Migration notes |
  | ----------------- | --------------- |
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
  | SingleGripper     | Deprecated      |
  | DoubleGripper     | Deprecated      |
  | TripleGripper     | Deprecated      |

## 1.1.2

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/ui-icons

## 1.1.1

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/ui-icons@1.1.0...@spectrum-css/ui-icons@1.1.1)

**Note:** Version bump only for package @spectrum-css/ui-icons

## 1.1.0

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/ui-icons@0.1.0...@spectrum-css/ui-icons@1.1.0)

### ✨ Features

- **ui-icons:**graduate to 1.0 release ([#2366](https://github.com/adobe/spectrum-css/issues/2366))([afd369a](https://github.com/adobe/spectrum-css/commit/afd369a))

## 0.1.0

🗓 2023-12-12

\*feat(icon,ui-icons)!: migrate the icon compiler to a distinct package (#2343)([d73d594](https://github.com/adobe/spectrum-css/commit/d73d594)), closes[#2343](https://github.com/adobe/spectrum-css/issues/2343)

### 🛑 BREAKING CHANGES

- @spectrum-css/icon will no longer contain SVG assets; it will be a purely CSS package with all SVG assets migrated to the new @spectrum-css/ui-icons package.

- NEW: @spectrum-css/ui-icons package for all SVG icons in the UI set.
