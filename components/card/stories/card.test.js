import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const CardGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "No image",
			footer: undefined,
			image: undefined,
		},
		{
			testHeading: "Horizontal",
			description: "jpg",
			showAsset: "file",
			isHorizontal: true,
			hasActions: false,
			hasQuickAction: false,
			footer: undefined,
		},
		{
			testHeading: "Quiet",
			showAsset: "image",
			image: "example-ava@2x.png",
			isQuiet: true,
			footer: undefined,
		},
		{
			testHeading: "Quiet file",
			title: "FileName",
			description: "PDF",
			showAsset: "file",
			isQuiet: true,
			footer: undefined,
		},
		{
			testHeading: "Quiet folder",
			title: "Name",
			showAsset: "folder",
			description: "10/15/18",
			isQuiet: true,
			image: undefined,
			footer: undefined,
		},
		{
			testHeading: "Asset preview",
			showAsset: "image",
			image: "example-card-portrait.png",
			description: "jpg",
			hasActions: false,
			isCardAssetOverride: true,
			customStyles: {
				width: "200px",
			},
			footer: undefined,
		},
		{
			testHeading: "Gallery",
			showAsset: "image",
			image: "example-card-landscape.png",
			description: "jpg",
			isGallery: true,
			isCardAssetOverride: true,
			customStyles: {
				width: "700px",
			},
			footer: undefined,
		},
		{
			testHeading: "Text wrap",
			title: "Card title that is longer and should wrap",
			customStyles: { "max-inline-size": "205px" },
			footer: undefined,
			withStates: false,
		},
	],
	stateData: [
		{
			testHeading: "Selected",
			isSelected: true,
		},
		{
			testHeading: "Focused",
			isFocused: true,
		},
	]
});
