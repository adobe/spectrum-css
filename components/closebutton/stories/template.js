import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { capitalize, upperCase } from "lodash-es";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

export const Template = ({
	rootClass = "spectrum-CloseButton",
	size = "m",
	label = "Close",
	staticColor,
	isDisabled = false,
	isHovered = false,
	isFocused = false,
	customClasses = [],
	id = getRandomId("closebutton"),
	onclick,
} = {}, context = {}) => {
	return html`
		<button
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${upperCase(size)}`]: typeof size !== "undefined",
				[`${rootClass}--static${capitalize(staticColor)}`]: typeof staticColor !== "undefined",
				["is-hover"]: isHovered,
				["is-focus-visible"]: isFocused,
				["is-disabled"]: isDisabled,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			aria-label="close"
			id=${ifDefined(id)}
			label=${ifDefined(label)}
			?disabled=${isDisabled}
			@click=${onclick}
		>
			${Icon({
				size,
				iconName: "Cross",
				customClasses: [`${rootClass}-UIIcon`],
			}, context)}
		</button>
	`;
};
