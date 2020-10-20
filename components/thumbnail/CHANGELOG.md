# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="1.0.0-beta.4"></a>
# 1.0.0-beta.4
🗓 2020-10-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/thumbnail@1.0.0-beta.3...@spectrum-css/thumbnail@1.0.0-beta.4)

**Note:** Version bump only for package @spectrum-css/thumbnail





<a name="1.0.0-beta.3"></a>
# 1.0.0-beta.3
🗓 2020-09-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/thumbnail@1.0.0-beta.2...@spectrum-css/thumbnail@1.0.0-beta.3)

**Note:** Version bump only for package @spectrum-css/thumbnail





<a name="1.0.0-beta.2"></a>
# 1.0.0-beta.2
🗓 2020-06-19

### 🐛 Bug fixes

* correct Treeview icon/text alignment ([#734](https://github.com/adobe/spectrum-css/issues/734)) ([e62419a](https://github.com/adobe/spectrum-css/commit/e62419a))


### 🛑 BREAKING CHANGES

* spectrum-Treeview-icon now required on all non-indicator icons

* feat: implement Quiet and Standalone Treeview

WIP: missing text/icon colors for selected items

fix: implement selected/hover states properly
* .is-drop-target and .is-selected must be placed on the .spectrum-TreeView-item element

* fix: focus states and selected border-width

* docs: make TreeView expand/collapse and selection behave right

* fix: correct naming of icon class

* fix: correct nesting of selected items, icon and text colors

* fix: focus behavior for selected TreeView items

* docs: single select TreeView items on click, multi-select if shift/cmd

* fix: quiet focus border for Treeview

* fix: correct alias references for temporary vars

* feat: add Thumbnail component

* feat: add layers variant to Treeview

* fix: change behavior for landscape images for consistency

show space above and below, fill horizontally

* feat: add background-style cropping for Thumbnails

* feat: support layering images on background in Thumbnail

* fix: properly contain selected/hover boxes

* feat: correct class naming and label truncation in TreeView items
* .spectrum-TreeView-indicator changed to .spectrum-TreeView-itemIndicator
* .spectrum-TreeView-icon changed to .spectrum-TreeView-itemIcon
* .spectrum-TreeView-label required for truncation behavior

* docs: correct widths of TreeView examples

* fix: correct selection behavior for Thumbnail Treeview

* fix: rename --layers to --thumbnail

* feat: implement t-shirt sizing for Thumbnail

* docs: re-organize TreeView docs, change Layers to Thumbnail

* test: add VRT scenario for new component Thumbnail

* docs: trivial fix, don't self-close <use>

* docs: fixup examples for standalone

* docs: add migration guide

Co-authored-by: Jian Liao <jianliao@adobe.com>
