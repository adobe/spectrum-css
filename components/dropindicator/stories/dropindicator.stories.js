import { Template } from "./template";

export default {
	title: "Components/Drop indicator",
	description:
		"The Drop indicator component is used to show the insertion position into a list or table.",
	component: "DropIndicator",
	argTypes: {
		/* No theme styles for express available */
		express: { table: { disable: true } },
		direction: {
			name: "Direction",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["horizontal", "vertical"],
			control: "select",
		},
		size: {
			name: "Size",
			description:
				"Size of the drop indicator, requires a unit be provided; i.e., 200px or 100%.",
			type: { name: "string", required: false },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: { type: "text" },
		},
	},
	args: {
		rootClass: "spectrum-DropIndicator",
		direction: "vertical",
		size: "300px",
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("dropindicator")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};
