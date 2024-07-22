import { Default as DialogStory } from "@spectrum-css/dialog/stories/dialog.stories.js";
import { Template as Dialog } from "@spectrum-css/dialog/stories/template.js";
import { isOpen } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { Template } from "./template.js";

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
	parameters: {
		docs: {
			story: {
				inline: false,
				height: "500px",
			},
		},
		chromatic: { disableSnapshot: true },
		componentVersion: version,
	}
};

export const Default = Template.bind({});
Default.tags = ["!test"];
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
