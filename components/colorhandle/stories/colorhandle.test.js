import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ColorHandleGroup = Variants({
	Template,
	wrapperStyles: {
		"justify-content": "center",
	},
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "With color loupe",
			isWithColorLoupe: true,
		},
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
			isFocused: false,
		},
		{
			testHeading: "Focused",
			isDisabled: false,
			isFocused: true,
		},
	],
});
