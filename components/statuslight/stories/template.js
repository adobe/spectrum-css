import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";
import "../themes/express.css";
import "../themes/legacy.css";

export const Template = ({
	rootClass = "spectrum-StatusLight",
	size = "m",
	variant = "info",
	label,
	customStyles = {},
}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--${variant}`]: typeof variant !== "undefined",
			})}
			style=${ifDefined(styleMap(customStyles))}
		>
			${label}
		</div>
	`;
};
