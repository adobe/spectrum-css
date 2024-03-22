import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ProgressBar",
	customClasses = [],
	items = [],
	label = "Storage Space",
	value,
	meterFill,
	size = "s",
	...globals
}) => html`${items.map(meter => {
	const {heading, meterFill} = meter;
	const meterSize = meter.size ?? size;
	const meterLabel = meter.label ?? label;

	return html`
	<p style="text-decoration: underline;">${heading}</p>
	<div
		class=${classMap({
			[rootClass]: true,
			["spectrum-Meter"]: true,
			[`spectrum-Meter--size${meterSize?.toUpperCase()}`]: meterSize,
			[`is-${meterFill}`]: meterFill !== "default",
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		style="margin-block-end: 2rem;"
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
	</div>
	`;
})}`;
