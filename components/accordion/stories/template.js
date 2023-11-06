import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "@spectrum-css/accordion";

export const Template = ({
	rootClass = "spectrum-Accordion",
	size = "m",
	density = "regular",
	items = [],
	disableAll = false,
	id,
	testId,
	customClasses = [],
}) => html`
	<div
		class="${classMap({
			[rootClass]: true,
			[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
			[`${rootClass}--${density}`]: typeof density !== "undefined" && density !== "regular",
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}"
		id=${ifDefined(id)}
		data-testid=${ifDefined(testId)}
		role="region"
	>
		${items.map((item, idx) => {
			return AccordionItem({
				rootClass: `${rootClass}-item`,
				idx,
				iconSize: size,
				...item,
				isDisabled: item.isDisabled || disableAll,
			});
		})}
	</div>
`;


export const AccordionItem = ({
	rootClass = "spectrum-Accordion-item",
	heading,
	content,
	id,
	idx = 0,
	isDisabled = false,
	isOpen = false,
	iconSize = "m",
}) => html`
	<div
		class=${classMap({
			[rootClass]: true,
			"is-open": isOpen,
			"is-disabled": isDisabled,
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
				?disabled=${isDisabled}
				id="spectrum-accordion-item-${idx}-header"
				aria-controls="spectrum-accordion-item-${idx}-content"
				aria-expanded=${isOpen ? "true" : "false"}
			>
				${heading}
			</button>
			<span class="${rootClass}IconContainer">
				${Icon({
					iconName: "ChevronRight",
					size: iconSize,
					customClasses: [`${rootClass}Indicator`],
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
