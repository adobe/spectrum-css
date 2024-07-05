import { version } from "../package.json";
import { Template } from "./template";

import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as Menu } from "@spectrum-css/menu/stories/menu.stories.js";

/**
 * The coach mark component can be used to bring added attention to specific parts of a page. It is a separate component from the coach indicator.
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
	},
	args: {
		rootClass: "spectrum-CoachMark",
		hasActionMenu: true,
		hasPagination: true,
		hasImage: false,
	},
	parameters: {
		actions: {
			handles: [
				...(ActionButton.parameters?.actions?.handles ?? []),
				...(Menu.parameters?.actions?.handles ?? []),
			],
		},
		docs: {
			story: {
				height: "300px"
			}
		},
		componentVersion: version,
	},
};

export const Default = Template.bind({});
Default.args = {};

export const WithMedia = Template.bind({});
WithMedia.args = {
	hasImage: true,
};
WithMedia.parameters = {
	docs: {
		story: {
			inline: false,
			height: "475px",
		},
	},
};
