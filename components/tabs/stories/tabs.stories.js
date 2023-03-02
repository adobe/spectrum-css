// Import the component markup template
import { Template } from "./template";

export default {
  title: "Tabs",
  description: "Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.",
  component: "Tabs",
  argTypes: {
    items: { table: { disable: true }},
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
    orientation: {
      name: "Orientation",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["horizontal", "vertical"],
      control: "inline-radio",
    },
    density: {
      name: "Density",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["regular", "compact"],
      control: "inline-radio",
    },
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
    orientation: "horizontal",
    density: "regular",
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
  items: [
    {
      id: "tab-1",
      label: "Tab 1",
      isSelected: true
    },
    {
      id: "tab-2",
      label: "Tab 2",
    },
    {
      id: "tab-3",
      label: "Tab 3",
    }
  ]
};
