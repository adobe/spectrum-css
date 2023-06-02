// Import the component markup template
import { Template } from "./template";

export default {
	title: "Avatar",
	description: "An image representing a user.",
	component: "Avatar",
	argTypes: {
		reducedMotion: { table: { disable: true } },
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["50", "75", "100", "200", "300", "400", "500", "600", "700"],
			control: "select",
		},
		image: {
			name: "Image",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
		},
		altText: {
			name: "Alt text",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "text",
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
	},
	args: {
		rootClass: "spectrum-Avatar",
		size: "700",
		image: "example-ava.png",
		altText: "Avatar",
		isDisabled: false,
	},
	parameters: {
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("avatar")
				? "migrated"
				: undefined,
		},
	},
};

export const Default = Template.bind({});
Default.args = {};
