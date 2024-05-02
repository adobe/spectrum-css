import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

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
 * The icons component contains all UI icons used for components as well as the CSS for UI and workflow icons.
 */
export default {
	title: "Components/Icon",
	component: "Icon",
	argTypes: {
		/* Turn off express theme for icon preview b/c they use a separate icon set */
		express: { table: { disable: true } },
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
	parameters: {
		status: {
			type: "migrated",
		},
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
