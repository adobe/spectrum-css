import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const AlertBannerGroup = Variants({
	Template,
	stateDirection: "column",
	wrapperStyles: {
		"inline-size": "100%",
	},
	testData: [
		{
			testHeading: "Default (neutral)",
		},
		{
			testHeading: "Default, with wrapping text",
			text: "Your trial will expire in 3 days. Once it expires your files will be saved and ready for you to open again once you have purchased the software Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			testHeading: "Informative",
			variant: "info",
		},
		{
			testHeading: "Informative, with wrapping text",
			variant: "info",
			text: "Your trial will expire in 3 days. Once it expires your files will be saved and ready for you to open again once you have purchased the software Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			testHeading: "Negative",
			variant: "negative",
		},
		{
			testHeading: "Negative, with wrapping text",
			variant: "negative",
			text: "Your trial will expire in 3 days. Once it expires your files will be saved and ready for you to open again once you have purchased the software Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			testHeading: "Closed",
			isOpen: false,
		},
	],
	stateData: [
		{
			testHeading: "Action button only",
			showCloseButton: false,
			actionButtonText: "Take action",
			ignore: ["Closed"],
		},
		{
			testHeading: "Close button only",
			showCloseButton: true,
			actionButtonText: "",
			ignore: ["Closed"],
		},
		{
			testHeading: "Text only",
			showCloseButton: false,
			actionButtonText: "",
			ignore: ["Closed"],
		},
	],
});
