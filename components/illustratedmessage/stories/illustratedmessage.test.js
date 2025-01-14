import { Template as Link } from "@spectrum-css/link/stories/template.js";
import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { Template } from "./template.js";

export const IllustratedMessageGroup = Variants({
	Template,
	testData: [{
	},
	{
		testHeading: "Horizontal layout",
		isHorizontal: true
	},
	{
		testHeading: "With link",
		title: "Drag and drop your file",
		description: [
			() => {
				return html`${Link({ url: "#", text: "Select a file" })} from your computer.`;
			},
		],
		hasButtons: false
	},
	{
		testHeading: "W/o button group",
		hasButtons: false
	},
	],
});
