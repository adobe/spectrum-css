import { Template } from "./template";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";

/**
 * The floating action button component is used to give users a more prominent button for high frequency actions.
 */
export default {
	title: "Floating action button",
	component: "FloatingActionButton",
	argTypes: {
		variant: {
			name: "Variant",
			type: { name: "string", required: true },
			defaultValue: "primary",
			table: {
				type: { summary: "string" },
				category: "Component",
				defaultValue: { summary: "primary" },
			},
			options: ["primary", "secondary"],
			control: "radio",
		},
		iconName: {
			...(IconStories?.argTypes?.iconName ?? {}),
			if: false,
		},
	},
	args: {
		rootClass: "spectrum-FloatingActionButton",
		variant: "primary",
		iconName: "AddCircle",
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
	variant: "secondary",
};
