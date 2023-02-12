// Import the component markup template
import { Template } from "./template";

export default {
  title: "Clear button",
  description: "The Clear button component is...",
  component: "Clearbutton",
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
    isDisabled: {
      name: "Disabled",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
    variant: {
      name: "Variant",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["overBackground"],
      control: "select"
    }
  },
  args: {
    rootClass: "spectrum-ClearButton",
    size: "m",
    isDisabled: false,
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('clearbutton') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};
