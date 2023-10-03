// Import the component markup template
import { Template } from "./template";

export default {
	title: "Components/Split button",
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
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("splitbutton")
				? "migrated"
				: undefined,
		},
	},
};

export const CTA = Template.bind({});
CTA.args = {
	variant: "accent",
	treatment: "fill",
	iconName: "ChevronDown100",
};

export const CTAMoreIcon = Template.bind({});
CTAMoreIcon.args = {
	variant: "accent",
	treatment: "fill",
	iconName: "More",
};

export const Primary = Template.bind({});
Primary.args = {
	variant: "primary",
	treatment: "outline",
	iconName: "ChevronDown100",
};

export const PrimaryMoreIcon = Template.bind({});
PrimaryMoreIcon.args = {
	variant: "primary",
	treatment: "outline",
	iconName: "More",
};

export const Secondary = Template.bind({});
Secondary.args = {
	variant: "secondary",
	treatment: "outline",
	iconName: "ChevronDown100",
};

export const SecondaryMoreIcon = Template.bind({});
SecondaryMoreIcon.args = {
	variant: "secondary",
	treatment: "outline",
	iconName: "More",
};
