import { Default as ModalStory } from "@spectrum-css/modal/stories/modal.stories.js";
import { Template as Modal } from "@spectrum-css/modal/stories/template.js";
import { isOpen } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { Template } from "./template.js";

/**
 * An underlay component is used with [modal](?path=/docs/components-modal--docs) and [dialog](?path=/docs/components-dialog--docs). It lays over the rest of the page to deliver a blocking layer between the two contexts.
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
		layout: "fullscreen",
		docs: {
			story: {
				inline: false,
			},
		},
		chromatic: { disableSnapshot: true },
		packageJson,
		metadata,
	}
};

/**
 * An underlay by itself is not very useful. It is typically used in conjunction with a [dialog](?path=/docs/components-dialog--docs) or [modal](?path=/docs/components-modal--docs).
 */
export const Default = Template.bind({});
Default.args = {
	isOpen: true,
};

// ********* DOCS ONLY ********* //

/**
 * An underlay can be used to block the rest of the page when a [modal](?path=/docs/components-modal--docs) is open.
 */
export const WithModal = Template.bind({});
WithModal.storyName = "Underlay with a modal";
WithModal.parameters = {
	docs: {
		story: {
			height: "400px",
			width: "800px"
		},
	},
};
WithModal.args = {
	...Default.args,
	content: [
		(passthrough, context) => Modal({
			...passthrough,
			...ModalStory.args,
			rootClass: "spectrum-Modal",
			isOpen: true,
			variant: "responsive",
			customStyles: {
				// Without this, the content sits right up against the edge of the modal
				padding: "20px",
			},
			showUnderlay: false,
		}, context),
	],
};
