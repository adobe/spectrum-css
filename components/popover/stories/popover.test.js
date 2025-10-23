import { Template as Dialog } from "@spectrum-css/dialog/stories/template.js";
import { Variants } from "@spectrum-css/preview/decorators";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
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
		].map((position) => {
			return {
				testHeading: `Position: ${position}`,
				position,
			};
		}),
		{
			testHeading: "Dialog style content",
			position: "bottom-start",
			wrapperStyles: {
				"inline-size": "500px",
				"block-size": "250px",
				"align-items": "start",
			},
			content: [
				(passthroughs, context) => Dialog({
					showModal: false,
					size: "s",
					isDismissible: false,
					heading: "Example heading",
					hasFooter: false,
					footer: [""],
					content: [
						() => Typography({
							semantics: "body",
							size: "m",
							content: [
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
							]
						}),
					],
					...passthroughs,
				}, context),
			],
		},
	],
	stateData: [
		{
			testHeading: "With tip",
			withTip: true,
		}
	]
});
