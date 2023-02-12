// Import the component markup template
import { Template } from "./template";


import { default as MenuStories } from "@spectrum-css/menu/stories/menu.stories.js";

export default {
  title: "Picker",
  description: "A picker outlines a set of options for a user.",
  component: "Picker",
  argTypes: {
    content: { table: { disable: true } },
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
        category: "Component",
      },
      control: { type: "text" },
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
    isOpen: {
      name: "Open",
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
    isQuiet: {
      name: "Quiet styling",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    isInvalid: {
      name: "Invalid styling",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
  },
  args: {
    rootClass: "spectrum-Picker",
    size: "m",
    label: "Select a Country with a very long label, too long in fact",
    isDisabled: false,
    isFocused: false,
    isQuiet: false,
    isOpen: true,
    isInvalid: false,
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("picker")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {
  content: [
    MenuStories.Default,
  ]
};
