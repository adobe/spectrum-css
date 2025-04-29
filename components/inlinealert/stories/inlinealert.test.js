import { Variants } from "@spectrum-css/preview/decorators";
import { capitalize } from "lodash-es";
import { Template } from "./template.js";

export const InlineAlertGroup = Variants({
	Template,
	testData: [
		...["neutral", "info", "positive", "notice", "negative"].map((variant) => ({
			testHeading: capitalize(variant),
			variant,
			headerText: `${variant.charAt(0).toUpperCase() + variant.slice(1)} in-line alert header`
		})),
		{
			testHeading: "Truncation",
			variant: "info",
			headerText: "In-line alert header announcing something very long and in-line",
			text: "This is a very urgent alert with a lot of context, so the text has to wrap.",
			customStyles: {"max-width": "400px"}
		},
	],
	stateData: [
		{
			testHeading: "Closable",
			isClosable: true,
		},
		{
			testHeading: "Link",
			hasLink: true,
		},
		{
			testHeading: "Link + closable",
			isClosable: true,
			hasLink: true,
		},
		{
			testHeading: "Subtle",
			treatment: "subtle",
		},
		{
			testHeading: "Bold",
			treatment: "bold",
		},
		{
			testHeading: "Subtle + closable",
			treatment: "subtle",
			isClosable: true,
		},
		{
			testHeading: "Subtle + link + closable",
			treatment: "subtle",
			isClosable: true,
			hasLink: true,
		},
		{
			testHeading: "Bold + closable",
			treatment: "bold",
			isClosable: true,
		},
		{
			testHeading: "Subtle + link",
			treatment: "subtle",
			hasLink: true,
		},
		{
			testHeading: "Bold + link",
			treatment: "bold",
			hasLink: true,
		},
		{
			testHeading: "Bold + link + closable",
			treatment: "bold",
			isClosable: true,
			hasLink: true,
		},
	],
});
