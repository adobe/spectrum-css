import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const CloseButtonGroup = Variants({
	Template,
	stateDirection: "row",
	sizeDirection: "row",
	testData: [
		{
			testHeading: "Default",
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
			testHeading: "Keyboard-focused",
			isKeyboardFocused: true,
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
	]
});
