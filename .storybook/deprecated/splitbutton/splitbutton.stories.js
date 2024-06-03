import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import { Template as Button } from "@spectrum-css/button/stories/template.js";

import "@spectrum-css/splitbutton/dist/index-vars.css";
import "@spectrum-css/splitbutton/dist/vars.css";

/**
 * **This component is deprecated.** Please use a button group to show any additional actions related to the most critical action. Reference [Spectrum documentation](https://spectrum.corp.adobe.com/page/button-group/#Use-a-button-group-to-show-additional-actions) for more information.
 *
 * A split button surfaces an immediately invokable action via it's main button, as well as a list of alternative actions in its toggle-able menu overlay.
 */
export default {
	title: "Split button",
	component: "SplitButton",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: { disable: true },
			options: ["m"],
			control: "select",
		},
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: { disable: true },
			options: ["accent", "primary", "secondary"],
			control: "select",
		},
		position: {
			name: "Position",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["right", "left"],
			control: "select",
		},
		iconName: { table: { disable: true } },
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
	},
	args: {
		rootClass: "spectrum-SplitButton",
		size: "m",
		position: "right",
		label: "Split Button",
		variant: "accent",
		iconName: "ChevronDown100",
	},
	parameters: {
		actions: {
			handles: [],
		},
		chromatic: { disable: true },
		status: {
			type: "deprecated"
		},
	},
};

const Template = ({
	rootClass = "spectrum-SplitButton",
	customClasses = [],
	customFirstButtonClasses = [],
	customLastButtonClasses = [],
	size = "m",
	variant = "cta",
	iconName = "ChevronDown100",
	labelIconName = undefined,
	position = "right",
	label = "Split Button",
	...globals
}) => {
	return html`
		<!-- Note: Only values that differ in express theme are included -->
		<style>
			:root, .spectrum--medium {
				--spectrum-global-dimension-size-25: 2px;
				--spectrum-global-dimension-size-40: 3px;
				--spectrum-global-dimension-size-100: 8px;
				--spectrum-global-dimension-size-125: 10px;
				--spectrum-global-dimension-size-150: 12px;
				--spectrum-global-dimension-size-175: 14px;
				--spectrum-global-dimension-size-200: 16px;
			}
			.spectrum--large {
				--spectrum-global-dimension-size-40: 4px;
				--spectrum-global-dimension-size-100: 10px;
				--spectrum-global-dimension-size-125: 13px;
				--spectrum-global-dimension-size-150: 15px;
				--spectrum-global-dimension-size-175: 18px;
				--spectrum-global-dimension-size-200: 20px;
			}
			.spectrum-SplitButton {
				--spectrum-button-m-primary-outline-texticon-padding-left: var(--spectrum-button-m-primary-outline-texticon-padding-right);
				--spectrum-alias-border-radius-small: var(--spectrum-global-dimension-size-25);
				--spectrum-alias-border-size-thick: var(--spectrum-global-dimension-static-size-25, 2px);
			}
			.spectrum--express .spectrum-SplitButton {
				--spectrum-button-m-primary-outline-texticon-padding-left: var(--spectrum-global-dimension-size-175);
				--spectrum-alias-border-radius-small: var(--spectrum-global-dimension-size-40);
			}
		</style>
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--left`]:
					typeof position !== "undefined" && position === "left",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
		>
			${Button({
				...globals,
				variant,
				size,
				iconName: position === "right"
					? typeof labelIconName != "undefined" ? labelIconName : undefined
					: iconName,
				label: position === "right" ? label : undefined,
				hideLabel: position === "right" ? false : true,
				customClasses: [
					position === "right"
						? "spectrum-SplitButton-action"
						: "spectrum-SplitButton-trigger",
					...customFirstButtonClasses
				]
			})}
			${Button({
				...globals,
				variant,
				size,
				iconName: position === "right"
					? iconName
					: typeof labelIconName != "undefined" ? labelIconName : undefined,
				iconAfterLabel: true,
				label: position === "right" ? undefined : label,
				hideLabel: position === "right" ? true : false,
				customClasses: [
					position === "right"
						? "spectrum-SplitButton-trigger"
						: "spectrum-SplitButton-action",
					...customLastButtonClasses
				]
			})}
		</div>
	`;
};


export const Default = Template.bind({});
Default.args = {};
