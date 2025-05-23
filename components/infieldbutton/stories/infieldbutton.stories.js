import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isActive, isDisabled, isFocused, isHovered, isQuiet, size } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { InfieldButtonGroup } from "./infieldbutton.test.js";
import { Template } from "./template.js";

/**
 * The in-field button component is a button used inside a text field.
 */
export default {
	title: "In-field button",
	component: "InFieldButton",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		isQuiet,
		position: {
			name: "Position",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["left", "right", "top", "bottom"],
			control: "select"
		},
		iconName: {
			...IconStories?.argTypes?.iconName ?? {},
			if: false,
		},
		isDisabled,
		isFocused,
		isActive,
		isHovered,
		isStacked: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-InfieldButton",
		size: "m",
		position: "left",
		iconName: "Add",
		isQuiet: false,
		isDisabled: false,
		isFocused: false,
		isHovered: false,
		isActive: false,
		isStacked: false,
	},
	parameters: {
		packageJson,
		metadata,
	},
};

export const Default = InfieldButtonGroup.bind({});
Default.args = {};

export const Start = Template.bind({});
Start.tags = ["!dev"];
Start.args = {
	position: "left"
};
Start.parameters = {
	chromatic: { disableSnapshot: true },
};

export const End = Template.bind({});
End.tags = ["!dev"];
End.args = {
	position: "right"
};
End.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Quiet = Template.bind({});
Quiet.tags = ["!dev"];
Quiet.args = {
	isQuiet: true
};
Quiet.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Disabled = Template.bind({});
Disabled.tags = ["!dev"];
Disabled.args = {
	isDisabled: true
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = InfieldButtonGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

export const Stacked = Template.bind({});
Stacked.tags = ["!dev"];
Stacked.args = {
	isStacked: true,
};
Stacked.parameters = {
	chromatic: { disableSnapshot: true },
};
