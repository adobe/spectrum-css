import { Template } from "./template";

import { isOpen } from "@spectrum-css/preview/types/states.js";

/** A underlay component is used with modal and dialog. It lays over the rest of the page to deliver a blocking layer between the two contexts. */
export default {
  title: "Components/Underlay",
  component: "Underlay",
  argTypes: {
    isOpen,
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
    "This is an underlay. Use it with a modal and dialog. It lays over the rest of the page to deliver a blocking layer between the two contexts.",
  ],
};
