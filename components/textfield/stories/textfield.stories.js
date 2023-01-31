// Import the component markup template
import { Template } from "./template";

export default {
  title: "Text field",
  description:
    "Text fields are text boxes that allow users to input custom text entries with a keyboard. Various decorations can be displayed around the field to communicate the entry requirements.",
  component: "TextField",
  argTypes: {
  },
  args: {
    rootClass: "spectrum-Textfield",
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("textfield")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {};
