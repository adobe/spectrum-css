import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const DatePickerGroup = Variants({
	Template,
	wrapperStyles: {
		"padding-right": "50px",
		"min-block-size": "360px",
		"min-inline-size": "310px",
		"align-items": "flex-start",
	},
	testData: [
		{
			testHeading: "Default",
			isOpen: true,
		},
		{
			testHeading: "Quiet",
			isQuiet: true,
			isOpen: true,
		},
		{
			testHeading: "Range",
			isRange: true,
			isOpen: true,
			lastDay: 3,
		}
	],
	stateData: [
		{
			testHeading: "Invalid",
			isInvalid: true,
		},
		{
			testHeading: "Disabled",
			isDisabled: true,
			wrapperStyles: {
				"min-block-size": "30px",
			}
		},
		{
			testHeading: "Required",
			isRequired: true,
		},
		{
			testHeading: "Read-only",
			isReadOnly: true,
			wrapperStyles: {
				"min-block-size": "30px",
			}
		}
	]
});
