// Import the component markup template
import { Template } from "./template";

import { default as IconStories } from "../../icon/stories/icon.stories.js";

export default {
  title: "Infield button",
  description: "The Infield button component is...",
  component: "Infieldbutton",
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
    quiet: {
      name: "Quiet",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean"
    },
    position: {
      name: "Position",
      type: { name: "string", required: true },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["left", "right"],
      control: "select"
    },
    icon:
      IconStories && IconStories.argTypes && IconStories.argTypes.iconName
        ? IconStories.argTypes.iconName
        : {},
    isDisabled: {
      name: "Disabled",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean"
    },
    isInvalid: {
      name: "Invalid",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean"
    },
  },
  args: {
    rootClass: "spectrum-InfieldButton",
    size: "m",
    position: "left",
    icon: "Add"
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('infieldbutton') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};
