import { html } from "lit-html";

// Import the component markup template
import { Template } from "./template";

export default {
  title: "Components/Alert dialog",
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
    content: {
      name: "Content",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      control: { type: "text" },
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
    variant: { table: { disable: true } },
  },
  args: {
    rootClass: "spectrum-AlertDialog",
    isOpen: true,
  },
  parameters: {
    actions: {
      handles: ["click .spectrum-AlertDialog button"],
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
  content: 'Smart filters are nondestructive and will preserve your original images.',
};

export const Information = Template.bind({});
Information.args = {
  variant: 'information',
  heading: "Rate this app",
  buttons: [{
    variant: "secondary",
    treatment: "outline",
    label: "No, thanks"
  },{
    variant: "secondary",
    treatment: "outline",
    label: "Remind me later"
  }, {
    variant: "primary",
    treatment: "outline",
    label: "Rate now",
  }],
  content: 'If you enjoy our app, would you mind taking a moment to rate it?',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  heading: "Unverified format",
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
  content: 'This format has not been verified and may not be viewable for some users. Do you want to continue publishing?',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  heading: "Unable to share",
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
  content: 'An error occured while sharing your project. Please verify the email address and try again.',

};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: 'destructive',
  heading: "Delete 3 documents?",
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
  content: 'Are you sure you want to delete the 3 selected documents?',
};

