import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isActive, isFocused, isHovered } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { LinkGroup } from "./link.test.js";

/**
 * A link allow users to navigate to a different location. They can be presented in-line inside a paragraph or as a standalone text.
 */
export default {
	title: "Link",
	component: "Link",
	argTypes: {
		url: {
			name: "URL",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "url",
		},
		text: {
			name: "Text",
			type: { name: "string", required: true },
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
			options: ["secondary"],
			control: "select",
		},
		isHovered,
		isActive,
		isFocused,
		isVisited: {
			name: "Visited",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		staticColor: {
			name: "Static color",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			options: ["white", "black"],
			control: "select",
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
	},
	args: {
		rootClass: "spectrum-Link",
		isQuiet: false,
		isHovered: false,
		isActive: false,
		isFocused: false,
		isVisited: false,
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Link"],
		},
		componentVersion: version,
	},
};

export const Default = LinkGroup.bind({});
Default.args = {
	url: "https://www.adobe.com",
	text: "Learn more about Adobe",
};

// ********* VRT ONLY ********* //
export const WithForcedColors = LinkGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
