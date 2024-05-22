import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { Template as Picker } from "@spectrum-css/picker/stories/template.js";

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
}) => {
	if (!content || !content.length) {
		console.warn("Tabs: content required");
		return html``;
	}

	const isVertical = orientation === "vertical";
	const isHorizontal = orientation === "horizontal";
	const isOverflow = orientation === "overflow";

	// Must resolve icon templates before kicking off the render below
	const icons = content.map((item) => Icon({ size, iconName: item.iconName }));

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
			style=${ifDefined(styleMap(customStyles))}
		>
			${when(!isOverflow,
				() => html`
					${repeat(content, (item) => item.id, (item, idx) => {
						if (typeof item !== "object") return item;

						const icon = icons[idx];

						return html`
							<div
								class=${classMap({
									[`${rootClass}-item`]: true,
									"is-selected": item?.isSelected ?? false,
									"is-disabled": item?.isDisabled ?? false,
								})}
								tabindex="0"
							>
								${when(item.iconName, () => icon)}
								${when(item.label && !iconOnly, () => html`<span class="${rootClass}-itemLabel">${item.label}</span>`)}
								${when(item.isSelected, () => html`
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
								)}
							</div>
						`;
					})}
				`,
				() => html`
					${Picker({
						isQuiet: true,
						size,
						isOpen,
						placeholder: !iconOnly ? content?.[0].label : content?.[0].icon,
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
								items: content.filter((_, idx) => idx !== 0).map(item => ({
									...item,
									label: !iconOnly ? item.label : undefined,
								})),
							}),
						]
					})}
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
					></div>
				`
			)}
		</div>
	`;
};
