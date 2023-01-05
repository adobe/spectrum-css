// Import the component markup template
import { Template } from "./template";

// Load styles for this component
import '../index.css';

import { Default as Menu } from '../../menu/stories/menu.stories.js';

export default {
  title: "Popover",
  description: "The Popover component is...",
  component: "Popover",
  argTypes: {
    rootClass: {
      name: "Class name",
      type: { name: "string", required: true },
      defaultValue: "spectrum-Popover",
      table: { disable: true },
      control: {
        readonly: true,
      }
    },
    content: { table: { disable: true } },
    customClasses: { table: { disable: true } },
    isOpen: {
      name: "Open",
      type: { name: "boolean", required: true },
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        category: "Component",
        defaultValue: false,
      },
      control: { type: "boolean" }
    }
  },
  args: {
    isOpen: false,
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('popover') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {
  content: Menu()
};
