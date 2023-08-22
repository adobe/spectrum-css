import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
// import { ifDefined } from 'lit/directives/if-defined.js';

import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";
import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as ActionGroup } from "@spectrum-css/actiongroup/stories/template.js";

import "@spectrum-css/actionbar";

export const Template = ({
	rootClass = "spectrum-ActionBar",
	size = "m",
	isOpen = true,
	isEmphasized = false,
	isSticky = false,
	isFixed = false,
	isFlexible = false,
	customClasses = [],
	...globals
}) => {
	const { express } = globals;

	try {
		if (!express)
			import(
				/* webpackPrefetch: true */ "@spectrum-css/actionbar/dist/themes/spectrum.css"
			);
		else
			import(
				/* webpackPrefetch: true */ "@spectrum-css/actionbar/dist/themes/express.css"
			);
	} catch (e) {
		console.warn(e);
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
				...globals,
				customClasses: [`${rootClass}-popover`],
				isOpen,
				content: [
					CloseButton({
						...globals,
						label: "Clear selection",
						staticColor: isEmphasized ? "white" : undefined,
					}),
					FieldLabel({
						...globals,
						size: "s",
						label: "2 Selected",
					}),
					ActionGroup({
						...globals,
						size: "m",
						areQuiet: true,
						staticColors: isEmphasized ? "white" : undefined,
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
};
