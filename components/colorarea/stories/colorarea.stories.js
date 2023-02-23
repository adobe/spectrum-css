// Import the component markup template
// stories is where the stories will be written
import { Template } from "./template";
import { default as ColorHandle } from "@spectrum-css/colorhandle"
// how do I handle dependent components

export default {
  title: "Color area",
  description: "The Colorarea component is...",
  component: "Colorarea",
  argTypes: {
    // isDisabled: {
    //   name: "Disabled",
    //   type: { name: "boolean" },
    //   table: {
    //     type: { summary: "boolean" },
    //     category: "State",
    //   },
    //   control: "boolean",
    // },
  },
  args: {
    rootClass: "spectrum-",
    size: "m",
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('colorarea') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};
