import { Container } from "@spectrum-css/preview/decorators";
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

/* This template shows standard, flexible, and sticky action bars in one story. */
/* The fixed behavior works best in an iframe, so is not represented in this template. */
export const BehavioralTemplate = (args, context) => Container({
	withBorder: false,
	withHeading: false,
	direction: "column",
	content: html`
		${Container({
			withBorder: false,
			heading: "Standard",
			content: Template({...args, customPopoverStyles: {"transform": "unset"}}, context)
		})}
		${Container({
			withBorder: false,
			heading: "Flexible",
			content: Template({...args, isFlexible: true,}, context)
		})}
		${Container({
			withBorder: false,
			heading: "Sticky",
			containerStyles: {
				"max-block-size": "100px",
				"max-inline-size": " 550px",
				"overflow": "auto",
			},
			content: ["Scroll down to view sticky behavior. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", Template({...args, isSticky: true,}, context)]
		})}
	`
});
