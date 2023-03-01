// Import the component markup template
import { Template } from "./template";

export default {
  title: "Combobox",
  description: "The input group component is...",
  component: "InputGroup",
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
    isQuiet: {
      name: "Quiet styling",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    isValid: {
      name: "Valid",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
      if: { arg: 'isInvalid', truthy: false },
    },
    isInvalid: {
      name: "Invalid",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
      if: { arg: 'isValid', truthy: false },
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
  },
  args: {
    rootClass: "spectrum-InputGroup",
    isOpen: true,
    isQuiet: false,
    isInvalid: false,
    isValid: false,
    isDisabled: false,
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('inputgroup') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};
