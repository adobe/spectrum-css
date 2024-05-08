import { Template } from "./template";

import { isDisabled, isDragged, isFocused, isKeyboardFocused } from "@spectrum-css/preview/types";

/**
 * A dial is an input control used for selecting a value within a range, similar to a slider. It's often used in audio and video mixing and editing applications, where horizontal space is limited.
 */
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
		isKeyboardFocused,
		isDragged,
		isDisabled,
	},
	args: {
		rootClass: "spectrum-Dial",
		size: "m",
		isFocused: false,
		isDragged: false,
		isDisabled: false,
		customStorybookStyles: {
			"display": "flex",
			"align-items": "flex-start",
			"gap": "12px",
			"flex-wrap": "wrap",
		},
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
	},
};

export const Default = Template.bind();
Default.args = {};

export const WithLabel = Template.bind();
WithLabel.args = {
	label: "Volume",
};
