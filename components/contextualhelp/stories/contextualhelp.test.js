import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ContextualHelpGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "With link",
			link: true,
		},
		{
			testHeading: "Help",
			iconName: "HelpCircle",
		},
	],
});
