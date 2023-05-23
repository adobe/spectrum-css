# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.0.22"></a>
## 3.0.22 [MAJOR CHANGE]
🗓 2023-05-22 • 📝 [Commits]()


## Updates:
---
`*` Added support for handler actions with ```withActions``` on each stories which have action handlers.

Example:
```js
import globalThis from 'global';
+ import { withActions } from '@storybook/addon-actions/decorator';

export default {
  component: globalThis.Components.Button,
  args: {
    label: 'Click Me!',
  },
  parameters: {
    chromatic: { disable: true },
  },
};
export const Basic = {
  parameters: {
    handles: [{ click: 'clicked', contextmenu: 'right clicked' }],
  },
+  decorators: [withActions],
};
```

`*` Upgraded to ```Webpack 5``` for improved bundling and performance from ```webpack 4```

`*` @storybook addons dependencies are upgraded to v7 from v6
```js
"@storybook/addon-docs": "^7.0.12",
"@storybook/addon-essentials": "^7.0.12",
"@storybook/api": "^7.0.12",
"@storybook/client-api": "^7.0.12",
"@storybook/components": "^7.0.12",
"@storybook/core-events": "^7.0.12",
"@storybook/manager-api": "^7.0.12",
"@storybook/preview-api": "^7.0.12",
"@storybook/theming": "^7.0.12",
"@storybook/web-components-webpack5": "^7.0.12",
"@whitespace/storybook-addon-html": "^5.1.4",
```

`*` Added a new "Controls" addon for interactive component props editing.

`*` Introduced a new "Docs-only" mode for isolating component documentation.

`*` Improved the addon ecosystem with new and updated addons.


<br></br>
## Breaking Changes:
---
`*` client-api is deperacted and preview-api is introduced

```js
 - import { useEffect } from '@storybook/client-api';
 + import { useEffect } from '@storybook/preview-api';
```

`*` @storybook/addons is deperacted and replaced with @storybook/manager-api

```js
 - import { addons } from '@storybook/addons';
 + import { addons } from '@storybook/manager-api';
```

`*` ```@storybook-webcomponents``` is deprecated. ```@storybook/web-components-webpack'``` is added with webpack 5 support.

```js
 - framework: '@storybook/web-components',
 + framework: {
    name: '@storybook/web-components-webpack5',
    options: {
      fastRefresh: true,
      builder: { lazyCompilation: true },
    },
  },

```

`*` Docs is now added to every component on the sidebar with the below code in Storybook 7
```js
  docs: {
    autodocs: true, 
    defaultName: 'Docs',
  },
```

`*` preview.js is exported as default in Storybook 7

```js
- export const parameters = {
- actions: { argTypesRegex: '^on[A-Z].*' },
- };

+ export default {
+  parameters: {
+    actions: { argTypesRegex: '^on[A-Z].*' },
+  },
+ };
```
## Deprecations(Addons):
---

`*` ```"@storybook/client-api"``` is deprecated

`*` ```"@storybook/addons"``` is deprecated


## Bug Fixes:
---
`*` Fixed various issues related to performance, rendering, and compatibility.

`*` Resolved problems with the Storybook UI, including layout glitches and navigation bugs.

`*` Fixed bugs in calender storybook


## Improvements:
---
`*` Improved the overall performance and stability of the Storybook development environment.

`*` Enhanced the documentation with updated examples and guides.

`*` Optimized the build process for faster bundling and reduced file sizes.

`*` Upgraded dependencies to their latest versions for improved compatibility and security.

---



<a name="3.0.21"></a>
## 3.0.21
🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@3.0.20...@spectrum-css/preview@3.0.21)

**Note:** Version bump only for package @spectrum-css/preview





<a name="3.0.20"></a>
## 3.0.20
🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@3.0.19...@spectrum-css/preview@3.0.20)

**Note:** Version bump only for package @spectrum-css/preview





<a name="3.0.19"></a>
## 3.0.19
🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@3.0.18...@spectrum-css/preview@3.0.19)

**Note:** Version bump only for package @spectrum-css/preview





<a name="3.0.18"></a>
## 3.0.18
🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@3.0.17...@spectrum-css/preview@3.0.18)

