// Import the component markup template
import { Template } from "./template";

export default {
  title: "Progress bar",
  description: "The Progressbar component shows the progression of a system operation such as downloading, uploading, processing, etc. in a visual way. It can represent determinate or indeterminate progress.",
  component: "ProgressBar",
  argTypes: {
    customWidth: { table: { disable: true } },
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
    labelPosition: {
      name: "Label Position",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["top", "side"],
      control: "select"
    },
  },
  args: {
    rootClass: "spectrum-ProgressBar",
    size: "m",
    labelPosition: "top",
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('progressbar') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};

export const customWidth = Template.bind({});
customWidth.args = {
  customWidth: '500px'
};
