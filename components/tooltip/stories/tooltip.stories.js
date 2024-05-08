
import { isFocused, isOpen } from "@spectrum-css/preview/types";

import { Template } from "./template";


/**
 * Tooltips show contextual help or information about specific components when a user hovers or focuses on them.
 */
const placementOptions = [
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
];

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
			name: "Style",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Variant",
			},
			options: ["neutral", "info", "positive", "negative"],
			control: "inline-radio",
		},
		placement: {
			name: "Placement",
			description: "The placement of the tooltip relative to the source. Note that placements that start with Left/Right do not change with text direction, but Start/End placements do.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Variant",
			},
			options: placementOptions,
			control: "select",
		},
		isOpen,
		isFocused: {
			...isFocused,
			if: { arg: "showOnHover", truthy: true },
		},
		showOnHover: {
			name: "Show tooltip on hover (.u-tooltip-showOnHover &)",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Tooltip",
		isOpen: true,
		isFocused: false,
		showOnHover: true,
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
		states: {
			isOpen: false,
			showOnHover: false,
		}
	},
};

export const Default = Template.bind({});
Default.args = {};
