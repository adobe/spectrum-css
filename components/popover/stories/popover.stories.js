import { userEvent, within } from "@storybook/testing-library";
import { html } from "lit";

import { Template } from "./template";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";

const placementOptions = [
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
];

/**
 * A popover is used to display transient content (menus, options, additional actions etc.) and appears when clicking/tapping on a source (tools, buttons, etc.). It stands out via its visual style (stroke and drop shadow) and floats on top of the rest of the interface.
 */
export default {
	title: "Components/Popover",
	component: "Popover",
	argTypes: {
		trigger: { table: { disable: true } },
		content: { table: { disable: true } },
		nested: { table: { disable: true } },
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: {
				disable: true,
				type: { summary: "boolean" },
				category: "State",
			},
			control: { type: "boolean" },
		},
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
			options: placementOptions,
			if: { arg: "nested", truthy: false },
		},
	},
	args: {
		rootClass: "spectrum-Popover",
		isOpen: false,
		withTip: false,
		position: "top",
		testId: "popover-1",
		id: "popover-1",
		triggerId: "trigger",
		trigger: (passthroughs) => ActionButton({
			label: "Hop on pop(over)",
			id: "trigger",
			...passthroughs,
		}),
		content: [
			() => Menu({
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
	},
	parameters: {
		layout: "centered",
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
		chromatic: { delay: 2000 },
		docs: {
			story: {
				height: "300px"
			}
		},
	},
	decorators: [
		(Story, context) => html`<div style="padding: 16px">${Story(context)}</div>`
	],
};

export const Default = Template.bind({});
Default.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	await userEvent.click(canvas.getByRole("button"));
};
Default.args = {};

export const WithTip = Template.bind({});
WithTip.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	await userEvent.click(canvas.getByRole("button"));
};
WithTip.args = {
	withTip: true,
};

export const Nested = Template.bind({});
Nested.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	await userEvent.click(canvas.getAllByRole("button")[0]);
	await userEvent.click(canvas.getAllByRole("button")[1]);
};
Nested.args = {
	nested: true,
	testId: "popover-nested",
	id: "popover-nested",
	triggerId: "trigger-nested",
	isOpen: true,
	customStyles: {
		"margin-inline-start": "8px",
	},
	trigger: (passthroughs) => ActionButton({
		label: "Hop on pop(over)",
		id: "trigger-nested",
		...passthroughs,
	}),
	content: [
		() => Menu({
			items: [
				{
					iconName: "Edit",
					label: "Edit",
				},
			],
		}),
		() => Nested({
			position: "right",
			testId: "popover-nested-2",
			id: "popover-nested-2",
			triggerId: "trigger-nested-2",
			isOpen: true,
			customStyles: {
				"margin-inline-start": "136px",
				"margin-block-start": "32px"
			},
			trigger: (passthroughs) => ActionButton({
				label: "Hop on pop(over) 2",
				id: "trigger-nested-2",
				...passthroughs,
			}),
			content: [
				() => Menu({
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
