import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as InfieldButton } from "@spectrum-css/infieldbutton/stories/template.js";
import { Template as HelpText } from "@spectrum-css/helptext/stories/template.js";
import { Template as Textfield } from "@spectrum-css/textfield/stories/template.js";
import { Container, getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Stepper",
	size = "m",
	displayLabel = true,
	label,
	labelPosition = "top",
	// isQuiet = false,
	isFocused = false,
	isHovered = false,
	isKeyboardFocused = false,
	isInvalid = false,
	isValid = false,
	isDisabled = false,
	hideStepper = false,
	helpText,
	id = getRandomId("stepper"),
	customClasses = [],
	customStyles = {},
} = {}, context = {}) => {

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
				[`${rootClass}--sideLabel`]: labelPosition === "side",
				"is-focused": isFocused,
				"is-hover": isHovered,
				"is-keyboardFocused": isKeyboardFocused,
				"is-invalid": isInvalid,
				"is-valid": isValid,
				"is-disabled": isDisabled,
				"hide-stepper": hideStepper,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			style=${styleMap({
				...customStyles
			})}
		>
			${when(displayLabel, () => html`
				${FieldLabel({
					size,
					label: label,
					labelPosition: labelPosition,
					isDisabled,
					customClasses: [`${rootClass}-fieldLabel`],
				}, context)}
			`)}
			<div class="${rootClass}-fieldContainer">
				<div class="${rootClass}-inputs">
					${Textfield({
						size,
						type: "number",
						min: "-2",
						max: "2",
						step: "0.5",
						value: "0",
						isValid,
						isInvalid,
						isFocused,
						isDisabled,
						displayLabel: false,
						id: id ? `${id}-input` : undefined,
						customClasses: [`${rootClass}-textfield`],
						customInputClasses: [`${rootClass}-input`],
					}, context)}
					${when(!hideStepper, () => html`
						<span class="${rootClass}-buttons">
							${InfieldButton({
								isInline: true,
								size,
								customClasses: [`${rootClass}-button`],
								isDisabled,
							}, context)}
						</span>
					`)}
				</div>
			</div>
			${when(helpText, () => html`
				<div class="${rootClass}-helpText">
					${HelpText({
						size,
						text: helpText,
						variant: isInvalid ? "negative" : undefined,
						hideIcon: true,
						isDisabled,
					}, context)}
				</div>
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
		}, context)}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Hovered",
			content: Template({...args, isHovered: true}, context)
		}, context)}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Focused",
			content: Template({...args, isFocused: true}, context)
		}, context)}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Focused, hovered",
			content: Template({...args, isHovered: true, isFocused: true}, context)
		}, context)}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Keyboard-focused",
			content: Template({...args, isKeyboardFocused: true}, context)
		}, context)}
	`
}, context);

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
		}, context)}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Hidden stepper buttons",
			content: Template({...args, hideStepper: true}, context)
		}, context)}
	`
}, context);
