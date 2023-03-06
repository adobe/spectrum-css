// Import the component markup template
import { Template } from "./template";

export default {
  title: "Modal",
  description: "A modal component is a dialog box/popup window that is displayed on top of the current page.",
  component: "Modal",
  argTypes: {
    isOpen: {
      description: "Whether the modal is open (visible).",
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
    variant: {
      description: "Controls how the modal fills the available space. <ul><li>\"responsive\" will fill the screen on small viewports.</li><li>\"fullscreen\" will fill almost all of the available screen space.</li><li>\"fullscreenTakeover\" will fill all of the available screen space.</li></ul>",
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["responsive", "fullscreen", "fullscreenTakeover"],
      control: {
        type: "select",
      }
    },
    content: { 
      table: { disable: true }
    },
  },
  args: {
    isOpen: true,
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
Default.args = {
  content: [
    "This is a modal. Don't use it like this; get yourself a Modal.",
  ],
};
