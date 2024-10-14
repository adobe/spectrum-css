import { ArgGrid, Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

const CloseButtons = (args, context) => ArgGrid({
	Template,
	argKey: "iconSize",
	withBorder: false,
	level: 4,
	labels: {
		"regular": "Default icon",
		"large": "Large icon",
	},
	...args,
}, context);

export const CloseButtonGroup = Variants({
	Template: CloseButtons,
	stateDirection: "row",
	sizeDirection: "row",
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Static black",
			staticColor: "black",
		},
		{
			testHeading: "Static white",
			staticColor: "white",
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
