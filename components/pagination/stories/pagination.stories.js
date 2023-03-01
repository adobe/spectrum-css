// Import the component markup template
import { Template } from "./template";

export default {
  title: "Pagination",
  description: "The Field group component is...",
  component: "Pagination",
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
    variant: {
      name: "Variant",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["listing", "explicit"],
      control: "inline-radio",
    }
  },
  args: {
    rootClass: "spectrum-Pagination",
    size: "m",
    variant: "listing"
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('pagination') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};
