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
