import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isQuiet, size } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { Template } from "./template";

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
		isStacked: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-InfieldButton",
		size: "m",
		position: "left",
		iconName: "Add",
		isQuiet: false,
		isDisabled: false,
		isStacked: false,
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = Template.bind({});
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
Quiet.args = {
	isQuiet: true
};

export const Disabled = Template.bind({});
Disabled.args = {
	isDisabled: true
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Template.bind({});
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
