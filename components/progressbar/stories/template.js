import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { capitalize, lowerCase } from "lodash-es";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ProgressBar",
	customClasses = [],
	labelPosition,
	staticColor,
	customWidth,
	isIndeterminate = false,
	label,
	trackFill,
	progressBarFill,
	value,
	customStyles = {},
	size = "m",
} = {}, context = {}) => html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
				[`${rootClass}--${labelPosition}Label`]: typeof labelPosition !== "undefined",
				[`${rootClass}--static${capitalize(lowerCase(staticColor))}`]: typeof staticColor !== "undefined",
				[`${rootClass}--indeterminate`]: isIndeterminate,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap({
				"width": customWidth,
				...customStyles,
			})}
			value=${ifDefined(value ? `${value}%` : undefined)}
			aria-valuenow=${ifDefined(value ? `${value}%` : undefined)}
			role="progressbar"
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
				label: isIndeterminate || typeof value === "undefined" ? "" : `${value}%`,
				customClasses: [`${rootClass}-percentage`],
			}, context)}

			<div
				class="${rootClass}-track"
				style="--mod-progressbar-track-color: ${staticColor !== "white" ? ifDefined(trackFill) : undefined}"
			>
				<div
					class="${rootClass}-fill"
					style=
						"width: ${value}%;
						${progressBarFill !== undefined
							? `--mod-progressbar-fill-color: ${progressBarFill}` 
							: undefined}"
				></div>
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

/* The gradient story below supports linear-gradients used by Express. For use cases that require a custom linear-gradient for any --mod-*-{fill} properties, set those custom properties in CSS. */
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
		 <div>
			${Typography({
				semantics: "heading",
				size: "s",
				content: ["Gradient support"],
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
				${Template({
					...args,
					trackFill: "linear-gradient(to right, hotpink, orange)",
					progressBarFill: "linear-gradient(to left, teal, purple)",
				}, context)}
			</div>
		</div>
	</div>
`;
