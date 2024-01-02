import isChromatic from "chromatic/isChromatic";

import { html } from "lit";
import { when } from "lit/directives/when.js";

import { Template as Link } from "@spectrum-css/link/stories/template.js";

import { Template } from "./template";

export default {
	title: "Components/Drop zone",
	description:
		'A drop zone is an area on the screen into a which an object can be dragged and dropped to accomplish a task. For example, a drop zone might be used in an upload workflow to enable the user to simply drop a file from their operating system into the drop zone, which is a more efficient and intuitive action, rather than utilize the standard "Choose File" dialog.',
	component: "DropZone",
	argTypes: {
		/* No theme styles for express available */
		express: { table: { disable: true } },
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
		customHeading: {
			name: "Heading",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		customDescription: {
			name: "Description",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		customLabel: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
	},
	args: {
		rootClass: "spectrum-DropZone",
		isDragged: false,
		isFilled: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("dropzone")
				? "migrated"
				: "legacy",
		},
	},
};

export const Default = (args) => html`
	${Template(args)}
	${when(isChromatic(), () => Template({
		...args,
		customHeading: 'Drag and drop your file to upload',
		customDescription: () => html`You can also ${Link({ url: "#", content: "select a file" })} from your computer.`,
		customLabel: 'Drag and drop to replace file upload'
	}))}
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
