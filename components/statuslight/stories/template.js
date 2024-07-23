import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-StatusLight",
	size = "m",
	variant = "info",
	label,
	customStyles = {},
}) => html`
	<div
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--size${size?.toUpperCase()}`]:
				typeof size !== "undefined",
			[`${rootClass}--${variant}`]: typeof variant !== "undefined",
		})}
		style=${styleMap(customStyles)}
	>
		${label}
	</div>
`;

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
			customStyles: {"max-width": "150px"}
		}
	],
});
