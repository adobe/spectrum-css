import { Template as Dialog } from "@spectrum-css/dialog/stories/template.js";
import { isOpen } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { TrayGroup } from "./template";

/**
 * Tray dialogs are typically used to portray information on mobile device or smaller screens.
 */
export default {
	title: "Tray",
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
		isOpen: false,
	},
	parameters: {
		chromatic: {
			delay: 2000,
		},
		componentVersion: version,
	}
};

export const Default = TrayGroup.bind({});
Default.args = {
	isOpen: true,
	content: [
		Dialog.bind(null, {
			heading: "New messages",
			content: ["You have 5 new messages!"],
			isDismissable: false,
		})
	],
};
Default.parameters = {
	chromatic: {
		modes: {
			"Small Viewport": {
				viewport: {
					width: 480,
				},
			},
		}
	},
};

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: {
			...Default.parameters.chromatic.modes,
		}
	},
};
