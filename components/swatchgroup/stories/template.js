import { getRandomId } from "@spectrum-css/preview/decorators";
import { Template as Swatch } from "@spectrum-css/swatch/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-SwatchGroup",
	customClasses = [],
	size = "m",
	density = "regular",
	rounding = "regular",
	items = [],
	customStyles = {},
	id = getRandomId("swatchgroup"),
} = {}, context = {}) => {
	const { globals = {} } = context;

	if (globals.context === "express") import("../themes/express.css");
	else if (globals.context === "legacy") import("../themes/spectrum.css");

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${density}`]:
					typeof density !== "undefined" && density !== "regular",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap({
				...customStyles,
				size: `calc(${items.length} / 10 * 32px)`,
			})}
			id=${ifDefined(id)}
		>
			${items.map((swatch) => Swatch({
				size,
				rounding,
				...swatch,
			}, context))}
		</div>
	`;
};
