// Import the component markup template
import { Template } from "./template";

import { default as IconStories } from "../../icon/stories/icon.stories.js";
import { default as ActionButtonStories } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";

export default {
  title: "Cycle Button",
  description: "The Cycle button component is an action button that cycles through two different icons, a play that then changes to a pause, for example.",
  component: "CycleButton",
  argTypes: {
    size: ActionButtonStories.argTypes.size,
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
    isSelected: ActionButtonStories.argTypes.isSelected,
    isDisabled: ActionButtonStories.argTypes.isDisabled,
  },
  args: {
    rootClass: "spectrum-CycleButton",
    size: "m",
    initialIcon: "Play",
    selectedIcon: "Pause",
  },
  parameters: {
    actions: {
      handles: [ ...ActionButtonStories.parameters.actions.handles ],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('cyclebutton') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};
