import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ColorHandle",
	customClasses = [],
	isDisabled = false,
	isFocused = false,
	customStyles = {
		"--spectrum-picked-color": "rgba(255, 0, 0, 0.5)",
	},
	...globals
}) => {

	return html `
		<div class=${classMap({
			[rootClass]: true,
			'is-disabled': isDisabled,
			'is-focused': isFocused,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
			?disabled=${isDisabled}
			?focused=${isFocused}
			style=${ifDefined(styleMap(customStyles))}>
				<div class="${rootClass}-inner"></div>
		</div>
	`
};
