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
		].map((position) => {
			const popoverHeight = 142;
			const popoverWidth = 89;

			let wrapperStyles = {
				"justify-content": "center",
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
				withTestContainer: true,
				popoverHeight,
				popoverWidth,
			};
		}),
	],
	stateData: [
		{
			testHeading: "With tip",
			withTip: true,
		}
	]
});
