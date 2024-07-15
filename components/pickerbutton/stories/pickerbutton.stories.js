import { default as Icon } from "@spectrum-css/icon/stories/icon.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isFocused, isOpen } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { Template } from "./template";

/**
 * The picker button component is used as a dropdown trigger. See Combobox.
 */
export default {
	title: "Picker button",
	component: "PickerButton",
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
		iconType: {
			name: "Icon",
			type: { name: "string", required: false },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			options: ["ui", "workflow"],
			control: "inline-radio",
		},
		iconName: {
			...Icon.argTypes.iconName,
			if: { arg: "iconType", eq: "workflow" },
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
		isOpen: {
			...isOpen,
			if: { arg: "isDisabled", truthy: false }
		},
		isRounded: {
			name: "Rounded",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
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
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isFocused: {
			...isFocused,
			if: { arg: "isDisabled", truthy: false }
		},
		position: {
			name: "Position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["right", "left"],
			control: "inline-radio",
		},
	},
	args: {
		rootClass: "spectrum-PickerButton",
		label: undefined,
		size: "m",
		isOpen: false,
		isRounded: false,
		isQuiet: false,
		isDisabled: false,
		isFocused: false,
		isKeyboardFocused: false,
		iconType: "ui",
		iconName: "ChevronDown",
		position: "right"
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
	label: "Select",
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Template.bind({});
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

export const Disabled = Template.bind({});
Disabled.tags = ["!autodocs", "!dev", "test"];
Disabled.args = {
	isDisabled: true
};

export const Quiet = Template.bind({});
Quiet.tags = ["!autodocs", "!dev", "test"];
Quiet.args = {
	isQuiet: true
};
