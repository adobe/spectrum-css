// Import the component markup template
import { Template } from "./template";
import {
  argTypes, 
  verticalProps, 
  verticalWithIconsProps,
} from "./index.js";

export default {
  title: "Components/Tabs/Vertical/Quiet",
  component: "Tabs",
  argTypes: argTypes,
  args: {
    rootClass: "spectrum-Tabs",
    size: "m",
    orientation: "vertical",
    isQuiet: true,
    isEmphasized: false,
    isCompact: false,
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('tabs') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = verticalProps;

export const WithIcon = Template.bind({});
WithIcon.args = verticalWithIconsProps;

