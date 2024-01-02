import {
	argTypes,
	verticalProps,
	verticalWithIconsProps,
} from "./index.js";
import { Template } from "./template";

export default {
  title: "Components/Tabs/Vertical/Emphasized",
  description: "Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.",
  component: "Tabs",
  argTypes: argTypes,
  args: {
    rootClass: "spectrum-Tabs",
    size: "m",
    orientation: "vertical",
    isQuiet: false,
    isEmphasized: true,
    isCompact: false,
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('tabs') ? 'migrated' : 'legacy'
    }
  }
};

export const Default = Template.bind({});
Default.args = verticalProps;

export const WithIcon = Template.bind({});
WithIcon.args = verticalWithIconsProps;
