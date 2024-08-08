import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const DialGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "With label",
			label: "Volume",
			withStates: false,
		},
	],
	stateData: [
		{
			heading: "Disabled",
			isDisabled: true,
		},
		{
			heading: "Focused",
			isFocused: true,
		},
		{
			heading: "Dragged",
			isDragged: true,
		},
	],
});