**Note:** Version bump only for package @spectrum-css/preview





<a name="3.0.17"></a>
## 3.0.17
🗓 2023-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@3.0.16...@spectrum-css/preview@3.0.17)

**Note:** Version bump only for package @spectrum-css/preview





<a name="3.0.16"></a>
## 3.0.16
🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@3.0.15...@spectrum-css/preview@3.0.16)

**Note:** Version bump only for package @spectrum-css/preview





<a name="3.0.15"></a>
## 3.0.15
🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@3.0.14...@spectrum-css/preview@3.0.15)

**Note:** Version bump only for package @spectrum-css/preview





<a name="3.0.14"></a>
## 3.0.14
🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@3.0.13...@spectrum-css/preview@3.0.14)

**Note:** Version bump only for package @spectrum-css/preview





<a name="3.0.13"></a>
## 3.0.13
🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@3.0.12...@spectrum-css/preview@3.0.13)

**Note:** Version bump only for package @spectrum-css/preview





<a name="3.0.12"></a>
## 3.0.12
🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@3.0.10...@spectrum-css/preview@3.0.12)

**Note:** Version bump only for package @spectrum-css/preview





<a name="3.0.11"></a>
## 3.0.11
🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@3.0.10...@spectrum-css/preview@3.0.11)

**Note:** Version bump only for package @spectrum-css/preview





<a name="3.0.10"></a>
## 3.0.10
🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@3.0.9...@spectrum-css/preview@3.0.10)

**Note:** Version bump only for package @spectrum-css/preview





<a name="3.0.9"></a>
## 3.0.9
🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@3.0.8...@spectrum-css/preview@3.0.9)

**Note:** Version bump only for package @spectrum-css/preview





<a name="3.0.8"></a>
## 3.0.8
🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@3.0.7...@spectrum-css/preview@3.0.8)

**Note:** Version bump only for package @spectrum-css/preview





<a name="3.0.7"></a>
## 3.0.7
🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@3.0.6...@spectrum-css/preview@3.0.7)

**Note:** Version bump only for package @spectrum-css/preview





<a name="3.0.6"></a>
## 3.0.6
🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@3.0.4...@spectrum-css/preview@3.0.6)

**Note:** Version bump only for package @spectrum-css/preview





<a name="3.0.5"></a>
## 3.0.5
🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@3.0.4...@spectrum-css/preview@3.0.5)

**Note:** Version bump only for package @spectrum-css/preview





<a name="3.0.4"></a>
## 3.0.4
🗓 2023-04-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@3.0.3...@spectrum-css/preview@3.0.4)

### 🐛 Bug fixes

* **preview:** storybook precompilation task ([#1764](https://github.com/adobe/spectrum-css/issues/1764)) ([c06e0a5](https://github.com/adobe/spectrum-css/commit/c06e0a5))





<a name="3.0.3"></a>
## 3.0.3
🗓 2023-04-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@3.0.2...@spectrum-css/preview@3.0.3)

**Note:** Version bump only for package @spectrum-css/preview





<a name="3.0.2"></a>
## 3.0.2
🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@3.0.0...@spectrum-css/preview@3.0.2)

**Note:** Version bump only for package @spectrum-css/preview





<a name="3.0.1"></a>
## 3.0.1
🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@3.0.0...@spectrum-css/preview@3.0.1)

**Note:** Version bump only for package @spectrum-css/preview





<a name="3.0.0"></a>
# 3.0.0
🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@2.1.3...@spectrum-css/preview@3.0.0)

* fix(tokens)!: rgb transform to split out rgb values from css attributes (#1590) ([b714db4](https://github.com/adobe/spectrum-css/commit/b714db4)), closes [#1590](https://github.com/adobe/spectrum-css/issues/1590)


### 🛑 BREAKING CHANGES

* transforms color tokens to split out their `rgb` values

Co-authored-by: castastrophe <castastrophe@users.noreply.github.com>





<a name="2.1.3"></a>
## 2.1.3
🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@2.1.2...@spectrum-css/preview@2.1.3)

**Note:** Version bump only for package @spectrum-css/preview





<a name="2.1.2"></a>
## 2.1.2
🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@2.1.1...@spectrum-css/preview@2.1.2)

