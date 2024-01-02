import { Template } from "./template";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";

export default {
	title: "Components/Floating action button",
	description:
		"The Floating action button component is used to give users a more prominent button for high frequency actions",
	component: "FloatingActionButton",
	argTypes: {
		/* No theme styles for express available */
		express: { table: { disable: true } },
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
			type: process.env.MIGRATED_PACKAGES.includes("floatingactionbutton")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
	variant: "secondary",
};
