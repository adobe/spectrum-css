import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const DividerGroup = Variants({
	Template,
	skipBorders: true,
	testData: [
		{
			testHeading: "Default",
			vertical: false,
			customStyles: {
				"min-inline-size": "200px",
			},
		},
		{
			testHeading: "Non-HR",
			tag: "div",
			customStyles: {
				"min-inline-size": "200px",
			},
		},
		{
			testHeading: "Vertical",
			vertical: true,
			customStyles: {
				"min-block-size": "100px",
			},
		}
	],
});
