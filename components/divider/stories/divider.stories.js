// Import the component markup template
import { Template } from "./template";

export default {
  title: "Divider",
  description:
    "Dividers bring clarity to a layout by grouping and dividing content that exists in close proximity. It can also be used to establish rhythm and hierarchy.",
  component: "Divider",
  argTypes: {
    size: {
      name: "Size",
      type: { name: "string", required: true },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["s", "m", "l"],
      control: "select"
    },
    vertical: {
      name: "Vertical",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    tag: { table: { disable: true } },
  },
  args: {
    rootClass: "spectrum-Divider",
    size: "m",
    vertical: false,
  },
  parameters: {
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("divider")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {};
