// Import the component markup template
import { Template } from "./template";

export default {
  title: "Field label",
  description: "The Field label component is...",
  component: "Fieldlabel",
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
    label: {
      name: "Label",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      control: { type: "text" },
    },
  },
  args: {
    rootClass: "spectrum-FieldLabel",
    size: "m",
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('fieldlabel') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {
  label: "Label",
};
