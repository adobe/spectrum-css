import { Template } from "./template";
import { html } from "lit";

/**
 * The drop indicator component is used to show the insertion position into a list or table.
 */
export default {
	title: "Drop indicator",
	component: "DropIndicator",
	argTypes: {
		direction: {
			name: "Direction",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["horizontal", "vertical"],
			control: "select",
		},
		size: {
			name: "Size",
			description:
				"Size of the drop indicator, requires a unit be provided; i.e., 200px or 100%.",
			type: { name: "string", required: false },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: { type: "text" },
		},
	},
	args: {
		rootClass: "spectrum-DropIndicator",
		direction: "vertical",
		size: "300px",
	},
};

const DropIndicatorGroup = (args) => html`
	<div style="display: flex; align-items: center; justify-content: space-around;">
		${Template({
			...args,
			direction: "vertical",
		})}
		${Template({
			...args,
			direction: "horizontal",
		})}
	</div>
`;

export const Default = Template.bind({});
Default.args = {};
// the !autodocs tag removes the component from the auto-template
Default.tags = ["!autodocs"];

/*
 * Stories for the MDX "docs" only.
 * "storyName" refers to the display name/heading for a component
 */

export const DefaultGroup = DropIndicatorGroup.bind({});
DefaultGroup.storyName = "Standard";
DefaultGroup.tags = ["docs-only"];
DefaultGroup.parameters = { 
	chromatic: { disableSnapshot: true }
};

