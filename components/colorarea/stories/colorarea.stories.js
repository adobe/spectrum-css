// Import the component markup template
import { Template } from "./template";

export default {
  title: "Color area",
  description: "The Colorarea component is...",
  component: "Colorarea",
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
  },
  args: {
    rootClass: "spectrum-ColorArea",
    isDisabled: false,
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('colorarea') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};

export const CustomSize = Template.bind({});
CustomSize.args = {
  customSize: "height: 80px; width: 80px;",
  handlePosition: "transform: translate(80px, 0px);"
};