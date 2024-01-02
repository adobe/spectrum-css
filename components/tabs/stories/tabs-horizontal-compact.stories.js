import {
  argTypes,
  horizontalIconOnlyProps,
  horizontalProps,
  horizontalWithIconsProps
} from "./index.js";
import { Template } from "./template";

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
		customStorybookStyles: {
			display: undefined,
		},
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('tabs') ? 'migrated' : 'legacy',
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
