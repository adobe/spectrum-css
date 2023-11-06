import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "@spectrum-css/floatingactionbutton";

export const Template = ({
	rootClass = "spectrum-FloatingActionButton",
	variant,
	id,
	iconName,
	customClasses = [],
	testId,
}) => {
	return html`
		<button
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${variant}`]: variant !== undefined,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			data-testid=${ifDefined(testId)}
		>
			${Icon({

				iconName,
				customClasses: [`${rootClass}-icon`],
			})}
		</button>
	`;
};
