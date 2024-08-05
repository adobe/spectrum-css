import { Variants } from "@spectrum-css/preview/decorators";
import { capitalize } from "lodash-es";
import { Template } from "./template.js";

export const PlacementVariants = Variants({
	Template,
	testData: [
		...["neutral", "info", "positive", "negative"].map(variant => ({
			testHeading: capitalize(variant),
			variant,
		})),
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
		].map(placement => ({
			testHeading: capitalize(placement.replace(/-/g, " ")),
			placement,
		})),
	],
	stateData: [{
		testHeading: "Focused",
		isFocused: true,
	}]
});
