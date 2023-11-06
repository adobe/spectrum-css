import { Template } from "./template";

import { isDisabled, isDragged, isFocused } from "@spectrum-css/preview/types/states.js";

/** A dial is an input control used for selecting a value within a range, similar to a slider. It's often used in audio and video mixing and editing applications, where horizontal space is limited. */
export default {
	title: "Components/Dial",
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
		isFocused,
		isDragged,
		isDisabled,
	},
	args: {
		rootClass: "spectrum-Dial",
		size: "m",
		isFocused: false,
		isDragged: false,
		isDisabled: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("dial")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind();
Default.args = {};

export const DefaultExpress = Template.bind();
DefaultExpress.args = {
  express: true,
};

export const Small = Template.bind();
Small.args = {
  size: "s",
}

export const WithLabel = Template.bind();
WithLabel.args = {
  label: "Volume",
};

export const Disabled = Template.bind();
Disabled.args = {
  isDisabled: true,
}
