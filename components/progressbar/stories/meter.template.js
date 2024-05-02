import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ProgressBar",
	customClasses = [],
	customStyles = {},
	headingStyles = {
		"text-decoration": "underline",
	},
	items = [],
	label = "Storage space",
	value,
	meterFill,
	size = "s",
	...globals
}) => html`${items.map((meter) => {
	const { heading } = meter;
	const meterSize = meter.size ?? size;
	const meterLabel = meter.label ?? label;
	const fill = meter.meterFill ?? meterFill;

	// @todo: Should the heading content render through typography?
	return html`
	<p style=${styleMap(headingStyles)}>${heading}</p>
	<div
		class=${classMap({
			[rootClass]: true,
			["spectrum-Meter"]: true,
			[`spectrum-Meter--size${meterSize?.toUpperCase()}`]: meterSize,
			[`is-${fill}`]: fill !== "default",
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		style=${styleMap({
			"margin-block-end": "32px",
			...customStyles,
		})}
		value="${value}%"
		role="progressbar"
		aria-valuenow="${value}%"
		aria-valuemin="0"
		aria-valuemax="100"
	>
		${FieldLabel({
			...globals,
			size: meterSize,
			label: meterLabel,
			alignment: "",
			customClasses: [`${rootClass}-label`],
		})}
		${FieldLabel({
			...globals,
			size: meterSize,
			label: `${value}%`,
			alignment: "",
			customClasses: [`${rootClass}-percentage`],
		})}
		<div class="${rootClass}-track">
			<div class="${rootClass}-fill" style="width: ${value}%;"></div>
		</div>
	</div>`;
})}`;
