import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

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
