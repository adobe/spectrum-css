// More on default export: https: //storybook.js.org/docs/web-components/writing-stories/introduction#default-export
// More on args: https: //storybook.js.org/docs/web-components/writing-stories/args

import { default as IconStories } from '../../icon/stories/icon.stories.js';

// Import the component markup template
import { Template } from "./template";

// Load styles for this component
import '../index.css';
import '../skin.css';

export default {
  title: "Button",
  description: "Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs, and are ideal for calling attention to where a user needs to do something in order to move forward in a flow.",
  component: "Button",
  argTypes: {
    rootClass: {
      name: "Class name",
      type: { name: "string", required: true },
      defaultValue: "spectrum-Button",
      table: { disable: true },
      control: {
        readonly: true,
      }
    },
    customClasses: { table: { disable: true } },
    label: {
      name: "Label",
      type: { name: "string", required: false },
      table: {
        type: { summary: "string" },
        category: "Component"
      },
      control: { type: "text" }
    },
    icon: IconStories && IconStories.argTypes && IconStories.argTypes.iconName ? IconStories.argTypes.iconName : {},
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
    hideLabel: {
      name: "HideLabel",
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: {
        type: "boolean",
        // if: { arg: 'icon', truthy: true }
      }
    },
    variant: {
      name: "Variant",
      type: { name: "string", required: true },
      defaultValue: "accent",
      table: {
        type: { summary: "string" },
        category: "Component",
        defaultValue: { summary: "accent" }
      },
      options: ["accent", "negative", "primary", "secondary"],
      control: "select"
    },
    treatment: {
      name: "Treatment",
      type: { name: "string", required: true },
      defaultValue: "fill",
      table: {
        type: { summary: "string" },
        category: "Component",
        defaultValue: { summary: "fill" }
      },
      options: ["fill", "outline"],
      control: "inline-radio"
    },
    isDisabled: {
      name: "Disabled",
      type: { name: "boolean", required: true },
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        category: "Component",
        defaultValue: false
      },
      control: "boolean"
    },
    staticColor: {
      name: "StaticColor",
      type: { name: "string", required: false },
      table: {
        type: { summary: "string" },
        category: "Advanced",
      },
      options: ["white", "black"],
      control: "select"
    },
    justified: {
      name: "Justified",
      type: { name: "boolean", required: false },
      defaultValue: null,
      table: {
        type: { summary: "boolean" },
        category: "Advanced",
        defaultValue: null
      },
      control: "boolean"
    },
  },
  args: {
    label: "Edit",
    variant: "accent",
    size: "m",
    treatment: "fill",
    isDisabled: false,
  },
  parameters: {
    actions: {
      handles: ["click .spectrum-Button", "focus .spectrum-Button"],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('button') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};

export const OutlineWithIcon = Template.bind({});
OutlineWithIcon.args = {
  treatment: 'outline',
  icon: 'Edit'
};

export const DisabledIconOnly = Template.bind({});
DisabledIconOnly.args = {
  hideLabel: true,
  isDisabled: true,
  icon: 'Actions'
};
