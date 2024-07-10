import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-InfieldButton",
	customClasses = [],
	size = "m",
	position,
	isQuiet,
	iconName = "Add",
	isDisabled,
	isInvalid,
	isStacked,
	tabIndex = 0,
} = {}, context) => {
	return isStacked ? html`
    <button
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        [`${rootClass}--top`]: typeof position !== "undefined",
        [`${rootClass}--quiet`]: isQuiet,
        "is-invalid": isInvalid,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      ?disabled=${isDisabled}
      aria-haspopup="listbox"
      type="button"
      tabIndex=${tabIndex}
      aria-label="add"
    >
      <div class="${rootClass}-fill">
        ${Icon({
          size,
          iconName: "ChevronUp75",
          customClasses: [`${rootClass}-icon`],
        }, context)}
      </div>
    </button>
    <button
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        [`${rootClass}--bottom`]: typeof position !== "undefined",
        [`${rootClass}--quiet`]: isQuiet,
        "is-invalid": isInvalid,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      ?disabled=${isDisabled}
      aria-haspopup="listbox"
      type="button"
      tabIndex=${tabIndex}
      aria-label="add"
    >
      <div class="${rootClass}-fill">
        ${Icon({
          size,
          iconName: "ChevronDown75",
          customClasses: [`${rootClass}-icon`],
        }, context)}
      </div>
    </button>
  ` : html`
    <button
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        [`${rootClass}--${position}`]: typeof position !== "undefined",
        [`${rootClass}--quiet`]: isQuiet,
        "is-invalid": isInvalid,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      ?disabled=${isDisabled}
      aria-haspopup="listbox"
      type="button"
      tabIndex=${tabIndex}
    >
    <div class="${rootClass}-fill">
      ${when(iconName, () => Icon({
        size,
        iconName,
        customClasses: [`${rootClass}-icon`],
      }, context))}
    </div>
  </button>
  `;
};
