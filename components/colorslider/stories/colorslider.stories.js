// Import the component markup template
import { Template } from "./template";

export default {
  title: "Color slider",
  description: "The Color slider component lets users visually change an individual channel of a color..",
  component: "Colorslider",
  argTypes: {
    isDisabled: {
      name: "Disabled",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean"
    },
    isFocused: {
      name: "Focused",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
      if: { arg: 'isDisabled', truthy: false }
    },
  },
  args: {
    rootClass: "spectrum-ColorSlider",
    isDisabled: false,
    isFocused: false,
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('colorslider') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};
