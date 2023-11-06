import { Template } from "./template";

import { isDisabled } from "@spectrum-css/preview/types/states.js";

/** An image representing a user. */
export default {
	title: "Components/Avatar",
	component: "Avatar",
	argTypes: {
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
		hasLink: {
			name: "Has Link",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
			if: { arg: "isDisabled", truthy: false },
		},
		isDisabled,
	},
	args: {
		rootClass: "spectrum-Avatar",
		size: "700",
		image: "example-ava.png",
		altText: "Avatar",
		isDisabled: false,
		hasLink: true,
	},
	parameters: {
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("avatar")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};
