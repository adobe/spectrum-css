import { Template as InfieldButton } from "@spectrum-css/infieldbutton/stories/template.js";
import { Container, getRandomId } from "@spectrum-css/preview/decorators";
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
	isHovered = false,
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
				"is-hover": isHovered,
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

/* Shows all of the stepper states in one grouping. */
export const AllDefaultVariantsGroup = (args, context) => Container({
	withBorder: false,
	content: html`
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Default",
			content: Template(args, context)
		})}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Invalid",
			content: Template({...args, isInvalid: true}, context)
		})}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Hovered",
			content: Template({...args, isHovered: true}, context)
		})}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Focused",
			content: Template({...args, isFocused: true}, context)
		})}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Invalid, focused",
			content: Template({...args, isInvalid: true, isFocused: true}, context)
		})}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Keyboard-focused",
			content: Template({...args, isKeyboardFocused: true}, context)
		})}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Invalid, keyboard-focused",
			content: Template({...args, isInvalid: true, isKeyboardFocused: true}, context)
		})}
	`
});

/* Shows the disabled variants of the default and quiet stories one grouping. */
export const DisabledVariantsGroup = (args, context) => Container({
	withBorder: false,
	content: html`
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Default",
			content: Template(args, context)
		})}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Quiet",
			content: Template({...args, isQuiet: true}, context)
		})}
	`
});
