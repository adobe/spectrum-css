import { html } from "lit";
import { when } from "lit/directives/when.js";

import { isDisabled, isFocused, isSelected } from "@spectrum-css/preview/types";

import { Template } from "./template";

/**
 * A thumbnail is used to display a preview of an image, layer, or effect.
 */
export default {
	title: "Components/Thumbnail",
	component: "Thumbnail",
	argTypes: {
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
				category: "Variant",
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
				category: "Variant",
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
		size: "1000",
		isCover: false,
		isLayer: false,
		isDisabled: false,
		isSelected: false,
		isFocused: false,
		imageURL: "example-card-landscape.png",
		altText: "Landscape with mountains and lake",
		customStorybookStyles: {
			"display": "flex",
			"align-items": "flex-start",
			"gap": "20px",
			"flex-wrap": "wrap",
		},
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
	},
};

const Thumbnails = (args) => html`
	${Template(args)}
	${when(window.isChromatic(), () => Template({
		...args,
		backgroundColor: "orange",
	}))}
`;

export const Default = Thumbnails.bind({});
Default.args = {};
