import { Template } from "./template";

import { isDisabled, isFocused, isInvalid, isLoading, isOpen } from "@spectrum-css/preview/types/states.js";

import { Default as MenuStories } from "@spectrum-css/menu/stories/menu.stories.js";

/** A picker outlines a set of options for a user. */
export default {
	title: "Components/Picker",
	component: "Picker",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl"],
			control: "select",
		},
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		labelPosition: {
			name: "Label position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			options: ["top", "left"],
			control: { type: "select" },
		},
		placeholder: {
			name: "Placeholder",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		isQuiet: {
			name: "Quiet styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isOpen,
		isFocused,
		isDisabled,
		isLoading,
		isInvalid,
		content: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Picker",
		size: "m",
		label: "Country",
		placeholder: "Select a country",
		isQuiet: false,
		isLoading: false,
		isDisabled: false,
		isFocused: false,
		isInvalid: false,
		isOpen: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("picker")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {
	content: [
		() => MenuStories(MenuStories.args)
	],
};

export const Open = Template.bind({});
Open.args = {
	isOpen: true,
	content: [
		() => MenuStories(MenuStories.args)
	],
};

export const SideLabel = Template.bind({});
SideLabel.args = {
	content: [
		() => MenuStories(MenuStories.args)
	],
	labelPosition: "left"
};

export const Quiet = Template.bind({});
Quiet.args = {
	isQuiet: true,
	content: [
		() => MenuStories(MenuStories.args)
	],
};

export const Loading = Template.bind({});
Loading.args = {
	isLoading: true,
	content: [
		() => MenuStories(MenuStories.args)
	],
};

export const Invalid = Template.bind({});
Invalid.args = {
	helpText: "Please select a country",
	isInvalid: true,
	content: [
		() => MenuStories(MenuStories.args)
	],
};

export const Focused = Template.bind({});
Focused.args = {
	helpText: "Please select a country",
	isFocused: true,
	content: [
		() => MenuStories(MenuStories.args)
	],
};

export const WithForcedColors = Template.bind({
  parameters: {
    // Sets the forced-colors media feature for a specific story.
    chromatic: { forcedColors: 'active' },
  },
});
WithForcedColors.args = {
	content: [
		() => MenuStories(MenuStories.args)
	],
}
