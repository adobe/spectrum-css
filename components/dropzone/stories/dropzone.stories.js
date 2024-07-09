import { version } from "../package.json";
import { DropZoneGroup } from "./template";

/**
 * A drop zone is an area on the screen into a which an object can be dragged and dropped to accomplish a task. It's a common interaction in uploading and file management workflows. For example, a drop zone might be used in an upload workflow to enable the user to simply drop a file from their operating system into the drop zone, which is a more efficient and intuitive action, rather than utilizing the standard "Choose file" dialog.
 */
export default {
	title: "Drop zone",
	component: "DropZone",
	argTypes: {
		isDragged: {
			name: "Dragged",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
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
		reducedMotion: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-DropZone",
		isDragged: false,
		isFilled: false,
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = DropZoneGroup.bind({});
Default.args = {};

export const Dragged = DropZoneGroup.bind({});
Dragged.args = {
	isDragged: true,
};

export const FilledAndDragged = DropZoneGroup.bind({});
FilledAndDragged.args = {
	isDragged: true,
	isFilled: true,
	customStyles: {
		"height": "200px",
		"background-image": "url(example-card-portrait.png)"

	},
};
