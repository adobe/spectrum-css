// Import the component markup template
import { Template } from "./template";

import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";

export default {
  title: "Action group",
  description: "The Action group component is...",
  component: "Actiongroup",
  argTypes: {
    areQuiet: ActionButton.argTypes.isQuiet,
    areEmphasized: ActionButton.argTypes.isEmphasized,
    staticColors: ActionButton.argTypes.staticColor,
    content: { table: { disable: true } },
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
    vertical: {
      name: "Vertical layout",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean"
    },
    compact: {
      name: "Compact layout",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean"
    },
    justified: {
      name: "Justified",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Advanced",
      },
      control: "boolean",
    },
  },
  args: {
    rootClass: "spectrum-ActionGroup",
    size: "m",
    areQuiet: ActionButton.args.isQuiet,
    areEmphasized: ActionButton.args.isEmphasized,
    staticColors: ActionButton.args.staticColor,
    vertical: false,
    compact: false,
    justified: false,
  },
  parameters: {
    actions: {
      handles: [
        ...ActionButton.parameters.actions.handles,
      ]
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('actiongroup') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {
  content: [{
    label: "Edit",
  },{
    label: "Copy",
  }, {
    label: "Delete",
    isSelected: true,
  }]
};
