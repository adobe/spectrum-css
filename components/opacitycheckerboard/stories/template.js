import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-OpacityCheckerboard",
	backgroundPosition = "top left",
	customClasses = [],
	customStyles = {},
	id,
	content = [],
	role,
}) => html`
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
		${content}
	</div>`;
