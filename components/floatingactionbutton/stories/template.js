import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-FloatingActionButton",
	variant,
	id = getRandomId("floating"),
	iconName,
	isHovered = false,
	isFocused = false,
	isActive = false,
	customClasses = [],
	customStyles = {}
} = {}, context = {}) => {
	return html`
		<button
			class=${classMap({
				[rootClass]: true,
				"is-hover": isHovered,
				"is-focus-visible": isFocused,
				"is-active": isActive,
				[`${rootClass}--${variant}`]: variant !== undefined,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			style=${styleMap(customStyles)}
		>
			${Icon({
				iconName,
				customClasses: [`${rootClass}-icon`],
			}, context)}
		</button>
	`;
};
