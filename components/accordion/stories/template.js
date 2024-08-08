import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const AccordionItem = ({
	heading,
	content,
	rootClass = "spectrum-Accordion-item",
	id = getRandomId("accordion-item"),
	idx = 0,
	isDisabled = false,
	isOpen = false,
	iconSize = "m",
	customStyles = {},
	customClasses = [],
	onclick,
} = {}, context = {}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				"is-open": isOpen && !isDisabled,
				"is-disabled": isDisabled,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			id=${ifDefined(id)}
			style=${styleMap(customStyles)}
			role="presentation"
			@click=${onclick}
		>
			<!-- WAI-ARIA 1.1: Item header is a <button> wrapped within a <h3> element, rather than a <div> element with role="tab" -->
			<h3 class="${rootClass}Heading">
				<!-- WAI-ARIA 1.1: Item header <button> uses aria-expanded attribute to indicate expanded state. -->
				<button
					class="${rootClass}Header"
					type="button"
					?disabled=${isDisabled}
					id="spectrum-accordion-item-${idx}-header"
					aria-controls="spectrum-accordion-item-${idx}-content"
					aria-expanded="${open ? "true" : "false"}"
				>
					${heading}
				</button>
				<span class="${rootClass}IconContainer">
					${Icon({
						iconName: !isOpen ? "ChevronRight" : "ChevronDown",
						setName: "ui",
						size: iconSize,
						customClasses: [`${rootClass}Indicator`],
					}, context)}
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
	items = [],
	id = getRandomId("accordion"),
	disableAll = false,
	collapseAll = false,
	customClasses = [],
	customStyles = {},
} = {}, context = {}) => {
	const { updateArgs } = context;

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
			style=${styleMap(customStyles)}
		>
			${repeat(Array.from(items.keys()), (heading, idx) => {
				const item = items.get(heading);
				return AccordionItem({
					...item,
					rootClass: `${rootClass}-item`,
					heading,
					idx,
					iconSize: `${size}`,
					isDisabled: item.isDisabled || disableAll,
					isOpen: collapseAll === true ? false : item.isOpen,
					onclick: function() {
						if (item.isDisabled) return;

						// Update the args
						const newItems = new Map(items);
						newItems.set(heading, {
							...item,
							isOpen: !item.isOpen,
						});
						updateArgs({ items: newItems });
					},
				}, context);
			})}
		</div>
	`;
};
