import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { capitalize, lowerCase, upperCase } from "lodash-es";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

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
}) => {
	let iconName = "Cross300";
	switch (size) {
		case "s":
			iconName = "Cross200";
			break;
		case "l":
			iconName = "Cross400";
			break;
		case "xl":
			iconName = "Cross500";
			break;
		default:
			iconName = "Cross300";
	}

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
				iconName,
				customClasses: [`${rootClass}-UIIcon`],
			})}
		</button>
	`;
};
