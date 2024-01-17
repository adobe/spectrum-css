// Import the component markup template
import { Template } from "./template";
import {
  argTypes,
  horizontalProps,
  horizontalWithIconsProps,
  horizontalIconOnlyProps,
  overflowProps
} from "./index.js";

export default {
  title: "Components/Tabs/Horizontal/Quiet/Compact",
  component: "Tabs",
  argTypes: argTypes,
  args: {
    rootClass: "spectrum-Tabs",
    size: "m",
    orientation: "horizontal",
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
Default.args = horizontalProps;

export const WithIcon = Template.bind({});
WithIcon.args = horizontalWithIconsProps;

export const IconOnly = Template.bind({});
IconOnly.args = horizontalIconOnlyProps;

export const CompactEmphasized = Template.bind({});
CompactEmphasized.args = {
  isEmphasized: true,
  ...horizontalProps
};

export const CompactEmphasizedWithIcons = Template.bind({});
CompactEmphasizedWithIcons.args = {
  isEmphasized: true,
  ...horizontalWithIconsProps
};

export const CompactEmphasizedIconOnly = Template.bind({});
CompactEmphasizedIconOnly.args = {
  isEmphasized: true,
  ...horizontalIconOnlyProps
};

export const Overflow = Template.bind({});
Overflow.args = {
  popoverOffset: "162px",
  ...overflowProps
};
