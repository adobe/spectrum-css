import { Template } from "./template";

import { isOpen } from "@spectrum-css/preview/types/states.js";

/** The color loupe component shows the output color that would otherwise be covered by a cursor, stylus, or finger during color selection. */
export default {
	title: "Components/Color loupe",
	component: "Colorloupe",
	argTypes: {
		isOpen,
	},
	args: {
		rootClass: "spectrum-ColorLoupe",
    isOpen: true,
	},
	parameters: {
		chromatic: { diffThreshold: 0.2 },
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("colorloupe")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};
