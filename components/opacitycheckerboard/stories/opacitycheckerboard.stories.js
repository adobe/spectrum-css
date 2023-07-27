import { Template } from "./template";

export default {
	title: "Components/Opacity Checkerboard",
	description:
		"Opacity checkerboard is used with other components to highlight opacity.",
	component: "OpacityCheckerboard",
	argTypes: {
		hasColorOverlay: {
			name: "Has Color Overlay",
			type: { name: "boolean" },
			table: {
				category: "Component",
			},
			control: "boolean",
		},
		overlayColor: {
			name: "Overlay Color",
			type: { name: "string" },
			table: {
				category: "Component",
			},
			control: "text",
			if: { arg: "hasColorOverlay", truthy: true },
		},
		backgroundPosition: {
			name: "Position",
			type: { name: "string" },
			table: {
				category: "Component",
			},
			control: "text",
			description: "Value for <code>--mod-opacity-checkerboard-position</code>. Accepts any valid CSS background-position property value.",
		},
		componentOnly: {
			name: "Use Component Markup Only",
			type: { name: "boolean" },
			table: {
				disable: true,
			},
		},
	},
	args: {
		rootClass: "spectrum-OpacityCheckerboard",
		hasColorOverlay: false,
		overlayColor: "rgba(255, 0, 0, 0.5)",
		backgroundPosition: "top left",
		componentOnly: false,
		content: '',
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

export const CheckerboardPosition = Template.bind({});
CheckerboardPosition.args = {
	backgroundPosition: 'center center',
};
CheckerboardPosition.parameters = {
	docs: {
		description: {
			story:
				"An example of using the <code>--mod-opacity-checkerboard-position</code> custom property to adjust the position of the checkerboard pattern.",
		},
	},
};