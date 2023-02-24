// Import the component markup template
import { Template } from "./template";

export default {
  title: "Color handle",
  description: "The Color handle component is...",
  component: "Colorhandle",
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
  },
  args: {
    rootClass: "spectrum-",
    size: "m",
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
Default.args = {};
