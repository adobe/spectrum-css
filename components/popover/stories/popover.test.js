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
			const popoverHeight = 142;
			const popoverWidth = 89;

			let wrapperStyles = {
				"justify-content": "center",
				// Makes sure that padding does not add to the min-block-size set through the use of the story's parameters.docs.story.height setting.
				"box-sizing": "border-box",
			};
			switch (position) {
				case "top":
				case "top-left":
				case "top-right":
				case "top-start":
				case "top-end":
					wrapperStyles["align-items"] = "end";
					wrapperStyles["inline-size"] = `${popoverWidth + 20}px`;
					wrapperStyles["padding-block-start"] = `${popoverHeight + 20}px`;
					break;
				case "bottom":
				case "bottom-left":
				case "bottom-right":
				case "bottom-start":
				case "bottom-end":
					wrapperStyles["align-items"] = "start";
					wrapperStyles["inline-size"] = `${popoverWidth + 20}px`;
					wrapperStyles["padding-block-end"] = `${popoverHeight + 20}px`;
					break;
				case "right":
					wrapperStyles["align-items"] = "center";
					wrapperStyles["block-size"] = `${popoverHeight + 20}px`;
					wrapperStyles["padding-right"] = `${popoverWidth + 20}px`;
					break;
				case "right-top":
					wrapperStyles["align-items"] = "start";
					wrapperStyles["block-size"] = `${popoverHeight + 20}px`;
					wrapperStyles["padding-right"] = `${popoverWidth + 20}px`;
					break;
				case "right-bottom":
					wrapperStyles["align-items"] = "end";
					wrapperStyles["block-size"] = `${popoverHeight + 20}px`;
					wrapperStyles["padding-right"] = `${popoverWidth + 20}px`;
					break;
				case "left":
					wrapperStyles["align-items"] = "center";
					wrapperStyles["block-size"] = `${popoverHeight + 20}px`;
					wrapperStyles["padding-left"] = `${popoverWidth + 20}px`;
					break;
				case "left-top":
					wrapperStyles["align-items"] = "start";
					wrapperStyles["block-size"] = `${popoverHeight + 20}px`;
					wrapperStyles["padding-left"] = `${popoverWidth + 20}px`;
					break;
				case "left-bottom":
					wrapperStyles["align-items"] = "end";
					wrapperStyles["block-size"] = `${popoverHeight + 20}px`;
					wrapperStyles["padding-left"] = `${popoverWidth + 20}px`;
					break;
				case "start":
					wrapperStyles["align-items"] = "center";
					wrapperStyles["block-size"] = `${popoverHeight + 20}px`;
					wrapperStyles["padding-inline-start"] = `${popoverWidth + 20}px`;
					break;
				case "start-top":
					wrapperStyles["align-items"] = "start";
					wrapperStyles["block-size"] = `${popoverHeight + 20}px`;
					wrapperStyles["padding-inline-start"] = `${popoverWidth + 20}px`;
					break;
				case "start-bottom":
					wrapperStyles["align-items"] = "end";
					wrapperStyles["block-size"] = `${popoverHeight + 20}px`;
					wrapperStyles["padding-inline-start"] = `${popoverWidth + 20}px`;
					break;
				case "end":
					wrapperStyles["align-items"] = "center";
					wrapperStyles["block-size"] = `${popoverHeight + 20}px`;
					wrapperStyles["padding-inline-end"] = `${popoverWidth + 20}px`;
					break;
				case "end-top":
					wrapperStyles["align-items"] = "start";
					wrapperStyles["block-size"] = `${popoverHeight + 20}px`;
					wrapperStyles["padding-inline-end"] = `${popoverWidth + 20}px`;
					break;
				case "end-bottom":
					wrapperStyles["align-items"] = "end";
					wrapperStyles["block-size"] = `${popoverHeight + 20}px`;
					wrapperStyles["padding-inline-end"] = `${popoverWidth + 20}px`;
					break;
			}

			return {
				testHeading: `Position: ${position}`,
				wrapperStyles,
				position,
				popoverHeight,
				popoverWidth,
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
					size: ["small"],
					isDismissable: false,
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
