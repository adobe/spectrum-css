import { Template as InfieldButton } from "@spectrum-css/infieldbutton/stories/template.js";
import { getRandomId, Variants } from "@spectrum-css/preview/decorators";
import { Template as Textfield } from "@spectrum-css/textfield/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

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
	id = getRandomId("stepper"),
	customClasses = [],
	customStyles = {},
} = {}, context = {}) => {
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
			style=${styleMap({
				"--mod-actionbutton-icon-size": "10px",
				...customStyles
			})}
		>
			${Textfield({
				size,
				type: "number",
				min: "-2",
				max: "2",
				step: "0.5",
				value: "0",
				isDisabled,
				isQuiet,
				id: id ? `${id}-input` : undefined,
				customClasses: [`${rootClass}-textfield`],
				customInputClasses: [`${rootClass}-input`],
			}, context)}
			${when(!hideStepper, () => html`
				<span class="${rootClass}-buttons">
					${InfieldButton({
						size,
						customClasses: [`${rootClass}-button`],
						iconName: `ChevronUp${iconSize}`,
						isDisabled,
						isQuiet,
						position: "top",
						tabIndex: "-1"
					}, context)}
					${InfieldButton({
						size,
						customClasses: [`${rootClass}-button`],
						iconName: `ChevronDown${iconSize}`,
						isDisabled,
						isQuiet,
						position: "bottom",
						tabIndex: "-1"
					}, context)}
				</span>
			`)}
		</div>
	`;
};

export const StepperGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Quiet",
			isQuiet: true,
		},
		{
			testHeading: "Hide stepper",
			hideStepper: true,
		},
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Focused",
			isFocused: true,
		},
		{
			testHeading: "Keyboard-focused",
			isKeyboardFocused: true,
		},
		{
			testHeading: "Invalid",
			isInvalid: true,
		},
		{
			testHeading: "Invalid + focused",
			isInvalid: true,
			isFocused: true,
		},
		{
			testHeading: "Invalid + keyboard-focused",
			isInvalid: true,
			isFocused: true,
		},
	]
});
