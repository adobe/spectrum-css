import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { Template as Switch } from "@spectrum-css/switch/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const AccordionItem = ({
	heading,
	content,
	rootClass = "spectrum-Accordion-item",
	id = getRandomId("accordion-item"),
	idx = 0,
	isDisabled = false,
	isOpen = false,
	isHovered = false,
	isActive = false,
	isFocused = false,
	hasActionButton = false,
	hasSwitch = false,
	actionButtonIconName = "",
	size = "m",
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
					class=${classMap({
						[`${rootClass}Header`]: true,
						"is-hover": isHovered,
						"is-active": isActive,
						"is-focus-visible": isFocused,
					})}
					type="button"
					?disabled=${isDisabled}
					id="spectrum-accordion-item-${idx}-header"
					aria-controls="spectrum-accordion-item-${idx}-content"
					aria-expanded="${open ? "true" : "false"}"
				>
					${Icon({
						iconName: (!isOpen ? "ChevronRight" : "ChevronDown") + ({
							s: "75",
							m: "100",
							l: "200",
							xl: "300",
						}[iconSize] || "100"),
						setName: "ui",
						size: iconSize,
						customClasses: [`${rootClass}Indicator`],
					}, context)}
					<span class="${rootClass}Title">${heading}</span>
				</button>
				${when(
					hasActionButton || hasSwitch,
					() =>
						html`
							<div class="${rootClass}DirectActions">
								${when(hasActionButton, () =>
									ActionButton({
										label: "", // icon-only
										isQuiet: true,
										customClasses: [`${rootClass}ActionButton`],
										iconName: actionButtonIconName || "Circle",
										isDisabled,
										size,
									}, context)
								)}
								${when(hasSwitch, () =>
									Switch({
										label: "",
										customClasses: [`${rootClass}Switch`],
										isDisabled,
										size
									}, context))}
							</div>
						`)}
			</h3>
			<!-- WAI-ARIA 1.1: Item content uses a role of "region" -->
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
	isQuiet = false,
	hasNoInlinePadding = false,
	items = [],
	id = getRandomId("accordion"),
	disableAll = false,
	collapseAll = false,
	hasActionButtons = false,
	actionButtonIconName = "",
	hasSwitches = false,
	customClasses = [],
	customStyles = {},
} = {}, context = {}) => {
	const { updateArgs } = context;

	return html`
		<div
			class="${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined" && size !== "m",
				[`${rootClass}--${density}`]:
					typeof density !== "undefined" && density !== "regular",
				[`${rootClass}--quiet`]: isQuiet,
				[`${rootClass}--noInlinePadding`]: hasNoInlinePadding,
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
					size,
					hasActionButton: item.hasActionButton || hasActionButtons,
					actionButtonIconName: item.actionButtonIconName || actionButtonIconName,
					hasSwitch: item.hasSwitch || hasSwitches,
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
