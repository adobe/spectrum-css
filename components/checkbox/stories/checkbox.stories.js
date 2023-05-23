// Import the component markup template
import { Template } from "./template";

export default {
  title: "Checkbox",
  description:
    "Checkboxes allow users to select multiple items from a list of individual items, or mark one individual item as selected.",
  component: "Checkbox",
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
    label: {
      name: "Label",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Content",
      },
      control: { type: "text" },
    },
    isEmphasized: {
      name: "Emphasized styling",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: { type: "boolean" },
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
    isChecked: {
      name: "Checked",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: { type: "boolean" },
    },
  },
  args: {
    rootClass: "spectrum-Checkbox",
    size: "m",
    label: "Checkbox",
    isChecked: false,
    isDisabled: false,
    isEmphasized: false,
  },
  parameters: {
    actions: {
      handles: ['click input[type="checkbox"]'],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("checkbox")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {};
