import { Template } from "@spectrum-css/quickaction/stories/template.js";

export default {
	title: "Deprecated/Quick actions",
	component: "QuickAction",
	argTypes: {
		content: { table: { disable: true } },
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		position: {
			name: "Position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "select",
			options: ["left", "right"],
		},
		textOnly: {
			name: "Text only action buttons",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-QuickActions",
		isOpen: true,
		textOnly: false,
		content: [
			{
				iconName: "Edit",
				label: "Edit",
			},
			{
				iconName: "Copy",
				label: "Copy",
			},
			{
				iconName: "Delete",
				label: "Delete",
			},
		],
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "deprecated"
		},
		chromatic: { disable: true },
	},
};

export const Default = Template.bind({});
Default.args = {};
