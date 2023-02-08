// Import the component markup template
import { Template } from "./template";

export default {
  title: "Swatch",
  description:
    "A swatch shows a small sample of a fill—such as a color, gradient, texture, or material—that is intended to be applied to an object.",
  component: "Swatch",
  argTypes: {
  },
  args: {
    rootClass: "spectrum-Swatch",
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("swatch")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {};
