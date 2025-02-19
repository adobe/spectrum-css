import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ContextualHelpGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Default",
			customStyles: {
				"inline-size": "275px",
				"margin-bottom": "170px",
			},
		},
		{
			testHeading: "Max-width popover",
			customStyles: {
				"inline-size": "275px",
				"margin-bottom": "275px",
				"--mod-spectrum-contextual-help-popover-maximum-width": "150px",
			},
		},
		{
			testHeading: "With link",
			customStyles: {
				"inline-size": "275px",
				"margin-bottom": "200px",
			},
			link: {
				text: "Learn about permissions",
				url: "#",
			},
		},
		{
			testHeading: "Help",
			iconName: "Help",
			customStyles: {
				"inline-size": "275px",
				"margin-bottom": "170px",
			},
		},
	],
});
