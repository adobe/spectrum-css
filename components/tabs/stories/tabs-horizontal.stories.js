import {
  argTypes,
  horizontalIconOnlyProps,
  horizontalProps,
  horizontalWithIconsProps
} from "./index.js";
import { Template } from "./template";

export default {
  title: "Components/Tabs/Horizontal",
  description: "Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.",
  component: "Tabs",
  argTypes: argTypes,
  args: {
    rootClass: "spectrum-Tabs",
    size: "m",
    orientation: "horizontal",
    isQuiet: false,
    isEmphasized: false,
    isCompact: false,
		customStorybookStyles: {
			display: undefined,
		}
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
Default.args = horizontalProps;

export const WithIcon = Template.bind({});
WithIcon.args = horizontalWithIconsProps;

export const IconOnly = Template.bind({});
IconOnly.args = horizontalIconOnlyProps;

export const Express = Template.bind({});
Express.args = { ...horizontalProps, express: true };
