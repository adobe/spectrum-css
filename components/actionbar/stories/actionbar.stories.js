// Import the component markup template
import { Template } from "./template";

// Load styles for this component
import '../index.css';

import '@spectrum-css/popover';
import '@spectrum-css/closebutton';
import '@spectrum-css/fieldlabel';
import '@spectrum-css/actiongroup';
import '@spectrum-css/actionbutton';

import { Template as CloseButtonTemplate } from '../../closebutton/stories/template.js';
import { Template as FieldLabelTemplate } from '../../fieldlabel/stories/template.js';
import { Template as ActionGroupTemplate } from '../../actiongroup/stories/template.js';

export default {
  title: "Action Bar",
  description: "Floating action bar that appears in selection mode.",
  component: "ActionBar",
  argTypes: {
    content: { table: { disable: true } },
    isOpen: {
      name: "Open",
      type: { name: "boolean", required: true },
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        category: "Component",
        defaultValue: false,
      },
      control: { type: "boolean" }
    },
  },
  args: {
    rootClass: "spectrum-ActionBar",
    isOpen: true,
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('actionbar') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {
  content: [
    CloseButtonTemplate({ size: 's' }),
    FieldLabelTemplate({ size: 'm', label: '2 Selected' }),
    ActionGroupTemplate({
      size: 's',
      quiet: true,
      items: [
        { label: 'Edit' },
        { label: 'Copy' },
        { label: 'Delete' },
      ]
    })
  ],
};
