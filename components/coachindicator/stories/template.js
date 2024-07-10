import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-CoachIndicator",
	isQuiet = false,
	variant,
}) => {
	return html`
		<div
			class=${classMap({
				[`${rootClass}`]: true,
				[`${rootClass}--quiet`]: isQuiet,
				[`${rootClass}--${variant}`]: typeof variant !== "undefined",
			})}
		>
			${Array.from({ length: 3 }).map(() => html`
				<div class=${classMap({ [`${rootClass}-ring`]: true })}></div>
			`)}
		</div>
	`;
};

export const CoachIndicatorGroup = (args) => {
	return html`
		<div style=${styleMap({
			display: window.isChromatic() ? "none" : undefined,
		})}>
			${Template(args)}
		</div>
		<div style=${styleMap({
			display: window.isChromatic() ? "flex" : "none",
		})}>
			${Template(args)}
			${Template({
				...args,
				variant: "dark"
			})}
			${Template({
				...args,
				variant: "light"
				})}
		</div>
		<div style=${styleMap({
			display: window.isChromatic() ? "flex" : "none",
		})}>
			${Template({
				...args,
				isQuiet: true
			})}
			${Template({
				...args,
				variant: "dark",
				isQuiet: true
			})}
			${Template({
				...args,
				variant: "light",
				isQuiet: true
			})}
		</div>
	`;
};
