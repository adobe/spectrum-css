import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isFocused } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { DialGroup } from "./dial.test.js";
import { Template } from "./template.js";

/**
 * A dial is an input control used for selecting a value within a range, similar to a slider. It's often used in audio and video mixing and editing applications, where horizontal space is limited.
 */
export default {
	title: "Dial",
	component: "Dial",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m"],
			control: "select",
		},
		label: {
			name: "Label",
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		isFocusVisible: isFocused,
		isDragged: {
			name: "Dragged",
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
	},
	args: {
		rootClass: "spectrum-Dial",
		size: "m",
		isFocusVisible: false,
		isDragged: false,
		isDisabled: false,
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = DialGroup.bind();
Default.args = {};

export const Small = Template.bind();
Small.args = {
	size: "s",
};
Small.parameters = {
	chromatic: { disableSnapshot: true },
};
Small.tags = ["!dev"];

export const WithLabel = Template.bind();
WithLabel.args = {
	label: "Volume",
};
WithLabel.parameters = {
	chromatic: { disableSnapshot: true },
};
WithLabel.tags = ["!dev"];

export const Disabled = Template.bind();
Disabled.args = {
	isDisabled: true,
};
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};
Disabled.tags = ["!dev"];

// ********* VRT ONLY ********* //
export const WithForcedColors = DialGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
