// Import the component markup template
import { Template } from "./template";
import {
  argTypes, 
  verticalProps, 
  verticalWithIconsProps,
} from "./index.js";

export default {
  title: "Components/Tabs/Vertical/Quiet/Compact",
  component: "Tabs",
  argTypes: argTypes,
  args: {
    rootClass: "spectrum-Tabs",
    size: "m",
    orientation: "vertical",
    isQuiet: true,
    isEmphasized: false,
    isCompact: true,
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
Default.args = {
  ...verticalProps,
  selectorStyle: {
    "height": "32px",
    "top": "0"
  }, 
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...verticalWithIconsProps,
  selectorStyle: {
    "height": "32px",
    "top": "0"
  }, 
};

export const CompactEmphasized = Template.bind({});
CompactEmphasized.args = {
  ...verticalProps,
  isEmphasized: true,
  selectorStyle: {
    "height": "32px",
    "top": "0"
  }, 
};

