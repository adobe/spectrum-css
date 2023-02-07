// Import the component markup template
import { Template } from "./template";


import { Template as Dialog } from "../../dialog/stories/template.js";

export default {
  title: "Tray",
  description:
    "Tray dialogs are typically used to portray information on mobile device or smaller screens.",
  component: "Tray",
  argTypes: {
    content: { table: { disable: true } },
    isOpen: {
      name: "Open",
      type: { name: "boolean" },
      table: { disable: true } },
      control: "boolean",
  },
  args: {
    rootClass: "spectrum-Tray",
    customClasses: ["spectrum-Modal"],
    isOpen: true,
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("tray")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.argTypes = {
  heading: {
    name: "Heading",
    type: { name: "string" },
    table: {
      type: { summary: "string" },
      category: "Content",
    },
    control: "text",
  },
};
Default.args = {
  heading: "Tray Dialog",
  content: [
    {
      template: Dialog,
      heading: "New Messages",
      content: "You have 5 new messages!",
      isDismissable: false,
    },
  ],
};
