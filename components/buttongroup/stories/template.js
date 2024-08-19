import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum-two.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-ButtonGroup",
	customClasses = [],
	size = "m",
	items = [],
	vertical = false,
}) => html`
	<div
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--size${size?.toUpperCase()}`]:
				typeof size !== "undefined",
			[`${rootClass}--vertical`]: vertical,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
	>
		${items.map((item) =>
			Button({
				...item,
				size,
				customClasses: [`${rootClass}-item`],
			})
		)}
	</div>
`;
