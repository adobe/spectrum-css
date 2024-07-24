import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template";

export const AccordionGroup = Variants({
	Template,
	testData: [
		{
			testHeading: "Standard",
			customStyles: {
				maxInlineSize: "500px",
			},
		},
		{
			testHeading: "Compact",
			density: "compact",
			collapseAll: true,
			customStyles: {
				maxInlineSize: "500px",
			},
			withStates: false,
		},
		{
			testHeading: "Spacious",
			density: "spacious",
			collapseAll: true,
			customStyles: {
				maxInlineSize: "500px",
			},
			withStates: false,
		},
		{
			testHeading: "Text wrapping",
			collapseAll: true,
			customStyles: {
				maxInlineSize: "300px",
			},
			withStates: false,
		},
	],
	stateData: [
		{
			testHeading: "Disabled",
			disableAll: true,
		},
	],
});
