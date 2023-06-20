import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import { Template as Button } from "@spectrum-css/button/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-SplitButton",
	customClasses = [],
	size = "m",
	variant = "cta",
	iconName = "ChevronDown100",
	position = "right",
	label = "Split Button",
	...globals
}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--left`]:
					typeof position !== "undefined" && position === "left",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
		>
			${Button({
				...globals,
				variant,
				size,
				iconName: position === "right" ? undefined : iconName,
				label: position === "right" ? label : undefined,
				hideLabel: position === "right" ? false : true,
				customClasses:
					position === "right"
						? ["spectrum-SplitButton-action"]
						: ["spectrum-SplitButton-trigger"],
			})}
			${Button({
				...globals,
				variant,
				size,
				iconName: position === "right" ? iconName : undefined,
				label: position === "right" ? undefined : label,
				hideLabel: position === "right" ? true : false,
				customClasses:
					position === "right"
						? ["spectrum-SplitButton-trigger"]
						: ["spectrum-SplitButton-action"],
			})}
		</div>
	`;
};