**Note:** Version bump only for package @spectrum-css/preview





<a name="2.1.1"></a>
## 2.1.1
🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@2.1.0...@spectrum-css/preview@2.1.1)

**Note:** Version bump only for package @spectrum-css/preview





<a name="2.1.0"></a>
# 2.1.0
🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@2.0.8...@spectrum-css/preview@2.1.0)

### ✨ Features

* configure local visual testing with Chromatic ([#1673](https://github.com/adobe/spectrum-css/issues/1673)) ([e62913a](https://github.com/adobe/spectrum-css/commit/e62913a))





<a name="2.0.8"></a>
## 2.0.8
🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@2.0.7...@spectrum-css/preview@2.0.8)

**Note:** Version bump only for package @spectrum-css/preview





<a name="2.0.7"></a>
## 2.0.7
🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@2.0.6...@spectrum-css/preview@2.0.7)

**Note:** Version bump only for package @spectrum-css/preview





<a name="2.0.6"></a>
## 2.0.6
🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@2.0.5...@spectrum-css/preview@2.0.6)

**Note:** Version bump only for package @spectrum-css/preview





<a name="2.0.5"></a>
## 2.0.5
🗓 2023-03-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@2.0.4...@spectrum-css/preview@2.0.5)

**Note:** Version bump only for package @spectrum-css/preview





<a name="2.0.4"></a>
## 2.0.4
🗓 2023-02-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@2.0.3...@spectrum-css/preview@2.0.4)

**Note:** Version bump only for package @spectrum-css/preview





<a name="2.0.3"></a>
## 2.0.3
🗓 2023-02-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@2.0.2...@spectrum-css/preview@2.0.3)

**Note:** Version bump only for package @spectrum-css/preview





<a name="2.0.2"></a>
## 2.0.2
🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@2.0.1...@spectrum-css/preview@2.0.2)

**Note:** Version bump only for package @spectrum-css/preview





<a name="2.0.1"></a>
## 2.0.1
🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@2.0.0...@spectrum-css/preview@2.0.1)

**Note:** Version bump only for package @spectrum-css/preview





<a name="2.0.0"></a>
# 2.0.0
🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@1.0.9...@spectrum-css/preview@2.0.0)

* chore(tokens)!: use latest dependency & fix build error (#1591) ([f2532e7](https://github.com/adobe/spectrum-css/commit/f2532e7)), closes [#1591](https://github.com/adobe/spectrum-css/issues/1591)


### 🛑 BREAKING CHANGES

* uses latest `@adobe/spectrum-tokens` dependency which includes token renames





<a name="1.0.9"></a>
## 1.0.9
🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@1.0.8...@spectrum-css/preview@1.0.9)

**Note:** Version bump only for package @spectrum-css/preview





<a name="1.0.8"></a>
## 1.0.8
🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@1.0.7...@spectrum-css/preview@1.0.8)

**Note:** Version bump only for package @spectrum-css/preview





<a name="1.0.7"></a>
## 1.0.7
🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@1.0.6...@spectrum-css/preview@1.0.7)

**Note:** Version bump only for package @spectrum-css/preview





<a name="1.0.6"></a>
## 1.0.6
🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@1.0.4...@spectrum-css/preview@1.0.6)

**Note:** Version bump only for package @spectrum-css/preview





<a name="1.0.5"></a>
## 1.0.5
🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@1.0.4...@spectrum-css/preview@1.0.5)

**Note:** Version bump only for package @spectrum-css/preview





<a name="1.0.4"></a>
## 1.0.4
🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@1.0.3...@spectrum-css/preview@1.0.4)

**Note:** Version bump only for package @spectrum-css/preview





<a name="1.0.3"></a>
## 1.0.3
🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/preview@1.0.2...@spectrum-css/preview@1.0.3)

**Note:** Version bump only for package @spectrum-css/preview





<a name="1.0.2"></a>
## 1.0.2
🗓 2022-12-14

**Note:** Version bump only for package @spectrum-css/preview





<a name="1.0.1"></a>
## 1.0.1
🗓 2022-12-13

**Note:** Version bump only for package @spectrum-css/preview
