import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDisabled, isFocused, isSelected, size } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { Template } from "./template.js";
import { ThumbnailGroup } from "./thumbnail.test.js";

/**
 * A thumbnail is used to display a preview of an image, layer, or effect.
 */
export default {
	title: "Thumbnail",
	component: "Thumbnail",
	argTypes: {
		reduceMotion: { table: { disable: true } },
		size: size([50, 75, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], false),
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
		isDisabled,
		isSelected: {
			...isSelected,
			if: { arg: "isLayer" },
		},
		isFocused,
	},
	args: {
		rootClass: "spectrum-Thumbnail",
		size: 1000,
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
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=29951-634",
		},
		packageJson,
		metadata,
	},
	tags: ["migrated"],
};

// @todo combine variants into one snapshot
export const Default = ThumbnailGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = ThumbnailGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //
/**
 * The layer variant is used in layer management (such as the Compact or Detail Layers panels).
 */
export const Layer = Template.bind({});
Layer.tags = ["!dev"];
Layer.args = {
	isLayer: true,
	isSelected: false,
	imageURL: "flowers.png",
	altText: "Flowers",
};
Layer.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * Thumbnail supports transparent images with a background (color or image) behind them.
 */
export const WithBackground = Template.bind({});
WithBackground.tags = ["!dev"];
WithBackground.args = {
	backgroundColor: "orange",
};
WithBackground.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Focused = Template.bind({});
Focused.tags = ["!dev"];
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
Disabled.tags = ["!dev"];
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
export const Sizing = (args, context) => Sizes({
	Template,
	withHeading: false,
	withBorder: false,
	...args
}, context);
Sizing.tags = ["!dev"];
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
Cover.tags = ["!dev"];
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
Portrait.tags = ["!dev"];
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
Landscape.tags = ["!dev"];
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
SelectedLayer.tags = ["!dev"];
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
