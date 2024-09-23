import { Variants } from "@spectrum-css/preview/decorators";
import { Template } from "./template.js";

export const StatusLightGroup = Variants({
	Template,
	skipBorders: true,
	testData: [
		...["accent", "info", "positive", "negative", "notice", "neutral"].map((variant) => ({
			testHeading: variant.charAt(0).toUpperCase() + variant.slice(1),
			variant,
		})),
		...["gray", "red", "orange", "yellow", "chartreuse", "celery", "green", "seafoam", "cyan", "blue", "indigo", "purple", "fuchsia", "magenta"].map((variant) => ({
			testHeading: variant.charAt(0).toUpperCase() + variant.slice(1),
			variant,
		})),
		{
			testHeading: "Truncation",
			label: "Status light label that is long and wraps to the next line",
			customStyles: {"max-width": "150px"},
		}
	],
	stateData: [
		{
			testHeading: "Disabled",
			isDisabled: true,
		}
	]
});
