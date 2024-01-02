// Import the component markup template
import isChromatic from "chromatic/isChromatic";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { Template } from "./template";

import { uiIcons, workflowIcons } from "./utilities.js";

export default {
	title: "Components/Icon",
	description:
		"The icons component contains all UI icons used for components as well as the CSS for UI and workflow icons.",
	component: "Icon",
	argTypes: {
		/* Turn off express theme for icon preview b/c they use a separate icon set */
		express: { table: { disable: true } },
		reducedMotion: { table: { disable: true } },
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl", "xxl"],
			control: "select",
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
				...uiIcons.filter((c) => !["Chevron", "Arrow"].includes(c)),
				"ArrowRight",
				"ArrowLeft",
				"ArrowUp",
				"ArrowDown",
				"ChevronRight",
				"ChevronLeft",
				"ChevronUp",
				"ChevronDown",
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
			type: process.env.MIGRATED_PACKAGES.includes("icon")
				? "migrated"
				: undefined,
		},
	},
};

export const Default = (args) => {
	if (isChromatic()){
		return TestTemplate({ ...args });
	} else {
		return Template({
			...args,
			iconName: args.iconName ?? args.uiIconName,
			setName: args.setName ?? (args.uiIconName ? "ui" : "workflow"),
		});
	}
} 

Default.args = {};

/**
 * Chromatic VRT template that displays multiple icons to cover various options.
 */
const TestTemplate = ({
	staticColor,
	customStyles = {},
	...args
}) => {
	const workflow_row_args = [
		{
			setName: "workflow",
			iconName: "Alert",
			fill: "var(--spectrum-negative-content-color-default)",
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
			iconName: "ArrowUp",
		},
		{
			setName: "workflow",
			iconName: "ArrowDown",
		},
		{
			setName: "workflow",
			iconName: "ChevronDown",
		}
	];

	return html`
		${workflow_row_args.map((row_args) => html`
			<div
				style=${styleMap({
					display: "flex",
					gap: "16px",
					marginBottom: "16px",
				})}
			>
				${Template({ ...args, ...row_args, size: "s" })}
				${Template({ ...args, ...row_args, size: "m" })}
				${Template({ ...args, ...row_args, size: "l" })}
				${Template({ ...args, ...row_args, size: "xl" })}
			</div>`
		)}
		<div
			style=${styleMap({
				display: "flex",
				gap: "16px",
			})}
		>
			${Template({ ...args, setName: "ui", iconName: "Asterisk75", })}
			${Template({ ...args, setName: "ui", iconName: "Asterisk100", })}
			${Template({ ...args, setName: "ui", iconName: "Asterisk200", })}
			${Template({ ...args, setName: "ui", iconName: "Asterisk300", })}
			${Template({ ...args, setName: "ui", iconName: "Checkmark100", })}
			${Template({ ...args, setName: "ui", iconName: "ArrowLeft75", })}
			${Template({ ...args, setName: "ui", iconName: "ArrowLeft100", })}
			${Template({ ...args, setName: "ui", iconName: "ArrowLeft600", })}
			${Template({ ...args, setName: "ui", iconName: "ArrowRight200", })}
			${Template({ ...args, setName: "ui", iconName: "ChevronDown50", })}
			${Template({ ...args, setName: "ui", iconName: "ChevronDown75", })}
			${Template({ ...args, setName: "ui", iconName: "ChevronDown500", })}
		</div>
	`;
};
