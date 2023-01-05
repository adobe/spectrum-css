// Import the component markup template
import { Template } from "./template";

// Load styles for this component
import '../index.css';

import '@spectrum-css/icon';

export default {
  title: "Close button",
  description: "A button used to close or dismiss components",
  component: "CloseButton",
  argTypes: {
    rootClass: {
      name: "Class name",
      type: { name: "string", required: true },
      defaultValue: "spectrum-CloseButton",
      table: { disable: true },
      control: {
        readonly: true,
      }
    },
    customClasses: { table: { disable: true } },
    size: {
      name: "Size",
      type: { name: "string", required: true },
      defaultValue: "m",
      table: {
        type: { summary: "string" },
        category: "Component",
        defaultValue: { summary: "m" }
      },
      options: ["s", "m", "l", "xl"],
      control: "select"
    },
    staticColor: {
      name: "StaticColor",
      type: { name: "string", required: false },
      table: {
        type: { summary: "string" },
        category: "Advanced",
      },
      options: ["white", "black"],
      control: "select"
    },
    isDisabled: {
      name: "Disabled",
      type: { name: "boolean", required: true },
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        category: "Component",
        defaultValue: false
      },
      control: "boolean"
    },
  },
  args: {
    size: "m",
    isDisabled: false,
  },
  parameters: {
    actions: {
      handles: ["click .spectrum-CloseButton", "focus .spectrum-CloseButton"],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('closebutton') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};
