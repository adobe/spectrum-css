// Import the component markup template
import { Template } from "./template";

export default {
  title: "Color handle",
  description: "The Color Handle component is used with ColorArea, ColorSlider and ColorWheel as the color selector",
  component: "Colorhandle",
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
      control: "boolean"
    },
  },
  args: {
    rootClass: "spectrum-ColorHandle",
    size: "m",
    isDisabled: false,
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('colorhandle') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {
};