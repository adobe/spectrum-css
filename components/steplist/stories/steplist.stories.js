// Import the component markup template
import { Template } from "./template";

export default {
  title: "Step list",
  description:
    "A step list can communicate the progress of a task or workflow. It can help users understand where they are in a process and what they need to do next.",
  component: "StepList",
  argTypes: {
  },
  args: {
    rootClass: "spectrum-Steplist",
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("steplist")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {};
