import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";

import { Template as Icon } from "@spectrum-css/icon/stories/template.js";

import "../index-base.css";

export const Template = ({
  rootClass = "spectrum-Tabs",
  customClasses = [],
  size = "m",
  orientation = "horizontal",
  isQuiet,
  isEmphasized,
  isCompact,
  items,
  selectorStyle = {},
  style = {},
  ...globals
}) => html`
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
