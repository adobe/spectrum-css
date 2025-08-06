import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const SearchGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "With help text",
			showHelpText: true,
			helpTextLabel: "Help text description goes here and just in case, let's also make it wrap."
		},
		{
			testHeading: "With input value and clear button",
			inputValue: "What should we search for?",
			withStates: false,
		},
		{
			testHeading: "Collapsed",
			isCollapsed: true,
		}
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Hovered",
			isHovered: true,
		},
		{
			testHeading: "Focused",
			isFocused: true,
			ignore: ["Collapsed"],
		},
		{
			testHeading: "Focused + hovered",
			isFocused: true,
			isHovered: true,
			ignore: ["Collapsed"],
		},
		{
			testHeading: "Keyboard focused",
			isKeyboardFocused: true,
			ignore: ["Collapsed"],
		},
	]
});
