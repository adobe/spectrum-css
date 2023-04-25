// Import the component markup template
import { Template } from "./template";

import { Default as MenuStories } from "@spectrum-css/menu/stories/menu.stories.js";
import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";

export default {
  title: "Picker",
  description: "A picker outlines a set of options for a user.",
  component: "Picker",
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
    iconName: {
      ...IconStories?.argTypes?.iconName ?? {},
      if: false,
    },
    placeholder: {
      name: "Placeholder",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Content",
      },
      control: { type: "text" },
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
    isDisabled: {
      name: "Disabled",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
    isLoading: {
      name: "Loading",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
    isInvalid: {
      name: "Invalid input",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
    content: { table: { disable: true } },
  },
  args: {
    rootClass: "spectrum-Picker",
    label: "Country",
    placeholder: "Select a country",
    iconName: "ChevronDown100",
    isLoading: false,
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
    MenuStories(MenuStories.args),
  ]
};

export const Quiet = Template.bind({});
Quiet.args = {
  isQuiet: true,
  content: [
    MenuStories(MenuStories.args),
  ]
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  content: [
    MenuStories(MenuStories.args),
  ]
};
