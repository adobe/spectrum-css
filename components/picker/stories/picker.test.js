import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { Template } from "./template.js";

export const PickerGroup = Variants({
	Template: (args, context) => html`<div>${Template(args, context)}</div>`,
	wrapperStyles: {
		"align-items": "flex-start",
		"min-block-size": "auto",
	},
	testData: [
		{
			testHeading: "Default, with placeholder",
		},
		{
			testHeading: "Default, with value and text overflow",
			currentValue: "The selected value of the picker, with long text the triggers the overflow behavior with ellipsis",
		},
		{
			testHeading: "Quiet",
			isQuiet: true,
		},
		{
			testHeading: "Side label",
			labelPosition: "side",
		},
		{
			testHeading: "Side label, alignment with switch",
			labelPosition: "side",
			withSwitch: true,
		},
		{
			testHeading: "With thumbnail icon",
			showWorkflowIcon: true,
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
			testHeading: "Open",
			isOpen: true,
			wrapperStyles: {
				"min-block-size": "225px",
			},
		},
		{
			testHeading: "Open + hover",
			isOpen: true,
			isHovered: true,
			wrapperStyles: {
				"min-block-size": "225px",
			},
		},
	],
});
