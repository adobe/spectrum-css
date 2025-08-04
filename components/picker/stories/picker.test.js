import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const PickerGroup = Variants({
	Template,
	wrapperStyles: {
		"align-items": "flex-start",
		"min-block-size": "225px",
	},
	testData: [
		{
			testHeading: "Default, with placeholder",
			isOpen: true,
		},
		{
			testHeading: "Quiet",
			isQuiet: true,
			isOpen: true,
		},
	],
	stateData: [
		{
			testHeading: "Hovered",
			isHovered: true,
		},
		{
			testHeading: "Active",
			isActive: true,
		},
		{
			testHeading: "Keyboard focused",
			isKeyboardFocused: true,
		},
		{
			testHeading: "Invalid",
			isInvalid: true,
		},
		{
			testHeading: "Invalid + hovered",
			isInvalid: true,
			isHovered: true,
		},
		{
			testHeading: "Loading",
			isLoading: true,
		},
		{
			testHeading: "Loading + hovered",
			isLoading: true,
			isHovered: true,
		},
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Disabled + hovered",
			isDisabled: true,
			isHovered: true,
		},
		{
			testHeading: "Disabled + invalid",
			isInvalid: true,
			isDisabled: true,
		},
		{
			testHeading: "Closed",
			isOpen: false,
			wrapperStyles: {
				"min-block-size": "auto",
			},
		},
		{
			testHeading: "Closed + hover",
			isOpen: false,
			isHovered: true,
			wrapperStyles: {
				"min-block-size": "auto",
			},
		},
	],
});

export const PickerGroupVariants = Variants({
	Template,
	wrapperStyles: {
		"align-items": "flex-start",
		"min-block-size": "225px",
	},
	testData: [
		{
			testHeading: "Default, with value and text overflow",
			currentValue: "The selected value of the picker, with long text the triggers the overflow behavior with ellipsis",
			isOpen: true,
		},
		{
			testHeading: "Side label",
			labelPosition: "side",
			isOpen: true,
		},
		{
			testHeading: "Side label, quiet",
			labelPosition: "side",
			isQuiet: true,
			isOpen: true,
		},
		{
			testHeading: "Side label, alignment with switch",
			labelPosition: "side",
			withSwitch: true,
			isOpen: true,
		},
		{
			testHeading: "With thumbnail icon",
			showWorkflowIcon: true,
			contentIconName: "Image",
			isOpen: true,
		},
	],
});
