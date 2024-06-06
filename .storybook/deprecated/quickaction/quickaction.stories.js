import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";

import "@spectrum-css/quickaction/dist/index-vars.css";
import "@spectrum-css/quickaction/dist/vars.css";

/**
 * **This component is deprecated.** Please use an action bar to allow users to perform actions on either a single or multiple items at the same time, instead.
 */
export default {
	title: "Quick actions",
	component: "QuickAction",
	argTypes: {
		content: { table: { disable: true } },
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		position: {
			name: "Position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "select",
			options: ["left", "right"],
		},
		textOnly: {
			name: "Text only action buttons",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-QuickActions",
		isOpen: true,
		textOnly: false,
		content: [
			{
				iconName: "Edit",
				label: "Edit",
			},
			{
				iconName: "Copy",
				label: "Copy",
			},
			{
				iconName: "Delete",
				label: "Delete",
			},
		],
	},
	parameters: {
		chromatic: { disableSnapshot: true },
		status: {
			type: "deprecated"
		},
	},
};

const Template = ({
	rootClass = "spectrum-QuickActions",
	size = "m",
	isOpen = false,
	textOnly = false,
	position,
	// noOverlay = false,
	content = [],
	id,
	customClasses = [],
	...globals
}) => {
	if (!content.length) {
		console.warn("QuickActions: requires content be passed in to render.");
		return html``;
	}

	if (!content.some((c) => c.icon)) textOnly = true;

	return html`
		<!-- Note: Only values that differ in express theme are included -->
		<style>
			:root {
				--spectrum-alias-border-radius-regular: var(--spectrum-global-dimension-size-50);
				--spectrum-alias-background-color-quickactions-overlay: rgba(0,0,0,0.2);
			}
			:root, .spectrum--light {
				--spectrum-alias-background-color-quickactions: rgba(248,248,248,0.9);
			}
			.spectrum--dark {
				--spectrum-alias-background-color-quickactions: rgba(50,50,50,0.9);
			}
			.spectrum--darkest {
				--spectrum-alias-background-color-quickactions: rgba(29,29,29,0.9);
			}
			:root, .spectrum--medium {
				--spectrum-global-dimension-size-50: 4px;
				--spectrum-global-dimension-size-100: 8px;
				--spectrum-global-dimension-size-500: 40px;
			}
			.spectrum--large {
				--spectrum-global-dimension-size-50: 5px;
				--spectrum-global-dimension-size-100: 10px;
				--spectrum-global-dimension-size-500: 50px;
			}
			.spectrum--express {
				--spectrum-alias-border-radius-regular: var(--spectrum-global-dimension-size-75);
			}
		</style>
		<div
			class="${classMap({
				[rootClass]: true,
				[`${rootClass}--size${size?.toUpperCase()}`]:
					typeof size !== "undefined",
				"is-open": isOpen,
				[`${rootClass}--${position}`]: typeof position !== "undefined",
				[`${rootClass}--textOnly`]: textOnly,
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}"
			id=${ifDefined(id)}
		>
			${content.map((c) => {
				if ((typeof c === "object" && c.iconName) || c.label) {
					return ActionButton({ ...globals, ...c, isQuiet: true });
				} else return c;
			})}
		</div>
	`;
};

export const Default = Template.bind({});
Default.args = {};
