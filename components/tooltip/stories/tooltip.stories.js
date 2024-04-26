import { Template } from "./template";

/**
 * Tooltips show contextual help or information about specific components when a user hovers or focuses on them.
 */
export default {
	title: "Components/Tooltip",
	component: "Tooltip",
	argTypes: {
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["neutral", "info", "positive", "negative"],
			control: "inline-radio",
		},
		placement: {
			name: "Placement",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: [
				"top",
				"top-left",
				"top-right",
				"top-start",
				"top-end",
				"bottom",
				"bottom-left",
				"bottom-right",
				"bottom-start",
				"bottom-end",
				"right",
				"right-bottom",
				"right-top",
				"left",
				"left-bottom",
				"left-top",
				"start",
				"start-top",
				"start-bottom",
				"end",
				"end-top",
				"end-bottom",
			],
			control: "select",
		},
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isFocused: {
			name: "Focused",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
				disable: true,
			},
			control: "boolean",
			if: { arg: "showOnHover", truthy: true },
		},
		showOnHover: {
			name: "Show tooltip on hover (.u-tooltip-showOnHover &)",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
				disable: true,
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Tooltip",
		isOpen: true,
		isFocused: false,
		showOnHover: false,
		variant: "neutral",
		label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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

export const Default = Template.bind({});
Default.args = {};
