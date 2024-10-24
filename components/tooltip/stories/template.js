import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Container } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { capitalize } from "lodash-es";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

export const Template = ({
	rootClass = "spectrum-Tooltip",
	label,
	variant = "neutral",
	placement,
	isOpen = true,
	isFocused = false,
	showOnHover = false,
	customStyles = {},
	customClasses = [],
} = {}, context = {}) => {
	let variantIcon;
	if (variant === "info") {
		variantIcon = "Info";
	}
	else if (variant === "positive") {
		variantIcon = "CheckmarkCircle";
	}
	else if (variant === "negative") {
		variantIcon = "Alert";
	}

	if (showOnHover) {
		document.addEventListener("DOMContentLoaded", () => {
			[...document.querySelectorAll(`.${rootClass}`)].forEach(tooltip => {
				tooltip.parentElement?.classList.add("u-tooltip-showOnHover");
			});
		});
	}

	return html`
		<span
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${variant}`]:
					typeof variant !== "undefined" && variant !== "neutral",
				[`${rootClass}--${placement}`]: typeof placement !== "undefined",
				"is-open": isOpen,
				"is-focused": isFocused,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}
		>
			${when(variantIcon, () =>
				Icon({
					iconName: variantIcon,
					setName: "workflow",
					size: "m",
					customClasses: [`${rootClass}-typeIcon`],
				}, context)
			)}
			${when(label, () => html`
				<span class=${classMap({
					[`${rootClass}-label`]: true
				})}>
					${label}
				</span>
			`)}
			<span class=${classMap({
				[`${rootClass}-tip`]: true
			})}></span>
		</span>
	`;
};

const placements = [
	"top",
	"top-left",
	"top-right",
	"top-start",
	"top-end",
	"bottom",
	"bottom-left",
	"bottom-right",
	"bottom-start",
	"bottom-end",
	"right",
	"right-bottom",
	"right-top",
	"left",
	"left-bottom",
	"left-top",
	"start",
	"start-top",
	"start-bottom",
	"end",
	"end-top",
	"end-bottom",
];

export const TooltipShowOnHover = (args, context) => {
	const placementHeadings = ["top", "bottom", "right", "left", "start", "end"];
	return Container({
		withBorder: false,
		content: placementHeadings.map((heading) => html`
			${Container({
				heading,
				content: html`
					<div style="display: flex; flex-wrap: wrap;">
						${placements.map((placement) => 
								when(placement.startsWith(heading), () => html`
									<span class="u-tooltip-showOnHover" style="margin: 15px 50px; cursor: default;">
										${capitalize(placement.replace(/-/g, " "))}
										${Template({
											...args,
											context,
											placement,
										})}
									</span>
								`)
						)}
					</div>
				`
			})}
			`)
	});
};

export const TooltipPlacementGroup = (args, context) => Container({
	withBorder: false,
	content: placements.map((placement) => html`
		${Container({
			heading: capitalize(placement.replace(/-/g, " ")),
			content: html`
				${Template({
					...args,
					context,
					placement,
				})}
			`
		})}
	`)
});

// these variants no longer exist in s2
export const SemanticVariantGroup = (args, context) => {
	const variants = [
		"neutral",
		"info",
		"positive",
		"negative",
	];

	return Container({
		withBorder: false,
		content: variants.map((variant) => html`
			${Container({
				heading: capitalize(variant.replace(/-/g, " ")),
				content: html`
					${Template({
						...args,
						context,
						variant,
					})}
				`
			})}
		`)
	});
};
