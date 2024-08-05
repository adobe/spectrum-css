import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ComboBoxGroup = Variants({
	Template,
	sizeDirection: "row",
	wrapperStyles: {
		"align-items": "flex-start",
	},
	testData: [
		{
			testHeading: "Default",
			isOpen: false,
		},
		{
			testHeading: "Quiet",
			isQuiet: true,
			isOpen: false,
		},
		{
			testHeading: "Open",
			isOpen: true,
		},
		{
			testHeading: "Quiet + open",
			isQuiet: true,
			isOpen: true,
		},
		{
			testHeading: "With field label top",
			showFieldLabel: true,
			isOpen: false,
			fieldLabelPosition: "top",
		},
		{
			testHeading: "With field label left",
			showFieldLabel: true,
			isOpen: false,
			fieldLabelPosition: "left",
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
	],
});
