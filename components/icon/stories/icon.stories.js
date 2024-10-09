import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { size } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { IconGroup } from "./icon.test.js";
import { FullIconSetTemplate, UIArrowsTemplate, UIDefaultTemplate, WorkflowDefaultTemplate, WorkflowSizingTemplate } from "./template";
import { cleanWorkflowIcon, uiIconsWithDirections, workflowIcons, workflowSizes } from "./utilities.js";

/**
 * The Icon component contains all of the CSS used for displaying both workflow and UI icons.
 */
export default {
	title: "Icon",
	component: "Icon",
	argTypes: {
		size: {
			...size(workflowSizes),
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
			options: workflowIcons.map((iconName) => cleanWorkflowIcon(iconName)),
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
			options: uiIconsWithDirections,
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
		iconName: "Color",
		uiIconName: "Checkmark400",
		size: "xl",
		useRef: true,
		showLabel: false,
	},
	parameters: {
		packageJson: pkgJson,
	},
	tags: ["!autodocs"],
};

export const Default = IconGroup.bind({});
Default.args = {};

/**
 * All icons in the Workflow icon set.
 */
export const Workflow = FullIconSetTemplate.bind({});
Workflow.storyName = "Workflow icons";
Workflow.args = {
	setName: "workflow",
	useRef: true,
	showLabel: true,
};
Workflow.argTypes = {
	setName: { table: { disable: true } },
	iconName: { table: { disable: true } },
};

/**
 * All icons in the UI icon set.
 */
export const UI = FullIconSetTemplate.bind({});
UI.storyName = "UI icons";
UI.args = {
	setName: "ui",
	useRef: true,
	showLabel: true,
};
UI.argTypes = {
	setName: { table: { disable: true } },
	uiIconName: { table: { disable: true } },
};

// ********* VRT ONLY ********* //
export const WithForcedColors = IconGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //

/**
 * A sampling of multiple Workflow icons.
 */
export const WorkflowDefault = WorkflowDefaultTemplate.bind({});
WorkflowDefault.storyName = "Workflow icons";
WorkflowDefault.tags = ["!dev"];
WorkflowDefault.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * An example of a Workflow icon displayed at all sizes, from small to extra-large.
 */
export const WorkflowSizing = WorkflowSizingTemplate.bind({});
WorkflowSizing.tags = ["!dev"];
WorkflowSizing.args = {
	setName: "workflow",
	iconName: "Asset",
};
WorkflowSizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A sampling of a few UI icons.
 */
export const UIDefault = UIDefaultTemplate.bind({});
UIDefault.storyName = "UI icons";
UIDefault.tags = ["!dev"];
UIDefault.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A UI arrow displayed for all directions (left, right, up, down).
 */
export const UIArrows = UIArrowsTemplate.bind({});
UIArrows.storyName = "UI Arrows";
UIArrows.tags = ["!dev"];
UIArrows.parameters = {
	chromatic: { disableSnapshot: true },
};
