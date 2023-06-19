import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

import "@spectrum-css/colorhandle";

export const Template = ({
	rootClass = "spectrum-ColorHandle",
	customClasses = [],
	isDisabled = false,
	isFocused = false,
	colorHandleStyle = {
		"--spectrum-picked-color": "rgba(255, 0, 0, 0.5)",
	},
	// ...globals
}) => {
	return html`
  <div class=${classMap({
		[rootClass]: true,
		"is-disabled": isDisabled,
		"is-focused": !isDisabled && isFocused,
		...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
	})}
  style=${styleMap(colorHandleStyle)}>
      <div class="${rootClass}-inner"></div>
    </div>
  </div>
  `;
};
