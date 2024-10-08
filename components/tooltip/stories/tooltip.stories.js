import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isFocused, isOpen } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { SemanticVariantGroup, TooltipPlacementGroup, TooltipShowOnHover } from "./template.js";
import { PlacementVariants } from "./tooltip.test.js";

/**
 * A tooltip shows contextual help or information about specific components when a user hovers or focuses on it.
 */
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
			description: "The placement of the tooltip relative to the source. Note that placements that start with left/right do not change with text direction, but start/end placements do.",
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
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=2591-4482",
		},
		packageJson: pkgJson,
	},
};

export const Default = PlacementVariants.bind({});
Default.args = {};

// ********* DOCS ONLY ********* //
/**
 * A tooltip is positioned in relation to its target. There are 22 available positions. Ten of those positions use
 * logical properties, containing the words "start" or "end", and will change side if text direction is changed.
 *
 * Position classes use the following naming convention: the first term is the tooltip's position and the second term
 * is its source's position. For example, for the position and modifier class `--top-left`, the tooltip is positioned
 * at the top and the source is to the left. The default placement value if none is specified is at the top.
 */
export const Placement = TooltipPlacementGroup.bind({});
Placement.tags = ["!dev"];
Placement.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A tooltip that shows on hover using CSS only. Note that this approach does not support text wrapping. Also, note
 * that these tooltips will likely not work on touch-enabled devices without additional client-side scripting.
 */
export const ShowOnHover = TooltipShowOnHover.bind({});
ShowOnHover.tags = ["!dev"];
ShowOnHover.args = {
	label: "Tooltip",
	isOpen: false,
};
ShowOnHover.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * By default, tooltips are the neutral variant. This is the most common variant because most tooltips are used to only
 * disclose additional information, without conveying a semantic meaning. The neutral variant never includes an icon.
 * 
 * Tooltips also come in other semantic variants: informative (blue), positive (green), and negative (red). These use
 * [semantic colors](https://spectrum.adobe.com/page/color-system/#Color-semantics) to communicate the meaning.
 * 
 * These semantic variants include an icon to supplement the messaging. These icons are predefined and can not be
 * customized. Unless it's being used to provide context about the exact same icon, a semantic tooltip should always
 * show an icon. Doing this is essential for helping users with color vision deficiency to discern the message tone.
 */
export const SemanticVariants = SemanticVariantGroup.bind({});
SemanticVariants.tags = ["!dev"];
SemanticVariants.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = PlacementVariants.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
