// Import the component markup template
import { Template } from "./template";

export default {
  title: "Color loupe",
  description: "The Color loupe component shows the output color that would otherwise be covered by a cursor, stylus, or finger during color selection.",
  component: "Colorloupe",
  argTypes: {},
  args: {
    rootClass: "spectrum-ColorLoupe",
    isOpen: true
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
