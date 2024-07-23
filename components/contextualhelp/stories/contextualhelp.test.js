import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ContextualHelpGroup = Variants({
	Template,
	wrapperStyles: {
		"inline-size": "400px"
	},
	testData: [
		{
			testHeading: "Default",
			wrapperStyles: {
				"min-block-size": "170px",
				"align-items": "flex-start",
			},
			customStyles: {
				"max-inline-size": "275px",
			},
		},
		{
			testHeading: "With link",
			wrapperStyles: {
				"min-block-size": "210px",
				"align-items": "flex-start",
			},
			customStyles: {
				"max-inline-size": "275px",
			},
			link: {
				text: "Learn about permissions",
				url: "#",
			},
		},
	],
});
