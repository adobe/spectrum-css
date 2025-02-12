import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-CoachIndicator",
	isQuiet = false,
	staticColor,
	customClasses = [],
	customStyles = {},
} = {}) => {
	return html`
		<div
			class=${classMap({
				[`${rootClass}`]: true,
				[`${rootClass}--quiet`]: isQuiet,
				[`${rootClass}--staticWhite`]: staticColor === "white",
				[`${rootClass}--staticBlack`]: staticColor === "black",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}
		>
			${Array.from({ length: 3 }).map(() => html`
				<div class=${classMap({ [`${rootClass}-ring`]: true })}></div>
			`)}
		</div>
	`;
};
