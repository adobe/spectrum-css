import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isDragged, isFocused, size } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { DialGroup } from "./dial.test.js";
import { Template } from "./template.js";

/**
 * A dial is an input control used for selecting a value within a range, similar to a slider. It's often used in audio and video mixing and editing applications, where horizontal space is limited.
 */
export default {
	title: "Dial",
	component: "Dial",
	argTypes: {
		size: size(["s", "m"]),
		label: {
			name: "Label",
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		isFocusVisible: isFocused,
		isDragged,
		isDisabled,
	},
	args: {
		rootClass: "spectrum-Dial",
		size: "m",
		isFocusVisible: false,
		isDragged: false,
		isDisabled: false,
	},
	parameters: {
		packageJson,
		metadata,
	},
	tags: ["migrated"],
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
