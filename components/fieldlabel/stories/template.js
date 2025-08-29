import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { capitalize, lowerCase } from "lodash-es";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-FieldLabel",
	customClasses = [],
	customStyles = {},
	size = "m",
	label,
	id = getRandomId("field-label"),
	testId,
	forInput,
	alignment,
	isDisabled,
	isRequired,
	staticColor,
} = {}, context = {}) => {
	if (!label) {
		console.warn("FieldLabel: please provide a label for the field label.");
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

	const icon = Icon({ size, iconName, setName: "ui", customClasses: [`${rootClass}-UIIcon`, `${rootClass}-requiredIcon`] }, context);

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
			style=${styleMap(customStyles)}
			id=${ifDefined(id)}
			data-testid=${ifDefined(testId)}
			for=${ifDefined(forInput)}
		>
			${label?.trim()}${when(isRequired, () => html`&#8288;${icon}`)}
		</label>
	`;
};
