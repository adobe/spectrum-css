import { Template as Dialog } from "@spectrum-css/dialog/stories/template.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
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
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: { disable: true },
		},
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
		forcedColors: "active",
		modes: {
			...disableDefaultModes,
			"Desktop": {},
			"Mobile": {
				// object with width
				viewport: {
					width: 480,
				},
			},
		}
	},
};

// ********* VRT ONLY ********* //
export const WithForcedColors = TrayGroup.bind({});
WithForcedColors.tags = ["vrt-only"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
