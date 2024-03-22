// Import the component markup template
import { Template } from "./template";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
	title: "Components/Floating action button",
	description:
		"The Floating action button component is used to give users a more prominent button for high frequency actions",
	component: "FloatingActionButton",
	argTypes: {
		variant: {
			name: "Varaint",
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
	// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
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
