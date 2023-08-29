// Import the component markup template
import { Template } from "./template";

export default {
  title: "Components/Underlay",
  description: "A underlay component is used with modal and dialog. It lays over the rest of the page to deliver a blocking layer between the two contexts.",
  component: "Underlay",
  argTypes: {
    isOpen: {
      description: "Whether the underlay is open (visible).",
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
    content: {
      table: { disable: true }
    },
  },
  args: {
    isOpen: true,
    rootClass: "spectrum-Underlay",
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('underlay') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {
	isOpen: true,
  content: [
    "This is a underlay. Don't use it like this. Use it with a Modal and a Dialog.",
  ],
};
