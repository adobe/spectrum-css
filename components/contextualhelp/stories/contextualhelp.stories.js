// Import the component markup template
import { Template } from "./template";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Contextual Help",
  description: "The Contextual Help component is...",
  component: "ContextualHelp",
  argTypes: {
    size: {
      name: "Size",
      type: { name: "string", required: true },
      defaultValue: "m",
      table: {
        type: { summary: "string" },
        category: "Component",
        defaultValue: { summary: "m" }
      },
      options: ["s", "m", "l", "xl"],
      control: "select"
    },
  },
  // More on args: https://storybook.js.org/docs/web-components/writing-stories/args
  args: {
    rootClass: "spectrum-ContextualHelp",
    size: "m",
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
Default.args = {};
