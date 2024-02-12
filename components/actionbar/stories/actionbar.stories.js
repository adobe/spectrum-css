// Import the component markup template
import { Template } from "./template";

import { default as Popover } from "@spectrum-css/popover/stories/popover.stories.js";
import { default as CloseButton } from "@spectrum-css/closebutton/stories/closebutton.stories.js";
import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";

export default {
	title: "Components/Action bar",
	description: "The Action bar component is a floating full width bar that appears upon selection",
	component: "Actionbar",
	argTypes: {
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isEmphasized: {
			name: "Emphasized styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
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
				...Popover.parameters.actions.handles,
				...CloseButton.parameters.actions.handles,
				...ActionButton.parameters.actions.handles,
			],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("actionbar")
				? "migrated"
				: undefined,
		},
    // Getting the Figma link: https://help.figma.com/hc/en-us/articles/360045003494-Storybook-and-Figma
    design: {
       type: "figma",
       url: "https://www.figma.com/file/MPtRIVRzPp2VHiEplwXL2X/S-%2F-Manual?node-id=465%3A3127&t=xbooxCWItOFgG2xM-1",
    },
  }
};

export const Default = Template.bind({});
Default.args = {};
