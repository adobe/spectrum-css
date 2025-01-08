import { Template as Link } from "@spectrum-css/link/stories/template.js";
import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { SizingTemplate, Template } from "./template.js";

export const IllustratedMessageGroup = Variants({
	Template,
	testData: [{
		heading: "Error 404: Page not found",
		description: [
			"This page isn't available. Try checking the URL or visit a different page.",
		],
	},
	{
		testHeading: "Horizontal layout",
		isHorizontal: true
	},
	{
		testHeading: "With link",
		heading: "Drag and drop your file",
		description: [
			() => {
				return html`${Link({ url: "#", text: "Select a file" })} from your computer.`;
			},
		],
	},
	{
		testHeading: "W/o button group",
		hasButtons: false
	},
	{
		Template: SizingTemplate
	}
	],
	withSizes: false
});
