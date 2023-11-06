import { Template } from "./template.js";

import { isDisabled } from "@spectrum-css/preview/types/states.js";

/** This component contains a single input field with both a magnifying glass icon and a "reset" button displayed within it. */
export default {
	title: "Components/Search",
	component: "Search",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl"],
			control: "select",
		},
		isQuiet: {
			name: "Quiet styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isDisabled,
	},
	args: {
		rootClass: "spectrum-Search",
		isQuiet: false,
		isDisabled: false,
	},
	parameters: {
		actions: {
			handles: [
				"change .spectrum-Search-input",
				"click .spectrum-Search-clearButton",
				"click .spectrum-Search-icon",
			],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("search")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};
