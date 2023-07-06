// Import the component markup template
import { Template } from "./template";

export default {
	title: "Components/Coach mark",
	description:
		"The coach mark component can be used to bring added attention to specific parts of a page.",
	component: "CoachMark",
	argTypes: {
		hasActionMenu: {
			name: "Disaply ActionMenu",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		hasPagination: {
			name: "Disaply pagination",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		hasImage: {
			name: "Disaply image",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isMobile: {
			name: "Mobile Variant",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-CoachMark",
		hasActionMenu: true,
		hasPagination: true,
		hasImage: false,
		isMobile: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("coachmark")
				? "migrated"
				: undefined,
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

export const withImage = Template.bind({});
withImage.args = {
	hasImage: true,
};

export const Mobile = Template.bind({});
Mobile.args = {
	isMobile: true,
};
