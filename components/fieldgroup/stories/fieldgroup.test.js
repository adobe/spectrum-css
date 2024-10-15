import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const FieldGroupSet = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
			inputType: "radio",
		},
		{
			testHeading: "Vertical checkboxes",
			layout: "vertical",
			inputType: "checkbox",
			helpText: "Make a selection.",
		},
		{
			testHeading: "Horizontal radios",
			layout: "horizontal",
			inputType: "radio",
		},
		{
			testHeading: "Horizontal checkboxes",
			layout: "horizontal",
			inputType: "checkbox",
			helpText: "Make a selection.",
		},
		{
			testHeading: "Radios label position: side",
			label: "Pick one:",
			labelPosition: "side",
			inputType: "radio",
		},
		{
			testHeading: "Checkboxes label position: side",
			label: "Choose:",
			labelPosition: "side",
			inputType: "checkbox",
			helpText: "Make a selection.",
		},
	],
	stateData: [
		{
			testHeading: "Invalid",
			isInvalid: true,
		},
		{
			testHeading: "Read-only",
			isReadOnly: true,
		},
		{
			testHeading: "Required",
			isRequired: true,
		},
	]
});
