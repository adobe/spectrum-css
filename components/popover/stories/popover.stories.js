// Import the component markup template
import { Template } from "./template";


import { Default as Menu } from "@spectrum-css/menu/stories/menu.stories.js";

export default {
  title: "Popover",
  description:
    "A popover is used to display transient content (menus, options, additional actions etc.) and appears when clicking/tapping on a source (tools, buttons, etc.). It stands out via its visual style (stroke and drop shadow) and floats on top of the rest of the interface.",
  component: "Popover",
  argTypes: {
    content: { table: { disable: true } },
    isOpen: {
      name: "Open",
      type: { name: "boolean" },
      table: {
        disable: true,
        type: { summary: "boolean" },
        category: "State",
      },
      control: { type: "boolean" },
    },
    withTip: {
      name: "Show with tip",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: { type: "boolean" },
    },
    position: {
      name: "Tip positioning",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      control: 'select',
      options: ['top', 'top-left', 'top-right', 'tip-start', 'top-end', 'bottom', 'bottom-left', 'bottom-right', 'bottom-start', 'bottom-end', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'start', 'start-top', 'start-bottom', 'end', 'end-top', 'end-bottom'],
      if: { arg: 'withTip', truthy: true },
    },
  },
  args: {
    rootClass: "spectrum-Popover",
    isOpen: true,
    withTip: false,
    position: "top",
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("popover")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {
  content: [
    Menu({
      items: [
        {
          iconName: "Edit",
          label: "Edit",
        },
        {
          iconName: "Copy",
          label: "Copy",
        },
        {
          iconName: "Move",
          label: "Move",
        },
        {
          iconName: "Delete",
          label: "Delete",
        },
      ],
    }),
  ],
};
