// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args

// Import the component markup template
import { Template } from "./template";

// Load styles for this component
import '../dist/index-vars.css';

export default {
  title: "Help text",
  description: "Help text provides either an informative description or an error message that gives more context about what a user needs to input. It’s commonly used in forms.",
  component: "HelpText",
  argTypes: {
    text: {
      name: "Text",
      type: { name: "string", required: true },
      defaultValue: "Create a password with at least 8 characters.",
      table: {
        type: { summary: "string" },
        disable: false,
        category: "Component",
        defaultValue: {
          summary: "Create a password with at least 8 characters."
        }
      },
      control: { type: "text" }
    },
    treatment: {
      name: "Treatment",
      type: { name: "string", required: true },
      defaultValue: "neutral",
      table: {
        type: { summary: "string" },
        category: "Component",
        defaultValue: { summary: "neutral" }
      },
      options: ["neutral", "negative"],
      control: "inline-radio"
    },
    hideIcon: {
      name: "HideIcon",
      type: { name: "boolean", required: true },
      defaultValue: false,
      description: "Only applicable if treatment is negative.",
      table: {
        type: { summary: "boolean" },
        disable: false,
        category: "Advanced",
        defaultValue: null
      },
      control: {
        type: "boolean",
        if: { arg: 'treatment', eq: 'negative' }
      }
    },
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
    isDisabled: {
      name: "IsDisabled",
      type: { name: "boolean", required: true },
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        category: "Advanced"
      },
      control: "boolean"
    }
  },
  args: {
    text: "Create a password with at least 8 characters.",
    treatment: "neutral",
    hideIcon: false,
    size: "m",
    isDisabled: false
  },
  parameters: {
    actions: {
      handles: []
    }
  }
};

export const Default = Template.bind({});
Default.args = {};
