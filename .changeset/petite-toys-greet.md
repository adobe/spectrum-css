---
"@spectrum-css/table": major
---

### S2 table migration

Compared to the S1 table, this component has updated corner rounding, updated color tokens, some updated spacing, and an overall refreshed look.

#### Net-new features

- The S2 table supports an empty state, rendering an illustrated message component.
- As data is loading to the table, this component will render a progress circle during the loading state.
- There are 2 selection modes: single-select and multi-select. Multi-select tables (`selectionMode: "multiple"`) render an indeterminate checkbox in the `thead`/`div` equivalent. Single-select tables (`selectionMode: "single"`) do not render the indeterminate checkbox in the header row.
- For tables with sortable column, there are three new S2 icons used: `Sort` to indicate "general" sorting, `SortUp` for ascending sort direction, `SortDown` for descending sort direction.
- Tables support thumbnail, avatar, and icon components as content within a cell.
- Focus indicators for entire rows have been updated for rows to include a side focus indicator.

#### Description of other S2 table work

T-shirt sizing for tables is not technically supported, so t-shirt size classes (i.e. `.spectrum-Table--sizeS`), has been removed across all density variants.

The `.spectrum-Table-cell--alignRight` class has been renamed to `.spectrum-Table-cell--alignEnd` to reflect the preference for "logical" positioning. The `.spectrum-Table-cell--alignCenter` class has been refactored to `.spectrum-Table-cell--alignStart`.

In S1, the CSS table component only supported thumbnails. Because the S2 table supports thumbnails, as well as avatars and icons, most of the language regarding thumbnails has also changed. For instance, the `showThumbnail` storybook arg was refactored to `visualElement`. The following CSS classes have been removed or refactored to remove the thumbnail language in favor of "visual" instead:

- `.spectrum-Table-thumbnailInner` >> `.spectrum-Table-visualInner`

- `.spectrum-Table-row--thumbnail` >> **removed**
- `.spectrum-Table-cell--thumbnail` >> **removed**
- `.spectrum-Table-thumbnailInner` >> **removed**
- `.spectrum-Table-thumbnailContent` >> **removed**
- `.spectrum-Table-thumbnailInner` >> **removed**

The drop zones have been refactored to approach the drop zone indicators as pseudo elements, as opposed to `outline` properties.

Because there are multiple sort icons in the S2 table, `.spectrum-Table-sortedIcon` has been renamed to `.spectrum-Table-sortIcon`.

Individual cell focus rings have rounded corners.

The outer table border extends all the way around the `thead`/`div` equivalent.

In Storybook, several new stories have been added to the docs page and the testing grid for Chromatic. These stories include `EmptyState`, `LoadingState`, `SingleSelect`, `NumericalData`, `TableStates`, `Sortable`. Documentation has been added for each of these stories, as well as expanded in other stories.

#### Mods

##### Renamed Modifiers

| Old Modifier                                       | New modifier                                      |
| -------------------------------------------------- | ------------------------------------------------- |
| `--mod-table-border-radius--quiet`                 | `--mod-table-border-radius-quiet`                 |
| `--mod-table-header-top-to-text`                   | `--mod-table-header-row-top-to-text`              |
| `--mod-table-header-bottom-to-text`                | `--mod-table-header-row-bottom-to-text`           |
| `--mod-table-cell-inline-space`                    | `--mod-table-cell-inline-spacing`                 |
| `--mod-table-checkbox-to-text`                     | `--mod-table-checkbox-to-cell-content`            |
| `--mod-table-header-background-color--quiet`       | `--mod-table-header-background-color-quiet`       |
| `--mod-table-header-bottom-to-text`                | `--mod-table-header-row-bottom-to-text`           |
| `--mod-table-header-top-to-text`                   | `--mod-table-header-row-top-to-text`              |
| `--mod-table-min-row-height--compact`              | `--mod-table-min-row-height-compact`              |
| `--mod-table-min-row-height--spacious`             | `--mod-table-min-row-height-spacious`             |
| `--mod-table-outer-border-inline-width--quiet`     | `--mod-table-outer-border-inline-width-quiet`     |
| `--mod-table-row-background-color--quiet`          | `--mod-table-row-background-color-quiet`          |
| `--mod-table-row-checkbox-block-spacing--compact`  | `--mod-table-row-checkbox-block-spacing-compact`  |
| `--mod-table-row-checkbox-block-spacing--spacious` | `--mod-table-row-checkbox-block-spacing-spacious` |
| `--mod-table-thumbnail-to-text`                    | `--mod-table-visual-to-text`                      |

##### New Modifiers

- `--mod-table-avatar-size`
- `--mod-table-avatar-size-compact`
- `--mod-table-avatar-size-spacious`
- `--mod-table-section-header-inline-start-spacing`
- `--mod-table-summary-row-bottom-to-text`
- `--mod-table-summary-row-min-height`
- `--mod-table-summary-row-top-to-text`

##### Removed Modifiers

- `--mod-table-edge-to-content`
- `--mod-table-header-row-checkbox-block-spacing`
- `--mod-table-avatar-size-spacious`
- `--mod-table-row-bottom-to-text--compact`
- `--mod-table-row-bottom-to-text--spacious`
- `--mod-table-row-top-to-text--compact`
- `--mod-table-row-top-to-text--spacious`
- `--mod-table-thumbnail-block-spacing"`
- `--mod-table-thumbnail-block-spacing-compact`
- `--mod-table-thumbnail-block-spacing-spacious`
