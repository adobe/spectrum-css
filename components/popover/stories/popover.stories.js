import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";
import { html } from "lit";
import { version } from "../package.json";
import { PopoverGroup } from "./popover.test";

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
		position: "bottom",
		content: [
			html`<p>Basic popover text content with some added padding.</p>`
		],
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = PopoverGroup.bind({});
Default.args = {
	trigger: (passthroughs, context) => ActionButton({
		isActive: passthroughs.isOpen,
		label: "Hop on pop(over)",
		...passthroughs,
	}, context),
	content: [
		(passthroughs, context) => Menu({
			...passthroughs,
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
		}, context),
	],
};

// ********* DOCS ONLY ********* //
// @todo: address this later when we have a better way to handle nested popovers
// export const Nested = Template.bind({});
// Nested.args = {
// 	position: "right-top",
// 	isOpen: true,
// 	customStyles: {
// 		"inset-inline-start": "60px",
// 		"inset-block-start": "0",
// 	},
// 	trigger: (passthroughs) => ActionButton({
// 		label: "Menu",
// 		...passthroughs,
// 	}),
// 	content: [
// 		(passthroughs, context) => Menu({
// 			...passthroughs,
// 			items: [
// 				{
// 					iconName: "Edit",
// 					label: "Edit",
// 				},
// 			],
// 		}, context),
// 		(passthroughs, context) => Template({
// 			...passthroughs,
// 			position: "right-top",
// 			isOpen: true,
// 			customStyles: {
// 				"inset-inline-start": "110px",
// 				"inset-block-start": "0",
// 			},
// 			trigger: (passthroughs, context) => ActionButton({
// 				label: "More options",
// 				...passthroughs,
// 			}, context),
// 			content: [
// 				(passthroughs, context) => Menu({
// 					...passthroughs,
// 					items: [
// 						{
// 							iconName: "Copy",
// 							label: "Copy",
// 						},
// 						{
// 							iconName: "Move",
// 							label: "Move",
// 						},
// 						{
// 							iconName: "Delete",
// 							label: "Delete",
// 						},
// 					],
// 				}, context),
// 			],
// 		}, context),
// 	],
// };
// Nested.tags = ["autodocs", "!dev"];
// Nested.parameters = {
// 	chromatic: { disableSnapshot: true },
// };

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
