import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isFocused, isSelected } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { SizingGroup, Template } from "./template";

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
export const Default = Template.bind({});
Default.args = {
	imageURL: "example-ava.png",
	altText: "Shantanu",
};

/**
 * The layer variant is used in layer management (such as the Compact or Detail Layers panels).
 */
export const Layer = Template.bind({});
Layer.args = {
	isLayer: true,
	isSelected: false,
	imageURL: "flowers.png",
	altText: "Flowers",
};

/**
 * Thumbnail supports transparent images with a background (color or image) behind them.
 */
export const WithBackground = Template.bind({});
WithBackground.args = {
	backgroundColor: "orange",
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Template.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //
export const Focused = Template.bind({});
Focused.tags = ["autodocs", "!dev"];
Focused.args = {
	imageURL: "example-ava.png",
	altText: "Shantanu",
	isFocused: true,
};
Focused.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

/**
 * Thumbnail should only be displayed as disabled if the entire component is also disabled.
 */
export const Disabled = Template.bind({});
Disabled.tags = ["autodocs", "!dev"];
Disabled.args = {
	imageURL: "example-ava.png",
	altText: "Shantanu",
	isDisabled: true,
};
Disabled.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

/**
 * Thumbnail sizes scale exponentially, based on the Spectrum type scale, ranging from size-50 to size-1000.
 */
export const Sizing = SizingGroup.bind({});
Sizing.tags = ["autodocs", "!dev"];
Sizing.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

/**
 * The cover variant allows images to maintain their aspect ratio while filling the entire content box.
 */
export const Cover = Template.bind({});
Cover.storyName = "Image Fit (Cover)";
Cover.tags = ["autodocs", "!dev"];
Cover.args = {
	imageURL: "example-card-landscape.png",
	altText: "Landscape with mountains and lake",
	isCover: true,
};
Cover.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

/**
 * Portrait images will fill vertically and have space on either side.
 */
export const Portrait = Template.bind({});
Portrait.storyName = "Image Fit (Portrait)";
Portrait.tags = ["autodocs", "!dev"];
Portrait.args = {
	imageURL: "example-card-portrait.png",
	altText: "Cityscape with lights",
};
Portrait.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

/**
 * Landscape images will fill horizontally and have space above and below.
 */
export const Landscape = Template.bind({});
Landscape.storyName = "Image Fit (Landscape)";
Landscape.tags = ["autodocs", "!dev"];
Landscape.args = {
	imageURL: "example-card-landscape.png",
	altText: "Landscape with mountains and lake",
};
Landscape.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};

/**
 * When used in layer management, the thumbnail is given a thick blue border to indicate its selection.
 */
export const SelectedLayer = Template.bind({});
SelectedLayer.storyName = "Layer (Selected)";
SelectedLayer.tags = ["autodocs", "!dev"];
SelectedLayer.args = {
	imageURL: "flowers.png",
	altText: "Flowers",
	isLayer: true,
	isSelected: true,
};
SelectedLayer.parameters = {
	chromatic: {
		disableSnapshot: true,
	},
};
