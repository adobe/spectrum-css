import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const ContextualHelpGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
			customStyles: {
				"max-inline-size": "275px",
			},
		},
		{
			testHeading: "With link",
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
