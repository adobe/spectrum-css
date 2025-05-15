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
			testHeading: "Invalid",
			isInvalid: true,
		},
		{
			testHeading: "Open",
			isOpen: true,
			wrapperStyles: {
				"min-block-size": "250px",
			},
		},
		{
			testHeading: "With field label on the side",
			showFieldLabel: true,
			isOpen: false,
			fieldLabelPosition: "side",
		},
		{
			testHeading: "Truncation",
			isOpen: false,
			value: "United States of America and to the republic",
		},
	],
	stateData: [
		{
			testHeading: "Hovered",
			isHovered: true,
		},
		{
			testHeading: "Focused",
			isFocused: true,
		},
		{
			testHeading: "Focused + Hovered",
			isFocused: true,
			isHovered: true,
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
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
	],
});
