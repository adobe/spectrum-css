import { html, nothing } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { repeat } from "lit/directives/repeat.js";

import { Template as Tooltip } from "@spectrum-css/tooltip/stories/template.js";

import "../index.css";

export const SteplistItem = ({
	rootClass,
	isSmall = false,
	isInteractive = false,
	withTooltip = false,
	label,
	ariaPosInSet = 1,
	ariaSetSize = 4,
	isComplete = false,
	isSelected = false,
	id,
}) => {
	const labelMarkup =
		!isSmall && !withTooltip && typeof label !== "undefined"
			? html`<span class="spectrum-Steplist-label">${label}</span>`
			: nothing;

	const markerContainer = html`
		<span class="${rootClass}-markerContainer">
			${withTooltip && !isSmall && typeof label !== "undefined"
				? Tooltip({
						label,
						isOpen: false,
						placement: "top",
						showOnHover: true,
				})
				: nothing}
			<span class="${rootClass}-marker"></span>
		</span>
	`;

	return html`
		<div
			class=${classMap({
				[`${rootClass}-item`]: true,
				"is-complete": isComplete,
				"is-selected": isSelected,
				"u-tooltip-showOnHover":
					withTooltip && !isSmall && typeof label != "undefined",
			})}
			id=${ifDefined(id)}
			role="listitem"
			aria-posinset=${ariaPosInSet}
			aria-setsize=${ariaSetSize}
			aria-label=${isSmall && !isInteractive ? ifDefined(label) : nothing}
		>
			${isInteractive
				? html` <a
						class=${classMap({
							[`${rootClass}-link`]: true,
							"is-complete": isComplete,
							"is-selected": isSelected,
						})}
						role="link"
						aria-label=${isSmall ? ifDefined(label) : nothing}
						tabindex=${isSelected ? "1" : "-1"}
				>
						${labelMarkup} ${markerContainer}
				  </a>`
				: html` ${labelMarkup} ${markerContainer}`}
			<span class="${rootClass}-segment"></span>
		</div>
	`;
};

export const Template = ({
	rootClass = "spectrum-Steplist",
	items,
	isSmall = false,
	isInteractive = false,
	withTooltip = false,
	id,
	customClasses = [],
}) => {
	if (!items || !items.length) return html``;

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--small`]: isSmall,
				[`${rootClass}--interactive`]: isInteractive,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			role="list"
		>
			${repeat(items, (args, idx) =>
				SteplistItem({
					rootClass: `${rootClass}`,
					isSmall,
					isInteractive,
					withTooltip,
					...args,
					ariaPosInSet: idx + 1,
					ariaSetSize: items.length,
				})
			)}
		</div>
	`;
};
