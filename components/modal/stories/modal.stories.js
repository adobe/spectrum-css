import { Template } from "./template";

/**
 * A modal component is a dialog box/popup window that is displayed on top of the current page.
 */
export default {
	title: "Modal",
	component: "Modal",
	argTypes: {
		isOpen: {
			description: "Whether the modal is open (visible).",
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		variant: {
			description:
				"Controls how the modal fills the available space. <ul><li>\"responsive\" will fill the screen on small viewports.</li><li>\"fullscreen\" will fill almost all of the available screen space.</li><li>\"fullscreenTakeover\" will fill all of the available screen space.</li></ul>",
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["responsive", "fullscreen", "fullscreenTakeover"],
			control: {
				type: "select",
			},
		},
		content: {
			table: { disable: true },
		},
	},
	args: {
		isOpen: true,
		rootClass: "spectrum-Modal",
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

export const Default = Template.bind({});
Default.args = {
	content: ["Modal is a base component used by other components, and should not be used on its own."],
};
