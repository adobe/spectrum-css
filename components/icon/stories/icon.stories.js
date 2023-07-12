// Import the component markup template
import { Template } from "./template";

import { workflowIcons, uiIcons } from "./utilities.js";

export default {
	title: "Components/Icon",
	description:
		"The icons component contains all UI icons used for components as well as the CSS for UI and workflow icons.",
	component: "Icon",
	argTypes: {
		/* Turn off express theme for icon preview b/c they use a separate icon set */
		express: { table: { disable: true } },
		reducedMotion: { table: { disable: true } },
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl", "xxl"],
			control: "select",
		},
		setName: {
			name: "Icon set",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			options: ["ui", "workflow"],
			control: "inline-radio",
		},
		iconName: {
			name: "Workflow icons",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			options: workflowIcons,
			control: "select",
			if: { arg: "setName", eq: "workflow" },
		},
		uiIconName: {
			name: "UI icons",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			options: uiIcons,
			control: "select",
			if: { arg: "setName", eq: "ui" },
		},
		fill: {
			name: "Fill color",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			control: "color",
		},
		useRef: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Icon",
		setName: "workflow",
		iconName: "ABC",
		size: "xl",
	},
	parameters: {
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("icon")
				? "migrated"
				: undefined,
		},
	},
};

export const Default = (args) =>
	Template({
		...args,
		iconName: args.iconName ?? args.uiIconName,
		setName: args.setName ?? (args.uiIconName ? "ui" : "workflow"),
	});
Default.args = {};
