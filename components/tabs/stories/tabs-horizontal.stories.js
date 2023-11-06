import {
    argTypes,
    horizontalIconOnlyProps,
    horizontalProps,
    horizontalWithIconsProps
} from "./index.js";
import { Template } from "./template";

/** Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit. */
export default {
  title: "Components/Tabs/Horizontal",
  component: "Tabs",
  argTypes: argTypes,
  args: {
    rootClass: "spectrum-Tabs",
    size: "m",
    orientation: "horizontal",
    isQuiet: false,
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
Default.args = horizontalProps;

export const WithIcon = Template.bind({});
WithIcon.args = horizontalWithIconsProps;

export const IconOnly = Template.bind({});
IconOnly.args = horizontalIconOnlyProps;
