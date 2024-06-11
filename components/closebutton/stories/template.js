import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { capitalize, lowerCase, upperCase } from "lodash-es";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-CloseButton",
	size = "m",
	label = "Close",
	staticColor,
	isDisabled = false,
	customClasses = [],
	id,
	onclick,
	...globals
}, context) => {
	return html`
		<button
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${upperCase(size)}`]: typeof size !== "undefined",
				[`${rootClass}--static${capitalize(lowerCase(staticColor))}`]:
					typeof staticColor !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			aria-label="close"
			id=${ifDefined(id)}
			label=${ifDefined(label)}
			?disabled=${isDisabled}
			@click=${onclick}
		>
			${Icon({
				...globals,
				size,
				iconName: "Cross",
				customClasses: [`${rootClass}-UIIcon`],
			}, context)}
		</button>
	`;
};
