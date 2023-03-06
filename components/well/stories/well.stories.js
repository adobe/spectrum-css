// Import the component markup template
import { Template } from "./template";

export default {
  title: "Well",
  description: "A Well is a content container that displays non-editable content separate from other content on the screen. Often this is used to display preformatted text, such as code/markup examples on a documentation page.",
  component: "Well",
  args: {
    rootClass: "spectrum-Well"
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('well') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};
