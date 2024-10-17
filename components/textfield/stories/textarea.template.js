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
		})}
		${Container({
			withBorder: false,
			heading: "Error message",
			content: Template({...args, isRequired: true, labelText: "Interests", value: "", helpText: "Enter at least one interest.", isInvalid: true }, context),
		})}
	`
});
