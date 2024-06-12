import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-FloatingActionButton",
	variant,
	id,
	iconName,
	customClasses = [],
	...globals
}, context) => html`
	<button
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--${variant}`]: variant !== undefined,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		id=${ifDefined(id)}
	>
		${Icon({
			...globals,
			iconName,
			customClasses: [`${rootClass}-icon`],
		}, context)}
	</button>
`;
