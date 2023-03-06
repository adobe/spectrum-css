// Import the component markup template
import { Template } from "./template";

export default {
  title: "Color loupe",
  description: "The Color loupe component shows the output color that would otherwise be covered by a cursor, stylus, or finger during color selection.",
  component: "ColorLoupe",
  argTypes: {
    pickedColor: {
      name: "Picked color",
      description: "The color to display in the loupe.",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Content",
      },
      control: "color",
    },
    isOpen: {
      name: "Open",
      description: "Apply `is-open` to display the component",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
  },
  args: {
    rootClass: "spectrum-ColorLoupe",
    pickedColor: "rgba(255, 0, 0, 0.5)",
    isOpen: true,
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('colorloupe') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};
