import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { Template as Picker } from "@spectrum-css/picker/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Tabs",
	customClasses = [],
	size = "m",
	orientation = "horizontal",
	isQuiet = false,
	isOpen = false,
	isEmphasized = false,
	isCompact = false,
	iconOnly = false,
	customStyles = {},
	content = [],
} = {}, context = {}) => {
	const { globals = {} } = context;

	if (globals.context === "express") import("../themes/express.css");
	else if (globals.context === "legacy") import("../themes/spectrum.css");

	if (!content || !content.length) {
		console.warn("Tabs: content required");
		return html``;
	}

	const isVertical = orientation === "vertical";
	const isHorizontal = orientation === "horizontal";
	const isOverflow = orientation === "overflow";

	const selectionIndicator = (isSelected) => when(
		isSelected,
		() => html`
			<div
				class="${rootClass}-selectionIndicator"
				style=${ifDefined(
					styleMap({
						blockSize: isVertical ? "100%" : undefined,
						inlineSize: !isVertical ? "100%" : undefined,
						maxInlineSize: isOverflow ? "50px" : undefined,
						marginInlineStart: isVertical ? "calc(-1 * var(--spectrum-tabs-start-to-edge))" : undefined,
					})
				)}
			></div>`
	);

	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--horizontal`]: isHorizontal || isOverflow,
				[`${rootClass}--vertical`]: isVertical,
				[`${rootClass}--quiet`]: isQuiet,
				[`${rootClass}--emphasized`]: isEmphasized,
				[`${rootClass}--compact`]: isCompact,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}
		>
			${when(!isOverflow, () => repeat(
				content,
				(item) => item.id,
				(item) => {
					if (typeof item === "object") {
						return html`
							<div
								class=${classMap({
									[`${rootClass}-item`]: true,
									"is-selected": item?.isSelected ?? false,
									"is-disabled": item?.isDisabled ?? false,
								})}
								tabindex="0"
							>
								${when(item.icon, () =>
									Icon({
										iconName: item.icon,
										size
									}, context)
								)}
								${when(item.label && !iconOnly, () => html`
									<span class="${rootClass}-itemLabel">
										${item.label}
									</span>
								`)}
								${selectionIndicator(item.isSelected)}
							</div>
						`;
					}
					else {
						return item;
					}
				}
			), () => html`
				${Picker({
					isQuiet: true,
					size,
					isOpen,
					placeholder: !iconOnly ? content?.[0].label : Icon({ iconName: content?.[0].icon, size }, context),
					name: content?.[0].label,
					id: "tab-selector",
					customPopoverStyles: {
						insetBlockStart: "24px",
					},
					content: [
						() => Menu({
							selectionMode: "none",
							size,
							role: "listbox",
							subrole: "option",
							customStyles: { minWidth: "max-content" },
							items: content.filter((_, idx) => idx !== 0).map(item => {
								return {
									...item,
									iconName: item.icon,
									label: !iconOnly ? item.label : undefined,
								};
							}),
						}, context),
					]
				}, context)}
				${selectionIndicator(true)}
			`)}
		</div>
	`;
};
