// Import the component markup template
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import { Template } from "./template";
import { uiIconsWithDirections, uniqueUiIcons, workflowIcons } from "./utilities.js";

import { Template as Typography } from "@spectrum-css/typography/stories/template.js";

const sizes = ["xs", "s", "m", "l", "xl", "xxl"];

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
			name: "Workflow Icon Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: sizes,
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
	},
	parameters: {
		status: {
			type: "migrated",
		},
	},
};

export const Default = (args) => {
	if (window.isChromatic()) {
		return TestTemplate({ ...args });
	}
	else {
		return Template({
			...args,
			iconName: args.iconName ?? args.uiIconName,
			setName: args.setName ?? (args.uiIconName ? "ui" : "workflow"),
		});
	}
};

Default.args = {};

/**
 * Chromatic VRT template that displays multiple icons to cover various options.
 */
const TestTemplate = (args) => {
	const scales = ["50", "75", "100", "200", "300", "400", "500", "600"];
	let print = [];
	uniqueUiIcons.sort().forEach(iconName => {
		let output = Array(8).fill(html`<span></span>`);
		scales.forEach((scale, idx) => {
			if (uiIconsWithDirections.includes(`${iconName}${scale}`)) {
				output[idx] = Template({
					...args,
					setName: "ui",
					useRef: false,
					iconName: `${iconName}${scale}`,
				});
			}
		});
		print.push(...output);
	});

	return html`
	${Typography({
		semantics: "detail",
		size: "l",
		content: ["Workflow icons"],
		customStyles: {
			"--mod-detail-font-color": "var(--spectrum-seafoam-900)",
		}
	})}
	<div
		style=${styleMap({
		"display": "grid",
		"grid-template-columns": `repeat(${sizes.length}, 50px)`,
		"gap": "16px",
		"border": "1px solid var(--spectrum-gray-200)",
		"border-radius": "4px",
		"padding": "16px",
		"margin-block-end": "32px",
	})}
	>
		${sizes.map(scale => {
			return Typography({
				semantics: "detail",
				size: "s",
				content: [scale],
				customStyles: {
					"--mod-detail-font-color": "var(--spectrum-seafoam-900)",
				}
			});
		})}
		${workflowIcons.slice(0, 20).map((iconName, idx) => html`
			${sizes.map((size) => Template({
				...args,
				setName: "workflow",
				useRef: false,
				iconName, size,
				fill: idx % 5 === 0 ? "var(--spectrum-negative-content-color-default)" : undefined
			}))}
		`)}
	</div>
	${Typography({
		semantics: "detail",
		size: "l",
		content: ["UI icons"],
		customStyles: {
			"--mod-detail-font-color": "var(--spectrum-seafoam-900)",
		}
	})}
	<div
		style=${styleMap({
		"display": "grid",
		"grid-template-columns": `repeat(${scales.length}, 50px)`,
		"gap": "16px",
		"border": "1px solid var(--spectrum-gray-200)",
		"border-radius": "4px",
		"padding": "16px",
	})}
	>
		${scales.map(scale => Typography({
			semantics: "detail",
			size: "s",
			content: [scale],
			customStyles: {
				"--mod-detail-font-color": "var(--spectrum-seafoam-900)",
			}
		}))}
		${print}
	</div>
	`;
};
