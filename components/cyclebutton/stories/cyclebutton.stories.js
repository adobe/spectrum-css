// Import the component markup template
import { Template } from "./template";

import { default as IconStories } from "../../icon/stories/icon.stories.js";

export default {
  title: "Cycle Button",
  description: "The Cycle button component is an action button that cycles through two different icons, a play that then changes to a pause, for example.",
  component: "Cyclebutton",
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
    initialIcon: {
      name: "Initial icon",
      type: { name: "string", required: true },
      options: 
        IconStories && IconStories.argTypes && IconStories.argTypes.iconName
          ? IconStories.argTypes.iconName.options
          : {},
      control: { type: "select" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
    },
    selectedIcon: {
      name: "Selected icon",
      type: { name: "string", required: true },
      options: 
        IconStories && IconStories.argTypes && IconStories.argTypes.iconName
          ? IconStories.argTypes.iconName.options
          : {},
      control: { type: "select" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
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
  },
  args: {
    rootClass: "spectrum-CycleButton",
    size: "m",
    initialIcon: "Play",
    selectedIcon: "Pause",
    isSelected: false
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('cyclebutton') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};
