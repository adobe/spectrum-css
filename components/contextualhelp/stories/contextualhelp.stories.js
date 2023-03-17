// Import the component markup template
import { Template } from "./template";
import { html } from "lit-html";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { Default as Dialog } from "@spectrum-css/dialog/stories/dialog.stories.js";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Contextual Help",
  description: "The Contextual Help component is...",
  component: "ContextualHelp",
  argTypes: {
    title: {
      name: "Title",
      type: { name: "string", required: true },
      table: {
        type: { summary: "string" },
        category: "Content",
      },
    },
    body: {
      name: "Body",
      type: { name: "string", required: true },
      table: {
        type: { summary: "string" },
        category: "Content",
      },
    },
    iconName: {
      name: "Icon",
      type: { name: "string", required: true },
      defaultValue: "Info",
      table: {
        type: { summary: "string" },
        category: "Component",
        defaultValue: { summary: "Info" }
      },
      options: ["Info", "Help"],
      control: "select"
    },
  },
  // More on args: https://storybook.js.org/docs/web-components/writing-stories/args
  args: {
    rootClass: "spectrum-ContextualHelp",
    size: "xs",
    iconName: "Info"
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('contextualhelp') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {
  title: "Permission required",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const WithLink = Template.bind({});
WithLink.args = {
  title: "Permission required",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  link: {
    text: "Learn about permissions",
    url: "#",
  }
};
