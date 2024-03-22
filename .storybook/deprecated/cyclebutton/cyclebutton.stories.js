import { default as ActionButtonStories } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { useArgs } from "@storybook/client-api";
import { html } from "lit";

import "@spectrum-css/cyclebutton/dist/index-vars.css";
import "@spectrum-css/cyclebutton/dist/vars.css";

export default {
	title: "Deprecated/Cycle button",
	description:
		"The Cycle button component is an action button that cycles through two different icons, a play that then changes to a pause, for example.",
	component: "CycleButton",
	argTypes: {
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
		chromatic: { disable: true },
		status: {
			type: "deprecated"
		},
	},
};

export const Default = (({
	rootClass = "spectrum-CycleButton",
	customClasses = [],
	size = "m",
	initialIcon = "Play",
	selectedIcon = "Pause",
	isDisabled = false,
	onclick,
	...globals
}) => {
	const [{ selectedIcon: icon }, updateArgs] = useArgs();

	return html`
		<!-- Note: These dimensions don't change in express theme -->
		<style>
			:root, .spectrum--medium { --spectrum-global-dimension-size-85: 7px; }
			.spectrum--large { --spectrum-global-dimension-size-85: 9px; }
		</style>
		${ActionButton({
			...globals,
			customClasses: [rootClass],
			isQuiet: true,
			isDisabled,
			size,
			iconName: initialIcon,
			onclick:
				onclick ??
				function () {
					if (isDisabled) return;

					updateArgs({ initialIcon: selectedIcon });
					updateArgs({ selectedIcon: icon });
				},
		})}
	`;
}).bind({});
Default.args = {};
