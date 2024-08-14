import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ClearButton",
	isDisabled = false,
	size = "m",
	isQuiet = false,
	staticColor,
	id = getRandomId("clearbutton"),
	customClasses = [],
	customStyles = {},
}, context) => html`
	<button
		type="reset"
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--size${size?.toUpperCase()}`]:
				typeof size !== "undefined",
			[`${rootClass}--quiet`]: isQuiet,
			[`${rootClass}--overBackground`]: staticColor === "white",
			"is-disabled": isDisabled,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		id=${ifDefined(id)}
		style=${styleMap(customStyles)}
		?disabled=${isDisabled}
	>
		<div class="${rootClass}-fill">
			${Icon({
				size,
				iconName: "Cross",
				customClasses: [`${rootClass}-icon`],
			}, context)}
		</div>
	</button>
`;

// TODO: refactor this SizingGroup to use the sizing decorator instead for standardized sizing story styles
export const SizingGroup = (args, context) => {
	// Color for heading that shows the name of the size. Adjustments for static white/over-background story,
	// which doesn't change with the color context.
	let headingColor = "var(--spectrum-seafoam-900)";
	if (context?.args?.staticColor == "white") { headingColor = "rgb(255, 255, 255)"; }

	return html`
		${["s", "m", "l", "xl"].map((size) => html`
			<div style=${styleMap({
				display: "flex",
				gap: "16px",
				flexDirection: "column",
				alignItems: "flex-start",
				})}
			>
			${Typography({
				semantics: "heading",
				size: "xs",
				content: [{
					s: "Small",
					m: "Medium (default)",
					l: "Large",
					xl: "Extra-large",
				}[size]],
				customClasses: ["chromatic-ignore"],
				customStyles: {
					"white-space": "nowrap",
					"--mod-heading-font-color": headingColor,
				},
			})}
			${Template({
					...args,
					size,
			}, context)}
		`)}
	`;
};
