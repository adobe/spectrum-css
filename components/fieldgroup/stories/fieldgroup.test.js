import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const FieldGroupSet = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Vertical checkboxes",
			inputType: "checkbox",
		},
		{
			testHeading: "Horizontal radios",
			layout: "horizontal",
		},
		{
			testHeading: "Horizontal checkboxes",
			layout: "horizontal",
			inputType: "checkbox",
		},
		{
			testHeading: "Radios label position: side",
			labelPosition: "side",
		},
		{
			testHeading: "Checkboxes label position: side",
			labelPosition: "side",
			inputType: "checkbox",
		},
		{
			testHeading: "Horizontal radios label position: side",
			labelPosition: "side",
			layout: "horizontal",
			inputType: "radio",
		},
		{
			testHeading: "Horizontal checkboxes label position: side",
			labelPosition: "side",
			layout: "horizontal",
			inputType: "checkbox",
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
			testHeading: "Required: asterisk",
			isRequired: true,
		},
		{
			testHeading: "Optional",
			helpText: "",
		},
	]
});
