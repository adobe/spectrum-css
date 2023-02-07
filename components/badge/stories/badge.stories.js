// Import the component markup template
import { Template } from "./template";


import { default as IconStories } from "../../icon/stories/icon.stories.js";

export default {
  title: "Badge",
  description:
    "A badge element displays a small amount of color-categorized metadata; ideal for getting a user's attention.",
  component: "Badge",
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
      control: "text",
    },
    icon:
      IconStories && IconStories.argTypes && IconStories.argTypes.iconName
        ? IconStories.argTypes.iconName
        : {},
    variant: {
      name: "Background color variants",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["neutral", "accent", "informative", "positive", "negative"],
      control: "select",
    },
    hideLabel: {
      name: "Hide label",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    customColor: {
      name: "Custom color",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Advanced",
      },
      options: ["black-text"],
      control: "select",
    },
    customLayout: {
      name: "Custom layout",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Advanced",
      },
      options: [
        "fixed-inline-start",
        "fixed-inline-end",
        "fixed-block-start",
        "fixed-block-end",
      ],
      control: "select",
    },
  },
  args: {
    rootClass: "spectrum-Badge",
    size: "m",
    icon: "Info",
    label: "Badge",
    variant: "neutral",
    hideLabel: false,
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("badge")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {};
