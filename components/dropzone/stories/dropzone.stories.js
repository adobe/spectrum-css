import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as IllustratedMessage } from "@spectrum-css/illustratedmessage/stories/illustratedmessage.stories.js";
import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isDragged } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { DropzoneGroup } from "./dropzone.test.js";
import { Template } from "./template.js";

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
		hasButtons: { table: { disable: true }},
		isHorizontal: { table: { disable: true }},
		label: ActionButton.argTypes.label,
	},
	args: {
		rootClass: "spectrum-DropZone",
		isDragged: false,
		isFilled: false,
		title: "Drag and drop your file",
		description: "Or, select a file from your computer.",
		label: "Browse files",
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=13049-185",
		},
		packageJson,
		metadata,
	},
};

export const Default = DropzoneGroup.bind({});
Default.args = {};

export const Dragged = Template.bind({});
Dragged.args = {
	isDragged: true,
};
Dragged.tags = ["!dev"];
Dragged.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The filled state of a drop zone is used to indicate that a file has been dropped into the drop zone. Since the type size doesn't change in this state the dropzone size would be identical in all size variants.
*/
export const Filled = Template.bind({});
Filled.args = {
	isDragged: true,
	isFilled: true,
};
Filled.tags = ["!dev"];
Filled.parameters = {
	chromatic: { disableSnapshot: true },
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


export const Sizing = (args, context) => Sizes({
	Template,
	withBorder: false,
	withHeader: false,
	...args
}, context);

Sizing.args = {};
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};
