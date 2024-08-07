import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isInvalid, isSelected } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { Template } from "./template";

/**
 * A tag categorizes content. They can represent keywords or people, and are grouped to describe an item or a search request.
 */
export default {
	title: "Tag",
	component: "Tag",
	argTypes: {
		size: {
			name: "Size",
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l"],
			control: "select",
		},
		hasIcon: {
			name: "Has icon",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "hasAvatar", truthy: false },
		},
		iconName: {
			...(IconStories?.argTypes?.iconName ?? {}),
			if: { arg: "hasIcon", truthy: true },
		},
		hasAvatar: {
			name: "Has avatar",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "hasIcon", truthy: false },
		},
		avatarUrl: {
			name: "Avatar image",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
			if: { arg: "hasAvatar", truthy: true },
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
		isEmphasized: {
			name: "Emphasized styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "isInvalid", truthy: false },
		},
		isInvalid,
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isSelected,
		hasClearButton: {
			name: "Clear button",
			description: "True if a button is present to clear the tag.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Tag",
		size: "m",
		label: "Tag label",
		hasIcon: false,
		iconName: "Info",
		avatarUrl: "example-ava.png",
		hasAvatar: false,
		isSelected: false,
		isDisabled: false,
		isInvalid: false,
		isEmphasized: false,
		hasClearButton: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		componentVersion: version,
	},
};

export const Default = Template.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
// @todo combine variants into one snapshot
export const WithForcedColors = Template.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

export const Icon = Template.bind({});
Icon.args = {
	hasIcon: true,
	iconName: "Info",
	label: "Tag label that truncates when it gets too long",
	customStyles: {"max-inline-size": "200px"}
};

export const Avatar = Template.bind({});
Avatar.args = {
	hasAvatar: true,
	avatarUrl: "example-ava.png"
};

export const Removable = Template.bind({});
Removable.args = {
	hasClearButton: true,
};
