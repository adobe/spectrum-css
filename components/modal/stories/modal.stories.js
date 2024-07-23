import { Template as Dialog } from "@spectrum-css/dialog/stories/template.js";
import { withUnderlayWrapper } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { version } from "../package.json";
import { ModalGroup } from "./modal.test";

/**
 * A modal component is a dialog box/popup window that is displayed on top of the current page.
 */
export default {
	title: "Modal",
	component: "Modal",
	argTypes: {
		isOpen,
		variant: {
			name: "Sizing preference",
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
		layout: "fullscreen",
		docs: {
			story: { height: "600px" },
		},
		componentVersion: version,
	},
	decorators: [
		withUnderlayWrapper,
	],
};

export const Default = ModalGroup.bind({});
Default.args = {
	content: [
		(passthroughs, context) => Dialog({
			heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			content: [
				(passthroughs, context) => Typography({
					semantics: "body",
					size: "m",
					content: [
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida. Libero volutpat sed ornare arcu. Quisque egestas diam in arcu cursus euismod quis viverra. Posuere ac ut consequat semper viverra nam libero justo laoreet. Enim ut tellus elementum sagittis vitae et leo duis ut. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Diam volutpat commodo sed egestas egestas. Dolor magna eget est lorem ipsum dolor. Vitae suscipit tellus mauris a diam maecenas sed. Turpis in eu mi bibendum neque egestas congue. Rhoncus est pellentesque elit ullamcorper dignissim cras lobortis."
					],
					...passthroughs,
				}, context),
			],
			...passthroughs,
		}, context),
	],
};
Default.parameters = {
	chromatic: { disable: true }
};

// ********* VRT ONLY ********* //
export const WithForcedColors = ModalGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
