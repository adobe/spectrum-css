import { version } from "../package.json";
import { TrayGroup } from "./template";

/**
 * Tray dialogs are typically used to portray information on mobile device or smaller screens.
 */
export default {
	title: "Tray",
	component: "Tray",
	argTypes: {
		content: { table: { disable: true } },
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: { disable: true },
		},
		heading: {
			name: "Heading",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
	},
	args: {
		rootClass: "spectrum-Tray",
		customClasses: ["spectrum-Modal"],
		isOpen: true,
		heading: "New messages",
	},
	parameters: {
		chromatic: {
			delay: 2000,
		},
		componentVersion: version,
	}
};

export const Default = TrayGroup.bind({});
Default.args = {};
