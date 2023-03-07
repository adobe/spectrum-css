// Import the component markup template
import { Template } from "./template";


import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";

export default {
  title: "Tag",
  description:
    "A tag categorizes content. They can represent keywords or people, and are grouped to describe an item or a search request.",
  component: "Tag",
  argTypes: {
    size: {
      name: "Size",
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["s", "m", "l"],
      control: "select"
    },
    icon:
      IconStories && IconStories.argTypes && IconStories.argTypes.iconName
        ? IconStories.argTypes.iconName
        : {},
    avatarUrl: {
      name: "Avatar image",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
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
    isEmphasized: {
      name: "Emphasized styling",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    isInvalid: {
      name: "Invalid",
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
    isSelected: {
      name: "Selected",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
    hasClearButton: {
      name: "Clear button",
      description: "True if a button is present to clear the tag.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
  },
  args: {
    rootClass: "spectrum-Tag",
    size: "m",
    label: "Tag label",
    avatarUrl: "example-ava.png",
    isSelected: false,
    isDisabled: false,
    isInvalid: false,
    isEmphasized: false,
    hasClearButton: true,
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("tag")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {};
