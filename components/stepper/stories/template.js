import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as Textfield } from "@spectrum-css/textfield/stories/template.js";
import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";

import "../index.css";
import "../skin.css";

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
				placeholder: "1",
				min: "-2",
				max: "2",
				step: "0.5",
				isDisabled,
				isQuiet,
				customClasses: [`${rootClass}-textfield`],
				customInputClasses: [`${rootClass}-input`],
			})}
			${hideStepper
				? ""
				: html`<span class="${rootClass}-buttons">
						${ActionButton({
							...globals,
							size,
							customClasses: [`${rootClass}-stepUp`],
							iconName: `ChevronUp${iconSize}`,
							isDisabled,
							isQuiet,
						})}
						${ActionButton({
							...globals,
							size,
							customClasses: [`${rootClass}-stepDown`],
							iconName: `ChevronDown${iconSize}`,
							isDisabled,
							isQuiet,
						})}
				  </span>`}
		</div>
	`;
};
