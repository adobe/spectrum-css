import { getRandomId, Container } from "@spectrum-css/preview/decorators";
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
	borderStyle = "noBorder",
	containerWidth,
	items = [],
	customStyles = {},
	isDisabled =false, 
	isSelected = false,
	id = getRandomId("swatchgroup"),
} = {}, context = {}) => html`
	<div
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--${density}`]:
				typeof density !== "undefined" && density !== "regular",
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		style=${styleMap({
			"max-inline-size": ifDefined(containerWidth),
			...customStyles,
			size: `calc(${items.length} / 10 * 32px)`,
		})}
		id=${ifDefined(id)}
	>
		${items.map((swatch) => Swatch({
			size,
			rounding,
			isDisabled,
			isSelected,
			borderStyle,
			...swatch,
		}, context))}
	</div>
`;

/* Shows the rounding options for multiple swatchgroups. */
export const RoundingTemplate = (args, context) => Container({
	direction: "column",
	withBorder: false,
	content: html`
		${Container({
			withBorder: false,
			heading: "Full",
			containerStyles: {"gap": "8px",},
			content: Template({
				...args,
				rounding: "full",
			}, context)
		})}
		${Container({
			withBorder: false,
			heading: "Regular",
			containerStyles: {"gap": "8px",},
			content: Template({
				...args,
				rounding: "regular",
			}, context)
		})}
		${Container({
			withBorder: false,
			heading: "None",
			containerStyles: {"gap": "8px",},
			content: Template({
				...args,
				rounding: "none",
			}, context)
		})}
	`
});
