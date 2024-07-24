import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const ColorHandleGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
			wrapperStyles: {
				"inline-size": "50px",
				"block-size": "20px",
				"align-items": "flex-end",
				"justify-content": "center",
				"margin-block-end": "20px",
			},
		},
		{
			testHeading: "With color loupe",
			isWithColorLoupe: true,
			wrapperStyles: {
				"inline-size": "60px",
				"block-size": "120px",
				"align-items": "flex-end",
				"justify-content": "center",
			},
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
