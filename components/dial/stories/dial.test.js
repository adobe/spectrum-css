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
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Focused",
			isFocusVisible: true,
		},
		{
			testHeading: "Dragged",
			isDragged: true,
		},
	],
});
