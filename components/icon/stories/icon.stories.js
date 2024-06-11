import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
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
		reducedMotion: { table: { disable: true } },
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
	},
};

export const Default = (args) => window.isChromatic() ? TestTemplate(args) : Template({
	...args,
	iconName: args.iconName ?? args.uiIconName,
	setName: args.setName ?? (args.uiIconName ? "ui" : "workflow"),
});

Default.args = {};

/**
 * Chromatic VRT template that displays multiple icons to cover various options.
 */
const TestTemplate = (args) => html`
	${[
	{
		setName: "workflow",
		iconName: "Alert",
		fill: "var(--spectrum-negative-content-color-default)",
	},
	{
		setName: "workflow",
		iconName: "Hand",
	},
	{
		setName: "workflow",
		iconName: "Help",
	},
	{
		setName: "workflow",
		iconName: "ArrowLeft",
	},
	{
		setName: "workflow",
		iconName: "ArrowRight",
	},
	{
		setName: "workflow",
		iconName: "ChevronDown",
	}
].map((row_args) => html`
		<div
			style=${styleMap({
				"display": "flex",
				"gap": "16px",
				"margin-bottom": "16px",
			})}
		>
			${["xs","s","m","l","xl","xxl"].map(
				(size) => Template({ ...args, ...row_args, size })
			)}
		</div>`
	)}
	<div style="margin-top:32px;">
		${uiIconsWithDirections.map(iconName => html`
			<div
				style=${styleMap({
					"display": "flex",
					"gap": "16px",
				})}
			>
				${uiIconSizes[iconName.replace(/(Left|Right|Up|Down)$/, "")]?.map((iconSize) =>
					Template({ ...args, setName: "ui", iconName: iconName + iconSize })
				)}
				${when(uiIconSizes[iconName]?.length == 0, () =>
					Template({ ...args, setName: "ui", iconName })
				)}
			</div>`
		)}
	</div>
`;

/**
 * Display all icon sizes for the Docs page.
 */
const WorkflowSizingTemplate = (args) => html`
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
						semantics: "detail",
						size: "s",
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
					${Template({ ...args, size })}
				</div>
			`
		)}
	</div>
`;


/**
 * Helper template function to display multiple icons using an array of icon names.
 */
const IconListTemplate = (args, iconsList = []) => html`
	<div
		style=${styleMap({
			"display": "flex",
			"gap": "32px",
			"flexWrap": "wrap",
		})}
	>
		${iconsList.map(
			(iconName) => Template({
				...args,
				iconName,
			})
		)}
	</div>
`;

/**
 * Display examples of multiple workflow icons.
 */
const WorkflowDefaultTemplate = (args) => html`
	${IconListTemplate(
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
		]
	)}
`;

/**
 * Display examples of all directions of a single UI arrow.
 */
const UIArrowsTemplate = (args) => html`
	${IconListTemplate(
		{
			...args,
			setName: "ui",
		},
		[
			"ArrowRight100",
			"ArrowLeft100",
			"ArrowDown100",
			"ArrowUp100",
		]
	)}
`;

/**
 * Display examples of multiple UI icons.
 */
const UIDefaultTemplate = (args) => html`
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
			]
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
			]
		)}
	</div>
`;

/* Stories for the MDX "Docs" only. */

/**
 * A sampling of multiple Workflow icons.
 */
export const WorkflowDefault = WorkflowDefaultTemplate.bind({});
WorkflowDefault.tags = ["docs-only"];
WorkflowDefault.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * An example of a Workflow icon displayed at all sizes, from small to extra-large.
 */
export const WorkflowSizing = WorkflowSizingTemplate.bind({});
WorkflowSizing.tags = ["docs-only"];
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