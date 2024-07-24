import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const ButtonGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Vertical",
			vertical: true,
		},
	],
});
