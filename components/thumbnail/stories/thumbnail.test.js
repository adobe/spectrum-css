import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const ThumbnailGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default"
		},
		{
			testHeading: "Layer",
			isLayer: true,
			isSelected: false,
		},
		{
			testHeading: "With background",
			backgroundColor: "orange",
		}
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Selected",
			isSelected: true,
			// Use the test heading as the key for which stories to apply this state to
			include: ["Layer"],
		}
	]
});
