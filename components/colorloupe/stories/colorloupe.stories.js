import { Template } from "./template";

/**
 * The color loupe component shows the output color that would otherwise be covered by a cursor, stylus, or finger during color selection.
 */
export default {
	title: "Components/Color loupe",
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
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
		docs: {
			story: {
				height: "100px"
			}
		},
	},
};

export const Default = Template.bind({});
Default.args = {};
