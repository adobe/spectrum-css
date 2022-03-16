# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.1.0"></a>
# 3.1.0
🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@3.0.1...@spectrum-css/component-builder@3.1.0)

### ✨ Features

* remove the need to add define hacks ([8c76829](https://github.com/adobe/spectrum-css/commit/8c76829))





<a name="3.0.1"></a>
## 3.0.1
🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@3.0.0-alpha.1...@spectrum-css/component-builder@3.0.1)

### 🐛 Bug fixes

* updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))





<a name="3.0.0"></a>
# 3.0.0
🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@3.0.0-alpha.1...@spectrum-css/component-builder@3.0.0)

### 🐛 Bug fixes

* updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))





<a name="3.0.0-alpha.1"></a>
# 3.0.0-alpha.1
🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@3.0.0-alpha.0...@spectrum-css/component-builder@3.0.0-alpha.1)

**Note:** Version bump only for package @spectrum-css/component-builder





<a name="3.0.0-alpha.0"></a>
# 3.0.0-alpha.0
🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@2.0.1...@spectrum-css/component-builder@3.0.0-alpha.0)

### ✨ Features

* updated typography token names to use standardorder ([50145fe](https://github.com/adobe/spectrum-css/commit/50145fe))


### 🛑 BREAKING CHANGES

* realigned classnames





<a name="2.0.1"></a>
## 2.0.1
🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@2.0.0...@spectrum-css/component-builder@2.0.1)

**Note:** Version bump only for package @spectrum-css/component-builder





<a name="2.0.0"></a>
# 2.0.0
🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@2.0.0-beta.1...@spectrum-css/component-builder@2.0.0)

**Note:** Version bump only for package @spectrum-css/component-builder





<a name="2.0.0-beta.1"></a>
# 2.0.0-beta.1
🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@2.0.0-beta.0...@spectrum-css/component-builder@2.0.0-beta.1)

### ✨ Features

* disable legacy build in output ([f1ef983](https://github.com/adobe/spectrum-css/commit/f1ef983))
* error and warning reporting for variable use ([0460d39](https://github.com/adobe/spectrum-css/commit/0460d39))
* implement t-shirt sizing for Action Button, closes [#936](https://github.com/adobe/spectrum-css/issues/936) ([1a9ecf6](https://github.com/adobe/spectrum-css/commit/1a9ecf6))
* use postcss-dropdupedvars ([46d19ea](https://github.com/adobe/spectrum-css/commit/46d19ea))
* use postcss-dropunusedvars ([955e7e2](https://github.com/adobe/spectrum-css/commit/955e7e2))
* use postcss-remap vars ([807fd8f](https://github.com/adobe/spectrum-css/commit/807fd8f))


### 🐛 Bug fixes

* update main, resolved conflicts ([d7880a2](https://github.com/adobe/spectrum-css/commit/d7880a2))


### 🛑 BREAKING CHANGES

* this completely removes legacy build artifacts and IE 11 support
* .spectrum-ActionButton is no longer part of the button component, use the actionbutton component





<a name="2.0.0-beta.0"></a>
# 2.0.0-beta.0
🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@1.2.1-beta.0...@spectrum-css/component-builder@2.0.0-beta.0)

* fix!: updated type sizes to use consistent syntax, related to #972 (#1031) ([1a604c4](https://github.com/adobe/spectrum-css/commit/1a604c4)), closes [#972](https://github.com/adobe/spectrum-css/issues/972) [#1031](https://github.com/adobe/spectrum-css/issues/1031)


### 🛑 BREAKING CHANGES

* all typography sizing classes now have --size* instead of --*, see migration guides





<a name="1.2.1-beta.0"></a>
## 1.2.1-beta.0
🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@1.2.0...@spectrum-css/component-builder@1.2.1-beta.0)

### 🐛 Bug fixes

* wip fix more components ([b74dbb8](https://github.com/adobe/spectrum-css/commit/b74dbb8))





<a name="1.2.0"></a>
# 1.2.0
🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@1.1.0...@spectrum-css/component-builder@1.2.0)

### ✨ Features

* make Typography support RTL ([17abd2b](https://github.com/adobe/spectrum-css/commit/17abd2b))
* support transform: logical rotate(rotation) for RTL ([5bbc8d2](https://github.com/adobe/spectrum-css/commit/5bbc8d2))


### 🐛 Bug fixes

* support multiple selectors in postcss-transform-logical ([3ef1750](https://github.com/adobe/spectrum-css/commit/3ef1750))





<a name="1.1.0"></a>
# 1.1.0
🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@1.0.2...@spectrum-css/component-builder@1.1.0)

### ✨ Features

* adding t-shirt sized typography, fixes [#210](https://github.com/adobe/spectrum-css/issues/210), closes [#416](https://github.com/adobe/spectrum-css/issues/416) ([#408](https://github.com/adobe/spectrum-css/issues/408)) ([3921bcb](https://github.com/adobe/spectrum-css/commit/3921bcb)), closes [#523](https://github.com/adobe/spectrum-css/issues/523)


### 🐛 Bug fixes

* fix order of processor includes when doing diff CSS, fixes [#495](https://github.com/adobe/spectrum-css/issues/495) ([0d9f281](https://github.com/adobe/spectrum-css/commit/0d9f281))





<a name="1.0.2"></a>
## 1.0.2
🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@1.0.1...@spectrum-css/component-builder@1.0.2)

### 🐛 Bug fixes

* don't try to add fallbacks inside of url(), related to [#223](https://github.com/adobe/spectrum-css/issues/223) ([#424](https://github.com/adobe/spectrum-css/issues/424)) ([0fd90c6](https://github.com/adobe/spectrum-css/commit/0fd90c6))





<a name="1.0.1"></a>
## 1.0.1
🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/component-builder@1.0.0...@spectrum-css/component-builder@1.0.1)

### 🐛 Bug fixes

* add missing variables to -unique files, closes [#336](https://github.com/adobe/spectrum-css/issues/336) ([3c9337f](https://github.com/adobe/spectrum-css/commit/3c9337f))





<a name="1.0.0"></a>
# 1.0.0
🗓 2019-10-08

### ✨ Features

* move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
* use linked DNA data for CSS variable generation ([0233a53](https://github.com/adobe/spectrum-css/commit/0233a53))
