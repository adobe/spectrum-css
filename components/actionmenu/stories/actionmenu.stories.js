import { userEvent, within } from '@storybook/testing-library';

import { Template } from "./template";

import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { default as Menu } from "@spectrum-css/menu/stories/menu.stories.js";
import { default as Popover } from "@spectrum-css/popover/stories/popover.stories.js";

export default {
	title: "Components/Action menu",
	description: "The Action menu component is an action button with a Popover.",
	component: "ActionMenu",
	argTypes: {
		/* No theme styles for express available */
		express: { table: { disable: true } },
		items: { table: { disable: true } },
		popoverPosition: { table: { disable: true } },
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		iconName: {
			...(IconStories?.argTypes?.iconName ?? {}),
			if: false,
		},
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
	},
	args: {
		isOpen: false,
		label: "More actions",
		iconName: "More",
		items: [
			{
				label: "Action 1",
			},
			{
				label: "Action 2",
			},
			{
				label: "Action 3",
			},
			{
				label: "Action 4",
			},
		],
		customStorybookStyles: {
			display: "block",
			position: "relative"
		}
	},
	parameters: {
		actions: {
			handles: [
				...Popover.parameters.actions.handles,
				...ActionButton.parameters.actions.handles,
				...Menu.parameters.actions.handles,
			],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("actionmenu")
				? "migrated"
				: "legacy",
		},
		chromatic: { delay: 2000 },
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await new Promise((resolve) => setTimeout(resolve, 100));
		await userEvent.click(canvas.getByRole('button', { id: 'trigger' }));
	},
};

export const Default = Template.bind({});
Default.args = {};
