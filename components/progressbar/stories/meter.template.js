import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ProgressBar",
	customClasses = [],
	customStyles = {},
	items = [],
	label = "Storage Space",
	value,
	meterFill = "default",
	size = "s",
}) => html`${items.map((meter) => {
	const meterSize = meter.size ?? size;
	const meterLabel = meter.label ?? label;
	const fill = meter.meterFill ?? meterFill;

	return html`
	${Typography({
		semantics: "heading",
		size: "xs",
		content: [meter.heading],
	})}
	<div
		class=${classMap({
			[rootClass]: true,
			["spectrum-Meter"]: true,
			[`spectrum-Meter--size${meterSize?.toUpperCase()}`]: meterSize,
			[`is-${fill}`]: fill !== "default",
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
			size: meterSize,
			label: meterLabel,
			alignment: "",
			customClasses: [`${rootClass}-label`],
		})}
		${FieldLabel({
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
