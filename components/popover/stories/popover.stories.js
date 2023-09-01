import { within, userEvent } from '@storybook/testing-library';
import { html } from "lit";

// Import the component markup template
import { Template } from "./template";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";

export default {
	title: "Components/Popover",
	description:
		"A popover is used to display transient content (menus, options, additional actions etc.) and appears when clicking/tapping on a source (tools, buttons, etc.). It stands out via its visual style (stroke and drop shadow) and floats on top of the rest of the interface.",
	component: "Popover",
	argTypes: {
		trigger: { table: { disable: true } },
		content: { table: { disable: true } },
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
				"top-start",
				"top-end",
				"bottom",
				"bottom-start",
				"bottom-end",
				"left",
				"left-top",
				"left-bottom",
				"right",
				"right-top",
				"right-bottom",
			],
		},
	},
	args: {
		rootClass: "spectrum-Popover",
		isOpen: false,
		withTip: false,
		position: "top",
	},
	parameters: {
		layout: 'centered',
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("popover")
				? "migrated"
				: undefined,
		},
		chromatic: { delay: 2000 },
	},
};

export const Default = Template.bind({});
// provide padding so that Chromatic can capture the full focus indicator
Default.decorators = [(Story) => html`<div style="padding: 1em;">${Story().outerHTML || Story()}</div>`];
Default.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
};
Default.args = {
	testId: 'popover-1',
	id: 'popover-1',
	triggerId: 'trigger',
	trigger: (passthroughs) => ActionButton({
		label: "Hop on pop(over)",
		id: 'trigger',
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
};

export const WithTip = Template.bind({});
WithTip.args = {
	withTip: true,
	id: 'popover-1',
	triggerId: 'trigger',
	testId: 'popover-1',
	trigger: (passthroughs) => ActionButton({
		label: "Hop on pop(over)",
		id: 'trigger',
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
};

WithTip.decorators = [(Story) => html`<div style="padding: 1em;">${Story().outerHTML || Story()}</div>`];

WithTip.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
};

export const Nested = Template.bind({});
Nested.args = {
	testId: 'popover-1',
	id: 'popover-1',
	triggerId: 'trigger-1',
	trigger: (passthroughs) => ActionButton({
		label: "Hop on pop(over)",
		id: 'trigger-1',
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
		() => Default({
			position: "right",
			testId: 'popover-2',
			id: 'popover-2',
			triggerId: "trigger-2",
			trigger: (passthroughs) => ActionButton({
				label: "Hop on pop(over) 2",
				id: "trigger-2",
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

Nested.decorators = [(Story) => html`<div style="padding: 1em;">${Story().outerHTML || Story()}</div>`];

Nested.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
  await userEvent.click(canvas.getAllByRole('button')[0]);
};
