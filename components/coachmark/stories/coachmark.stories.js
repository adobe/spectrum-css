import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as Menu } from "@spectrum-css/menu/stories/menu.stories.js";
import { disableDefaultModes, mobile } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { CoachMarkGroup } from "./coachmark.test.js";
import { Template } from "./template.js";

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
		layout: "fullscreen",
		actions: {
			handles: [
				...(ActionButton.parameters?.actions?.handles ?? []),
				...(Menu.parameters?.actions?.handles ?? []),
			],
		},
		componentVersion: version,
		chromatic: {
			modes: mobile,
		}
	},
	tags: ["!autodocs"],
};

export const Default = CoachMarkGroup.bind({});
Default.args = {};

export const WithMedia = Template.bind({});
WithMedia.tags = ["autodocs", "!dev"];
WithMedia.args = {
	hasImage: true,
};
WithMedia.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

// ********* VRT ONLY ********* //
export const WithForcedColors = CoachMarkGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
