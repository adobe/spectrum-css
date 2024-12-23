import { getRandomId, renderContent } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

export const Template = ({
	rootClass = "spectrum-OpacityCheckerboard",
	backgroundPosition,
	customClasses = [],
	customStyles = {},
	id = getRandomId("opacity-checkerboard"),
	content = [],
	role,
} = {}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${ifDefined(styleMap({
				"--mod-opacity-checkerboard-position": backgroundPosition,
				...customStyles,
			}))}
			role=${ifDefined(role)}
			id=${ifDefined(id)}
		>
			${renderContent(content)}
		</div>
	`;
};
