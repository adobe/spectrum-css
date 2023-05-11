import { html } from "lit-html";

// Import the component markup template
import { Template } from "./template";

export default {
  title: "Alert Dialog",
  description:
    "Alert dialogs display important information that users need to acknowledge. They appear over the interface and block further interactions until an action is selected.",
  component: "AlertDialog",
  argTypes: {
    heading: {
      name: "Heading",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      control: { type: "text" },
    },
    content: { table: { disable: true } },
    showModal: {
      name: "Wrap the alert dialog in a modal",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    secondaryButton: {
      name: 'Display 3rd button',
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    isOpen: {
      name: "Open",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
  },
  args: {
    rootClass: "spectrum-AlertDialog",
    showModal: false,
    isOpen: true,
    secondaryButton: false,
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("alertdialog")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {
  variant: 'confirmation',
  heading: "Enable Smart Filters?",
  showModal: true,
  buttons: [{
    variant: "secondary",
    treatment: "outline",
    label: "Remind me later"
  }, {
    variant: "primary",
    treatment: "fill",
    label: "Enable",
    variant: "accent"
  }],
  content: [
   'Smart filters are nondestructive and will preserve your original images.',
  ],
};

export const Information = Template.bind({});
Information.args = {
  variant: 'information',
  heading: "Connect to wifi",
  showModal: true,
  buttons: [{
    variant: "secondary",
    treatment: "outline",
    label: "Cancel"
  }, {
    variant: "primary",
    treatment: "outline",
    label: "Continue",
    variant: "primary"
  }],
  content: [
    'Please connect to wifi to sync your projects or go to Settings to change your prefernces.',
  ],
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  heading: "Unverified format",
  showModal: true,
  icon: true,
  buttons: [{
    variant: "secondary",
    treatment: "outline",
    label: "Cancel"
  }, {
    variant: "primary",
    treatment: "outline",
    label: "Continue",
    variant: "primary"
  }],
  content: [
    'This format has not been verified and may not be viewable for some users. Do you want to continue publishing?',
  ],
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  heading: "Unable to share",
  showModal: true,
  icon: true,
  buttons: [{
    variant: "secondary",
    treatment: "outline",
    label: "Cancel"
  }, {
    variant: "primary",
    treatment: "outline",
    label: "Continue",
    variant: "primary"
  }],
  content: [
    'An error occured while sharing your project. Please verify the email address and try again.',
  ],
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: 'destructive',
  heading: "Delete 3 documents?",
  showModal: true,
  buttons: [{
    variant: "secondary",
    treatment: "outline",
    label: "Cancel"
  }, {
    variant: "primary",
    treatment: "fill",
    label: "Delete",
    variant: "negative"
  }],
  content: [
    'Are you sure you want to delete the 3 selected documents?',
  ],
};

