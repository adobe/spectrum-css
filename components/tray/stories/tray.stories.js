import { Template } from "./template";

import '../index.css';

export default {
  title: "Tray",
  description: "Tray Dialogs are typically used to portray information on mobile device or smaller screens.",
  component: "Tray",
  argTypes: {
    content: { table: { disable: true } },
    size: { table: { disable: true } },
  },
  args: {
    rootClass: "spectrum-Tray",
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('tray') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};
