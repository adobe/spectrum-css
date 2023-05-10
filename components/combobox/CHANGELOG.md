# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.0.4"></a>
## 2.0.4
🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.3...@spectrum-css/combobox@2.0.4)

**Note:** Version bump only for package @spectrum-css/combobox





<a name="2.0.3"></a>
## 2.0.3
🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.2...@spectrum-css/combobox@2.0.3)

**Note:** Version bump only for package @spectrum-css/combobox





<a name="2.0.2"></a>
## 2.0.2
🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.1...@spectrum-css/combobox@2.0.2)

**Note:** Version bump only for package @spectrum-css/combobox





<a name="2.0.1"></a>
## 2.0.1
🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@2.0.0...@spectrum-css/combobox@2.0.1)

**Note:** Version bump only for package @spectrum-css/combobox





<a name="2.0.0"></a>
# 2.0.0
🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.16...@spectrum-css/combobox@2.0.0)

* fix(textfield, combobox)!: adjust padding calculations (#1803) ([09c1bdc](https://github.com/adobe/spectrum-css/commit/09c1bdc)), closes [#1803](https://github.com/adobe/spectrum-css/issues/1803)


### 🛑 BREAKING CHANGES

* removes `--mod-combobox-icon-size`, `--mod-combobox-spacing-block-start-to-border`, `--mod-combobox-spacing-inline-start-to-textfield`, `--mod-combobox-spacing-block-start-edge-to-textfield`, `--mod-combobox-spacing-block-end-edge-to-textfield`, and `--mod-combobox-spacing-inline-start-edge-to-textfield`.

Additionally:
* fix: exclude border width from padding with text inputs + more fixes

- Textfield and Combobox: exclude border width from padding calculations
  because most of the to-edge tokens include the border, and the values
  were 1px larger than they should have been.
- Textfield and Combobox: fix corner radius of focus indicator when
  using a larger border radius (e.g. try setting a --mod border width
  of 5px; the calculation adding the border width was incorrect)
- Combobox: adjust styles so custom property for border width is
  correctly overriding everything from its sub-components. Previously
  using --mod-combobox-border-width had no effect.
- Combobox: simplify/remove some custom properties related to those
  fixes and quiet variant.

* fix(combobox): border-radius should not increase for t-shirt sizes

Per design feedback, the border-radius value should not be increasing
for these t-shirt sizes.

* fix(combobox): calculate the button x-offset on quiet

Use a corrected calculation of the x-offset for the picker button on the
quiet variant. Based on design feedback for the component: "The point is
to line up the chevron icon with the end of the component so those
elements are flushed".

* fix(combobox): mods update after changes

Regenerate mods after fixes that have removed and renamed some
properties.

* feat(textfield): add 'size' control to storybook

Add "t-shirt" size control to Textfield stories. The arg was already
there, but it was missing a control for testing.





<a name="1.0.16"></a>
## 1.0.16
🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.15...@spectrum-css/combobox@1.0.16)

**Note:** Version bump only for package @spectrum-css/combobox





<a name="1.0.15"></a>
## 1.0.15
🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.13...@spectrum-css/combobox@1.0.15)

**Note:** Version bump only for package @spectrum-css/combobox





<a name="1.0.14"></a>
## 1.0.14
🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.13...@spectrum-css/combobox@1.0.14)

**Note:** Version bump only for package @spectrum-css/combobox





<a name="1.0.13"></a>
## 1.0.13
🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.12...@spectrum-css/combobox@1.0.13)

**Note:** Version bump only for package @spectrum-css/combobox





<a name="1.0.12"></a>
## 1.0.12
🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.11...@spectrum-css/combobox@1.0.12)

**Note:** Version bump only for package @spectrum-css/combobox





<a name="1.0.11"></a>
## 1.0.11
🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.10...@spectrum-css/combobox@1.0.11)

**Note:** Version bump only for package @spectrum-css/combobox





<a name="1.0.10"></a>
## 1.0.10
🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.9...@spectrum-css/combobox@1.0.10)

**Note:** Version bump only for package @spectrum-css/combobox





<a name="1.0.9"></a>
## 1.0.9
🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.8...@spectrum-css/combobox@1.0.9)

**Note:** Version bump only for package @spectrum-css/combobox





<a name="1.0.8"></a>
## 1.0.8
🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.6...@spectrum-css/combobox@1.0.8)

**Note:** Version bump only for package @spectrum-css/combobox





<a name="1.0.7"></a>
## 1.0.7
🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.6...@spectrum-css/combobox@1.0.7)

**Note:** Version bump only for package @spectrum-css/combobox





<a name="1.0.6"></a>
## 1.0.6
🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.4...@spectrum-css/combobox@1.0.6)

**Note:** Version bump only for package @spectrum-css/combobox





<a name="1.0.5"></a>
## 1.0.5
🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.4...@spectrum-css/combobox@1.0.5)

**Note:** Version bump only for package @spectrum-css/combobox





<a name="1.0.4"></a>
## 1.0.4
🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.3...@spectrum-css/combobox@1.0.4)

**Note:** Version bump only for package @spectrum-css/combobox





<a name="1.0.3"></a>
## 1.0.3
🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.2...@spectrum-css/combobox@1.0.3)

**Note:** Version bump only for package @spectrum-css/combobox





<a name="1.0.2"></a>
## 1.0.2
🗓 2023-03-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/combobox@1.0.1...@spectrum-css/combobox@1.0.2)

**Note:** Version bump only for package @spectrum-css/combobox





<a name="1.0.1"></a>
## 1.0.1
🗓 2023-03-28

**Note:** Version bump only for package @spectrum-css/combobox
