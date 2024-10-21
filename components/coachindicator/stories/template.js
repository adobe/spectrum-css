import { Container } from "@spectrum-css/preview/decorators";
import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-CoachIndicator",
	isQuiet = false,
	staticColor,
	variant,
	customClasses = [],
	customStyles = {},
}) => html`
	<div
		class=${classMap({
			[`${rootClass}`]: true,
			[`${rootClass}--quiet`]: isQuiet,
			[`${rootClass}--${variant}`]: typeof variant !== "undefined" || variant !== "default",
			[`${rootClass}--overBackground`]: staticColor === "white",
			[`${rootClass}--staticWhite`]: staticColor === "white",
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		style=${styleMap(customStyles)}
	>
		${Array.from({ length: 3 }).map(() => html`
			<div class=${classMap({ [`${rootClass}-ring`]: true })}></div>
		`)}
	</div>
`;

/* This template group showcases multiple coach indicator variants at once. */
export const AllVariantsCoachIndicatorGroup = (args, context) => Container({
	withBorder: false,
	content: html`
		${Container({
			direction: "column",
			withBorder: false,
			heading: "Default",
			content: Template({ ...args, variant: "default" }, context)
		})}
		${Container({
			direction: "column",
			withBorder: false,
			heading: "Dark",
			content: Template({ ...args, variant: "dark" }, context)
		})}
		${Container({
			direction: "column",
			withBorder: false,
			heading: "Light",
			content: Template({ ...args, variant: "light" }, context)

		})}
	`
});


/* This template shows only the static white variant. */
export const StaticWhiteCoachIndicator = (args, context) => Container({
	withBorder: false,
	content: html`
		${Container({
			direction: "column",
			withBorder: false,
			content: Template({ ...args, variant: "staticWhite" }, context)
		})}
	`
});
