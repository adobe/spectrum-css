import { Template } from "./template";

import { isOpen } from "@spectrum-css/preview/types";

/**
 * An underlay component is used with modal and dialog. It lays over the rest of the page to deliver a blocking layer between the two contexts.
 */
export default {
	title: "Components/Underlay",
	component: "Underlay",
	argTypes: {
		isOpen,
		content: {
			table: { disable: true }
		},
	},
	args: {
		rootClass: "spectrum-Underlay",
		isOpen: true,
		content: [],
	},
	parameters: {
		chromatic: { disable: true },
		actions: {
			handles: []
		},
		status: {
			type: "migrated"
		},
		states: {
			isOpen: false,
		}
	}
};

export const Default = Template.bind({});
Default.args = {};
