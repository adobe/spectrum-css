import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const CardGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "No image",
			title: "Card title",
			description: "Optional description that should be one or two lines",
			footer: undefined,
			image: undefined,
		},
		{
			testHeading: "Horizontal",
			title: "Card title",
			description: "jpg",
			showAsset: "file",
			isQuiet: false,
			isHorizontal: true,
			hasActions: false,
			hasQuickAction: false,
			footer: undefined,
		},
		{
			testHeading: "Quiet",
			title: "Name",
			showAsset: "image",
			image: "example-ava@2x.png",
			description: "10/15/18",
			isQuiet: true,
			footer: undefined,
		},
		{
			testHeading: "Quiet file",
			title: "FileName",
			description: "PDF",
			showAsset: "file",
			image: undefined,
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
			title: "Card title",
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
			title: "Card title",
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
