// Import the component markup template
import { html } from "lit";
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Template } from "./template";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";

export default {
	title: "Components/Action button",
	description:
		"The action button component represents an action a user can take.",
	component: "ActionButton",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["xs", "s", "m", "l", "xl"],
			control: "select",
		},
		iconName: {
			...(IconStories?.argTypes?.iconName ?? {}),
			if: false,
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
		isQuiet: {
			name: "Quiet styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
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
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isSelected: {
			name: "Selected",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		hideLabel: {
			name: "Hide label",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
		hasPopup: {
			name: "Has popup",
			description: "True if the button triggers a popup action.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
		staticColor: {
			name: "StaticColor",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			options: ["white", "black"],
			control: "select",
		},
    role: {
      name: "Role",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      control: "text"
    },
	},
	args: {
		rootClass: "spectrum-ActionButton",
		size: "m",
		iconName: "More",
		isQuiet: false,
		isEmphasized: false,
		hasPopup: false,
    role: "button",
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-ActionButton:not([disabled])"],
		},
		status: {
			type: process.env.MIGRATED_PACKAGES.includes("actionbutton")
				? "migrated"
				: undefined,
		},
	},
};

export const Default = Template.bind({});
Default.args = {};

export const WithHoverState = Template.bind({});

WithHoverState.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const actionBtn = canvas.getByRole('button');
  await waitFor(async () => {
    actionBtn.classList.add('sp-hover');
  });
};

WithHoverState.args = {
  label: "Edit",
  icon: false,
  iconName: '',
}

export const WithFocusState = Template.bind({});

WithFocusState.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await waitFor(async () => {
    const actionBtn = await canvas.findByRole('button');
    actionBtn.classList.add('is-focused', 'focus-ring');
    actionBtn.focus();
  });
};

WithFocusState.args = {
  label: "Edit",
  icon: false,
  iconName: '',
}

WithFocusState.decorators = [(Story) => html`<div style="padding: 1em;">${Story().outerHTML || Story()}</div>`];
