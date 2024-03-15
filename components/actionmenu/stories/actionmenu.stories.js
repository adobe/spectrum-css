import { userEvent, within } from '@storybook/testing-library';
import { html } from "lit";

// Import the component markup template
import { Template } from "./template";

import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { default as Menu } from "@spectrum-css/menu/stories/menu.stories.js";
import { default as Popover } from "@spectrum-css/popover/stories/popover.stories.js";

export default {
	title: "Components/Action menu",
	description: "The Action menu component is an action button with a Popover.",
	component: "Action menu",
	argTypes: {
		items: { table: { disable: true } },
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
		isOpen: true,
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
};

export const Default = Template.bind({});
Default.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);

	await new Promise((resolve) => setTimeout(resolve, 100));

	await userEvent.click(canvas.getByRole('button', { id: 'trigger' }));
};
// provide padding so that Chromatic can capture the full focus indicator
Default.decorators = [(Story) => html`<div style="padding: 1em;">${Story().outerHTML || Story()}</div>`];
Default.args = {
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
};
