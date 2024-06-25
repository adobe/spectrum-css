import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Well",
	customClasses = [],
	content = [],
} = {}, context) => html`
	<span
		class=${classMap({
			[rootClass]: true,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
	>
	${content.map((c) => (typeof c === "function" ? c({}, context) : c))}
	</span>
`;
