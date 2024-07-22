import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as Checkbox } from "@spectrum-css/checkbox/stories/checkbox.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isFocused, isSelected } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { CardGroup, Template } from "./template";

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
			name: "Quiet styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isSelected,
		isFocused,
		hasActions: {
			name: "Card actions",
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
		isGallery: { table: { disable: true } },
		isCardAssetOverride: { table: { disable: true } },
		isGrid: { table: { disable: true } },
		isHorizontal: { table: { disable: true } },
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
	},
	parameters: {
		actions: {
			handles: [
				...(ActionButton.parameters?.actions?.handles ?? []),
				...(Checkbox.parameters?.actions?.handles ?? []),
			],
		},
		componentVersion: version,
	},
	tags: ["!autodocs"],
};

export const Default = CardGroup.bind({});
Default.args = {
	title: "Card title",
	image: "example-card-portrait.png",
	description: "Optional description that should be one or two lines",
	footer: [ "Footer" ],
};

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

// ********* DOCS ONLY ********* //
export const Selected = Default.bind({});
Selected.tags = ["!dev"];
Selected.parameters = {
	chromatic: { disableSnapshot: true },
};
Selected.args = {
	isSelected: true
};

export const Focused = Default.bind({});
Focused.args = {
	isFocused: true,
	title: "Card title that is longer and should wrap",
	customStyles: { "max-inline-size": "205px"},
};
Focused.tags = ["!dev"];
Focused.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Quiet = Template.bind({});
Quiet.args = {
	title: "Name",
	showAsset: "image",
	image: "example-ava@2x.png",
	description: "10/15/18",
	isQuiet: true,
};
Quiet.tags = ["!dev"];
Quiet.parameters = {
	chromatic: { disableSnapshot: true },
};

export const QuietFile = Template.bind({});
QuietFile.storyName = "Quiet (file)";
QuietFile.args = {
	title: "FileName",
	description: "PDF",
	showAsset: "file",
	image: undefined,
	isQuiet: true,
};
QuietFile.tags = ["!dev"];
QuietFile.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Horizontal = Template.bind({});
Horizontal.tags = ["!dev"];
Horizontal.parameters = {
	chromatic: { disableSnapshot: true },
};
Horizontal.args = {
	title: "Card title",
	description: "jpg",
	showAsset: "file",
	isQuiet: false,
	isHorizontal: true,
	hasActions: false,
	hasQuickAction: false,
};

export const NoImage = Template.bind({});
NoImage.args = {
	title: "Card title",
	description: "Optional description that should be one or two lines",
};
NoImage.tags = ["!dev"];
NoImage.parameters = {
	chromatic: { disableSnapshot: true },
};

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

export const QuietFocused = Quiet.bind({});
QuietFocused.args = {
	title: "Name",
	showAsset: "image",
	image: "example-ava@2x.png",
	description: "10/15/18",
	isQuiet: true,
	isFocused: true,
};
QuietFocused.tags = ["!dev"];
QuietFocused.parameters = {
	chromatic: { disableSnapshot: true },
};

export const QuietSelected = Quiet.bind({});
QuietSelected.args = {
	title: "Name",
	showAsset: "image",
	image: "example-ava@2x.png",
	description: "10/15/18",
	isQuiet: true,
	isSelected: true,
};
QuietSelected.tags = ["!dev"];
QuietSelected.parameters = {
	chromatic: { disableSnapshot: true },
};

export const AssetPreview = Template.bind({});
AssetPreview.args = {
	title: "Card title",
	showAsset: "image",
	image: "example-card-portrait.png",
	description: "jpg",
	hasActions: false,
	isCardAssetOverride: true,
	customStyles: {
		"width": "200px",
	}
};
AssetPreview.tags = ["!dev"];
AssetPreview.parameters = {
	chromatic: { disableSnapshot: true },
};

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
