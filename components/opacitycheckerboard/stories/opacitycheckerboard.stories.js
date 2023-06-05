import { Template } from "./template";

export default {
	title: "Opacity checkerboard",
	description: "The Opacity checkerboard component is...",
	component: "OpacityCheckerboard",
	argTypes: {
		hasColorOverlay: {
			name: "Has Color Overlay",
			type: { name: "boolean" },
			defaultValue: false,
			table: {
				category: "Component",
			},
			control: "boolean",
		},
		overlayColor: {
			name: "Overlay Color",
			type: { name: "string" },
			defaultValue: "rgba(255, 0, 0, 0.5)",
			table: {
				category: "Component",
			},
			control: "text",
			if: { arg: "hasColorOverlay", truthy: true },
		},
		backgroundPosition: {
			name: "Position",
			type: { name: "string" },
			defaultValue: "top left",
			table: {
				category: "Component",
			},
			control: "text",
			description: "accepts any valid background-position property",
		},
	},
	args: {
		rootClass: "spectrum-OpacityCheckerboard",
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
