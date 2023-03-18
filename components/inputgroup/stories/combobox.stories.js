// Import the component markup template
import { Template } from "./template";

import { Template as Menu } from '@spectrum-css/menu/stories/template.js';

export default {
  title: "Combo box",
  description: "Combo boxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.",
  component: "InputGroup",
  argTypes: {
    isOpen: {
      name: "Open",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
    isQuiet: {
      name: "Quiet styling",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    isValid: {
      name: "Valid",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
      if: { arg: 'isInvalid', truthy: false },
    },
    isInvalid: {
      name: "Invalid",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
      if: { arg: 'isValid', truthy: false },
    },
    isDisabled: {
      name: "Disabled",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
    variant: { table: { disable: true } },
    content: { table: { disable: true } },
  },
  args: {
    rootClass: "spectrum-InputGroup",
    variant: "combobox",
    isOpen: true,
    isQuiet: false,
    isInvalid: false,
    isValid: false,
    isDisabled: false,
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('inputgroup') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {
  content: [
    Menu({
      role: "listbox",
      subrole: "option",
      isSelectable: true,
      items: [
        {
          label: "Ballard",
          isSelected: true,
          isChecked: true,
        },
        {
          label: "Fremont",
        },
        {
          label: "Greenwood",
        },
        {
          type: "divider",
        },
        {
          label: "United States of America",
          isDisabled: true,
        },
      ],
    }),
  ],
};
