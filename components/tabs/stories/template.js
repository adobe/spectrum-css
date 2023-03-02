import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { repeat } from 'lit-html/directives/repeat.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import "../index.css";
import "../skin.css";

export const Template = ({
  rootClass = "spectrum-Tabs",
  customClasses = [],
  size = "m",
  orientation = "horizontal",
  density,
  isQuiet,
  isEmphasized,
  items,
  style = {
    "--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected": "#000",
    "width": "35px"
  },
  ...globals
}) => {
  return html`
    <div class=${classMap({
      [rootClass]: true,
      [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
      [`${rootClass}--${orientation}`]: typeof orientation !== "undefined",
      [`${rootClass}--quiet`]: isQuiet,
      [`${rootClass}--emphasized`]: isEmphasized,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}>
    ${repeat(items, (item) => item.id, (item) => {
      if (typeof item === "object") {
        return html`
          <div class=${classMap({
            [`${rootClass}-item`]: true,
            "is-selected": item.isSelected
          })} tabindex="0">
          <span class="${rootClass}-itemLabel">${item.label}</span>
          </div>
        `
      } else return item;
    })}
      <div class="${rootClass}-selectionIndicator" style=${ifDefined(styleMap(style))}></div>
    </div>
  `;
}
