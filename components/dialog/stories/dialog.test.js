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

export const DialogFullscreen = (args, context) => {
	const { parameters: { showTestingGrid = false } = {} } = context;

	return Variants({
		Template: (args, context) => {
			return Template({
				...args,
				/*
				 * Custom styles were added to make sure the VRTs catch the rounded corners
				 */
				customStyles: {
					margin: showTestingGrid ? "16px" : undefined,
				},
			}, context);
		},
		withSizes: false,
		wrapperStyles: {
			"background-color": "var(--spectrum-gray-50)",
			...(showTestingGrid && { "inline-size": "100%" }), // Applies conditional styles based on showTestingGrid- forces the data-inner-container to be full width so the container query doesn't break.
		},
		containerStyles: {
			...(showTestingGrid && { "inline-size": "100%" }), // forces the data-outer-container to be full width so the container query doesn't break.
		},
		testData: [
			{
				showModal: false,
				layout: "fullscreen",
			},
		],
	})(args, context);
};

export const DialogFullscreenTakeover = (args, context) => {
	const { parameters: { showTestingGrid = false } = {} } = context;

	return Variants({
		Template,
		withSizes: false,
		wrapperStyles: {
			...(showTestingGrid && { "inline-size": "100%" }), // Applies conditional styles based on showTestingGrid- forces the data-inner-container to be full width so the container query doesn't break.
		},
		// Apply conditional styles based on showTestingGrid
		containerStyles: {
			...(showTestingGrid && { "inline-size": "100%" }), // forces the data-outer-container to be full width so the container query doesn't break.
		},
		testData: [
			{
				showModal: false,
				layout: "fullscreenTakeover",
			},
		],
	})(args, context);
};
