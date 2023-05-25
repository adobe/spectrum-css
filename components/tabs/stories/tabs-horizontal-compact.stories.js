// Import the component markup template
import { Template } from "./template";
import * as Data from "./tabs.mockdata";

export default {
  title: "Components/Tabs/Horizontal/Quiet/Compact",
  description: "Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit. Compact must be used with quiet.",
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
    isQuiet: { table: { disable: true }},
    isEmphasized: {
      name: "Emphasized",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
    isCompact: { table: { disable: true }},
  },
  args: {
    rootClass: "spectrum-Tabs",
    size: "m",
    orientation: "horizontal",
    isQuiet: true,
    isEmphasized: false,
    isCompact: true,
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
  isQuiet: true,
  isCompact: true,
  selectorStyle: {
    "width": "35px",
  },   
  items: Data.items
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  isQuiet: true,
  isCompact: true,
  selectorStyle: {
    "width": "60px",
  },   
  items: Data.itemsWithIcons
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  isQuiet: true,
  isCompact: true,
  selectorStyle: {
    "width": "20px",
  }, 
  items: Data.itemsIconOnly
};

export const CompactEmphasized = Template.bind({});
CompactEmphasized.args = {
  isQuiet: true,
  isCompact: true,
  isEmphasized: true,
  selectorStyle: {
    "width": "35px",
  }, 
  items: Data.items
};

export const CompactEmphasizedWithIcons = Template.bind({});
CompactEmphasizedWithIcons.args = {
  isQuiet: true,
  isCompact: true,
  isEmphasized: true,
  selectorStyle: {
    "width": "60px",
  }, 
  items: Data.itemsWithIcons
};

export const CompactEmphasizedIconOnly = Template.bind({});
CompactEmphasizedIconOnly.args = {
  isQuiet: true,
  isCompact: true,
  isEmphasized: true,
  selectorStyle: {
    "width": "20px",
  }, 
  items: Data.itemsIconOnly
};
