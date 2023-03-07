// Import the component markup template
import { Template } from "./template";

export default {
  title: "Close button",
  description: "A button used to close or dismiss components",
  component: "CloseButton",
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
    rootClass: "spectrum-CloseButton",
    size: "m",
    isDisabled: false,
  },
  parameters: {
    actions: {
      handles: ["click .spectrum-CloseButton"],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("closebutton")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {};
