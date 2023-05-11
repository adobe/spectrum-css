# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="5.1.4"></a>
## 5.1.4
🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@5.1.3...@spectrum-css/textfield@5.1.4)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="5.1.3"></a>
## 5.1.3
🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@5.1.2...@spectrum-css/textfield@5.1.3)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="5.1.2"></a>
## 5.1.2
🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@5.1.1...@spectrum-css/textfield@5.1.2)

### 🐛 Bug fixes

* **stepper:** fix stepper button padding and borders ([#1856](https://github.com/adobe/spectrum-css/issues/1856)) ([55f2b08](https://github.com/adobe/spectrum-css/commit/55f2b08))





<a name="5.1.1"></a>
## 5.1.1
🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@5.1.0...@spectrum-css/textfield@5.1.1)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="5.1.0"></a>
# 5.1.0
🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@5.0.0...@spectrum-css/textfield@5.1.0)

### ✨ Features

* **floatingactionbutton:** add new component ([#1793](https://github.com/adobe/spectrum-css/issues/1793)) ([174f438](https://github.com/adobe/spectrum-css/commit/174f438))





<a name="5.0.0"></a>
# 5.0.0
🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.15...@spectrum-css/textfield@5.0.0)

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





<a name="4.1.15"></a>
## 4.1.15
🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.14...@spectrum-css/textfield@4.1.15)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="4.1.14"></a>
## 4.1.14
🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.12...@spectrum-css/textfield@4.1.14)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="4.1.13"></a>
## 4.1.13
🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.12...@spectrum-css/textfield@4.1.13)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="4.1.12"></a>
## 4.1.12
🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.11...@spectrum-css/textfield@4.1.12)

### 🐛 Bug fixes

* **textfield:** fix WHCM focus color ([3b23557](https://github.com/adobe/spectrum-css/commit/3b23557))
* **textfield:** update WHCM focus border colors ([392c16e](https://github.com/adobe/spectrum-css/commit/392c16e))





<a name="4.1.11"></a>
## 4.1.11
🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.10...@spectrum-css/textfield@4.1.11)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="4.1.10"></a>
## 4.1.10
🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.9...@spectrum-css/textfield@4.1.10)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="4.1.9"></a>
## 4.1.9
🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.8...@spectrum-css/textfield@4.1.9)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="4.1.8"></a>
## 4.1.8
🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.7...@spectrum-css/textfield@4.1.8)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="4.1.7"></a>
## 4.1.7
🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.5...@spectrum-css/textfield@4.1.7)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="4.1.6"></a>
## 4.1.6
🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.5...@spectrum-css/textfield@4.1.6)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="4.1.5"></a>
## 4.1.5
🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.3...@spectrum-css/textfield@4.1.5)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="4.1.4"></a>
## 4.1.4
🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.3...@spectrum-css/textfield@4.1.4)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="4.1.3"></a>
## 4.1.3
🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.2...@spectrum-css/textfield@4.1.3)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="4.1.2"></a>
## 4.1.2
🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.1...@spectrum-css/textfield@4.1.2)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="4.1.1"></a>
## 4.1.1
🗓 2023-03-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.1.0...@spectrum-css/textfield@4.1.1)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="4.1.0"></a>
# 4.1.0
🗓 2023-03-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.0.3...@spectrum-css/textfield@4.1.0)

### ✨ Features

