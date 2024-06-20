import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import { default as Icon } from "@spectrum-css/icon/stories/icon.stories.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { Template } from "./template";

/**
 * The picker button component is used as a dropdown trigger within other components such as combobox.
 */
export default {
	title: "Picker button",
	component: "PickerButton",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl"],
			control: "select",
		},
		iconType: {
			name: "Icon",
			type: { name: "string", required: false },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			options: ["ui", "workflow"],
			control: "inline-radio",
		},
		iconName: {
			...Icon.argTypes.iconName,
			if: { arg: "iconType", eq: "workflow" },
		},
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
			if: { arg: "isDisabled", truthy: false },
		},
		isRounded: {
			name: "Rounded",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isQuiet: {
			name: "Quiet styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isFocused: {
			name: "Focused",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
			if: { arg: "isDisabled", truthy: false },
		},
		position: {
			name: "Position",
			description:
				"Which side the picker button is displayed on. This determines which corners are rounded.",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["right", "left"],
			control: "inline-radio",
		},
	},
	args: {
		rootClass: "spectrum-PickerButton",
		label: undefined,
		size: "m",
		isOpen: false,
		isRounded: false,
		isQuiet: false,
		isDisabled: false,
		isFocused: false,
		iconType: "ui",
		iconName: "ChevronDown",
		position: "right",
	},
};

// Story specific templates
const SizingTemplate = (args) => html`
	<div
		style=${styleMap({
			display: "flex",
			gap: "24px",
			flexWrap: "wrap",
		})}
	>
		${["s", "m", "l", "xl"].map(
			(size) => html`
				<div
					style=${styleMap({
						display: "flex",
						gap: "16px",
						flexDirection: "column",
						alignItems: "center",
						flexBasis: "80px",
					})}
				>
					${Typography({
						semantics: "detail",
						size: "s",
						content: [
							{
								s: "Small",
								m: "Medium",
								l: "Large",
								xl: "Extra-large",
							}[size],
						],
						customStyles: {
							"white-space": "nowrap",
							"--mod-detail-font-color": "var(--spectrum-seafoam-900)",
						},
					})}
					${Template({ ...args, size })}
				</div>
			`,
		)}
	</div>
`;

const CustomIconTemplate = (args) => html`
	<div
		style=${styleMap({
			display: "flex",
			gap: "24px",
			flexWrap: "wrap",
		})}
	>
		<div
			style=${styleMap({
				display: "flex",
				gap: "16px",
				flexDirection: "column",
				alignItems: "center",
				flexBasis: "80px",
			})}
		>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["UI icon"],
				customStyles: {
					"white-space": "nowrap",
					"--mod-detail-font-color": "var(--spectrum-seafoam-900)",
				},
			})}
			${Template({
				...args,
				iconName: "ArrowDown100",
				iconType: "ui",
			})}
		</div>
		<div
			style=${styleMap({
				display: "flex",
				gap: "16px",
				flexDirection: "column",
				alignItems: "center",
				flexBasis: "80px",
			})}
		>
			${Typography({
				semantics: "detail",
				size: "s",
				content: ["Workflow icon"],
				customStyles: {
					"white-space": "nowrap",
					"--mod-detail-font-color": "var(--spectrum-seafoam-900)",
				},
			})}
			${Template({
				...args,
				iconName: "Add",
				iconType: "workflow",
			})}
		</div>
	</div>
`;

// Stories
export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.storyName = "With label";
WithLabel.args = {
	label: "Select",
};

export const Disabled = Template.bind({});
Disabled.tags = ["vrt-only"];
Disabled.args = {
	isDisabled: true,
};

export const Quiet = Template.bind({});
Quiet.storyName = "Quiet with label";
Quiet.tags = ["vrt-only"];
Quiet.args = {
	isQuiet: true,
	label: "All",
};

export const Express = Template.bind({});
Express.tags = ["vrt-only", "!autodocs"];
Express.args = {
	express: true,
};

export const Sizing = SizingTemplate.bind({});
Sizing.tags = ["docs-only"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Open = Template.bind({});
Open.tags = ["docs-only"];
Open.args = {
	isOpen: true,
};
Open.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * This example uses a custom icon instead of the chevron UI icon.
 */
export const CustomIcon = CustomIconTemplate.bind({});
CustomIcon.storyName = "With custom icon";
CustomIcon.tags = ["docs-only"];
CustomIcon.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The `spectrum-PickerButton--rounded` class increases the amount of rounding on the rounded corners.
 */
export const Rounded = Template.bind({});
Rounded.tags = ["docs-only"];
Rounded.args = {
	isRounded: true,
};
Rounded.parameters = {
	chromatic: { disableSnapshot: true },
};
