import { disableDefaultModes } from "@spectrum-css/preview/modes";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { IllustratedMessageGroup } from "./illustratedmessage.test.js";
import { Template } from "./template.js";

/**
 * The Illustrated Message displays an illustration along with a heading and description. Optionally, part of the illustration can use an accent color. It can be used for status and errors, or as a call to action. For example, the Drop Zone component makes use of Illustrated Message as an area to drag and drop files.
 */
export default {
	title: "Illustrated message",
	component: "IllustratedMessage",
	argTypes: {
		heading: {
			name: "Heading",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		description: {
			name: "Description",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		isHorizontal: {
			name: "Horizontal orientation",
			description: "The default content orientation is vertical. Add the horizontal class to align the illustration to the left.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l"],
			control: "select",
		},
		hasButtons: {
			name: "Show button group",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-IllustratedMessage",
		isHorizontal: false,
		size: "m",
		hasButtons: true,
		heading: "Error 404: Page not found",
		description: "This page isn't available. Try checking the URL or visit a different page.",
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=20032-601",
		},
		packageJson,
		metadata,
		layout: "centered"
	},
};

export const Default = Template.bind({});
Default.args = {
	isHorizontal: false
};


export const Horizontal = Template.bind({});
Horizontal.tags = ["!dev"];
Horizontal.args = {
	isHorizontal: true
};
Horizontal.parameters = {
	chromatic: { disableSnapshot: true },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = IllustratedMessageGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
