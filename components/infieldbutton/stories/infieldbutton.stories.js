// Import the component markup template
import { Template } from "./template";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";

export default {
  title: "Components/In-field button",
  description: "The In-field button component is a button used inside a textfield",
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
    isQuiet: {
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
      options: ["left", "right", "top", "bottom"],
      control: "select"
    },
    iconName: {
      ...IconStories?.argTypes?.iconName ?? {},
      if: false,
    },
    isDisabled: {
      name: "Disabled",
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
    iconName: "Add",
    isQuiet: false,
    isDisabled: false
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

export const Right = Template.bind({});
Right.args = {
  position: "right"
};

export const Quiet = Template.bind({});
Quiet.args = {
  isQuiet: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true
};

