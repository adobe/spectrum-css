import { Template } from "./template";

import { isOpen } from "@spectrum-css/preview/types/states.js";

import { Template as Dialog } from "@spectrum-css/dialog/stories/template.js";

/** Tray dialogs are typically used to portray information on mobile device or smaller screens. */
export default {
	title: "Components/Tray",
	component: "Tray",
	argTypes: {
		content: { table: { disable: true } },
		isOpen,
		heading: {
			name: "Heading",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
	},
	args: {
		rootClass: "spectrum-Tray",
		customClasses: ["spectrum-Modal"],
		isOpen: true,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("tray")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {
	heading: "Tray Dialog",
	content: [
		() => Dialog({
				heading: "New Messages",
				content: ["You have 5 new messages!"],
				isDismissable: false,
			})
	],
};
