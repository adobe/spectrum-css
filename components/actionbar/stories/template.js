import { Template as ActionGroup } from "@spectrum-css/actiongroup/stories/template.js";
import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";
import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Variants } from "@spectrum-css/preview/decorators";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

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
}) => html`
	<div
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--size${size?.toUpperCase()}`]:
				typeof size !== "undefined",
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
				}),
				FieldLabel({ size: "s", label: "2 Selected" }),
				ActionGroup({
					size: "m",
					areQuiet: true,
					staticColor: isEmphasized ? "white" : undefined,
					content: [
						{
							iconName: "Edit",
							label: "Edit",
						},
						{
							iconName: "Copy",
							label: "Copy",
						},
						{
							iconName: "Delete",
							label: "Delete",
						},
					],
				}),
			],
		})}
	</div>
`;

export const ActionBarGroup = Variants({
	Template,
	skipBorders: true,
	testData: [
		{
			testHeading: "Default",
			customPopoverStyles: {
				// Prevent the popover from being rendered offscreen
				"--spectrum-popover-animation-distance": "-10px",
				"inline-size": "500px"
			}
		},
		{
			testHeading: "Emphasized",
			isEmphasized: true,
			customPopoverStyles: {
				// Prevent the popover from being rendered offscreen
				"--spectrum-popover-animation-distance": "-10px",
				"inline-size": "500px"
			}
		},
	],
	stateData: [
		// @todo these only work if rendered in an iframe
		// {
		// 	testHeading: "Sticky",
		// 	isSticky: true,
		// },
		// {
		// 	testHeading: "Fixed",
		// 	isFixed: true,
		// },
		// {
		// 	testHeading: "Flexible",
		// 	isFlexible: true,
		// },
	],
});
