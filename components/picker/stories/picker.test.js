import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const PickerGroup = Variants({
	Template,
	wrapperStyles: {
		"align-items": "flex-start",
		"min-block-size": "auto",
	},
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Explicit",
			variant: "explicit",
		},
		{
			testHeading: "Button",
			variant: "button",
		},
	],
	stateData: [
		{
			testHeading: "Open",
			isOpen: true,
			wrapperStyles: {
				"min-block-size": "250px",
			},
		}
	]
});
