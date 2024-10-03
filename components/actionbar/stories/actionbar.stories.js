import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as CloseButton } from "@spectrum-css/closebutton/stories/closebutton.stories.js";
import { default as Popover } from "@spectrum-css/popover/stories/popover.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isEmphasized, isOpen } from "@spectrum-css/preview/types";
import pkgJson from "../package.json";
import { ActionBarGroup } from "./actionbar.test.js";
import { Template } from "./template.js";

/**
 * The action bar component is a floating full width bar that appears upon selection.
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
			url: "https://www.figma.com/design/Mngz9H7WZLbrCvGQf3GnsY/S2-%2F-Desktop?node-id=28379-3165&node-type=frame&t=Kcz7zeePp3PeRusJ-11",
		},
		packageJson: pkgJson,
	},
	tags: ["!autodocs"],
};

export const Default = ActionBarGroup.bind({});
Default.args = {};

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
export const Emphasized = Template.bind({});
Emphasized.tags = ["!dev"];
Emphasized.args = {
	isEmphasized: true,
};
Emphasized.parameters = {
	chromatic: { disableSnapshot: true },
};
