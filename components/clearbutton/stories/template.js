import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import { capitalize, lowerCase } from "lodash-es";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ClearButton",
	isDisabled = false,
	size = "m",
	variant,
	id,
	customClasses = [],
	customStyles = {},
	staticColor,
}) => html`
	<button
		type="reset"
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--size${size?.toUpperCase()}`]:
				typeof size !== "undefined",
			[`${rootClass}--${variant}`]: typeof variant !== "undefined",
			[`${rootClass}--static${capitalize(lowerCase(staticColor))}`]: typeof staticColor !== "undefined",
			"is-disabled": isDisabled,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		id=${ifDefined(id)}
		style=${ifDefined(styleMap(customStyles))}
		?disabled=${isDisabled}
	>
		<div class="${rootClass}-fill">
			${Icon({
				size,
				iconName: "Cross",
				customClasses: [`${rootClass}-icon`],
			})}
		</div>
	</button>
`;
