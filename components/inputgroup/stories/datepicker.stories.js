// Import the component markup template
import { Template } from "./template";

import { default as CalendarStories } from '@spectrum-css/calendar/stories/calendar.stories.js';

const ignoreProps = ['rootClass', 'isDisabled'];

// @todo add support for date *range*
export default {
  title: "Date picker",
  description: "A date picker uses the input group component to display a field with a button next to it. The button opens a calendar that allows users to select a date.",
  component: "InputGroup",
  argTypes: {
    ...Object.entries(CalendarStories.argTypes).reduce((acc, [key,]) => {
      if (ignoreProps.includes(key)) return acc;
      return { ...acc, [key]: { table: { disable: true } } };
    }, {}),
    isOpen: {
      name: "Open",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
    isQuiet: {
      name: "Quiet styling",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    isValid: {
      name: "Valid",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
      if: { arg: 'isInvalid', truthy: false },
    },
    isInvalid: {
      name: "Invalid",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
      if: { arg: 'isValid', truthy: false },
    },
    isDisabled: {
      name: "Disabled",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
    isRequired: {
      name: "Required",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
    readOnly: {
      name: "Read only",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Advanced",
      },
      control: "boolean",
    },
    variant: { table: { disable: true } },
    content: { table: { disable: true } },
  },
  args: {
    rootClass: "spectrum-InputGroup",
    variant: "datepicker",
    isOpen: true,
    isQuiet: false,
    isInvalid: false,
    isValid: false,
    isDisabled: false,
    isRequired: false,
    readOnly: false,
  },
  parameters: {
    actions: {
      handles: [
        ...CalendarStories.parameters.actions.handles ?? [],
      ]
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('inputgroup') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {
  month: "March",
  selectedDay: 1,
  year: 2023,
  content: [{}]
};
