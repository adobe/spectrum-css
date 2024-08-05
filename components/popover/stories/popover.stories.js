import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";
import { html } from "lit";
import { version } from "../package.json";
import { PopoverGroup } from "./popover.test.js";
import { Template } from "./template.js";

/**
 * A popover is used to display transient content (menus, options, additional actions etc.) and appears when clicking/tapping on a source (tools, buttons, etc.). It stands out via its visual style (stroke and drop shadow) and floats on top of the rest of the interface.
 */
export default {
	title: "Popover",
	component: "Popover",
	argTypes: {
		trigger: { table: { disable: true } },
		content: { table: { disable: true } },
		nested: { table: { disable: true } },
		isOpen,
		withTip: {
			name: "Show with tip",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: { type: "boolean" },
			if: { arg: "nested", truthy: false },
		},
		position: {
			name: "Positioning",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "select",
			options: [
				"top",
				"top-left",
				"top-right",
				"top-start",
				"top-end",
				"bottom",
				"bottom-left",
				"bottom-right",
				"bottom-start",
				"bottom-end",
				"right",
				"right-bottom",
				"right-top",
				"left",
				"left-bottom",
				"left-top",
				"start",
				"start-top",
				"start-bottom",
				"end",
				"end-top",
				"end-bottom",
			],
			if: { arg: "nested", truthy: false },
		},
	},
	args: {
		rootClass: "spectrum-Popover",
		isOpen: true,
		withTip: false,
		position: "right",
		content: [html`<div style="padding-inline: 8px;">Basic popover text content with some added padding.</div>`],
	},
	parameters: {
		layout: "centered",
		docs: {
			story: {
				height: "300px"
			}
		},
		componentVersion: version,
	},
	decorators: [
		// Add padding for VRT so drop shadows are not cut off.
		(story) => window.isChromatic() ? html`<div style="padding: 32px;">${story()}</div>` : story(),
	],
};

export const Default = PopoverGroup.bind({});
Default.args = {
	trigger: (passthroughs) => ActionButton({
		isSelected: true,
		label: "Hop on pop(over)",
		...passthroughs,
	}),
	content: [
		(passthroughs) => Menu({
			items: [
				{
					iconName: "Edit",
					label: "Edit",
				},
				{
					iconName: "Copy",
					label: "Copy",
				},
				{
					iconName: "Move",
					label: "Move",
				},
				{
					iconName: "Delete",
					label: "Delete",
				},
			],
			...passthroughs,
		}),
	],
};

export const WithTip = PopoverGroup.bind({});
WithTip.args = {
	withTip: true,
	position: "top",
};

export const Nested = Template.bind({});
Nested.args = {
	position: "right",
	isOpen: true,
	trigger: (passthroughs) => ActionButton({
		label: "Hop on pop(over)",
		...passthroughs,
	}),
	content: [
		Menu.bind(null, {
			items: [
				{
					iconName: "Edit",
					label: "Edit",
				},
			],
		}),
		Template.bind(null, {
			position: "right",
			isOpen: true,
			trigger: ActionButton.bind(null, {
				label: "More options",
			}),
			content: [
				Menu.bind(null, {
					items: [
						{
							iconName: "Edit",
							label: "Edit",
						},
						{
							iconName: "Copy",
							label: "Copy",
						},
						{
							iconName: "Move",
							label: "Move",
						},
						{
							iconName: "Delete",
							label: "Delete",
						},
					],
				}),
			],
		}),
	],
};

// ********* VRT ONLY ********* //
export const WithForcedColors = PopoverGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
