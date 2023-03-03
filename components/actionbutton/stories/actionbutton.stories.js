// Import the component markup template
import { Template } from "./template";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";

export default {
  title: "Action button",
  description: "The action button component represents an action a user can take.",
  component: "ActionButton",
  argTypes: {
    size: {
      name: "Size",
      type: { name: "string", required: true },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["xs", "s", "m", "l", "xl"],
      control: "select"
    },
    iconName: {
      ...IconStories?.argTypes?.iconName ?? {},
      if: false,
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
    isQuiet: {
      name: "Quiet styling",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    isEmphasized: {
      name: "Emphasized styling",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
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
    isSelected: {
      name: "Selected",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
    hideLabel: {
      name: "Hide label",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Advanced",
      },
      control: "boolean",
    },
    hasPopup: {
      name: "Has popup",
      description: "True if the button triggers a popup action.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Advanced",
      },
      control: "boolean",
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
  },
  args: {
    rootClass: "spectrum-ActionButton",
    size: "m",
    iconName: "More",
    isQuiet: false,
    isEmphasized: false,
    hasPopup: false,
  },
  parameters: {
    actions: {
      handles: ['click .spectrum-ActionButton:not([disabled])'],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("actionbutton")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {};
