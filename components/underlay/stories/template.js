import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Underlay",
	customClasses = [],
	customStyles = {},
	content,
	isOpen = true,
}) => html`
  <div
    class=${classMap({
      [rootClass]: true,
      "is-open": isOpen,
      ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
    })}
    id="spectrum-underlay"
    style=${ifDefined(styleMap(customStyles))}
  >
    ${content}
  </div>
`;
