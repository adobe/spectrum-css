import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { repeat } from "lit/directives/repeat.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Picker } from "@spectrum-css/picker/stories/template.js";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-Tabs",
  customClasses = [],
  size = "m",
  orientation = "horizontal",
  isQuiet,
  isEmphasized,
  isCompact,
	labelWithIcons,
	iconOnly,
	isOpen = true,
  selectorStyle = {},
  style = {},
	overflow,
	popoverOffset,
  ...globals
}) => {

	let displayedItems = []
	let verticalSelectorStyle = {}

	if (orientation === "vertical" && !isCompact) {
		verticalSelectorStyle = {"block-size": "46px"}
	} else if (orientation === "vertical" && isCompact) {
		verticalSelectorStyle = {"block-size": "32px"}
	} else {
		verticalSelectorStyle = false
	}

	if (labelWithIcons) {
		selectorStyle = verticalSelectorStyle ? verticalSelectorStyle : {"inline-size": "60px"},
		displayedItems = [
			{
				id: "tab-1",
				label: "Tab 1",
				icon: "Folder",
				isSelected: true
			},
			{
				id: "tab-2",
				label: "Tab 2",
				icon: "Image"
			},
			{
				id: "tab-3",
				label: "Tab 3",
				icon: "Document"
			}
		]
	} else if (iconOnly){
		selectorStyle = verticalSelectorStyle ? verticalSelectorStyle : {"inline-size": "20px"},
		displayedItems = [
			{
				id: "tab-1",
				icon: "Folder",
				isSelected: true
			},
			{
				id: "tab-2",
				icon: "Image"
			},
			{
				id: "tab-3",
				icon: "Document"
			}
		]
	} else {
		selectorStyle = verticalSelectorStyle ? verticalSelectorStyle : {"inline-size": "35px"},
		displayedItems = [
			{
				id: "tab-1",
				label: "Tab 1",
				isSelected: true
			},
			{
				id: "tab-2",
				label: "Tab 2",
			},
			{
				id: "tab-3",
				label: "Tab 3",
			}
		]
	}

	const overflowHtml = html`
	<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--${orientation}`]: typeof orientation !== "undefined",
				[`${rootClass}--quiet`]: isQuiet,
				[`${rootClass}--emphasized`]: isEmphasized,
				[`${rootClass}--compact`]: isCompact,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${ifDefined(styleMap(style))}
		>
		<div
			class="${rootClass}-selectionIndicator"
			style="width: 46px"
		></div>
		${Picker({
			isQuiet: true,
			size,
			isOpen: isOpen,
			placeholder: displayedItems[0].label,
			name: `${displayedItems[0].label}`,
			id: 'tab-selector',
		})}
		</div>
	`

	if (overflow) {
		return overflowHtml
	} else {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				[`${rootClass}--${orientation}`]: typeof orientation !== "undefined",
				[`${rootClass}--quiet`]: isQuiet,
				[`${rootClass}--emphasized`]: isEmphasized,
				[`${rootClass}--compact`]: isCompact,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${ifDefined(styleMap(style))}
		>
			${repeat(
				displayedItems,
				(item) => item.id,
				(item) => {
					if (typeof item === "object") {
						return html`
							<div
								class=${classMap({
									[`${rootClass}-item`]: true,
									"is-selected": item.isSelected,
								})}
								tabindex="0"
							>
								${item.icon
									? Icon({
											...globals,
											iconName: item.icon,
											size,
									  })
									: ""}
								${item.label
									? html`<span class="${rootClass}-itemLabel"
											>${item.label}</span
									  >`
									: ""}
							</div>
						`;
					} else return item;
				}
			)}
			<div
				class="${rootClass}-selectionIndicator"
				style=${ifDefined(styleMap(selectorStyle))}
			></div>
		</div>
	`; }
};
