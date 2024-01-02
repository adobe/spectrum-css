import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import { capitalize, lowerCase, upperCase } from "lodash-es";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Divider",
	size = "m",
	tag = "hr",
	staticColor,
	vertical = false,
	customClasses = [],
}) => {
	const classes = {
		[rootClass]: true,
		[`${rootClass}--size${upperCase(size)}`]: typeof size !== "undefined",
		[`${rootClass}--vertical`]: vertical === true,
		[`${rootClass}--static${capitalize(lowerCase(staticColor))}`]:
			typeof staticColor !== "undefined",
		...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
	};

	const styles = vertical === true ? {
		minHeight: "20px",
		height: "auto",
		alignSelf: "stretch"
	} : {};

	return tag === "hr" ? html`<hr class=${classMap(classes)} style=${ifDefined(styleMap(styles))} role="separator" />` :
		html`<div class=${classMap(classes)} style=${ifDefined(styleMap(styles))} role="separator"></div>`;
};
