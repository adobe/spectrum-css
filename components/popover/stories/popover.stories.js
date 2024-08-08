import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";
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
		},
		popoverHeight: { table: { disable: true } },
		popoverWidth: { table: { disable: true } },
		popoverAlignment: { table: { disable: true } },
		popoverWrapperStyles: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Popover",
		isOpen: true,
		withTip: false,
		position: "bottom",
		popoverHeight: 142,
		popoverWidth: 89,
		withTestContainer: false,
	},
	parameters: {
		layout: "centered",
		componentVersion: version,
	},
};

export const Default = PopoverGroup.bind({});
Default.args = {
	trigger: (passthroughs, context) => ActionButton({
		isSelected: true,
		label: "Actions",
		...passthroughs,
	}, context),
	content: [
		(passthroughs, context) => Menu({
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
		}, context),
	],
};

export const WithTip = Template.bind({});
WithTip.tags = ["!dev"];
WithTip.args = {
	...Default.args,
	withTip: true,
};

export const Nested = Template.bind({});
Nested.args = {
	position: "right-top",
	isOpen: true,
	trigger: (passthroughs, context) => ActionButton({
		label: "Actions",
		...passthroughs,
	}, context),
	content: [
		(passthroughs, context) => Menu({
			items: [
				{
					iconName: "Edit",
					label: "Edit",
				},
			],
			...passthroughs,
		}, context),
		(passthroughs, context) => Template({
			position: "right-top",
			isOpen: true,
			trigger: (passthroughs, context) => ActionButton({
				label: "More actions",
				...passthroughs,
			}, context),
			content: [
				(passthroughs, context) => Menu({
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
				}, context),
			],
			...passthroughs,
		}, context),
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
