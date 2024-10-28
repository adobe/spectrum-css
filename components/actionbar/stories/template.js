import { Template as ActionGroup } from "@spectrum-css/actiongroup/stories/template.js";
import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";
import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";
import "../themes/spectrum.css";
/* Must be imported last */
import "../themes/express.css";

export const Template = ({
	rootClass = "spectrum-ActionBar",
	size = "m",
	isOpen = true,
	isEmphasized = false,
	isSticky = false,
	isFixed = false,
	isFlexible = false,
	customClasses = [],
	customStyles = {},
	customPopoverStyles = {},
} = {}, context = {}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
				[`${rootClass}--emphasized`]: isEmphasized,
				[`${rootClass}--sticky`]: isSticky,
				[`${rootClass}--fixed`]: isFixed,
				[`${rootClass}--flexible`]: isFlexible,
				"is-open": isOpen,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${styleMap(customStyles)}
		>
			${Popover({
				customStyles: customPopoverStyles,
				customClasses: [`${rootClass}-popover`],
				isOpen,
				content: [
					CloseButton({
						label: "Clear selection",
						staticColor: isEmphasized ? "white" : undefined,
					}, context),
					FieldLabel({ size: "s", label: "2 Selected" }, context),
					ActionGroup({
						size: "m",
						areQuiet: true,
						staticColor: isEmphasized ? "white" : undefined,
						content: [
							{
								iconName: "Edit",
								iconSet: "workflow",
								label: "Edit",
							},
							{
								iconName: "Copy",
								iconSet: "workflow",
								label: "Copy",
							},
							{
								iconName: "Delete",
								iconSet: "workflow",
								label: "Delete",
							},
						],
					}, context),
				],
				popoverHeight: 42,
				popoverWidth: 500,
			}, context)}
		</div>
	`;
};
