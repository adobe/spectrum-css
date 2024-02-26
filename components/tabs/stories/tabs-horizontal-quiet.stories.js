import {
  argTypes,
  horizontalIconOnlyProps,
  horizontalProps,
  horizontalWithIconsProps
} from "./index.js";
import { Template } from "./template";

export default {
  title: "Components/Tabs/Horizontal/Quiet",
  component: "Tabs",
  argTypes: argTypes,
  args: {
    rootClass: "spectrum-Tabs",
    size: "m",
    orientation: "horizontal",
    isQuiet: true,
    isEmphasized: false,
    isCompact: false,
  },
  parameters: {
    actions: {
      handles: []
    },
  }
};

export const Default = Template.bind({});
Default.args = horizontalProps;

export const WithIcon = Template.bind({});
WithIcon.args = horizontalWithIconsProps;

export const IconOnly = Template.bind({});
IconOnly.args = horizontalIconOnlyProps;

export const QuietEmphasized = Template.bind({});
QuietEmphasized.args = {
  isEmphasized: true,
  ...horizontalProps
};
