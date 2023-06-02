export default {
	title: "Opacity checkerboard",
	description: "The Opacity checkerboard component is...",
	component: "OpacityCheckerboard",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			defaultValue: "m",
			table: {
				type: { summary: "string" },
				category: "Component",
				defaultValue: { summary: "m" },
			},
			options: ["s", "m", "l", "xl"],
			control: "select",
		},
	},
	args: {
		rootClass: "spectrum-OpacityCheckerboard",
		size: "m",
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("opacitycheckerboard")
				? "migrated"
				: undefined,
		},
	},
};
export const Default = Template.bind({});
Default.args = {};
