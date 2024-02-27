// Import the component markup template
import { Template } from "./template";

export default {
	title: "Components/Link",
	description:
		"A link allow users to navigate to a different location. They can be presented in-line inside a paragraph or as a standalone text.",
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
			name: "StaticColor",
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
		url: "https://www.adobe.com",
		text: "Link using spectrum-Link",
		isQuiet: false,
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Link"],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("link") ? "migrated" : "legacy",
			version: process.env.VERSIONS?.["link"],
		},
	},
};

export const Default = Template.bind({});
Default.args = {};
