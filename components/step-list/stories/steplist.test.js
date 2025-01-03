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
			isSmall: true,
		},
		{
			testHeading: "Interactive",
			isInteractive: true,
		},
		{
			testHeading: "With tooltip",
			withTooltip: true,
		},
	],
});
