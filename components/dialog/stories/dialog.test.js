import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const DialogGroup = Variants({
	Template: (args, context) => {
		const { parameters: { showTestingGrid = false } = {} } = context;
		/*
		 * This template forces each test case to showModal: false, and give a background
		 * color to the dialog grid container when isChromatic() is true.
		 * This should ensure that the Sizes within the Variants() template to display correctly.
		 */

		return Template({
			...args,
			showModal: showTestingGrid ? false : args.showModal,
			// TODO: The dialog's heading arg is getting passed as the "Sizing" heading arg (instead of the
			// TODO: word "Sizing"). We should be able to remove this arg once that no longers happens.
			heading: showTestingGrid ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit" : args.heading,
			customStyles: {
				...(args.customStyles ?? {}),
				"background-color": showTestingGrid ? "var(--spectrum-gray-100)" : undefined,
			},
		}, context);
	},
	sizeDirection: "column",
	containerStyles: {
		"background-color": "transparent",
	},
	wrapperStyles: {
		"border": "none",
		"background-color": "transparent",
		"padding": "0",
	},
	testData: [
		{
			testHeading: "Standard",
		},
		{
			testHeading: "Dismissible",
			isDismissible: true,
			hasFooter: false,
		},
		{
			testHeading: "With hero/cover image",
			hasHeroImage: true,
			heroImageUrl: "example-card-portrait.png",
		},
		{
			testHeading: "With hero/cover image, dismissible",
			hasHeroImage: true,
			heroImageUrl: "example-card-portrait.png",
			isDismissible: true,
			hasFooter: false,
		},
	],
});

export const DialogFullscreen = Variants({
	Template: (args, context) => {
		const { parameters: { showTestingGrid = false } = {} } = context;

		return Template({
			...args,
			/*
			 * Custom styles were added to make sure the VRTs catch the rounded corners
			 */
			customStyles: {
				margin: showTestingGrid ? "16px" : undefined,
				"background-color": showTestingGrid ? "var(--spectrum-gray-100)" : undefined,
			},
		}, context);
	},
	withSizes: false,
	wrapperStyles: {
		"background-color": "var(--spectrum-gray-50)"
	},
	testData: [
		{
			showModal: false,
			layout: "fullscreen",
		},
	],
});

export const DialogFullscreenTakeover = Variants({
	Template,
	withSizes: false,
	wrapperStyles: {
		"background-color": "var(--spectrum-gray-50)"
	},
	testData: [
		{
			showModal: false,
			layout: "fullscreenTakeover",
		},
	],
});
