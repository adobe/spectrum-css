import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const IllustratedMessageGroup = Variants({
	Template,
	testData: [{
	},
	{
		testHeading: "Horizontal layout",
		isHorizontal: true
	},
	{
		testHeading: "W/o button group",
		hasButtons: false
	},
	],
});
