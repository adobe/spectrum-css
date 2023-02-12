// Import the component markup template
import { Template } from "./template";


const today = new Date();
const months = [...Array(12).keys()].map((key) =>
  new Date(0, key).toLocaleString("en", { month: "long" })
);

export default {
  title: "Calendar",
  description: "Calendars display a grid of days in one or more months and allow users to select a single date.",
  component: "Calendar",
  argTypes: {
    express: { table: { disable: true } },
    reducedMotion: { table: { disable: true } },
    month: {
      name: "Month",
      type: { name: "string", required: true },
      table: {
        type: { summary: "number" },
        category: "Component",
      },
      options: months,
      control: "select",
    },
    selectedDay: {
      name: "Selected date or range start (date)",
      description: "Highlight a selected date on the calendar or indicate the start of a date range.",
      type: { name: "number" },
      table: {
        type: { summary: "datetime" },
        category: "Component",
      },
      control: "date",
    },
    lastDay: {
      name: "Range end (date)",
      description: "Defines the end of a date range.",
      type: { name: "number" },
      table: {
        type: { summary: "datetime" },
        category: "Component",
      },
      control: "date",
    },
    year: {
      name: "Year",
      type: { name: "number", required: true },
      table: {
        type: { summary: "number" },
        category: "Component",
      },
      control: "number",
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
    padded: {
      name: "Padded",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Advanced",
      },
      control: "boolean",
    },
    useDOWAbbrev: {
      name: "Use abbreviated day of week",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Advanced",
      },
      control: "boolean",
    },
  },
  args: {
    rootClass: "spectrum-Calendar",
    padded: false,
    isDisabled: false,
    useDOWAbbrev: false,
  },
  parameters: {
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("calendar")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {
  month: months[today.getMonth()],
  selectedDay: today,
  year: today.getFullYear(),
};

export const RangeSelection = Template.bind({});
RangeSelection.args = {
  scale: "large",
  month: months[6],
  selectedDay: new Date(2023, 6, 3),
  lastDay: new Date(2023, 6, 7),
  year: 2023,
  useDOWAbbrev: true,
  padded: true,
};
