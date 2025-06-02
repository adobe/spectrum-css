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
			testHeading: "Help text with label",
			showFieldLabel: true,
			helpText: "Choose a location. Add a new location by typing it in the field, then selecting 'Enter.'",
		},
		{
			testHeading: "With field label on the side",
			showFieldLabel: true,
			fieldLabelPosition: "side",
		},
		{
			testHeading: "Help text with label on the side",
			showFieldLabel: true,
			helpText: "Choose a location. Add a new location by typing it in the field, then selecting 'Enter.'",
			fieldLabelPosition: "side",
		},
		{
			testHeading: "Truncation",
			value: "United States of America and to the republic",
		},
		{
			testHeading: "Autocomplete",
			autocomplete: true,
		}
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
