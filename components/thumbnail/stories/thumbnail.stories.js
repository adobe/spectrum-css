// Import the component markup template
import { Template } from "./template";

export default {
	title: "Components/Thumbnail",
	description:
		"A thumbnail is used to display a preview of an image, layer, or effect.",
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
			name: "Background Color",
			description: "Optional value for `background-color` style property.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
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
			name: "Selected",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
			if: { arg: "isLayer" },
		},
	},
	args: {
		rootClass: "spectrum-Thumbnail",
		size: "500",
		isCover: false,
		isLayer: false,
		isDisabled: false,
		isSelected: false,
		imageURL: "example-card-landscape.png",
		altText: "Landscape with mountains and lake",
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("thumbnail")
				? "migrated"
				: undefined,
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

export const Layer = Template.bind({});
Layer.args = {
	isLayer: true,
	isSelected: false,
};

export const WithBackground = Template.bind({});
WithBackground.args = {
	backgroundColor: "orange",
};
