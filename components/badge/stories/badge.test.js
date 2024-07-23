import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { capitalize } from "lodash-es";
import { Template } from "./template";

const Badges = (args, context) => {
	return html`
		${Template(args, context)}
		${Template({ ...args, iconName: undefined }, context)}
		${Template({ ...args, label: undefined }, context)}
	`;
};

export const BadgeGroup = Variants({
	Template: Badges,
	sizeDirection: "row",
	testData: [
		...["neutral", "accent", "informative", "positive", "negative"].map((variant) =>
			({
				testHeading: capitalize(variant),
				wrapperStyles: {
					"column-gap": "10px",
				},
				variant,
			})
		),
		...["gray", "red", "orange", "yellow", "chartreuse", "celery", "green", "seafoam", "cyan", "blue", "indigo", "purple", "fuchsia", "magenta"].map((variant) =>
			({
				testHeading: capitalize(variant),
				wrapperStyles: {
					"column-gap": "10px",
				},
				variant,
			})
		),
		...["none", "fixed-inline-start", "fixed-inline-end", "fixed-block-start", "fixed-block-end"].map((fixed) =>
			({
				testHeading: `Layout ${fixed}`,
				wrapperStyles: {
					"column-gap": "10px",
				},
				size: "xl",
				variant: "informative",
				fixed,
			})
		),
		{
			testHeading: "Truncation",
			wrapperStyles: {
				"column-gap": "10px",
			},
			label: "24 days left in trial",
			customStyles: { "max-inline-size": "120px" },
		},
	],
});
