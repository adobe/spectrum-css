import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

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
		},
		{
			testHeading: "Image fit - cover",
			imageURL: "example-card-landscape.png",
			isCover: true,
		},
		{
			testHeading: "Image fit - landscape",
			imageURL: "example-card-landscape.png",
		},
		{
			testHeading: "Image fit - portrait",
			imageURL: "example-card-portrait.png",
		}
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		},
		{
			testHeading: "Focused",
			isFocused: true,
		},
		{
			testHeading: "Selected",
			isSelected: true,
			// Use the test heading as the key for which stories to apply this state to
			include: ["Layer"],
		},
		{
			testHeading: "Focused and selected",
			isFocused: true,
			isSelected: true,
			// Use the test heading as the key for which stories to apply this state to
			include: ["Layer"],
		}
	]
});
