import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { repeat } from "lit/directives/repeat.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Picker } from "@spectrum-css/picker/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";

import "../index.css";

export const Template = ({
  rootClass = "spectrum-Tabs",
  customClasses = [],
  size = "m",
  orientation = "horizontal",
  isQuiet,
  isEmphasized,
  isCompact,
  items,
	isOpen = true,
  selectorStyle = {},
  style = {},
	overflow,
	popoverOffset,
  ...globals
}) => {

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
			style=${ifDefined(styleMap(selectorStyle))}
		></div>
		${Picker({
			isQuiet: true,
			isOpen: isOpen,
			placeholder: items[0].label,
			name: 'country',
			id: 'form-example-country',
		})}

		${Popover({
			...globals,
			isOpen: isOpen,
			isQuiet: true,
			withTip: false,
			position: "bottom",
			customStyles: {
				position: "absolute",
				"--spectrum-picker-spacing-picker-to-popover" : popoverOffset
			},
			content: [
				Menu({
					...globals,
					role: "listbox",
  				subrole: "option",
					selectionMode: "single",
					items: [
						{
							label: "Tab 1",
							isSelected: true,
							isChecked: true
						},
						{ label: "Tab 2" },
						{ label: "Tab 3" },
					],
				}),
			],
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
				items,
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
