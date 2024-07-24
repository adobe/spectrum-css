import { disableDefaultModes, mobile } from "@spectrum-css/preview/modes";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { version } from "../package.json";
import { IconGroup } from "./icon.test";
import { Template } from "./template";
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
			options: ["xs", "s", "m", "l", "xl", "xxl"],
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
			options: workflowIcons,
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
			options: [
				...uiIconNameOptions,
			],
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
WorkflowDefault.tags = ["autodocs", "!dev"];
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
WorkflowSizing.tags = ["autodocs", "!dev"];
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
UIDefault.storyName = "UI Default";
UIDefault.tags = ["autodocs", "!dev"];
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
UIArrows.tags = ["autodocs", "!dev"];
UIArrows.parameters = {
	chromatic: { disableSnapshot: true },
};
