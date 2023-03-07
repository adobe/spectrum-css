// Import the component markup template
import { Template } from "./template";

export default {
  title: "Text field",
  description:
    "Text fields are text boxes that allow users to input custom text entries with a keyboard. Various decorations can be displayed around the field to communicate the entry requirements.",
  component: "TextField",
  argTypes: {
    isValid: {
      name: "Valid",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean"
    },
    isInvalid: {
      name: "Invalid",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean"
    },
    isFocused: {
      name: "Focused",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean"
    },
    isKeyboardFocused: {
      name: "Keyboard focused",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean"
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
    multiline: {
      name: "Multiline",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean"
    },
    iconName: {
      table: { disable: true },
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
    isRequired: {
      name: "Required",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    isReadOnly: {
      name: "Read only",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    pattern: {
      name: "Pattern",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      control: "text"
    },
  },
  args: {
    rootClass: "spectrum-Textfield",
    isValid: false,
    isInvalid: false,
    isValid: false,
    isDisabled: false,
    isRequired: false,
    isReadOnly: false,
    isFocused: false,
    isKeyboardFocused: false,
    multiline: false,
    isQuiet: false,
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("textfield")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {};
