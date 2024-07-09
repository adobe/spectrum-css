import { version } from "../package.json";
import { Template } from "./template";

/**
 * The color loupe component shows the output color that would otherwise be covered by a cursor, stylus, or finger during color selection.
 */
export default {
	title: "Color loupe",
	component: "ColorLoupe",
	argTypes: {
		isOpen: {
			description: "Apply `is-open` to display the component",
			defaultValue: true,
			name: "Open",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-ColorLoupe",
		isOpen: true,
	},
	parameters: {
		chromatic: { diffThreshold: 0.2 },
		docs: {
			story: {
				height: "100px"
			}
		},
		componentVersion: version,
	},
};

export const Default = Template.bind({});
Default.args = {};
