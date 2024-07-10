import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { Template as Picker } from "@spectrum-css/picker/stories/template.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

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
	const isVertical = orientation === "vertical";
	const isHorizontal = orientation === "horizontal";
	const isOverflow = orientation === "overflow";

	const selectionIndicator = html`
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
		></div>`;

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
								${when(item.isSelected, () => selectionIndicator)}
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
							items: content.filter((_, idx) => idx !== 0).map(item => ({
								...item,
								iconName: item.icon,
								label: !iconOnly ? item.label : undefined,
							})),
						}, context),
					]
				}, context)}
				${selectionIndicator}
			`)}
		</div>
	`;
};

export const TabsGroup = (args) => html`
  <div
    style=${styleMap({
		"display": "flex",
		"flex-direction": args.orientation === "horizontal" ? "column" : "row",
		"gap": "32px",
	})}>
    ${Template({
      ...args,
      content: [
        {
          id: "tab-1",
          label: "Tab 1",
          isSelected: true,
        },
        {
          id: "tab-2",
          label: "Tab 2",
          isDisabled: true,
        },
        {
          id: "tab-3",
          label: "Tab 3",
        },
      ],
    })}
    ${Template(args)}
	${Template({ ...args, iconOnly: true })}
  </div>
`;

export const Variants = (args) => html`
  <div style=${styleMap({
	"display": window.isChromatic() ? "grid" : "none",
	"gap": "32px",
	"max-inline-size": args.orientation === "overflow" ? "100px" : undefined,
  })}>
    <div style=${styleMap({
		"display": "flex",
		"flex-flow": "column nowrap",
		"gap": "8px",
	})}>
      ${Typography({ semantics: "heading", size: "s", content: ["Default"], customClasses: ["chromatic-ignore"] })}
      ${TabsGroup(args)}
    </div>
    <div style=${styleMap({
		"display": "flex",
		"flex-flow": "column nowrap",
		"gap": "8px",
	})}>
      ${Typography({ semantics: "heading", size: "s", content: ["Emphasized"], customClasses: ["chromatic-ignore"] })}
      ${TabsGroup({ ...args, isEmphasized: true })}
    </div>
    <div style=${styleMap({
		"display": "flex",
		"flex-flow": "column nowrap",
		"gap": "8px",
	})}>
      ${Typography({ semantics: "heading", size: "s", content: ["Quiet"], customClasses: ["chromatic-ignore"] })}
      ${TabsGroup({ ...args, isQuiet: true })}
    </div>
    <div style=${styleMap({
		"display": "flex",
		"flex-flow": "column nowrap",
		"gap": "8px",
	})}>
      ${Typography({ semantics: "heading", size: "s", content: ["Quiet + compact"], customClasses: ["chromatic-ignore"] })}
      ${TabsGroup({ ...args, isQuiet: true, isCompact: true })}
    </div>
  </div>
  <div style=${styleMap({
	"display": window.isChromatic() ? "none" : "block",
	"max-inline-size": args.orientation === "overflow" ? "100px" : undefined,
  })}>
    ${Template(args)}
  </div>
`;
