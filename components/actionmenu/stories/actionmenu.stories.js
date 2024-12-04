import { userEvent, within } from "@storybook/testing-library";
import { html } from "lit";

import { Template } from "./template";

import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { default as Menu } from "@spectrum-css/menu/stories/menu.stories.js";
import { default as Popover } from "@spectrum-css/popover/stories/popover.stories.js";

/**
 * The action menu component is an action button with a popover.
 */
export default {
	title: "Action menu",
	component: "ActionMenu",
	argTypes: {
		items: { table: { disable: true } },
		popoverId: { table: { disable: true } },
		popoverTestId: { table: { disable: true } },
		popoverTriggerId: { table: { disable: true } },
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
		popoverId: "popover-1",
		popoverTestId: "popover-1",
		popoverTriggerId: "trigger",
		isOpen: false,
		label: "More Actions",
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
			type: "migrated",
		},
		chromatic: { delay: 2000 },
	},
	decorators: [
		(Story, context) => html`<div style="padding: 14px">${Story(context)}</div>`
	],
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await new Promise((resolve) => setTimeout(resolve, 100));
		await userEvent.click(canvas.getByRole("button", { id: "trigger" }));
	}
};

export const Default = Template.bind({});
Default.args = {};
