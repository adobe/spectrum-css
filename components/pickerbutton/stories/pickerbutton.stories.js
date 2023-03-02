// Import the component markup template
import { Template } from "./template";

import { default as Icon } from "@spectrum-css/icon/stories/icon.stories.js";

export default {
  title: "Pickerbutton",
  description: "The Pickerbutton component is...",
  component: "Pickerbutton",
  argTypes: {
    size: {
      name: "Size",
      type: { name: "string", required: true },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["s", "m", "l", "xl"],
      control: "select"
    },
    iconType: {
      name: "Icon",
      type: { name: "string", required: false },
      table: {
        type: { summary: "string" },
        category: "Content",
      },
      options: ["ui", "workflow"],
      control: "inline-radio"
    },
    iconName: {
      ...Icon.argTypes.iconName,
      if: { arg: 'iconType', eq: 'ui' },
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
    isValid: {
      name: "Valid input",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
    isInvalid: {
      name: "Invalid input",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
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
    },
    position: {
      name: "Position",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["right", "left"],
      control: "select"
    },
  },
  args: {
    rootClass: "spectrum-PickerButton",
    label: "Select a Country",
    size: "m",
    isOpen: false,
    isRounded: false,
    isValid: false,
    isInvalid: false,
    isQuiet: false,
    isDisabled: false,
    isFocused: false,
    position: "right",
    iconType: "ui",
    iconName: "ChevronDown200",
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('pickerbutton') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};
