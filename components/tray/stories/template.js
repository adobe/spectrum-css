import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";

import { Template as Modal } from '@spectrum-css/modal/stories/template.js';

import "../index.css";

export const Template = ({
  rootClass = "spectrum-Tray",
  isOpen = true,
  content = [],
  customClasses = ["spectrum-Modal"],
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
    <div class="${rootClass}-wrapper">
      <div
        class=${classMap({
          [rootClass]: true,
          "is-open": isOpen,
          ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
        })}
        id=${ifDefined(id)}>
        ${content.map((c) => {
          const { template, ...props } = c;
          return template({ ...props, ...globals });
        })}
      </div>
    </div>
  `;
};
