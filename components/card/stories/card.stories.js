import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as Checkbox } from "@spectrum-css/checkbox/stories/checkbox.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isFocused, isQuiet, isSelected } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { CardGroup } from "./card.test.js";
import { Template } from "./template.js";

/**
 * A card represents a rectangular space to contain text or images. Cards are typically used to encapsulate units of a data set, such as a gallery of image/caption pairs.
 */
export default {
	title: "Card",
	component: "Card",
	argTypes: {
		image: {
			name: "Image",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
		},
		isQuiet: {
			...isQuiet,
			description: "`showAsset: 'image'` must be selected to properly render the quiet styles.",
		},
		isSelected,
		isFocused,
		hasActions: {
			name: "Card actions",
			description: "Adds an action button to the card's header.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		hasQuickAction: {
			name: "Quick action",
			table: { disable: true },
		},
		showAsset: {
			name: "Show asset",
			description: "Select image, file, or folder asset to display in the preview area. The image option will render a full-sized asset preview.",
			type: { name: "string" },
			table: {
				type: { summary: "string | boolean" },
				category: "Component",
			},
			options: ["image", "file", "folder"],
			control: "select",
		},
		title: {
			name: "Title",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		description: {
			name: "Description",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		footer: { table: { disable: true } },
		isGallery: {
			name: "Gallery preview",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "isHorizontal", truthy: false },
		},
		isCardAssetOverride: {
			name: "Override default image styles",
			description: "Scales image to fill all available preview area space for gallery or full-sized previews.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "showAsset", eq: "image"},
		},
		isGrid: { table: { disable: true } },
		isHorizontal: {
			name: "Horizontal orientation",
			description: "Select an option from the `showAsset` control to see the horizontal orientation of cards.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "image", truthy: true },
		},
		isDropTarget: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Card",
		isSelected: false,
		isFocused: false,
		isQuiet: false,
		isGrid: false,
		isGallery: false,
		isDropTarget: false,
		hasActions: true,
		hasQuickAction: true,
		isHorizontal: false,
		isCardAssetOverride: false,
	},
	parameters: {
		actions: {
			handles: [
				...(ActionButton.parameters?.actions?.handles ?? []),
				...(Checkbox.parameters?.actions?.handles ?? []),
			],
		},
		packageJson,
		metadata,
	},
};

/**
 *  Cards can either be standard or quiet style. A standard card includes a cover photo and footer, with buttons and more information. A vertical layout is default for cards, and the recommended default preview size is 2:1.
 */
export const Default = CardGroup.bind({});
Default.args = {
	title: "Card title",
	image: "example-card-portrait.png",
	description: "Optional description that should be one or two lines",
	footer: [ "Footer" ],
};

// ********* VRT ONLY ********* //
export const WithForcedColors = CardGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //
export const Selected = Template.bind({});
Selected.tags = ["!dev"];
Selected.parameters = {
	chromatic: { disableSnapshot: true },
};
Selected.args = {
	...Default.args,
	isSelected: true,
};
Selected.storyName = "Default - selected";

export const Focused = Template.bind({});
Focused.args = {
	...Default.args,
	title: "Card title that is longer and should wrap",
	isFocused: true,
};
Focused.tags = ["!dev"];
Focused.parameters = {
	chromatic: { disableSnapshot: true },
};
Focused.storyName = "Default - focused";

/**
 * Quiet card styling is reserved for very simple cards with little metadata. The border of the `.spectrum-Card` element is removed, and additional rounded corners are added to the `.spectrum-Card-preview` container.
 */
export const Quiet = Template.bind({});
Quiet.args = {
	...Default.args,
	showAsset: "image",
	image: "example-ava@2x.png",
	isQuiet: true,
};
Quiet.tags = ["!dev"];
Quiet.parameters = {
	chromatic: { disableSnapshot: true },
};

/** A quiet card for a file asset. */
export const QuietFile = Template.bind({});
QuietFile.storyName = "Quiet - file";
QuietFile.args = {
	...Quiet.args,
	title: "FileName",
	description: "PDF",
	showAsset: "file",
};
QuietFile.tags = ["!dev"];
QuietFile.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A card with a horizontal layout. Horizontal cards always have a square preview, and the image is cropped to fit inside the square. These can only be laid out in a tile grid where every card is the same size.
 * */
export const Horizontal = Template.bind({});
Horizontal.tags = ["!dev"];
Horizontal.parameters = {
	chromatic: { disableSnapshot: true },
};
Horizontal.args = {
	...Default.args,
	showAsset: "file",
	isHorizontal: true,
	hasActions: false,
	hasQuickAction: false,
};

/**
 * A card with no photo.
 * */
export const NoImage = Template.bind({});
NoImage.args = {
	...Default.args,
	image: undefined,
};
NoImage.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A quiet card for a folder asset.
 * */
export const QuietFolder = Quiet.bind({});
QuietFolder.args = {
	title: "Name",
	showAsset: "folder",
	description: "10/15/18",
	isQuiet: true,
};
QuietFolder.tags = ["!dev"];
QuietFolder.parameters = {
	chromatic: { disableSnapshot: true },
};
QuietFolder.storyName = "Quiet - folder";

export const QuietFocused = Quiet.bind({});
QuietFocused.args = {
	...Quiet.args,
	isFocused: true,
};
QuietFocused.tags = ["!dev"];
QuietFocused.parameters = {
	chromatic: { disableSnapshot: true },
};
QuietFocused.storyName = "Quiet - focused";

export const QuietSelected = Quiet.bind({});
QuietSelected.args = {
	...Quiet.args,
	isSelected: true,
};
QuietSelected.tags = ["!dev"];
QuietSelected.parameters = {
	chromatic: { disableSnapshot: true },
};
QuietSelected.storyName = "Quiet - selected";

/**
 * Card preview areas can have any aspect ratio between 4:1 (shortest) and 3:4 (tallest).
 */
export const AssetPreview = Template.bind({});
AssetPreview.args = {
	...Default.args,
	showAsset: "image",
	hasActions: false,
	isCardAssetOverride: true,
	customStyles: {
		"width": "300px",
	}
};
AssetPreview.tags = ["!dev"];
AssetPreview.parameters = {
	chromatic: { disableSnapshot: true },
};
AssetPreview.storyName = "Full-size asset preview";

/**
 * A gallery card for an image.
 */
export const Gallery = Template.bind({});
Gallery.args = {
	title: "Card title",
	showAsset: "image",
	image: "example-card-landscape.png",
	description: "jpg",
	isGallery: true,
	isCardAssetOverride: true,
	customStyles: {
		"width": "700px",
	}
};
Gallery.tags = ["!dev"];
Gallery.parameters = {
	chromatic: { disableSnapshot: true },
};
