import { Template } from "./template";

import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as Menu } from "@spectrum-css/menu/stories/menu.stories.js";

/**
 * The coach mark component can be used to bring added attention to specific parts of a page.
 */
export default {
	title: "Coach mark",
	component: "CoachMark",
	argTypes: {
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
		imageIsFixedHeight: {
			name: "Image fixed height",
			description: "By default this displays an image with a 4:3 aspect ratio.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
		},
		image: {
			name: "Image",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
		},
	},
	args: {
		rootClass: "spectrum-CoachMark",
		hasActionMenu: true,
		hasPagination: true,
		hasImage: false,
		imageIsFixedHeight: false,
	},
	parameters: {
		actions: {
			handles: [
				...ActionButton.parameters.actions.handles,
				...Menu.parameters.actions.handles,
			],
		},
		status: {
			type: "migrated",
		},
		docs: {
			story: {
				height: "300px",
			},
		},
	},
};

export const Default = Template.bind({});
Default.args = {
	image: "example-card-landscape.png",
};

export const WithMedia = Template.bind({});
WithMedia.args = {
	hasImage: true,
};
