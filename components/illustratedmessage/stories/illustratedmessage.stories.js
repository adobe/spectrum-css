import { html } from 'lit-html';

// Import the component markup template
import { Template } from "./template";
import { Template as Link } from "@spectrum-css/link/stories/template.js";

export default {
  title: "Illustrated message",
  description: "The illustrated message component is used for status and errors.",
  component: "IllustratedMessage",
  argTypes: {
    heading: {
      name: "Heading",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Content",
      },
      control: "text",
    },
    description: {
      name: "Description",
      table: {
        category: "Content",
        disable: true,
      },
    },
    variant: {
      name: "Variants",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
        disable: true,
      },
      options: ["cta"],
      control: "radio",
    },
  },
  args: {
    rootClass: "spectrum-IllustratedMessage",
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('illustratedmessage') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {
  heading: "Error 404: Page not found",
  description: "This page isn't available. Try checking the URL or visit a different page.",
};

export const CTA = Template.bind({});
CTA.description = "The illustrated message component is used for instruction/call-to-action.";
CTA.args = {
  ...Default.args,
  heading: "Drag and drop your file",
  description: html`${Link({ url: '#', text: 'Select a file' })} from your computer.`,
  variant: "cta",
};
