import { disableDefaultModes, mobile } from "@spectrum-css/preview/modes";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { version } from "../package.json";
import { Template } from "./template";
import { cleanWorkflowIcon, uiIconsWithDirections, workflowIcons } from "./utilities.js";

const sizes = ["xs", "s", "m", "l", "xl", "xxl"];

/**
 * The Icon component contains all of the CSS used for displaying both workflow and UI icons.
 */
export default {
	title: "Icon",
	component: "Icon",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: sizes,
			control: "select",
			if: { arg: "setName", eq: "workflow" },
		},
		showLabel: {
			name: "Show icon name",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Content",
			},
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
		iconName: "ABC",
		size: "xl",
		useRef: true,
	},
	parameters: {
		componentVersion: version,
		chromatic: {
			modes: mobile,
		},
	},
	tags: ["!autodocs"],
};

export const Default = IconGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = IconGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

/**
 * Helper template function to display multiple icons using an array of icon names.
 */
const IconListTemplate = (args, iconsList = [], context) => html`
	<div
		style=${styleMap({
			"display": "flex",
			"gap": "32px",
			"flexWrap": "wrap",
		})}
	>
		${iconsList.map(
			(iconName) => Template({ ...args, iconName }, context)
		)}
	</div>
`;

/* Stories for the MDX "Docs" only. */

/**
 * A sampling of multiple Workflow icons.
 */
export const WorkflowDefault = (args, context) => IconListTemplate(
	{
		...args,
		setName: "workflow",
		size: "xl",
	},
	[
		"Alert",
		"Asset",
		"Actions",
		"ArrowDown",
		"Camera",
		"Copy",
		"DeviceDesktop",
		"Download",
		"FilterAdd",
		"Form",
		"Light",
		"Polygon",
	],
	context
);
WorkflowDefault.tags = ["!dev"];
WorkflowDefault.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * An example of a Workflow icon displayed at all sizes, from small to extra-large.
 */
export const WorkflowSizing = (args, context) => html`
	<div
		style=${styleMap({
			"display": "flex",
			"gap": "24px",
			"flexWrap": "wrap",
		})}
	>
		${["xs","s","m","l","xl"].map(
			(size) => html`
				<div
					style=${styleMap({
						"display": "flex",
						"gap": "16px",
						"flexDirection": "column",
						"alignItems": "center",
						"flexBasis": "80px",
					})}
				>
					${Typography({
						semantics: "heading",
						size: "xs",
						content: [
							{
								xs: "Extra-small",
								s: "Small",
								m: "Medium",
								l: "Large",
								xl: "Extra-large",
							}[size],
						],
						customStyles: {
							"white-space": "nowrap",
							"--mod-detail-font-color": "var(--spectrum-seafoam-900)",
						}
					})}
					${Template({ ...args, size }, context)}
				</div>
			`
		)}
	</div>
`;
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
export const UIDefault = (args, context) => html`
	<div style="margin-bottom: 32px;">
		${IconListTemplate(
			{
				...args,
				setName: "ui",
			},
			[
				"Asterisk100",
				"Asterisk200",
				"Asterisk300",
			],
			context
		)}
	</div>
	<div>
		${IconListTemplate(
			{
				...args,
				setName: "ui",
			},
			[
				"ChevronDown50",
				"ChevronDown75",
				"ChevronDown100",
				"ChevronDown200",
				"ChevronDown300",
				"ChevronDown400",
			],
			context
		)}
	</div>
`;

/* Stories for the MDX "Docs" only. */

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
export const UIArrows = (args, context) => IconListTemplate(
	{
		...args,
		setName: "ui",
	},
	[
		"ArrowRight100",
		"ArrowLeft100",
		"ArrowDown100",
		"ArrowUp100",
	],
	context
);
UIArrows.storyName = "UI Arrows";
UIArrows.tags = ["!dev"];
UIArrows.parameters = {
	chromatic: { disableSnapshot: true },
};
