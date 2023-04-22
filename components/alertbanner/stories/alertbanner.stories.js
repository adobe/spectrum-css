// Import the component markup template
import { Template } from "./template";

export default {
  title: "Alert banner",
  description: "The Alert banner component is...",
  component: "AlertBanner",
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
    content: { table: { disable: false } },
    isDismissable: {
      name: "Dismissable",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
  },
  args: {
    rootClass: "spectrum-AlertBanner",
    isOpen: true,
    isEmphasized: false,
    isSticky: false,
    isFixed: false,
    isFlexible: false,
  },
  parameters: {
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('alertbanner') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};
