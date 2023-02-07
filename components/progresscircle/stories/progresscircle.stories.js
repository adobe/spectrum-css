// Import the component markup template
import { Template } from "./template";

export default {
  title: "Progresscircle",
  description: "Progress circles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way. They can represent determinate or indeterminate progress.",
  component: "Progresscircle",
  argTypes: {
    size: {
      name: "Size",
      type: { name: "string", required: true },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["small", "medium", "large"],
      control: "select"
    },
    isIndeterminate: {
      name: "Indeterminate",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
    overBackground: {
      name: "Over Background",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Advanced",
      },
      control: "boolean",
    },
  },
  args: {
    rootClass: "spectrum-ProgressCircle",
    size: "medium",
    isIndeterminate: false,
    overBackground: false,
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('progresscircle') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};
