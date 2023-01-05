import { Template } from "./template";

// Load styles for this component
import '../index.css';
import '../skin.css';

import '@spectrum-css/icon';

export default {
  title: "Accordion",
  description: "The accordion element contains a list of items that can be expanded or collapsed to reveal additional content or information associated with each item. There can be zero expanded items, exactly one expanded item, or more than one item expanded at a time, depending on the configuration. This list of items is defined by child accordion item elements.",
  component: "Accordion",
  argTypes: {
    foo: { table: { disable: true } },
    items: { table: { disable: true }}
  },
  args: {
    rootClass: "spectrum-Accordion",
  },
  parameters: {
    actions: {
      handles: [ 'click .spectrum-Accordion-item', 'focus .spectrum-Accordion-itemHeader' ]
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('accordion') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {
  items: new Map([
    ['Recent', {
      content: 'Item 1',
      open: true,
      disabled: false,
    }],
    ['Architecture', {
      content: 'Item 2',
      open: false,
      disabled: true,
    }],
    ['Nature', {
      content: 'Item 3',
      open: false,
      disabled: false,
    }],
    ['Really Long Accordion Item According to Our Predictions', {
      content: 'Item 4',
      open: false,
      disabled: false,
    }],
  ]),
};
