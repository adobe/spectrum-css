// Import the component markup template
import { Template } from "./template";

export default {
	title: "Components/Swatch",
	description:
		"A swatch shows a small sample of a fill—such as a color, gradient, texture, or material—that is intended to be applied to an object.",
	component: "Swatch",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["xs", "s", "m", "l",],
			control: "select",
		},
		styles: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Swatch",
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("swatch")
				? "migrated"
				: undefined,
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

export const Transparent = Template.bind({});
Transparent.args = {
	styles: {"--spectrum-picked-color": "rgba(174, 216, 230, 0.3)"},
};