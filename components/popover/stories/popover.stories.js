import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Import the component markup template
import { Template } from "./template";

import { Default as Menu } from "@spectrum-css/menu/stories/menu.stories.js";

export default {
	title: "Components/Popover",
	description:
		"A popover is used to display transient content (menus, options, additional actions etc.) and appears when clicking/tapping on a source (tools, buttons, etc.). It stands out via its visual style (stroke and drop shadow) and floats on top of the rest of the interface.",
	component: "Popover",
	argTypes: {
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
			name: "Tip positioning",
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
				"left-start",
				"left-end",
				"right",
				"right-start",
				"right-end",
			],
			if: { arg: "withTip", truthy: true },
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
	},
};

export const Default = Template.bind({});
Default.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);

	await userEvent.click(canvas.getByText('Open Popover'));

	expect(canvas.getByTestId('popover-1').classList.contains('is-open')).toBe(true);
};
Default.args = {
	content: [
		Menu({
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
	content: [
		Menu({
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

export const Nested = Template.bind({});
Nested.args = {
	content: [
		Menu({
			items: [
				{
					iconName: "Edit",
					label: "Edit",
				},
			],
		}),
		Default({
			position: "right",
			content: [
				Menu({
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
