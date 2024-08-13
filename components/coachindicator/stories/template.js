import { Container } from "@spectrum-css/preview/decorators";
import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum-two.css";
import "../themes/spectrum.css";

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
			[`${rootClass}--${variant}`]: typeof variant !== "undefined" || variant !== "default",
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

