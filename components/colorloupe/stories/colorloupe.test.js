import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const ColorLoupeGroup = Variants({
	Template,
	skipBorders: true,
	testData: [
		{
			testHeading: "Default",
			wrapperStyles: {
				"block-size": "100px",
			}
		},
		{
			testHeading: "Custom color",
			customStyles: {
				"--spectrum-picked-color": "teal",
			},
			wrapperStyles: {
				"block-size": "100px",
			}
		},
	],
	stateData: [
		// @todo there aren't any disabled styles
		// {
		// 	testHeading: "Disabled",
		// 	isDisabled: true,
		// },
	],
});
