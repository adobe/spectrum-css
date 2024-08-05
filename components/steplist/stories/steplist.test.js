import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const SteplistGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Small",
			isSmall: false,
		},
		{
			testHeading: "Interactive",
			isInteractive: false,
		},
		{
			testHeading: "With tooltip",
			withTooltip: false,
		},
	],
});
