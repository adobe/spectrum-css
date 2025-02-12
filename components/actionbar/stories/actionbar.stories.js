import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as CloseButton } from "@spectrum-css/closebutton/stories/closebutton.stories.js";
import { default as Popover } from "@spectrum-css/popover/stories/popover.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isEmphasized, isOpen } from "@spectrum-css/preview/types";
import metadata from "../dist/metadata.json";
import packageJson from "../package.json";
import { ActionBarGroup } from "./actionbar.test.js";
import { BehavioralTemplate } from "./template.js";

/**
 * The action bar component is a floating full width bar that appears upon selection. Action bars are used for single and bulk selection patterns, when a user needs to perform actions on either a single or multiple items at the same time.
 *
 * ## Popover dependency
 * Action bar requires popover, which is nested within the action bar. Action bar background, border, and corner radius are applied to the nested popover component and can be overridden by using action bar's `--mod-*` prefixed custom properties. A [list of the properties](#modifiable-properties) can be found below.
 */
export default {
	title: "Action bar",
	component: "ActionBar",
	argTypes: {
		isOpen,
		isEmphasized,
		isSticky: {
			name: "Sticky",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
		isFixed: {
			name: "Fixed position",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
		isFlexible: {
			name: "Flexible width",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
		customPopoverStyles: { table: { disable: true } }
	},
	args: {
		rootClass: "spectrum-ActionBar",
		isOpen: true,
		isEmphasized: false,
		isSticky: false,
		isFixed: false,
		isFlexible: false,
	},
	parameters: {
		actions: {
			handles: [
				...(Popover?.parameters?.actions?.handles ?? []),
				...(CloseButton?.parameters?.actions?.handles ?? []),
				...(ActionButton?.parameters?.actions?.handles ?? []),
			],
		},
		// Getting the Figma link: https://help.figma.com/hc/en-us/articles/360045003494-Storybook-and-Figma
		design: {
			type: "figma",
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=28379-300",
		},
		packageJson,
		metadata,
	},
};

export const Default = ActionBarGroup.bind({});
Default.args = {};
Default.tags = ["!autodocs"];

// ********* VRT ONLY ********* //
export const WithForcedColors = ActionBarGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //
/**
 * The emphasized action bar has a blue background that adds visual emphasis on the actions and selection. Use this for when the bar should call attention (e.g., floating in a table).
 */
export const Emphasized = BehavioralTemplate.bind({});
Emphasized.tags = ["!dev"];
Emphasized.args = {
	isEmphasized: true,
};
Emphasized.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * By default, action bars fill the width of their container. Below are example of the other behavioral variants available.
 *
 * - Standard action bars fill the width of their container.
 * - Flexible action bars fit the width of their content.
 * - Sticky action bars will sit on top of content until dismissed. Scroll down on this example to view how the sticky action bar behaves within a scrollable element.
 *
*/
export const Standard = BehavioralTemplate.bind({});
Standard.parameters = {
	chromatic: { disableSnapshot: true },
};
Standard.tags = ["!dev"];
Standard.storyName = "Default";
