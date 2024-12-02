import { default as IllustratedMessage } from "@spectrum-css/illustratedmessage/stories/illustratedmessage.stories.js";
import { html } from "lit";
import { Template } from "./template";


/**
 * A drop zone is an area on the screen into a which an object can be dragged and dropped to accomplish a task. For example, a drop zone might be used in an upload workflow to enable the user to simply drop a file from their operating system into the drop zone, which is a more efficient and intuitive action, rather than utilize the standard "Choose file" dialog.
 */
export default {
	title: "Components/Drop zone",
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
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content"
			},
		},
		hasButtons: {
			name: "Show button group",
			table: { disable: true },
		},
		...IllustratedMessage.argTypes
	},
	args: {
		rootClass: "spectrum-DropZone",
		isDragged: false,
		isFilled: false,
		heading: "Drag and drop your file",
		description: "Or, select a file from your computer.",
		label: "Browse files",
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
		layout: "centered"
	},
};

export const Default = (args) => html`
	<div>
		${Template({
			...args
		})}
	</div>
`;
Default.args = {};

export const Dragged = Template.bind({});
Dragged.args = {
	isDragged: true,
};

export const FilledAndDragged = Template.bind({});
FilledAndDragged.args = {
	isDragged: true,
	isFilled: true,
};
