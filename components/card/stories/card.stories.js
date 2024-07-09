import { version } from "../package.json";
import { Template } from "./template";

import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as Checkbox } from "@spectrum-css/checkbox/stories/checkbox.stories.js";

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
		isSelected: {
			name: "Selected",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean"
		},
		isFocused: {
			name: "Focused",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean"
		},
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
};

const defaultArgs = {
	title: "Card title",
	image: "example-card-portrait.png",
	description: "Optional description that should be one or two lines",
	footer: [ "Footer" ],
};

export const Default = Template.bind({});
Default.args = defaultArgs;
export const Selected = Template.bind({});
Selected.args = {
	...defaultArgs,
	isSelected: true
};
export const Focused = Template.bind({});
Focused.args = {
	...defaultArgs,
	isFocused: true,
	title: "Card title that is longer and should wrap",
	customStyles: { "max-inline-size": "205px"},
};

export const Quiet = Template.bind({});
Quiet.args = {
	title: "Name",
	showAsset: "image",
	image: "example-ava@2x.png",
	description: "10/15/18",
	isQuiet: true,
};

export const QuietFile = Template.bind({});
QuietFile.storyName = "Quiet (file)";
QuietFile.args = {
	title: "FileName",
	description: "PDF",
	showAsset: "file",
	isQuiet: true,
};

export const Horizontal = Template.bind({});
Horizontal.argTypes = {
	hasActions: { table: { disable: true } },
	hasQuickAction: { table: { disable: true } },
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
NoImage.tags = ["autodocs", "!dev"];
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
QuietFolder.tags = ["autodocs", "!dev"];
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
QuietFocused.tags = ["autodocs", "!dev"];
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
QuietSelected.tags = ["autodocs", "!dev"];
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
AssetPreview.tags = ["autodocs", "!dev"];
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
Gallery.tags = ["autodocs", "!dev"];
Gallery.parameters = {
	chromatic: { disableSnapshot: true },
};
