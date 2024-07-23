import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-CoachIndicator",
	isQuiet = false,
	variant,
	customClasses = [],
	customStyles = {},
}) => html`
	<div
		class=${classMap({
			[`${rootClass}`]: true,
			[`${rootClass}--quiet`]: isQuiet,
			[`${rootClass}--${variant}`]: typeof variant !== "undefined",
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		style=${styleMap(customStyles)}
	>
		${Array.from({ length: 3 }).map(() => html`
			<div class=${classMap({ [`${rootClass}-ring`]: true })}></div>
		`)}
	</div>
`;

export const CoachIndicatorGroup = Variants({
	Template,
	skipBorders: false,
	testData: [
		{
			testHeading: "Default",
		},
		{
			testHeading: "Dark",
			variant: "dark",
		},
		{
			testHeading: "Light",
			variant: "light",
		},
	],
	stateData: [
		{
			testHeading: "Quiet",
			isQuiet: true,
		},
	],
});
