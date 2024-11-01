import { Container } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { Template as Textfield } from "./template";

export const Template = ({
	customClasses = [],
	rootClass = "spectrum-Textfield",
	size = "m",
	multiline = true,
	...item
} = {}, context = {}) => Textfield({
	customClasses: [
		rootClass,
		typeof size !== "undefined" ? `${rootClass}--size${size.toUpperCase()}` : null,
		...customClasses
	],
	size,
	multiline,
	...item
}, context );

export const HelpTextOptionsTextArea = (args, context) => Container({
	direction: "column",
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
	wrapperStyles: {
		rowGap: "12px",
	},
	content: html`
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Default",
			content: Template({...args, context})
		}, context)}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Invalid",
			content: Template({...args, isInvalid: true}, context)
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
			heading: "Invalid, focused",
			content: Template({...args, isInvalid: true, isFocused: true}, context)
		}, context)}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Keyboard-focused",
			content: Template({...args, isKeyboardFocused: true}, context)
		}, context)}
		${Container({
			withBorder: false,
			containerStyles: {
				"gap": "8px",
			},
			heading: "Invalid, keyboard-focused",
			content: Template({...args, isInvalid: true, isKeyboardFocused: true}, context)
		}, context)}
	`
}, context);
