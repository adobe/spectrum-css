import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { capitalize, lowerCase } from "lodash-es";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-FieldLabel",
	customClasses = [],
	size = "m",
	label,
	id,
	forInput,
	alignment,
	isDisabled,
	isRequired,
	staticColor,
	style = {},
	...globals
}) => {
	if (!label) {
		console.warn("FieldLabel: please provide a label for the field label.");
		return html``;
	}

	let iconName = "Asterisk100";
	switch (size) {
	case "s":
		iconName = "Asterisk100";
		break;
	case "l":
		iconName = "Asterisk200";
		break;
	case "xl":
		iconName = "Asterisk300";
		break;
	default:
		iconName = "Asterisk100";
	}

	return html`
		<label
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--${alignment}`]: typeof alignment !== "undefined",
				[`${rootClass}--static${capitalize(lowerCase(staticColor))}`]: typeof staticColor !== "undefined",
				"is-disabled": isDisabled,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${ifDefined(styleMap(style))}
			id=${ifDefined(id)}
			for=${ifDefined(forInput)}
		>
			${label}${isRequired
				? Icon({
						...globals,
						size,
						iconName,
						customClasses: [`${rootClass}-UIIcon`, `${rootClass}-requiredIcon`],
					})
				: ""}
		</label>
	`;
};
