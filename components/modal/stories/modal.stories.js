// Import the component markup template
import { Template } from "./template";

export default {
  title: "Modal",
  description: "A modal component used primarily by Dialog.",
  component: "Modal",
  argTypes: {
    isOpen: {
      description: "Whether the modal is open (visible).",
      defaultValue: true,
      table: {
        type: { summary: "boolean" },
        category: "State",
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    variant: {
      description: "Controls how the modal fills the available space. <ul><li>\"responsive\" will fill the screen on small viewports.</li><li>\"fullscreen\" will fill almost all of the available screen space.</li><li>\"fullscreenTakeover\" will fill all of the available screen space.</li></ul>",
      defaultValue: undefined,
      table: {
        type: { summary: "string" },
        category: "Component",
        defaultValue: { summary: "undefined" },
      },
      options: ["responsive", "fullscreen", "fullscreenTakeover"],
      control: {
        type: "select",
      }
    }
  },
  args: {
    isOpen: true,
    variant: undefined,
    rootClass: "spectrum-Modal",
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('modal') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};
