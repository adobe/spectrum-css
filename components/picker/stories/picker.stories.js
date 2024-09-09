import { WithDividers as MenuStories } from "@spectrum-css/menu/stories/menu.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isInvalid, isKeyboardFocused, isLoading, isOpen, isQuiet, size } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { PickerGroup } from "./picker.test.js";

/**
 * A picker outlines a set of options for a user.
 */
export default {
	title: "Picker",
	component: "Picker",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
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
		withSwitch: {
			name: "Display with a switch component",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "labelPosition", eq: "left" },
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
		isQuiet,
		isOpen,
		isKeyboardFocused,
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
		isKeyboardFocused: false,
		isLoading: false,
		isDisabled: false,
		isInvalid: false,
		isOpen: false,
		withSwitch: false,
		content: [
			(passthrough, context) => MenuStories({
				...passthrough,
				...MenuStories.args,
			}, context)
		],
	},
	parameters: {
		docs: {
			story: {
				height: "400px"
			}
		},
		packageJson: pkgJson,
	},
};

export const Default = PickerGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = PickerGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
WithForcedColors.args = {};
