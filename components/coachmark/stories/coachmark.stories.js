import { Template } from "./template";

import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as Menu } from "@spectrum-css/menu/stories/menu.stories.js";

export default {
	title: "Components/Coach mark",
	description:
		"The coach mark component can be used to bring added attention to specific parts of a page.",
	component: "CoachMark",
	argTypes: {
		/* No theme styles for express available */
		express: { table: { disable: true } },
		hasActionMenu: {
			name: "ActionMenu",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		hasPagination: {
			name: "Pagination",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		hasImage: {
			name: "Image",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-CoachMark",
		hasActionMenu: true,
		hasPagination: true,
		hasImage: false,
		customStorybookStyles: {
			display: "block"
		},
	},
	parameters: {
		actions: {
			handles: [
				...ActionButton.parameters.actions.handles,
				...Menu.parameters.actions.handles,
			],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("coachmark")
				? "migrated"
				: "legacy",
		},
		chromatic: { delay: 2000 },
	},
};

export const Default = Template.bind({});
Default.args = {};

export const WithMedia = Template.bind({});
WithMedia.args = {
	hasImage: true,
};
