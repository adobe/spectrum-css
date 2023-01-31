// Import the component markup template
import { Template } from "./template";

export default {
  title: "Switch",
  description:
    "A switch is used to turn an option on or off. Switches allow users to select the state of a single option at a time.",
  component: "Switch",
  argTypes: {
  },
  args: {
    rootClass: "spectrum-Switch",
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("switch")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {};
