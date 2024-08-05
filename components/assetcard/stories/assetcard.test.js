import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const AssetCardGroup = Variants({
	Template,
	testData: [{
		testHeading: "Portrait",
		title: "Portrait asset",
		content: ["Image"],
	},
	{
		testHeading: "Landscape",
		title: "Landscape asset",
		exampleImage: "landscape",
	},
	{
		testHeading: "Square asset",
		title: "Square asset",
		exampleImage: "square",
	},
	{
		testHeading: "Video asset",
		title: "MVI_0123.mp4",
		headerContent: "39:02",
		exampleImage: "square",
	},
	{
		testHeading: "With ordinal",
		title: "Ordered selection",
		selection: "ordered",
		exampleImage: "landscape",
	},
	{
		testHeading: "Highlighted selection",
		title: "Highlight selection",
		selection: "highlight",
	},
	{
		testHeading: "Drop target",
		title: "Drop target",
		selection: "highlight",
		isDropTarget: true,
	}],
	stateData: [{
		testHeading: "Selected",
		isSelected: true,
	}, {
		testHeading: "Focused",
		isFocused: true,
	}]
});
