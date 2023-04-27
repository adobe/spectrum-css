// Import the component markup template
import { Template } from "./template";

export default {
  title: "Table",
  description:
    "A table is used to create a container for displaying information. It allows users to sort, compare, and take action on large amounts of data.",
  component: "Table",
  argTypes: {
    size: {
      name: "Size",
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["s", "m"],
      control: "select",
    },
    density: {
      name: "Density",
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["standard", "compact", "spacious"],
      control: "select",
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
  },
  args: {
    rootClass: "spectrum-Table",
    size: "m",
    density: "standard",
    isQuiet: false,
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("table")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {};
