import { Template as ActionGroup } from "@spectrum-css/actiongroup/stories/template.js";
import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";
import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
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
}, context) => {
	const { globals = {} } = context;

	if (globals.context === "express") {
		import("../themes/express.css");
	}
	else if (globals.context === "legacy") {
		import("../themes/legacy.css");
	}

	return html`
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
		>
			${Popover({
				customClasses: [`${rootClass}-popover`],
				isOpen,
				content: [
					CloseButton({
						label: "Clear selection",
						staticColor: isEmphasized ? "white" : undefined,
					}, context),
					FieldLabel({
						size: "s",
						label: "2 Selected",
					}, context),
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
					}, context),
				],
			}, context)}
		</div>
	`;
};

export const ActionBarGroup = (args, context) => html`
	<div style=${styleMap({
		"display": window.isChromatic() ? "none" : undefined,
	})}>
		${Template(args, context)}
	</div>
	<div style=${styleMap({
		"display": window.isChromatic() ? "flex" : "none",
		"flex-direction": "column",
		"flex-wrap": "nowrap",
		"gap": "16px"
	})}>
		${Template(args, context)}
		${Template({
			...args,
			isEmphasized: true,
		}, context)}
	</div>
`;

export const ActionBarGroup = (args) => html`
	<div style=${styleMap({
		"display": window.isChromatic() ? "none" : undefined,
	})}>
		${Template(args)}
	</div>
	<div style=${styleMap({
		"display": window.isChromatic() ? "flex" : "none",
		"flex-direction": "column",
		"flex-wrap": "nowrap",
		"gap": "16px"
	})}>
		${Template(args)}
		${Template({
			...args,
			isEmphasized: true,
		})}
	</div>
`;
