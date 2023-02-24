import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { repeat } from "lit-html/directives/repeat.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import "../index.css";
import "../skin.css";

export const Item = ({
  rootClass,
  label,
  posinset = 1,
  setsize = 4,
  isComplete = false,
  isSelected = false,
  id,
  ...globals
}) => html`
    <div
      class=${classMap({
        [`${rootClass}-item`]: true,
        "is-complete": isComplete,
        "is-selected": isSelected,
      })}
      id=${ifDefined(id)}
      role="listitem"
      aria-posinset=${posinset}
      aria-setsize=${setsize}
      aria-label=${label}
    >
      <span class="${rootClass}-markerContainer">
        <span class="${rootClass}-marker"></span>
      </span>
      <span class="${rootClass}-segment"></span>
    </div>
  `;

export const Template = ({
  rootClass = "spectrum-Steplist",
  size = "m",
  id,
  customClasses = [],
  // ...globals
}) => {
  return html`
    <div
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      role="list">
      ${repeat(
        [
          { isComplete: true, label: "Step 1" },
          { isComplete: true, label: "Step 2" },
          { isSelected: true, label: "Step 3" },
          { label: "Step 4" },
        ],
        (args, idx) =>
          Item({ rootClass: `${rootClass}-item`, ...args, posinset: idx + 1 })
      )}
    </div>
  `;
};
