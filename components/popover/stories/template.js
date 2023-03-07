import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-Popover",
  size = "m",
  isOpen = true,
  withTip = false,
  position,
  customClasses = [],
  id,
  customStyles = {},
  content = [],
  ...globals
}) => {
  if (content.length === 0) {
    console.warn("Popover: No content provided.");
  }

  const { express } = globals;

  try {
    if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
    else import(/* webpackPrefetch: true */ "../themes/express.css");
  } catch (e) {
    console.warn(e);
  }

  return html`
    <div
      class=${classMap({
        [rootClass]: true,
        "is-open": isOpen,
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        [`${rootClass}--withTip`]: withTip,
        [`${rootClass}--${position}`]: typeof position !== "undefined",
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      style=${ifDefined(styleMap(customStyles))}
      role="presentation"
      id=${ifDefined(id)}>
      ${content.map(c => typeof c === 'function' ? c({}) : c)}
      ${withTip ?
        position && ['top', 'bottom'].some(e => position.startsWith(e)) ?
          html`<svg class="${rootClass}-tip" viewBox="0 -0.5 16 9" width="10"><path class="${rootClass}-tip-triangle" d="M-1,-1 8,8 17,-1"></svg>` :
          html`<svg class="${rootClass}-tip" viewBox="0 -0.5 9 16" width="10"><path class="${rootClass}-tip-triangle" d="M-1,-1 8,8 -1,17"></svg>` :
        ""}
    </div> `;
};
