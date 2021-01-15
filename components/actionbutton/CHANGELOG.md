# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="1.0.0-beta.1"></a>
# 1.0.0-beta.1
🗓 2020-12-04

### ♻️ Code refactoring

* fix padding ([89a6506](https://github.com/adobe/spectrum-css/commit/89a6506))


### ✨ Features

* fixup padding ([612dd0c](https://github.com/adobe/spectrum-css/commit/612dd0c))
* implement t-shirt sizing for Action Button, closes [#936](https://github.com/adobe/spectrum-css/issues/936) ([1a9ecf6](https://github.com/adobe/spectrum-css/commit/1a9ecf6))
* use postcss-remap vars to get t-shirt sizing ([f24f6b3](https://github.com/adobe/spectrum-css/commit/f24f6b3))


### 🐛 Bug fixes

* correct padding, this one is complicated! ([f535f4b](https://github.com/adobe/spectrum-css/commit/f535f4b))
* correct variable usage ([12d3454](https://github.com/adobe/spectrum-css/commit/12d3454))
* hold icon distance until it's updated in DNA ([046ae8e](https://github.com/adobe/spectrum-css/commit/046ae8e))
* line-height of buttons ([eeb24b0](https://github.com/adobe/spectrum-css/commit/eeb24b0))
* remove hack for broken small min-width ([b8cbfbd](https://github.com/adobe/spectrum-css/commit/b8cbfbd))
* try to fix padding (still wrong for icon + label) ([8a2696e](https://github.com/adobe/spectrum-css/commit/8a2696e))


### 🛑 BREAKING CHANGES

* require hold icon to come before workflow icon
* .spectrum-ActionButton is no longer part of the button component, use the actionbutton component
