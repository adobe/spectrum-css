// Import the component markup template
import { Template } from "./template";

export default {
  title: "Well",
  description: "The Well component is...",
  component: "Well",
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
    rootClass: "spectrum-Well",
    size: "m",
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('well') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};
