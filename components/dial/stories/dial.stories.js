import { Template } from "./template";

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
		isFocused: {
			name: "Focused",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
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
		isFocused: false,
		isDragged: false,
		isDisabled: false,
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

export const Disabled = Template.bind();
Disabled.args = {
	isDisabled: true,
};
