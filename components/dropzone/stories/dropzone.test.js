import { Template as Link } from "@spectrum-css/link/stories/template.js";
import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { Template } from "./template.js";

export const DropzoneGroup = Variants({
	Template,
	testData: [
		{},
		{
			testHeading: "Verbose example",
			heading: "Drag and drop your file to upload",
			description: [
				() => {
					return html`You can also ${Link({ url: "#", text: "select a file" })} from your computer.`;
				},
			],
			label: "Drag and drop to replace file upload",
		},
	],
	stateData: [
		{
			testHeading: "Dragged",
			isDragged: true,
		},
		{
			testHeading: "Drag with fill",
			isFilled: true,
			isDragged: true,
		},
	],
	withSizes: false,
});
