import { Template as Dialog } from "@spectrum-css/dialog/stories/template.js";
import { disableDefaultModes, viewports } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { TrayGroup } from "./tray.test";

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
		layout: "fullscreen",
		docs: {
			story: {
				height: "300px",
			},
		},
		chromatic: {
			modes: {
				"Viewport | small": {
					viewport: viewports.small,
				},
			},
		},
		componentVersion: version,
	}
};

export const Default = TrayGroup.bind({});
Default.args = {
	isOpen: true,
	content: [
		(passthroughs, context) => Dialog({
			...passthroughs,
			heading: "New messages",
			content: ["You have 5 new messages!"],
			isDismissable: false,
		}, context)
	],
};

// ********* VRT ONLY ********* //
export const WithForcedColors = TrayGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes,
	},
};
