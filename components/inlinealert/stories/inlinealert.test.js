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
	],
});
