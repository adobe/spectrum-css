import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { when } from "lit-html/directives/when.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { repeat } from "lit-html/directives/repeat.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Checkbox } from '@spectrum-css/checkbox/stories/template.js';

import "../index.css";

export const TableRowItem = ({
  rootClass = "spectrum-Table",
  cellContent = "Row Item Text",
  showCheckbox = false,
  isSelected = false,
  isSummaryRow = false,
  isSectionHeader = false,
  tableIsEmphasized = true,
  customClasses = [],
  size = "m",
}) => {
  return html`
    <tr
      class=${classMap({
        [`${rootClass}-row`]: true,
        [`${rootClass}-row--summary`]: isSummaryRow,
        [`${rootClass}-row--sectionHeader`]: isSectionHeader,
        [`is-selected`]: isSelected,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {})
      })}
    >
      ${when(showCheckbox, () => html`
        <td class="spectrum-Table-cell spectrum-Table-checkboxCell">
          ${Checkbox({
            size,
            isEmphasized: tableIsEmphasized,
            isChecked: isSelected,
            customClasses: [`${rootClass}-checkbox`],
          })}
        </td>`
      )}
      <td class="${rootClass}-cell" tabindex="0" colspan=${ifDefined(isSectionHeader ? '3' : undefined)}>${cellContent}</td>
      ${when(!isSectionHeader, () => html`
        <td class="${rootClass}-cell" tabindex="0">${cellContent}</td>
        <td class="${rootClass}-cell" tabindex="0">${cellContent}</td>`
      )}
    </tr>
  `;
}

export const Template = ({
  rootClass = "spectrum-Table",
  size = "m",
  density = "standard",
  isQuiet = false,
  isEmphasized = true,
  rowItems = [],
  customClasses = [],
  id,
  ...globals
}) => {
  if (!rowItems || !rowItems.length) return html``;

  const { express } = globals;
  try {
    if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
    else import(/* webpackPrefetch: true */ "../themes/express.css");
  } catch (e) {
    console.warn(e);
  }

  return html`
    <table
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        [`${rootClass}--${density}`]: density !== "standard",
        [`${rootClass}--quiet`]: isQuiet,
        [`${rootClass}--emphasized`]: isEmphasized,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {})
      })}
      id=${ifDefined(id)}>
      <thead class="${rootClass}-head">
        <tr>
          ${when(rowItems.some(item => item.showCheckbox === true), () => html`
            <th class="spectrum-Table-headCell spectrum-Table-checkboxCell">
              ${Checkbox({
                size,
                isEmphasized: isEmphasized,
                isChecked: false,
                isIndeterminate: true,
                customClasses: [`${rootClass}-checkbox`],
              })}
            </th>`
          )}
          <th
            class="${rootClass}-headCell is-sortable is-sorted-desc"
            aria-sort="descending"
            tabindex="0"
          >
            ${Icon({
              iconName: "ArrowDown100",
              size,
              customClasses: [`${rootClass}-sortedIcon`],
            })}
            Column Title
          </th>
          <th class="${rootClass}-headCell is-sortable" aria-sort="none">
            ${Icon({
              iconName: "ArrowDown100",
              size,
              customClasses: [`${rootClass}-sortedIcon`],
            })}
            Column Title
          </th>
          <th class="${rootClass}-headCell">Column Title</th>
        </tr>
      </thead>
      <tbody class="${rootClass}-body">
        ${rowItems.map((item) =>
          TableRowItem({
            rootClass,
            size,
            tableIsEmphasized: isEmphasized,
            ...item
          })
        )}
      </tbody>
    </table>
  `;
};
