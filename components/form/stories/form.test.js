import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const FormGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Side labels with left-aligned text",
			labelPosition: "side",
		},
		{
			testHeading: "Side labels with right-aligned text",
			labelPosition: "side",
			fieldLabelAlignment: "right",
		}
	],
});
