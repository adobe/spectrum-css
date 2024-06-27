import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { capitalize, lowerCase } from "lodash-es";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ProgressBar",
	customClasses = [],
	labelPosition,
	staticColor,
	customWidth,
	indeterminate,
	label,
	value,
	customStyles = {},
	size = "m",
}, context) => html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
				[`${rootClass}--${labelPosition}Label`]: typeof labelPosition !== "undefined",
				[`${rootClass}--static${capitalize(lowerCase(staticColor))}`]: typeof staticColor !== "undefined",
				[`${rootClass}--${indeterminate}`]: typeof indeterminate !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap({
				"width": customWidth,
				...customStyles,
			})}
			value="${value}%"
			role="progressbar"
			aria-valuenow="${value}%"
			aria-valuemin="0"
			aria-valuemax="100"
		>
			${FieldLabel({
				size,
				label,
				customClasses: [`${rootClass}-label`],
			}, context)}
			${FieldLabel({
				size,
				label: indeterminate ? "" : `${value}%`,
				customClasses: [`${rootClass}-percentage`],
			}, context)}
			<div class="${rootClass}-track">
				<div class="${rootClass}-fill" style="width: ${value}%;"></div>
			</div>
		</div>
`;

const Sizes = (args, context) => html`
  ${["s", "m", "l", "xl"].map((size) => html`
    <div>
			${Typography({
				semantics: "heading",
				size: "xs",
				content: [
					{
						xxs: "Extra-extra-small",
						xs: "Extra-small",
						s: "Small",
						m: "Medium",
						l: "Large",
						xl: "Extra-large",
						xxl: "Extra-extra-large",
					}[size],
				],
				customClasses: ["chromatic-ignore"],
			}, context)}
			${Template({ ...args, size }, context)}
		</div>
  `)}
`;

export const ProgressBarGroup = (args, context) => html`
	<div style=${styleMap({
		"display": window.isChromatic() ? "none" : "contents"
	})}>
		${Template(args, context)}
	</div>
	<div style=${styleMap({
		"display": window.isChromatic() ? "flex" : "none",
		"flex-direction": "column",
		"align-items": "flex-start",
		"gap": "32px",
	})}>
		<div style=${styleMap({
			"display": window.isChromatic() ? "flex" : "none",
			"flex-direction": "column",
			"align-items": "flex-start",
			"gap": "32px",
			"border": "1px solid var(--spectrum-gray-200)",
			"border-radius": "4px",
			"padding": "12px",
		})}>
			${Template(args, context)}
			<div>
				${Typography({
					semantics: "heading",
					size: "xs",
					content: ["Side label"],
					customClasses: ["chromatic-ignore"],
				}, context)}
				${Template({
					...args,
					labelPosition: "side",
				}, context)}
			</div>
			<div>
				${Typography({
					semantics: "heading",
					size: "xs",
					content: ["Custom width"],
					customClasses: ["chromatic-ignore"],
				}, context)}
				${Template({
					...args,
					customWidth: "225px",
				}, context)}
			</div>
			<div>
				${Typography({
					semantics: "heading",
					size: "xs",
					content: ["Indeterminate"],
					customClasses: ["chromatic-ignore"],
				}, context)}
				${Template({
					...args,
					indeterminate: "indeterminate",
				}, context)}
			</div>
		</div>
		<div>
			${Typography({
				semantics: "heading",
				size: "s",
				content: ["Sizing"],
				customClasses: ["chromatic-ignore"],
			}, context)}
			<div style=${styleMap({
				"display": window.isChromatic() ? "flex" : "none",
				"flex-direction": "column",
				"align-items": "flex-start",
				"gap": "32px",
				"border": "1px solid var(--spectrum-gray-200)",
				"border-radius": "4px",
				"padding": "12px",
			})}>
				${Sizes(args, context)}
			</div>
		</div>
	</div>
`;
