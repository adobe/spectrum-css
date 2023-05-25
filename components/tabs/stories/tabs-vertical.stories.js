// Import the component markup template
import { Template } from "./template";
import * as Data from "./tabs.mockdata";

export default {
  title: "Components/Tabs/Vertical",
  description: "Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.",
  component: "Tabs",
  argTypes: {
    items: { table: { disable: true }},
    selectorStyle: { table: { disable: true }},
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
    orientation: { table: { disable: true }},
    isQuiet: {
      name: "Quiet",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
    isEmphasized: {
      name: "Emphasized",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
    isCompact: {
      name: "Compact",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
      if: { arg: 'isQuiet', truthy: true },
    },
  },
  args: {
    rootClass: "spectrum-Tabs",
    size: "m",
    orientation: "vertical",
    isQuiet: false,
    isEmphasized: false,
    isCompact: false,
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('tabs') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {
  orientation: "vertical",
  selectorStyle: {
    "height": "46px",
    "top": "0"
  }, 
  items: Data.items
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  orientation: "vertical",
  selectorStyle: {
    "height": "46px",
    "top": "0"
  }, 
  items: Data.itemsWithIcons
};

