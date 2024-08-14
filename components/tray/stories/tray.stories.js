import { Template as Dialog } from "@spectrum-css/dialog/stories/template.js";
import { disableDefaultModes, viewports } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { TrayGroup } from "./tray.test.js";

/**
 * A tray is typically used to display transient content (menus, options, additional actions, etc.) on mobile devices or smaller screens, exposing types of content that may be too overwhelming for [popovers](?path=/docs/components-popover--docs).
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
	},
};

/**
 * The tray displays differently depending on the orientation of the viewport, using the `orientation` CSS media feature. In portrait orientation, a Tray is displayed at the bottom of the screen and takes up the full width of the view. In landscape orientation, it keeps its portrait width, is centered horizontally, and has rounded upper corners.
 */
export const Default = TrayGroup.bind({});
Default.args = {
	isOpen: true,
	content: [
		(passthroughs, context) => Dialog({
			...passthroughs,
			heading: "New messages",
			content: ["You have 5 new messages!"],
			isDismissible: false,
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
