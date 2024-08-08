import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";
import { html } from "lit";
import { version } from "../package.json";
import { ModalGroup } from "./template";

/**
 * A modal component is a dialog box/popup window that is displayed on top of the current page.
 */
export default {
	title: "Modal",
	component: "Modal",
	argTypes: {
		isOpen,
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
		// @todo use a more exciting example
		content: ["Modal is a base component used by other components, and should not be used on its own."],
	},
	parameters: {
		componentVersion: version,
	},
	decorators: [
		/**
		 * Ensure modal is is not cropped out of the Chromatic screenshot.
		 * @see https://www.chromatic.com/docs/snapshots/#why-isn%E2%80%99t-my-modal-or-dialog-captured 
		 */
		(story) => window.isChromatic() ? html`<div style="width: 1200px; height: 800px;">${story()}</div>` : story()
	],
};

export const Default = ModalGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = Default.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
