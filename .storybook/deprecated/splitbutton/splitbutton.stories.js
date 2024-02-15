import { Template } from "@spectrum-css/splitbutton/stories/template.js";

export default {
	title: "Deprecated/Split button",
	description:
		"A split button surfaces an immediately invokable action via it's main button, as well as a list of alternative actions in its toggle-able menu overlay.",
	component: "SplitButton",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: { disable: true },
			options: ["m"],
			control: "select",
		},
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: { disable: true },
			options: ["accent", "primary", "secondary"],
			control: "select",
		},
		position: {
			name: "Position",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["right", "left"],
			control: "select",
		},
		iconName: { table: { disable: true } },
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
	},
	args: {
		rootClass: "spectrum-SplitButton",
		size: "m",
		position: "right",
		label: "Split Button",
		variant: "accent",
		treatment: "fill",
		iconName: "ChevronDown100",
	},
	parameters: {
		actions: {
			handles: [],
		},
		chromatic: { disable: true },
		status: {
			type: "deprecated"
		},
	},
};

export const Default = Template.bind({});
Default.args = {};
