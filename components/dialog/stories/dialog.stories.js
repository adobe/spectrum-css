import { withUnderlayWrapper } from "@spectrum-css/preview/decorators";
import { disableDefaultModes, mobile } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { version } from "../package.json";
import { DialogGroup } from "./template";

/**
 * A dialog displays important information that users need to acknowledge. They appear over the interface and block further interactions.
 */
export default {
	title: "Dialog",
	component: "Dialog",
	argTypes: {
		heading: {
			name: "Heading",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: { type: "text" },
		},
		content: { table: { disable: true } },
		isDismissable: {
			name: "Dismissable",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		showModal: {
			name: "Wrap the dialog in a modal",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isOpen,
	},
	args: {
		rootClass: "spectrum-Dialog",
		isDismissable: true,
		isOpen: true,
		showModal: true,
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-Dialog button"],
		},
		docs: {
			story: {
				inline: false,
				height: "500px",
			},
		},
		componentVersion: version,
		chromatic: {
			modes: mobile,
		}
	},
	decorators: [
		withUnderlayWrapper,
	],
};

export const Default = DialogGroup.bind({});
Default.args = {
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
};

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
