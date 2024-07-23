import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isActive, isFocused, isHovered } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { FloatingActionButtonGroup } from "./floatingactionbutton.test.js";
import { Template } from "./template.js";

/**
 * The floating action button component is used to give users a more prominent button for high frequency actions.
 *
 * When using floating action button in dark themes, the `background-layer-color-2` will often show up on the base color `gray-50` or `gray-75` or on content, images, etc.
 */
export default {
	title: "Floating action button",
	component: "FloatingActionButton",
	argTypes: {
		variant: {
			name: "Variant",
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
		isActive,
		isHovered,
		isFocused,
		iconName: {
			...(IconStories?.argTypes?.iconName ?? {}),
			if: false,
		},
		reducedMotion: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-FloatingActionButton",
		variant: "primary",
		iconName: "AddCircle",
		isHovered: false,
		isFocused: false,
		isActive: false,
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = FloatingActionButtonGroup.bind({});
Default.storyName = "Default (Primary)";
Default.args = {};

// ********* DOCS ONLY ********* //
export const Secondary = Template.bind({});
Secondary.tags = ["autodocs", "!dev"];
Secondary.args = {
	variant: "secondary",
};
Secondary.parameters = {
	chromatic: {
		disableSnapshot: true,
	}
};

// ********* VRT ONLY ********* //
export const WithForcedColors = FloatingActionButtonGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
