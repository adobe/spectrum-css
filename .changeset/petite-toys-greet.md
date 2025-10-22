---
"@spectrum-css/table": major
---

### S2 table migration

Compared to the S1 table, this component has updated corner rounding, updated color tokens, some updated spacing, and an overall refreshed look.

#### Net-new features

- The S2 table supports an empty state, rendering an illustrated message component.
- As data is loading to the table, this component will render a progress circle during the loading state.
- There are 2 selection modes: single-select and multi-select. Multi-select tables (`selectionMode: "multiple"`) render an indeterminate checkbox in the `thead`/`div` equivalent. Single-select tables (`selectionMode: "single"`) do not render the indeterminate checkbox in the header row. (Note: the `selectionMode` arg is disabled and will not render in the Storybook control table.)
- For tables with sortable column, there are three new S2 icons used: `Sort` to indicate "general" sorting, `SortUp` for ascending sort direction, `SortDown` for descending sort direction.
- Tables support thumbnail, avatar, and icon components as content within a cell.
- Focus indicators for entire rows have been updated for rows to include a side focus indicator.

#### Description of other S2 table work

T-shirt sizing for tables is not technically supported, so t-shirt size classes (i.e. `.spectrum-Table--sizeS`), have been removed across all density variants.

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
