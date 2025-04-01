import { Container } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { Template as Textfield } from "./template";

export const Template = ({
	customClasses = [],
	rootClass = "spectrum-Textfield--multiline",
	size = "m",
	multiline = true,
	...item
} = {}, context = {}) => Textfield({
	customClasses: [
		rootClass,
		...customClasses
	],
	size,
	multiline,
	...item
}, context );

export const HelpTextOptionsTextArea = (args, context) => Container({
	direction: "row",
	withBorder: false,
	withHeading: false,
	content: html`
		${Container({
			withBorder: false,
			heading: "Description",
			content: Template({...args, isRequired: true, labelText: "Interests", value: "", helpText: "Describe the interests you'd like to explore through our tutorials."}, context),
		}, context)}
		${Container({
			withBorder: false,
			heading: "Error message",
			content: Template({...args, isRequired: true, labelText: "Interests", value: "", helpText: "Enter at least one interest.", isInvalid: true }, context),
		}, context)}
	`
}, context);

export const TextAreaOptions = (args, context) => Container({
	direction: "row",
	withBorder: false,
	content: html`
		${Container({
			withBorder: false,
			heading: "Default",
			content: Template(args, context)
		}, context)}
		${Container({
			withBorder: false,
			heading: "Focused",
			content: Template({...args, isFocused: true}, context)
		}, context)}
		${Container({
			withBorder: false,
			heading: "Keyboard focused",
			content: Template({...args, isKeyboardFocused: true}, context)
		}, context)}
	`
}, context);

export const InvalidOptionsTextArea = (args, context) => Container({
	direction: "row",
	withBorder: false,
	withHeading: false,
	content: html`
		${Container({
			withBorder: false,
			heading: "Invalid",
			content: Template({...args, isInvalid: true}, context)
		}, context)}
		${Container({
			withBorder: false,
			heading: "Invalid, focused",
			content: Template({...args, isInvalid: true, isFocused: true}, context)
		}, context)}
	`
}, context);

export const RequiredOptionsTextArea = (args, context) => Container({
	direction: "row",
	withBorder: false,
	withHeading: false,
	content: html`
		${Container({
			withBorder: false,
			heading: "Required with (required) label",
			content: Template({...args, isRequired: true, isRequiredWithoutAsterisk: true, labelText: "Interests (Required)", value: "", helpText: "Describe the interests you'd like to explore through our tutorials."}, context),
		}, context)}
		${Container({
			withBorder: false,
			heading: "Required with asterisk",
			content: Template({...args, isRequired: true, labelText: "Interests", value: "", helpText: "Describe the interests you'd like to explore through our tutorials."}, context),
		}, context)}
		${Container({
			withBorder: false,
			heading: "Required with asterisk, side label",
			content: Template({...args, isRequired: true, labelPosition: "side", labelText: "Interests", value: "", helpText: "Describe the interests you'd like to explore through our tutorials."}, context),
		}, context)}
	`
}, context);
