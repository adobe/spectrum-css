import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const HelpTextGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Neutral",
			variant: "neutral",
		},
		{
			testHeading: "Negative",
			variant: "negative",
			text: "This is an example with wrapping text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			customStyles: { "max-width": "350px" },
		},
		{
			testHeading: "Negative with no icon",
			variant: "negative",
			hideIcon: true,
			text: "This is an example with wrapping text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			customStyles: { "max-width": "350px" },
		},
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
	],
});
