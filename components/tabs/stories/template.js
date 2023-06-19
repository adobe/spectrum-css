import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { repeat } from "lit/directives/repeat.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "@spectrum-css/tabs";

export const Template = ({
	rootClass = "spectrum-Tabs",
	customClasses = [],
	size = "m",
	orientation = "horizontal",
	isQuiet,
	isEmphasized,
	isCompact,
	items,
	selectorStyle,
	style = {
		"--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected":
			"rgb(0,0,0)",
		"--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected":
			"rgb(0,0,0)",
		"--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected":
			"rgb(27,127,245)",
		"--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected":
			"rgb(27,127,245)",
		"--spectrum-tabs-textonly-divider-background-color":
			"rgba(225,225,225,0.8)",
	},
	...globals
}) => {
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
	`;
};
