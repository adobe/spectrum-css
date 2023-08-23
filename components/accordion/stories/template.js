import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { repeat } from "lit/directives/repeat.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index.css";

export const AccordionItem = ({
	heading,
	content,
	rootClass = "spectrum-Accordion-item",
	id,
	idx = 0,
	isDisabled = false,
	isOpen = false,
	iconSize = "m",
	disableAll = false,
	// customClasses = [],
	...globals
}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				"is-open": isOpen,
				"is-disabled": isDisabled || disableAll,
			})}
			id=${ifDefined(id)}
			role="presentation"
			@click=${(evt) => {
				if (isDisabled || !evt || !evt.target) return;
				const closest = evt.target.closest(`.${rootClass}`);
				if (!closest) return;
				closest.classList.toggle("is-open");
			}}
		>
			<!-- WAI-ARIA 1.1: Item header is a <button> wrapped within a <h3> element, rather than a <div> element with role="tab" -->
			<h3 class="${rootClass}Heading">
				<!-- WAI-ARIA 1.1: Item header <button> uses aria-expanded attribute to indicate expanded state. -->
				<button
					class="${rootClass}Header"
					type="button"
					?disabled=${isDisabled || disableAll}
					id="spectrum-accordion-item-${idx}-header"
					aria-controls="spectrum-accordion-item-${idx}-content"
					aria-expanded="${open ? "true" : "false"}"
				>
					${heading}
				</button>
				<span class="${rootClass}IconContainer">
					${Icon({
						iconName: "ChevronRight",
						size: iconSize,
						customClasses: [`${rootClass}Indicator`],
						...globals,
					})}
				</span>
			</h3>
			<!-- WAI-ARIA 1.1: Item content role changed from "tabpanel" to "region" -->
			<div
				class="${rootClass}Content"
				role="region"
				id="spectrum-accordion-item-${idx}-content"
				aria-labelledby="spectrum-accordion-item-${idx}-header"
			>
				${content}
			</div>
		</div>
	`;
};

export const Template = ({
	rootClass = "spectrum-Accordion",
	size = "m",
	density = "regular",
	items,
	id,
	customClasses = [],
	...globals
}) => {
	if (!items || !items.size) return html``;

	return html`
		<div
			class="${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--${density}`]:
					typeof density !== "undefined" && density !== "regular",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}"
			id=${ifDefined(id)}
			role="region"
		>
			${repeat(Array.from(items.keys()), (heading, idx) => {
				const item = items.get(heading);
				return AccordionItem({
					rootClass: `${rootClass}-item`,
					heading,
					idx,
					iconSize: `${size}`,
					...item,
					...globals,
				});
			})}
		</div>
	`;
};
