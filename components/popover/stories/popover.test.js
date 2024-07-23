import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const PopoverGroup = Variants({
	Template,
	testData: [
		...[
			"top",
			"top-left",
			"top-right",
			"top-start",
			"top-end",
			"bottom",
			"bottom-left",
			"bottom-right",
			"bottom-start",
			"bottom-end",
			"right",
			"right-bottom",
			"right-top",
			"left",
			"left-bottom",
			"left-top",
			"start",
			"start-top",
			"start-bottom",
			"end",
			"end-top",
			"end-bottom",
		].map((position) => ({
			testHeading: `Position: ${position}`,
			position,
			trigger: undefined,
			wrapperStyles: {
				"inline-size": "200px",
				"block-size": "200px",
				"display": "flex",
				// Align button where the popover can fit next to it in the container
				"justify-content": "center",
				"align-items": "center",
			},
		})),
	],
	stateData: [
		{
			testHeading: "With tip",
			withTip: true,
		}
	]
});
