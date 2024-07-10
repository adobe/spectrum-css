import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isFocused, isOpen } from "@spectrum-css/preview/types";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { version } from "../package.json";
import { PlacementVariants } from "./template";

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
	title: "Tooltip",
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
			description: "The placement of the tooltip relative to the source. Note that placements that start with Left/Right do not change with text direction, but Start/End placements do.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
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
		componentVersion: version,
	},
	decorators: [
		(Story, context) => html`
			<style>
				.spectrum-Detail { display: inline-block; }
				.spectrum-Typography > div {
					border: 1px solid var(--spectrum-gray-200);
					border-radius: 4px;
					padding: 0 14px 14px;
					/* Why seafoam? Because it separates it from the component styles. */
					--mod-detail-font-color: var(--spectrum-seafoam-900);
				}
			</style>
			<div
				style=${styleMap({
					"display": "flex",
					"flex-direction": "column",
					"align-items": "flex-start",
					"gap": "16px",
					"--mod-detail-margin-end": "4.8px",
				})}
			>
				${Story(context)}
			</div>
		`,
	],
};

export const Default = PlacementVariants.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
