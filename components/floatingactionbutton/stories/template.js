import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import "../index.css";

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template = ({
	rootClass = "spectrum-FloatingActionButton",
	variant,
	id,
	iconName,
	customClasses = [],
	...globals
}) => html`
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
		})}
	</button>
`;
