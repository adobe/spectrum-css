import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const PaginationGroup = Variants({
	Template,
	sizeDirection: "column",
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
	]
});
