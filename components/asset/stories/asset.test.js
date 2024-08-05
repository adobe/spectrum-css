import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const AssetGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Image preset",
		},
		{
			testHeading: "File preset",
			image: undefined,
			preset: "file",
			customStyles: {
				"min-inline-size": "150px",
			},
		},
		{
			testHeading: "Folder preset",
			image: undefined,
			preset: "folder",
			customStyles: {
				"min-inline-size": "150px",
			}
		},
	],
});
