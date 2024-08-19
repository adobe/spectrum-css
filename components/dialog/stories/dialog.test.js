import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const DialogGroup = Variants({
	Template: (args, context) => (
		/*
		 * This template forces each test case to showModal: false, and give a background 
		 * color to the dialog grid container when isChromatic() is true.
		 * This should ensure that the Sizes within the Variants() template to display correctly.
		 */
		window.isChromatic() ?
			Template({
				...args,
				showModal: false,

				// TODO: remove this heading arg when the "Sizing" heading is no longer overwritten by it.
				heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
				customStyles: {
					"background-color": "var(--spectrum-gray-100)",
				},
			}, context)
			: Template(args, context)
	),
	testData: [
		{
			wrapperStyles: {
				"background-color": "var(--spectrum-gray-50)"
			},
		},
		{
			testHeading: "Dismissible",
			isDismissible: true,
			wrapperStyles: {
				"background-color": "var(--spectrum-gray-50)"
			},
		},
		{
			testHeading: "With hero/cover image",
			hasHeroImage: true,
			wrapperStyles: {
				"background-color": "var(--spectrum-gray-50)"
			},
		},
		{
			testHeading: "No divider",
			isDismissible: true,
			hasDivider: false,
			wrapperStyles: {
				"background-color": "var(--spectrum-gray-50)"
			},
		},
	],
});

export const DialogFullscreen = Variants({
	Template,
	withSizes: false,
	testData: [
		{
			showModal: false,
			layout: "fullscreen",
			wrapperStyles: {
				"background-color": "var(--spectrum-gray-50)"
			},
		},
	],
});

export const DialogFullscreenTakeover = Variants({
	Template,
	withSizes: false,
	testData: [
		{
			showModal: false,
			layout: "fullscreenTakeover",
			wrapperStyles: {
				"background-color": "var(--spectrum-gray-50)"
			},
		},
	],
});

