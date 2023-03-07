// Import the component markup template
import { Template } from "./template";

export default {
  title: "Treeview",
  description: "The typical usage of a treeview involves nesting a .spectrum-Treeview element within the .spectrum-TreeView-item parent element.",
  component: "Treeview",
  argTypes: {
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
    isQuiet: {
      name: "Quiet",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
  },
  args: {
    rootClass: "spectrum-TreeView",
    size: "m",
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('treeview') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: "label1",
      label: "Label 1",
      link: "#"
    },
    {
      id: "group1",
      label: "Group 1",
      link: "#",
      items: [
        {
          id: "label2",
          label: "Label 2",
          link: "#"
        },
        {
          id: "label3",
          label: "Label 3",
          link: "#"
        },
      ]
    },
    {
      id: "group2",
      label: "Group 2",
      link: "#",
      items: [
        {
          id: "label3",
          label: "Label 3",
          link: "#"
        },
        {
          id: "group3",
          label: "Group 3",
          link: "#",
          items: [
            {
              id: "label4",
              label: "Label 4",
              link: "#"
            },
          ]
        },
      ]
    }
  ]
};
