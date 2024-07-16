import { default as ActionButtonStories } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { useArgs } from "@storybook/preview-api";
import { html } from "lit";

import "@spectrum-css/cyclebutton/dist/index-vars.css";
import "@spectrum-css/cyclebutton/dist/vars.css";

/**
 * **This component is deprecated.** Please use the quiet variant of action button with the appropriate icon(s) instead. Any icon swapping that happens on-click/on-key should be handled by the implementation.
 *
 * The cycle button component is an action button that cycles through two different icons, a play that then changes to a pause, for example.
 */
export default {
	title: "Cycle button",
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
		chromatic: { disableSnapshot: true },
		status: {
			type: "deprecated"
		},
		componentVersion: "3.1.3",
	},
};

export const Default = (({
	rootClass = "spectrum-CycleButton",
	customClasses = [],
	size = "m",
	isDisabled = false,
	onclick,
} = {}, context = {}) => {
	const [{
		selectedIcon = "Pause",
		initialIcon = "Play"
	}, updateArgs] = useArgs();

	return html`
		<!-- Note: These dimensions don't change in express theme -->
		<style>
			:root, .spectrum--medium { --spectrum-global-dimension-size-85: 7px; }
			.spectrum--large { --spectrum-global-dimension-size-85: 9px; }
		</style>
		${ActionButton({
			customClasses: [rootClass, ...customClasses],
			isQuiet: true,
			isDisabled,
			size,
			iconName: initialIcon,
			iconSet: "workflow",
			onclick:
				onclick ??
				function () {
					if (isDisabled) return;

					updateArgs({
						initialIcon: selectedIcon,
						selectedIcon: initialIcon
					});
				},
		}, context)}
	`;
}).bind({});
Default.args = {};
