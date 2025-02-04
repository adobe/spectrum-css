import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { size } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { IconGroup } from "./icon.test.js";
import { FullIconSetTemplate, Template, UIArrowsTemplate, UIDefaultTemplate, WorkflowDefaultTemplate } from "./template";
import { uiIconsWithDirections, workflowIconsCleaned, workflowSizes } from "./utilities.js";

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
			options: workflowIconsCleaned,
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
		useRef: {
			name: "Use sprite sheet reference",
			description: "Storybook only: whether to display an SVG with a `<use>` reference to the icon within a loaded sprite sheet. This improves Storybook performance, especially for multiple icons. When set to `false`, the icon file's full markup is used.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Icon",
		setName: "workflow",
		iconName: "Color",
		uiIconName: "Checkmark400",
		size: "xl",
		useRef: true,
	},
	parameters: {
		packageJson,
		metadata,
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
		modes: {
			...disableDefaultModes,
			"Mobile": { disable: true },
		},
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
 * Note that the extra-extra-large size is currently not part of the design spec and may be deprecated in the future.
 */
export const WorkflowSizing = (args, context) => Sizes({
	Template,
	withBorder: false,
	withHeading: false,
	...args,
}, context);
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
