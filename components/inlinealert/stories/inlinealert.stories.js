// Import the component markup template
import { Template } from "./template";

export default {
  title: "Inlinealert",
  description: "In-line alerts display a non-modal message associated with objects in a view. These are often used in form validation, providing a place to aggregate feedback related to multiple fields.",
  component: "Inlinealert",
  argTypes: {
    headerText: {
      name: "Header Text",
      type: { name: "string", required: true },
      table: {
        type: { summary: "string" },
        disable: false,
        category: "Component",
      },
      control: { type: "text" },
    },
    text: {
      name: "Text",
      type: { name: "string", required: true },
      table: {
        type: { summary: "string" },
        disable: false,
        category: "Component",
      },
      control: { type: "text" },
    },
    variant: {
      name: "In-line alert variants",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["neutral", "info", "positive", "notice", "negative", "closable"],
      control: "select"
    }
  },
  args: {
    rootClass: "spectrum-InLineAlert",
    headerText: "in-line alert header",
    text: "This is an alert.",
    variant: "neutral",
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('inlinealert') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};
