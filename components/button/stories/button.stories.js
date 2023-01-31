// Import the component markup template
import { Template } from "./template";


import { default as IconStories } from "../../icon/stories/icon.stories.js";

export default {
  title: "Button",
  description:
    "Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs, and are ideal for calling attention to where a user needs to do something in order to move forward in a flow.",
  component: "Button",
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
        category: "Component",
      },
      control: { type: "text" },
    },
    icon:
      IconStories && IconStories.argTypes && IconStories.argTypes.iconName
        ? IconStories.argTypes.iconName
        : {},
    hideLabel: {
      name: "Hide label",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: {
        type: "boolean",
        if: { arg: 'icon', truthy: true }
      },
    },
    variant: {
      name: "Variant",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["accent", "negative", "primary", "secondary"],
      control: "select",
    },
    treatment: {
      name: "Treatment",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["fill", "outline"],
      control: "inline-radio",
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
    justified: {
      name: "Justified",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Advanced",
      },
      control: "boolean",
    },
  },
  args: {
    rootClass: "spectrum-Button",
    size: "m",
    label: "Edit",
    variant: "accent",
    treatment: "fill",
    isDisabled: false,
  },
  parameters: {
    actions: {
      handles: ["click .spectrum-Button"],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("button")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {};

export const OutlineWithIcon = Template.bind({});
OutlineWithIcon.args = {
  treatment: "outline",
  icon: "Edit",
};

export const DisabledIconOnly = Template.bind({});
DisabledIconOnly.args = {
  hideLabel: true,
  isDisabled: true,
  icon: "Actions",
};
