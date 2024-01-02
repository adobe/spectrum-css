import { Template } from "./template";

import { default as ActionButtonStories } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";

export default {
	title: "Components/Cycle button",
	description:
		"The Cycle button component is an action button that cycles through two different icons, a play that then changes to a pause, for example.",
	component: "CycleButton",
	argTypes: {
		/* No theme styles for express available */
		express: { table: { disable: true } },
		size: ActionButtonStories?.argTypes?.size ?? {},
		initialIcon: {
			...(IconStories?.argTypes?.iconName ?? {}),
			name: "Initial icon",
			type: { name: "string", required: true },
			if: false,
		},
		selectedIcon: {
			...(IconStories?.argTypes?.iconName ?? {}),
			name: "Selected icon",
			if: false,
		},
		isSelected: ActionButtonStories?.argTypes?.isSelected ?? {},
		isDisabled: ActionButtonStories?.argTypes?.isDisabled ?? {},
	},
	args: {
		rootClass: "spectrum-CycleButton",
		size: "m",
		initialIcon: "Play",
		selectedIcon: "Pause",
	},
	parameters: {
		actions: {
			handles: [...(ActionButtonStories?.parameters?.actions?.handles ?? [])],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("cyclebutton")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};
