import { version } from "../package.json";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { Template } from "./template";

/**
 * The floating action button component is used to give users a more prominent button for high frequency actions.
 *
 * When using floating action button in dark themes, the `background-layer-color-2` will often show up on the base color `gray-50` or `gray-75` or on content, images, etc.
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
		reducedMotion: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-FloatingActionButton",
		variant: "primary",
		iconName: "AddCircle",
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = Template.bind({});
Default.storyName = "Default (Primary)";
Default.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
	variant: "secondary",
};
