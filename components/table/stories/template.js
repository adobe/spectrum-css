import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-Table",
  size = "m",
  density = "standard",
  isQuiet = false,
  isEmphasized = true,
  customClasses = [],
  id,
  ...globals
}) => {
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
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}>
      <thead class="${rootClass}-head">
        <tr>
          <th
            class="${rootClass}-headCell is-sortable is-sorted-desc"
            aria-sort="descending"
            tabindex="0"
          >
            Column Title
            ${Icon({
              iconName: "ArrowDown100",
              size,
              customClasses: [`${rootClass}-sortedIcon`],
            })}
          </th>
          <th class="${rootClass}-headCell is-sortable" aria-sort="none">
            Column Title
            ${Icon({
              iconName: "ArrowDown100",
              size,
              customClasses: [`${rootClass}-sortedIcon`],
            })}
          </th>
          <th class="${rootClass}-headCell">Column Title</th>
        </tr>
      </thead>
      <tbody class="${rootClass}-body">
        <tr class="${rootClass}-row">
          <td class="${rootClass}-cell" tabindex="0">Row Item Alpha</td>
          <td class="${rootClass}-cell" tabindex="0">Row Item Alpha</td>
          <td class="${rootClass}-cell" tabindex="0">Row Item Alpha</td>
        </tr>
        <tr class="${rootClass}-row">
          <td class="${rootClass}-cell" tabindex="0">Row Item Bravo</td>
          <td class="${rootClass}-cell" tabindex="0">Row Item Bravo</td>
          <td class="${rootClass}-cell" tabindex="0">Row Item Bravo</td>
        </tr>
        <tr class="${rootClass}-row">
          <td class="${rootClass}-cell" tabindex="0">Row Item Charlie</td>
          <td class="${rootClass}-cell" tabindex="0">Row Item Charlie</td>
          <td class="${rootClass}-cell" tabindex="0">Row Item Charlie</td>
        </tr>
        <tr class="${rootClass}-row">
          <td class="${rootClass}-cell" tabindex="0">Row Item Delta</td>
          <td class="${rootClass}-cell" tabindex="0">Row Item Delta</td>
          <td class="${rootClass}-cell" tabindex="0">Row Item Delta</td>
        </tr>
        <tr class="${rootClass}-row">
          <td class="${rootClass}-cell" tabindex="0">Row Item Echo</td>
          <td class="${rootClass}-cell" tabindex="0">Row Item Echo</td>
          <td class="${rootClass}-cell" tabindex="0">Row Item Echo</td>
        </tr>
      </tbody>
    </table>
  `;
};

export const TableRowItem = (
  rootClass = "spectrum-Table",
  cellContent = "Row Item Text",
  showCheckbox = false,
  isSelected = false,
  isSummaryRow = false,
  isSectionHeader = false,
  tableIsEmphasized = true,
  size = "m",
) => {
  return html`
    <tr
      class=${classMap({
        [`${rootClass}-row`]: true,
        [`${rootClass}--summaryRow`]: isSummaryRow,
        [`${rootClass}--sectionHeader`]: isSectionHeader,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
    >
      ${showCheckbox ? html`
        <td class="spectrum-Table-cell spectrum-Table-checkboxCell">
          <label class="spectrum-Checkbox spectrum-Checkbox--sizeM spectrum-Checkbox--emphasized spectrum-Table-checkbox">
            <input type="checkbox" class="spectrum-Checkbox-input" title="Select">
            <span class="spectrum-Checkbox-box">
              <svg class="spectrum-Icon spectrum-UIIcon-Checkmark100 spectrum-Checkbox-checkmark" focusable="false" aria-hidden="true">
                <use xlink:href="#spectrum-css-icon-Checkmark100" />
              </svg>
            </span>
          </label>
        </td>`
      : ''}
      <td class="${rootClass}-cell" tabindex="0">${cellContent}</td>
      <td class="${rootClass}-cell" tabindex="0">${cellContent}</td>
      <td class="${rootClass}-cell" tabindex="0">${cellContent}</td>
    </tr>
  `;
}