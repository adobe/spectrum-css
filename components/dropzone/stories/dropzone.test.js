import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const DropzoneGroup = Variants({
	Template,
	testData: [
		{},
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
});
