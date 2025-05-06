import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ComboBoxGroup = Variants({
	Template,
	sizeDirection: "row",
	testData: [
		{
			testHeading: "Default",
			isOpen: false,
		},
		{
			testHeading: "Open",
			isOpen: true,
			wrapperStyles: {
				"min-block-size": "250px",
			},
		},
		{
			testHeading: "With field label top",
			showFieldLabel: true,
			isOpen: false,
			fieldLabelPosition: "top",
		},
		{
			testHeading: "With field label top + help text",
			showFieldLabel: true,
			isOpen: false,
			fieldLabelPosition: "top",
			showHelpText: true,
		},
		{
			testHeading: "With field label left",
			showFieldLabel: true,
			isOpen: false,
			fieldLabelPosition: "left",
		},
		{
			testHeading: "With field label left + help text ",
			showFieldLabel: true,
			isOpen: false,
			fieldLabelPosition: "left",
			showHelpText: true,
		},
		{
			testHeading: "Truncation",
			isOpen: false,
			value: "United States of America and to the republic",
		},
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Invalid",
			isInvalid: true,
		},
		{
			testHeading: "Focused",
			isFocused: true,
		},
		{
			testHeading: "Keyboard focused",
			isKeyboardFocused: true,
		},
		{
			testHeading: "Loading",
			isLoading: true,
		},
		{
			testHeading: "Read-only",
			isReadOnly: true
		},
	],
});
