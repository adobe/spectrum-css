import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const DropIndicatorGroup = Variants({
	Template,
	skipBorders: true,
	testData: [
		{
			testHeading: "Horizontal",
			direction: "horizontal",
			wrapperStyles: {
				"padding-block": "10px",
			}
		},
		{
			testHeading: "Vertical",
			direction: "vertical",
			wrapperStyles: {
				"padding-inline": "10px",
			}
		},
	],
});
