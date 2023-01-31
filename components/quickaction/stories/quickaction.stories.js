// Import the component markup template
import { Template } from "./template";

export default {
  title: "Quick action",
  description: "The Quick action component is...",
  component: "QuickAction",
  argTypes: {
    content: { table: { disable: true } },
    isOpen: {
      name: "Open",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
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
      control: "select",
      options: ["left", "right"],
    },
    textOnly: {
      name: "Text only action buttons",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Advanced",
      },
      control: "boolean",
    },
  },
  args: {
    rootClass: "spectrum-QuickAction",
    isOpen: true,
    textOnly: false,
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("quickaction")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {
  content: [
    {
      icon: "Edit",
    },
    {
      icon: "Copy",
    },
    {
      icon: "Delete",
    },
  ],
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  content: [
    {
      label: "Edit",
    },
    {
      label: "Copy",
    },
    {
      label: "Delete",
    },
  ],
};
