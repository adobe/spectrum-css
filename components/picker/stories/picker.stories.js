// Import the component markup template
import { Template } from "./template";

import { Default as MenuStories } from "@spectrum-css/menu/stories/menu.stories.js";

export default {
	title: "Components/Picker",
	description: "A picker outlines a set of options for a user.",
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
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isFocused: {
			name: "Focused",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isLoading: {
			name: "Loading",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isInvalid: {
			name: "Invalid input",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
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
				: undefined,
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
	labelPosition: "left",
	placeholder: "Select Your State Or Province"
};

export const Quiet = Template.bind({});
Quiet.args = {
	isQuiet: true,
	content: [
		() => MenuStories(MenuStories.args)
	],
};

export const QuietSideLabel = Template.bind({});
QuietSideLabel.args = {
	isQuiet: true,
	content: [
		() => MenuStories(MenuStories.args)
	],
	labelPosition: "left"
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
