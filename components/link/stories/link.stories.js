import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { version } from "../package.json";
import { Template } from "./template";

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
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Link"],
		},
		componentVersion: version,
	},
};

export const Default = Template.bind({});
Default.args = {
	url: "https://www.adobe.com",
	text: "Learn more about Adobe",
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
