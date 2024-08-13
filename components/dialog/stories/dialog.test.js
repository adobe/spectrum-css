import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const DialogGroup = Variants({
	Template,
	testData: [
		{
			showModal: false,
			wrapperStyles: {
				"background-color": "var(--spectrum-gray-50)"
			},
		},
		{
			testHeading: "Not dismissable",
			isDismissable: false,
			showModal: false,
			wrapperStyles: {
				"background-color": "var(--spectrum-gray-50)"
			},
		},
	],
});

export const DialogFullscreen = Variants({
	Template,
	testData: [
		{
			showModal: false,
			isFullScreen: true,
			wrapperStyles: {
				"background-color": "var(--spectrum-gray-100)"
			},
		},
	],
});

export const DialogFullscreenTakeover = Variants({
	Template,
	testData: [
		{
			showModal: false,
			isFullScreenTakeover: true,
			wrapperStyles: {
				"background-color": "var(--spectrum-gray-100)"
			},
		},
	],
});
