import { Template as ActionGroup } from "@spectrum-css/actiongroup/stories/template.js";
import { Template as CloseButton } from "@spectrum-css/closebutton/stories/template.js";
import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import "../index.css";
import "../mods-bridge.css";

export const Template = ({
	rootClass = "spectrum-ActionBar",
	id,
	testId,
	isOpen = true,
	isEmphasized = false,
	isSticky = false,
	isFixed = false,
	isFlexible = false,
	customClasses = [],
	customStyles = {},
}) => html`
	<div
		class=${classMap({
			[rootClass]: true,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
		style=${styleMap(customStyles)}
		id=${ifDefined(id)}
		data-testid=${ifDefined(testId)}
		?emphasized=${isEmphasized}
		?sticky=${isSticky}
		?fixed=${isFixed}
		?flexible=${isFlexible}
		?open=${isOpen}
	>
		${Popover({
			customClasses: [`${rootClass}-popover`],
			isOpen,
			content: [
				CloseButton({
					label: "Clear selection",
					staticColor: isEmphasized ? "white" : undefined,
				}),
				FieldLabel({
					size: "s",
					label: "2 Selected",
				}),
				ActionGroup({
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
