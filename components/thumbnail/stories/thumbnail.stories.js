import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isFocused, isSelected } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { Template, ThumbnailGroup } from "./template";

/**
 * A thumbnail is used to display a preview of an image, layer, or effect.
 */
export default {
	title: "Thumbnail",
	component: "Thumbnail",
	argTypes: {
		reduceMotion: { table: { disable: true } },
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: [
				"50",
				"75",
				"100",
				"200",
				"300",
				"400",
				"500",
				"600",
				"700",
				"800",
				"900",
				"1000",
			],
			control: "select",
		},
		imageURL: {
			name: "Image URL",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
		},
		svg: { table: { disable: true } },
		altText: {
			name: "Descriptive text for the image",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		backgroundColor: {
			name: "Background color",
			description: "Optional value for `background-color` style property.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "color",
		},
		isCover: {
			name: "Cover",
			description:
				"Images will maintain their aspect ratio while filling the entire content box.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isLayer: {
			name: "Layer",
			description:
				"When used in layer management (such as the Compact or Detail Layers panels).",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isSelected: {
			...isSelected,
			if: { arg: "isLayer" },
		},
		isFocused,
	},
	args: {
		rootClass: "spectrum-Thumbnail",
		size: "1000",
		isCover: false,
		isLayer: false,
		isDisabled: false,
		isSelected: false,
		isFocused: false,
		imageURL: "example-card-landscape.png",
		altText: "Landscape with mountains and lake",
	},
	parameters: {
		actions: {
			handles: [],
		},
		componentVersion: version,
	},
};

// @todo combine variants into one snapshot
export const Default = ThumbnailGroup.bind({});
Default.args = {};

export const Layer = Template.bind({});
Layer.tags = ["autodocs", "!dev"];
Layer.args = {
	isLayer: true,
	isSelected: false,
};
Layer.parameters = {
	chromatic: { disableSnapshot: true },
};

export const WithBackground = Template.bind({});
WithBackground.tags = ["autodocs", "!dev"];
WithBackground.args = {
	backgroundColor: "orange",
};
WithBackground.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = ThumbnailGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
