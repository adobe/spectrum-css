import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ClearButton",
	isDisabled = false,
	size = "m",
	staticColor,
	id,
	customClasses = [],
	customStyles = {},
	...globals
}, context) => html`
	<button
		type="reset"
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--size${size?.toUpperCase()}`]:
				typeof size !== "undefined",
			[`${rootClass}--overBackground`]: staticColor === "white",
			"is-disabled": isDisabled,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		id=${ifDefined(id)}
		style=${ifDefined(styleMap(customStyles))}
		?disabled=${isDisabled}
	>
		<div class="${rootClass}-fill">
			${Icon({
				...globals,
				size,
				iconName: "Cross",
				customClasses: [`${rootClass}-icon`],
			}, context)}
		</div>
	</button>
`;
