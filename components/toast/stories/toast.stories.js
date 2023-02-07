// More on args: https://storybook.js.org/docs/web-components/writing-stories/args

// Uncomment if you plan to include an icon
// import { default as IconStories } from '../../icon/stories/icon.stories.js';

// Import the component markup template
import { Template } from "./template";

export default {
  title: "Toast",
  description:
    "Toasts display brief, temporary notifications. They are noticeable but do not disrupt the user experience and do not require an action to be taken.",
  component: "Toast",
  argTypes: {
    variant: {
      name: "Variant",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["negative", "positive", "info", "error", "warning"],
      control: "select",
    },
    message: {
      name: "Message",
      type: { name: "string", required: true },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      control: "text",
    },
    isHidden: {
      name: "Hidden",
      type: { name: "boolean" },
      table: {
        category: "State",
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    inlineButtonLabel: {
      name: "Inline button label",
      description: "Label for the inline button; if blank, no button is shown",
      type: { name: "string" },
      table: {
        category: "Advanced",
        type: { summary: "string" },
      },
      control: "text",
    },
    width: {
      name: "width",
      description:
        "By default, the toast will be as wide as the message. Set this to a number to set a maximum width in pixels and allow the toast to wrap the message.",
      type: { name: "number" },
      table: {
        category: "Advanced",
      },
      control: "number",
    },
  },
  args: {
    rootClass: "spectrum-Toast",
    variant: "info",
    message: "A new version of Lightroom Classic is now available",
    isHidden: false,
    inlineButtonLabel: "Update",
  },
  parameters: {
    actions: {
      handles: ["click .spectrum-Toast button"],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("toast")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {};
