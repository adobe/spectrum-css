import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as IllustratedMessage } from "@spectrum-css/illustratedmessage/stories/illustratedmessage.stories.js";
import { Template as Link } from "@spectrum-css/link/stories/template.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDragged } from "@spectrum-css/preview/types";
import { html } from "lit";
import pkgJson from "../package.json";
import { DropzoneGroup } from "./dropzone.test.js";

/**
 * A drop zone is an area on the screen into a which an object can be dragged and dropped to accomplish a task. It's a common interaction in uploading and file management workflows. For example, a drop zone might be used in an upload workflow to enable the user to simply drop a file from their operating system into the drop zone, which is a more efficient and intuitive action, rather than utilizing the standard "Choose file" dialog.
 */
export default {
	title: "Drop zone",
	component: "DropZone",
	argTypes: {
		isDragged,
		isFilled: {
			name: "Filled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
			if: { arg: "isDragged", truthy: true },
		},
		...IllustratedMessage.argTypes,
		label: ActionButton.argTypes.label,
	},
	args: {
		rootClass: "spectrum-DropZone",
		isDragged: false,
		isFilled: false,
	},
	parameters: {
		packageJson: pkgJson,
	},
};

export const Default = DropzoneGroup.bind({});
Default.args = {
	heading: "Drag and drop your file",
	description: [
		() => {
			return html`${Link({ url: "#", text: "Select a file" })} from your computer.`;
		},
	],
	label: "Drop file to replace",
	useAccentColor: true,
	customStyles: {
		width: "300px",
	},
};

// ********* VRT ONLY ********* //
export const WithForcedColors = DropzoneGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
