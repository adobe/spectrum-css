import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const DialogGroup = Variants({
	Template: (args, context) => (
		/*
		 * This template forces each test case to showModal: false, and give a background 
		 * color to the dialog grid container when isChromatic() is true.
		 * This should ensure that the Sizes within the Variants() template to display correctly.
		 */

		Template({
			...args,
			showModal: window.isChromatic() ? false : args.showModal,
			// TODO: The dialog's heading arg is getting passed as the "Sizing" heading arg (instead of the 
			// TODO: word "Sizing"). We should be able to remove this arg once that no longers happens.
			heading: window.isChromatic() ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit" : args.heading,
			customStyles: {
				...(args.customStyles ?? {}),
				"background-color": window.isChromatic() ? "var(--spectrum-gray-100)" : undefined,
			},
		}, context)
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
			hasFooter: false,
			wrapperStyles: {
				"background-color": "var(--spectrum-gray-50)"
			},
		},
		{
			testHeading: "With hero/cover image",
			heroImageUrl: "example-card-portrait.png",
			wrapperStyles: {
				"background-color": "var(--spectrum-gray-50)"
			},
		},
		{
			testHeading: "With hero/cover image, dismissible",
			heroImageUrl: "example-card-portrait.png",
			isDismissible: true,
			hasFooter: false,
			wrapperStyles: {
				"background-color": "var(--spectrum-gray-50)"
			},
		},
		{
			testHeading: "No divider",
			hasDivider: false,
			wrapperStyles: {
				"background-color": "var(--spectrum-gray-50)"
			},
		},
		{
			testHeading: "No divider, dismissible",
			hasDivider: false,
			isDismissible: true,
			hasFooter: false,
			wrapperStyles: {
				"background-color": "var(--spectrum-gray-50)"
			},
		},
		{
			testHeading: "With hero/cover image, no divider",
			hasDivider: false,
			heroImageUrl: "example-card-portrait.png",
			wrapperStyles: {
				"background-color": "var(--spectrum-gray-50)"
			},
		},
		{
			testHeading: "With hero/cover image, no divider, dismissible",
			hasDivider: false,
			isDismissible: true,
			hasFooter: false,
			heroImageUrl: "example-card-portrait.png",
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