* **textfield:** remove custom search icon styles ([cc72eca](https://github.com/adobe/spectrum-css/commit/cc72eca))





<a name="4.0.3"></a>
## 4.0.3
🗓 2023-03-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.0.2...@spectrum-css/textfield@4.0.3)

### 🐛 Bug fixes

* **textfield:** add search icon exception ([#1690](https://github.com/adobe/spectrum-css/issues/1690)) ([dcdec2d](https://github.com/adobe/spectrum-css/commit/dcdec2d))





<a name="4.0.2"></a>
## 4.0.2
🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.0.1...@spectrum-css/textfield@4.0.2)

### 🐛 Bug fixes

* **textfield:** quiet focus indicator on click ([#1685](https://github.com/adobe/spectrum-css/issues/1685)) ([51263fb](https://github.com/adobe/spectrum-css/commit/51263fb))





<a name="4.0.1"></a>
## 4.0.1
🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@4.0.0...@spectrum-css/textfield@4.0.1)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="4.0.0"></a>
# 4.0.0
🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.16...@spectrum-css/textfield@4.0.0)

* refactor(textfield)!: migrate spectrum tokens (#1544) ([1723f01](https://github.com/adobe/spectrum-css/commit/1723f01)), closes [#1544](https://github.com/adobe/spectrum-css/issues/1544)


### 🛑 BREAKING CHANGES

* migrates textfield to spectrum tokens

- Updates to latest tokens package
- WHCM added
- Focus state and dependency fixes
- Leveraging CSS grid for help text placement and character count
* removes placeholder from stepper inputs

* feat(stepper): add hideStepper control to fix border styling issue
* refactor(stepper): adding native pseudo class styles
* refactor(stepper): add support for invalid textfield styling





<a name="4.0.0-beta.7"></a>
# 4.0.0-beta.7
🗓 2023-03-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.16...@spectrum-css/textfield@4.0.0-beta.7)

### ✨ Features

* add TextArea story and grows control ([c5ba477](https://github.com/adobe/spectrum-css/commit/c5ba477))
* **textarea:** auto resize solution ([47e4ff6](https://github.com/adobe/spectrum-css/commit/47e4ff6))
* **textarea:** implemented tokens for text area ([d9cfec0](https://github.com/adobe/spectrum-css/commit/d9cfec0))
* **textarea:** quiet variant height WIP ([41cf1f6](https://github.com/adobe/spectrum-css/commit/41cf1f6))
* **textarea:** update text area yml ([882ddfd](https://github.com/adobe/spectrum-css/commit/882ddfd))
* **textarea:** wip token migration ([4a4ba7a](https://github.com/adobe/spectrum-css/commit/4a4ba7a))
* **textfield:** add aria markup for character count ([beed486](https://github.com/adobe/spectrum-css/commit/beed486))
* **textfield:** add default icon alignment for search icon ([e17cca4](https://github.com/adobe/spectrum-css/commit/e17cca4))
* **textfield:** corrections and markup updates ([c06e899](https://github.com/adobe/spectrum-css/commit/c06e899))
* **textfield:** final tokens populated ([a1a6d5b](https://github.com/adobe/spectrum-css/commit/a1a6d5b))
* **textfield:** focus and dependency corrections ([9a5ecab](https://github.com/adobe/spectrum-css/commit/9a5ecab))
* **textfield:** focus hover state ([ac96ce6](https://github.com/adobe/spectrum-css/commit/ac96ce6))
* **textfield:** focus indicator ([4c07923](https://github.com/adobe/spectrum-css/commit/4c07923))
* **textfield:** grid layout ([ba6b689](https://github.com/adobe/spectrum-css/commit/ba6b689))
* **textfield:** organizing variants ([68f9b5e](https://github.com/adobe/spectrum-css/commit/68f9b5e))
* **textfield:** refactor for readability of variants ([43014e9](https://github.com/adobe/spectrum-css/commit/43014e9))
* **textfield:** refinement of focus states ([0cec4c8](https://github.com/adobe/spectrum-css/commit/0cec4c8))
* **textfield:** reorganizing states and variants ([f440bf5](https://github.com/adobe/spectrum-css/commit/f440bf5))
* **textfield:** resolving errors ([9f53dc7](https://github.com/adobe/spectrum-css/commit/9f53dc7))
* **textfield:** rework focus states and nesting ([bca4ac2](https://github.com/adobe/spectrum-css/commit/bca4ac2))
* **textfield:** rework markup and focus indicator WIP ([142a7f9](https://github.com/adobe/spectrum-css/commit/142a7f9))
* **textfield:** token migration WIP ([3b67a12](https://github.com/adobe/spectrum-css/commit/3b67a12))
* **textfield:** WHCM and tidying ([fe3ac52](https://github.com/adobe/spectrum-css/commit/fe3ac52))
* **textfield:** WHCM setup WIP ([feb62af](https://github.com/adobe/spectrum-css/commit/feb62af))
* **textfield:** windows high contrast mode ([e30149c](https://github.com/adobe/spectrum-css/commit/e30149c))


### 🐛 Bug fixes

* **stepper, textfield:** revert use of has ([c26c64f](https://github.com/adobe/spectrum-css/commit/c26c64f))
* **textarea:** simplified multiline t-shirt styles and markup ([5e63c63](https://github.com/adobe/spectrum-css/commit/5e63c63))
* **textfield:** add spacing around label and character count ([65acf5c](https://github.com/adobe/spectrum-css/commit/65acf5c))
* **textfield:** add style to prevent search icon from breaking ([954125f](https://github.com/adobe/spectrum-css/commit/954125f))
* **textfield:** add width to input ([56d7c0e](https://github.com/adobe/spectrum-css/commit/56d7c0e))
* **textfield:** added missing WHCM refs to token stacks ([820ac89](https://github.com/adobe/spectrum-css/commit/820ac89))
* **textfield:** apply width to parent instead of input wrapper ([645127c](https://github.com/adobe/spectrum-css/commit/645127c))
* **textfield:** changed icon margins to inset ([957b42e](https://github.com/adobe/spectrum-css/commit/957b42e))
* **textfield:** cleanup placeholder tokens for clarity ([ee30c04](https://github.com/adobe/spectrum-css/commit/ee30c04))
* **textfield:** correct input patterns ([38a14cb](https://github.com/adobe/spectrum-css/commit/38a14cb))
* **textfield:** correct invisible focus indicator ([bbd6f57](https://github.com/adobe/spectrum-css/commit/bbd6f57))
* **textfield:** correct WHCM focus indicator reference ([ded46d4](https://github.com/adobe/spectrum-css/commit/ded46d4))
* **textfield:** default placeholder font size ([943d9d0](https://github.com/adobe/spectrum-css/commit/943d9d0))
* **textfield:** disabled safari value text color ([323f434](https://github.com/adobe/spectrum-css/commit/323f434))
* **textfield:** ensure long side label does not impact helptext ([fbce894](https://github.com/adobe/spectrum-css/commit/fbce894))
* **textfield:** ensure placeholder has correct font styles ([39a5ca7](https://github.com/adobe/spectrum-css/commit/39a5ca7))
* **textfield:** ensure stepper inherits correct border styles ([91b5dfa](https://github.com/adobe/spectrum-css/commit/91b5dfa))
* **textfield:** establish textfield animation token ([102d6af](https://github.com/adobe/spectrum-css/commit/102d6af))
* **textfield:** fix focus and grows for textfield and textarea ([6f02a4d](https://github.com/adobe/spectrum-css/commit/6f02a4d))
* **textfield:** fix issue with readonly styles not working ([740b1b1](https://github.com/adobe/spectrum-css/commit/740b1b1))
* **textfield:** fix storybook keyboard focused typo ([ba471d3](https://github.com/adobe/spectrum-css/commit/ba471d3))
* **textfield:** focus border invalid correction ([6ff801d](https://github.com/adobe/spectrum-css/commit/6ff801d))
* **textfield:** focus hover colors ([ffe9415](https://github.com/adobe/spectrum-css/commit/ffe9415))
* **textfield:** grid adjustments for label and character count ([1c6cc9e](https://github.com/adobe/spectrum-css/commit/1c6cc9e))
* **textfield:** icon class name ([3e5bad7](https://github.com/adobe/spectrum-css/commit/3e5bad7))
* **textfield:** icon color defaults ([3b21957](https://github.com/adobe/spectrum-css/commit/3b21957))
* **textfield:** mitigate search icon misalignment in swc ([a88e152](https://github.com/adobe/spectrum-css/commit/a88e152))
* **textfield:** mitigate validation icon within combobox ([d7fb96e](https://github.com/adobe/spectrum-css/commit/d7fb96e))
* **textfield:** mitigation of search icon alignment issues ([7adb664](https://github.com/adobe/spectrum-css/commit/7adb664))
* **textfield:** point placeholder font token to existing custom token ([bbc1b2c](https://github.com/adobe/spectrum-css/commit/bbc1b2c))
* **textfield:** quiet and quiet focus corrections ([c0a6bb8](https://github.com/adobe/spectrum-css/commit/c0a6bb8))
* **textfield:** quiet focus indicator position correction ([d0fff11](https://github.com/adobe/spectrum-css/commit/d0fff11))
* **textfield:** quiet textarea no resize ([e2782fa](https://github.com/adobe/spectrum-css/commit/e2782fa))
* **textfield:** refactor to avoid additional markup ([062019f](https://github.com/adobe/spectrum-css/commit/062019f))
* **textfield:** remove skin.css import from storyfile ([c268381](https://github.com/adobe/spectrum-css/commit/c268381))
* **textfield:** restored font placeholder tokens ([f59a3c0](https://github.com/adobe/spectrum-css/commit/f59a3c0))
* **textfield:** search icon align and text overflow ([f292fc8](https://github.com/adobe/spectrum-css/commit/f292fc8))
* **textfield:** textarea inherits resize ([86691cb](https://github.com/adobe/spectrum-css/commit/86691cb))
* **textfield:** tokens and express border ([160452a](https://github.com/adobe/spectrum-css/commit/160452a))
* **textfield:** update example text to match helptext ([ee9e4d2](https://github.com/adobe/spectrum-css/commit/ee9e4d2))
* **textfield:** update express border width per design update ([2b726b8](https://github.com/adobe/spectrum-css/commit/2b726b8))
* **textfield:** WHCM corrections ([df1577f](https://github.com/adobe/spectrum-css/commit/df1577f))
* **textfield:** WHCM corrections - focus states ([9a1d627](https://github.com/adobe/spectrum-css/commit/9a1d627))
* **textfield:** whcm decouple input color and placeholder text color ([8e16a5b](https://github.com/adobe/spectrum-css/commit/8e16a5b))


* feat(textfield)!: initial migration with placeholder tokens ([b8bb223](https://github.com/adobe/spectrum-css/commit/b8bb223))


### 🛑 BREAKING CHANGES

* migrates textfield to spectrum tokens





<a name="3.2.16"></a>
## 3.2.16
🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.15...@spectrum-css/textfield@3.2.16)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.2.15"></a>
## 3.2.15
🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.14...@spectrum-css/textfield@3.2.15)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.2.14"></a>
## 3.2.14
🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.13...@spectrum-css/textfield@3.2.14)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.2.13"></a>
## 3.2.13
🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.12...@spectrum-css/textfield@3.2.13)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.2.12"></a>
## 3.2.12
🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.11...@spectrum-css/textfield@3.2.12)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.2.11"></a>
## 3.2.11
🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.10...@spectrum-css/textfield@3.2.11)

### 🐛 Bug fixes

* **textfield,picker:** restore missing vars ([#1607](https://github.com/adobe/spectrum-css/issues/1607)) ([45f36f6](https://github.com/adobe/spectrum-css/commit/45f36f6))





<a name="3.2.10"></a>
## 3.2.10
🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.9...@spectrum-css/textfield@3.2.10)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.2.9"></a>
## 3.2.9
🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.8...@spectrum-css/textfield@3.2.9)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.2.8"></a>
## 3.2.8
🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.6...@spectrum-css/textfield@3.2.8)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.2.7"></a>
## 3.2.7
🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.6...@spectrum-css/textfield@3.2.7)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.2.6"></a>
## 3.2.6
🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.5...@spectrum-css/textfield@3.2.6)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.2.5"></a>
## 3.2.5
🗓 2022-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.4...@spectrum-css/textfield@3.2.5)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.2.4"></a>
## 3.2.4
🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.3...@spectrum-css/textfield@3.2.4)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.2.3"></a>
## 3.2.3
🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.2...@spectrum-css/textfield@3.2.3)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.2.2"></a>
## 3.2.2
🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.1...@spectrum-css/textfield@3.2.2)

### 🐛 Bug fixes

* textfield WHCM ([ef76b02](https://github.com/adobe/spectrum-css/commit/ef76b02))





<a name="3.2.1"></a>
## 3.2.1
🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.2.0...@spectrum-css/textfield@3.2.1)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.2.0"></a>
# 3.2.0
🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.10...@spectrum-css/textfield@3.2.0)

### ✨ Features

* **textfield:** add read-only state ([f7d0ac3](https://github.com/adobe/spectrum-css/commit/f7d0ac3))





<a name="3.1.10"></a>
## 3.1.10
🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.9...@spectrum-css/textfield@3.1.10)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.1.9"></a>
## 3.1.9
🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.8...@spectrum-css/textfield@3.1.9)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.1.8"></a>
## 3.1.8
🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.7...@spectrum-css/textfield@3.1.8)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.1.7"></a>
## 3.1.7
🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.6...@spectrum-css/textfield@3.1.7)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.1.6"></a>
## 3.1.6
🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.5...@spectrum-css/textfield@3.1.6)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.1.5"></a>
## 3.1.5
🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.4...@spectrum-css/textfield@3.1.5)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.1.4"></a>
## 3.1.4
🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.3...@spectrum-css/textfield@3.1.4)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.1.3"></a>
## 3.1.3
🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.1...@spectrum-css/textfield@3.1.3)

### 🐛 Bug fixes

* update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))





<a name="3.1.2"></a>
## 3.1.2
🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.2-beta.0...@spectrum-css/textfield@3.1.2)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.1.2-beta.0"></a>
## 3.1.2-beta.0
🗓 2021-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.1...@spectrum-css/textfield@3.1.2-beta.0)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.1.1"></a>
## 3.1.1
🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.1.0...@spectrum-css/textfield@3.1.1)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.1.0"></a>
# 3.1.0
🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.7...@spectrum-css/textfield@3.1.0)

### ✨ Features

* make textfield support a halo focus ring for Express ([d2c57b7](https://github.com/adobe/spectrum-css/commit/d2c57b7))





<a name="3.0.7"></a>
## 3.0.7
🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.6...@spectrum-css/textfield@3.0.7)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.0.6"></a>
## 3.0.6
🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.5...@spectrum-css/textfield@3.0.6)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.0.5"></a>
## 3.0.5
🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.3-alpha.5...@spectrum-css/textfield@3.0.5)

### 🐛 Bug fixes

* updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))
* used correct token for textfield quiet underline; closes [#1273](https://github.com/adobe/spectrum-css/issues/1273) ([17a21ef](https://github.com/adobe/spectrum-css/commit/17a21ef))





<a name="3.0.4"></a>
## 3.0.4
🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.3-alpha.5...@spectrum-css/textfield@3.0.4)

### 🐛 Bug fixes

* updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))
* used correct token for textfield quiet underline; closes [#1273](https://github.com/adobe/spectrum-css/issues/1273) ([17a21ef](https://github.com/adobe/spectrum-css/commit/17a21ef))





<a name="3.0.3"></a>
## 3.0.3
🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.3-alpha.5...@spectrum-css/textfield@3.0.3)

### 🐛 Bug fixes

* updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))





<a name="3.0.3-alpha.5"></a>
## 3.0.3-alpha.5
🗓 2021-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.3-alpha.4...@spectrum-css/textfield@3.0.3-alpha.5)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.0.3-alpha.4"></a>
## 3.0.3-alpha.4
🗓 2021-08-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.3-alpha.3...@spectrum-css/textfield@3.0.3-alpha.4)

### 🐛 Bug fixes

* removed placeholder token values, updated spectrum-tokens beta ([0d76eeb](https://github.com/adobe/spectrum-css/commit/0d76eeb))





<a name="3.0.3-alpha.3"></a>
## 3.0.3-alpha.3
🗓 2021-07-19 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.3-alpha.2...@spectrum-css/textfield@3.0.3-alpha.3)

### 🐛 Bug fixes

* missing validation icon ([613e849](https://github.com/adobe/spectrum-css/commit/613e849))





<a name="3.0.3-alpha.2"></a>
## 3.0.3-alpha.2
🗓 2021-06-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.3-alpha.1...@spectrum-css/textfield@3.0.3-alpha.2)

### 🐛 Bug fixes

* use renamed aliases ([91f6c04](https://github.com/adobe/spectrum-css/commit/91f6c04))
* **textfield:** prevent pointer-events on icons over the form element ([f900265](https://github.com/adobe/spectrum-css/commit/f900265))
* adjusted left padding in textinput ([47d38db](https://github.com/adobe/spectrum-css/commit/47d38db))
* picked the correct invalid icon color for disabled ([56fcb4c](https://github.com/adobe/spectrum-css/commit/56fcb4c))





<a name="3.0.3-alpha.1"></a>
## 3.0.3-alpha.1
🗓 2021-05-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.3-alpha.0...@spectrum-css/textfield@3.0.3-alpha.1)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.0.3-alpha.0"></a>
## 3.0.3-alpha.0
🗓 2021-04-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.2...@spectrum-css/textfield@3.0.3-alpha.0)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.0.2"></a>
## 3.0.2
🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.1...@spectrum-css/textfield@3.0.2)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.0.1"></a>
## 3.0.1
🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.0...@spectrum-css/textfield@3.0.1)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.0.0"></a>
# 3.0.0
🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.0-beta.6...@spectrum-css/textfield@3.0.0)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.0.0-beta.6"></a>
# 3.0.0-beta.6
🗓 2020-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.0-beta.5...@spectrum-css/textfield@3.0.0-beta.6)

### 🐛 Bug fixes

* correct quiet Textfield left padding ([0145378](https://github.com/adobe/spectrum-css/commit/0145378))
* correct Textarea padding ([8fb6ed2](https://github.com/adobe/spectrum-css/commit/8fb6ed2))
* make Textfield/Textarea work again ([a0ca861](https://github.com/adobe/spectrum-css/commit/a0ca861))
* remove Textfield padding hack ([51b4049](https://github.com/adobe/spectrum-css/commit/51b4049))
* update main, resolved conflicts ([d7880a2](https://github.com/adobe/spectrum-css/commit/d7880a2))





<a name="3.0.0-beta.5"></a>
# 3.0.0-beta.5
🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.0-beta.4...@spectrum-css/textfield@3.0.0-beta.5)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.0.0-beta.4"></a>
# 3.0.0-beta.4
🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.0-beta.3...@spectrum-css/textfield@3.0.0-beta.4)

### 🐛 Bug fixes

* adjusted textfield icon placement with updated tokens. closes [#860](https://github.com/adobe/spectrum-css/issues/860) ([03e2cde](https://github.com/adobe/spectrum-css/commit/03e2cde))
* wip ([32120c5](https://github.com/adobe/spectrum-css/commit/32120c5))
* wip fix more components ([b74dbb8](https://github.com/adobe/spectrum-css/commit/b74dbb8))





<a name="3.0.0-beta.3"></a>
# 3.0.0-beta.3
🗓 2020-05-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.0-beta.2...@spectrum-css/textfield@3.0.0-beta.3)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.0.0-beta.2"></a>
# 3.0.0-beta.2
🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.0-beta.1...@spectrum-css/textfield@3.0.0-beta.2)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="3.0.0-beta.1"></a>
# 3.0.0-beta.1
🗓 2020-03-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@3.0.0-beta.0...@spectrum-css/textfield@3.0.0-beta.1)

### ✨ Features

* refactor Textfield to be decorated, closes [#142](https://github.com/adobe/spectrum-css/issues/142) ([d34be59](https://github.com/adobe/spectrum-css/commit/d34be59))


### 🛑 BREAKING CHANGES

* remove support for .is-focused on .spectrum-Textfield-input
* remove support for .is-invalid/.is-valid on .spectrum-Textfield-input (must go on parent)
* remove support for .is-disabled on .spectrum-Textfield-input (must go on parent)
* markup changed completely, see migration guide

Co-authored-by: Daniel Lu <dlu@livefyre.com>





<a name="3.0.0-beta.0"></a>
# 3.0.0-beta.0
🗓 2020-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@2.0.6...@spectrum-css/textfield@3.0.0-beta.0)

### ✨ Features

* make Textfield support RTL ([b846aec](https://github.com/adobe/spectrum-css/commit/b846aec))





<a name="2.0.6"></a>
## 2.0.6
🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@2.0.5...@spectrum-css/textfield@2.0.6)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="2.0.5"></a>
## 2.0.5
🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@2.0.4...@spectrum-css/textfield@2.0.5)

### 🐛 Bug fixes

* alignment of icon in DecoratedTextfield and Textfield, closes [#494](https://github.com/adobe/spectrum-css/issues/494) ([#499](https://github.com/adobe/spectrum-css/issues/499)) ([dcf8587](https://github.com/adobe/spectrum-css/commit/dcf8587))





<a name="2.0.4"></a>
## 2.0.4
🗓 2020-01-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@2.0.3...@spectrum-css/textfield@2.0.4)

### 🐛 Bug fixes

* correct bottom padding to text alignment issues ([6e782ed](https://github.com/adobe/spectrum-css/commit/6e782ed))
* correct Textfield and Textarea padding, fixes [#454](https://github.com/adobe/spectrum-css/issues/454), fixes [#489](https://github.com/adobe/spectrum-css/issues/489) ([120e502](https://github.com/adobe/spectrum-css/commit/120e502))





<a name="2.0.3"></a>
## 2.0.3
🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@2.0.2...@spectrum-css/textfield@2.0.3)

### 🐛 Bug fixes

* disable resize functionality when disabled, fixes [#443](https://github.com/adobe/spectrum-css/issues/443) ([#446](https://github.com/adobe/spectrum-css/issues/446)) ([f069c00](https://github.com/adobe/spectrum-css/commit/f069c00))
* make quiet Text area 1 line tall by default, fixes [#442](https://github.com/adobe/spectrum-css/issues/442) ([#447](https://github.com/adobe/spectrum-css/issues/447)) ([be910e8](https://github.com/adobe/spectrum-css/commit/be910e8))





<a name="2.0.2"></a>
## 2.0.2
🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@2.0.1...@spectrum-css/textfield@2.0.2)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="2.0.1"></a>
## 2.0.1
🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/textfield@2.0.0...@spectrum-css/textfield@2.0.1)

**Note:** Version bump only for package @spectrum-css/textfield





<a name="2.0.0"></a>
# 2.0.0
🗓 2019-10-08

### ✨ Features

* move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)


### 🐛 Bug fixes

* use correct token for Textfield border-radius ([ca9c315](https://github.com/adobe/spectrum-css/commit/ca9c315))
