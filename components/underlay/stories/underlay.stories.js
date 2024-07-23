import { Default as DialogStory } from "@spectrum-css/dialog/stories/dialog.stories.js";
import { Template as Dialog } from "@spectrum-css/dialog/stories/template.js";
import { isOpen } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { Template } from "./template";

/**
 * An underlay component is used with modal and dialog. It lays over the rest of the page to deliver a blocking layer between the two contexts.
 */
export default {
	title: "Underlay",
	component: "Underlay",
	argTypes: {
		isOpen,
		content: {
			table: { disable: true }
		},
	},
	args: {
		rootClass: "spectrum-Underlay",
		isOpen: false,
	},
	tags: ["autodocs", "!test"],
	parameters: {
		layout: "fullscreen",
		docs: {
			story: {
				inline: false,
			},
		},
		chromatic: { disableSnapshot: true },
		componentVersion: version,
	}
};

export const Default = Template.bind({});
Default.args = {
	isOpen: true,
	content: [
		(passthrough) => Dialog({
			...DialogStory.args,
			...passthrough,
			showModal: true,
		})
	],
};
