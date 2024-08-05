import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const ActionBarGroup = Variants({
	Template,
	skipBorders: true,
	testData: [
		{
			testHeading: "Default",
			customPopoverStyles: {
				// Prevent the popover from being rendered offscreen
				"--spectrum-popover-animation-distance": "-10px",
				"inline-size": "500px"
			}
		},
		{
			testHeading: "Emphasized",
			isEmphasized: true,
			customPopoverStyles: {
				// Prevent the popover from being rendered offscreen
				"--spectrum-popover-animation-distance": "-10px",
				"inline-size": "500px"
			}
		},
	],
	stateData: [
		// @todo these only work if rendered in an iframe
		// {
		// 	testHeading: "Sticky",
		// 	isSticky: true,
		// },
		// {
		// 	testHeading: "Fixed",
		// 	isFixed: true,
		// },
		// {
		// 	testHeading: "Flexible",
		// 	isFlexible: true,
		// },
	],
});
