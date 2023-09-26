import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as Textfield } from "@spectrum-css/textfield/stories/template.js";
import { Template as InfieldButton } from "@spectrum-css/infieldbutton/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Stepper",
	size = "m",
	isQuiet = false,
	isFocused = false,
	isKeyboardFocused = false,
	isInvalid = false,
	isDisabled = false,
	hideStepper = false,
	customClasses = [],
	id,
	style = {
		"--mod-actionbutton-icon-size": "10px",
	},
	...globals
}) => {
	const { express } = globals;

	try {
		if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
		else import(/* webpackPrefetch: true */ "../themes/express.css");
	} catch (e) {
		console.warn(e);
	}

	let iconSize = "75";
	switch (size) {
		case "s":
			iconSize = "50";
			break;
		case "l":
			iconSize = "100";
			break;
		case "xl":
			iconSize = "200";
			break;
		default:
			iconSize = "75";
	}

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
				[`${rootClass}--quiet`]: isQuiet,
				"is-focused": isFocused,
				"is-keyboardFocused": isKeyboardFocused,
				"is-invalid": isInvalid,
				"is-disabled": isDisabled,
				"hide-stepper": hideStepper,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			style=${ifDefined(styleMap(style))}
		>
			${Textfield({
				...globals,
				size,
				type: "number",
				min: "-2",
				max: "2",
				step: "0.5",
				value: "0",
				isDisabled,
				isQuiet,
				customClasses: [`${rootClass}-textfield`],
				customInputClasses: [`${rootClass}-input`],
			})}
			${hideStepper
				? ""
				: html`<span class="${rootClass}-buttons">
						${InfieldButton({
							...globals,
							size,
							customClasses: [`${rootClass}-button`],
							iconName: `ChevronUp${iconSize}`,
							isDisabled,
							isQuiet,
							position: "top"
						})}
						${InfieldButton({
							...globals,
							size,
							customClasses: [`${rootClass}-button`],
							iconName: `ChevronDown${iconSize}`,
							isDisabled,
							isQuiet,
							position: "bottom"
						})}
				  </span>`}
		</div>
	`;
};
