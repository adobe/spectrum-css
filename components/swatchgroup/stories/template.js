import { Template as Swatch } from "@spectrum-css/swatch/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
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
	isDisabled =false, 
	isSelected = false,
	id,
}, context) => html`
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
			isDisabled: isDisabled,
			isSelected: isSelected,
			...swatch,
		}, context))}
	</div>
`;

export const RoundingTemplate = (args, context) => html`
	<div style=${styleMap({
		"display": "flex",
		"flex-direction": "column",
		"gap": "16px",
	})}>
	${Template({
		...args,
		rounding: "full",
		items: [
			{swatchColor: "rgb(238, 211, 190)",},
			{swatchColor: "rgb(0, 143, 242)",},
			{swatchColor: "rgb(60, 49, 199)",},
			{swatchColor: "rgb(254, 71, 144)",},
		],
	}, context)}
	${Template({
		...args,
		rounding: "regular",
		items: [
			{swatchColor: "rgb(212, 182, 237)",},
			{swatchColor: "rgb(153, 219, 244)",},
			{swatchColor: "rgb(171, 238, 221)",},
			{swatchColor: "rgb(187, 182, 175)",},
		],
	}, context)}
	</div>
`;

export const SizingTemplate = (args, context) => html`
	${["xs", "s", "m", "l"].map((size => html`
		<div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: [
					{
						xs: "Extra-small",
						s: "Small",
						m: "Medium (default)",
						l: "Large",
					}[size]
				],
				customClasses: ["chromatic-ignore"],
			})}
			<div style="display: flex; gap: 8px; padding: 8px 0;">
				${Template({
					...args,
					size},
				context)}
			</div>
		</div>
	`))
	}
`;
