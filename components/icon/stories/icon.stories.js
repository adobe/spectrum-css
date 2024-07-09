import { version } from "../package.json";
import { TestTemplate, UIArrowsTemplate, UIDefaultTemplate, WorkflowDefaultTemplate, WorkflowSizingTemplate } from "./template";
import { uiIconSizes, uiIconsWithDirections, workflowIcons } from "./utilities.js";

/**
 * Create a list of all UI Icons with their sizing numbers.
 *
 * The list is a little long until Storybook adds a way to use conditional options
 * in controls, e.g. a "uiSize" control with options pulled from uiIconSizes:
 * @see https://github.com/storybookjs/storybook/discussions/24235
 */
const uiIconNameOptions = uiIconsWithDirections.map((iconName) => {
	const baseIconName = iconName.replace(/(Left|Right|Up|Down)$/, "");
	// Icons like Gripper that don't have sizes yet, represented by any empty array.
	if (uiIconSizes[baseIconName]?.length == 0) {
		return [baseIconName];
	}
	return uiIconSizes[baseIconName]?.map(sizeNum => iconName + sizeNum) ?? [];
}).flat();

/**
 * The Icon component contains all of the CSS used for displaying both workflow and UI icons.
 */
export default {
	title: "Icon",
	component: "Icon",
	argTypes: {
		size: {
			name: "Workflow Icon Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["xxs", "xs", "s", "m", "l", "xl"],
			control: "select",
			if: { arg: "setName", eq: "workflow" },
		},
		setName: {
			name: "Icon set",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			options: ["ui", "workflow"],
			control: "inline-radio",
		},
		iconName: {
			name: "Workflow icons",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			options: workflowIcons ?? [],
			control: "select",
			if: { arg: "setName", eq: "workflow" },
		},
		uiIconName: {
			name: "UI icons",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			options: uiIconNameOptions ?? [],
			control: "select",
			if: { arg: "setName", eq: "ui" },
		},
		fill: {
			name: "Fill color",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			control: "color",
		},
		useRef: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Icon",
		setName: "workflow",
		size: "m",
		useRef: false,
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = TestTemplate.bind({});
Default.args = {
	size: "xl",
	iconName: "ABC",
};

/* Stories for the MDX "Docs" only. */

/**
 * A sampling of multiple Workflow icons.
 */
export const WorkflowDefault = WorkflowDefaultTemplate.bind({});
WorkflowDefault.tags = ["docs-only"];
WorkflowDefault.args = {
	iconName: "ABC",
};
WorkflowDefault.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * An example of a Workflow icon displayed at all sizes, from small to extra-large.
 */
export const WorkflowSizing = WorkflowSizingTemplate.bind({});
WorkflowSizing.tags = ["docs-only"];
WorkflowSizing.args = {
	iconName: "Asset",
};
WorkflowSizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A sampling of a few UI icons.
 */
export const UIDefault = UIDefaultTemplate.bind({});
UIDefault.storyName = "UI Default";
UIDefault.tags = ["docs-only"];
UIDefault.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A UI arrow displayed for all directions (left, right, up, down).
 */
export const UIArrows = UIArrowsTemplate.bind({});
UIArrows.storyName = "UI Arrows";
UIArrows.tags = ["docs-only"];
UIArrows.parameters = {
	chromatic: { disableSnapshot: true },
};
