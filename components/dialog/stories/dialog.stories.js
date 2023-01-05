import { Template } from "./template";

import '../index.css';
import '../skin.css';

export default {
  title: "Dialog",
  description: "The Dialog component is...",
  component: "Dialog",
  argTypes: {
    content: { table: { disable: true } },
    size: { table: { disable: true } },
    noDivider: {}
  },
  args: {
    rootClass: "spectrum-Dialog",
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('dialog') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};
