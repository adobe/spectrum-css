// Import the component markup template
import { Template } from "./template";

export default {
  title: "Slider",
  description:
    "A slider allows users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable.",
  component: "Slider",
  argTypes: {
    reducedMotion: { table: { disable: true } },
    label: {
      name: "Label",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Content",
      },
      control: { type: "text" },
    },
    min: {
      name: "Minimum value",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        category: "Content",
      },
      control: { type: "number" },
    },
    max: {
      name: "Maximum value",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        category: "Content",
      },
      control: { type: "number" },
    },
    step: {
      name: "Step value",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        category: "Content",
      },
      control: { type: "number" },
    },
    variant: {
      name: "Styling variants",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      control: "select",
      options: ["ramp", "offset", "filled"],
    },
    fillColor: {
      name: "Fill color",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      control: "color",
      if: { arg: 'variant', neq: 'ramp' },
    },
    showTicks: {
      name: "Show tick marks",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
      if: { arg: 'variant', neq: 'ramp' }
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
    isFocused: {
      name: "Focused",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
      if: { arg: 'isDisabled', truthy: false }
    },
    values: { table: { disable: true } },
  },
  args: {
    rootClass: "spectrum-Slider",
    isDisabled: false,
    isFocused: false,
    showTicks: false,
  },
  parameters: {
    actions: {
      handles: ['mousedown .spectrum-Slider-handle', 'change .spectrum-Slider-input'],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("slider")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {
  label: "Slider label",
  min: 10,
  max: 20,
  values: [14],
  step: 2,
};

export const Filled = Template.bind({});
Filled.args = {
  ...Default.args,
  variant: 'filled',
};

export const FilledOffset = Template.bind({});
FilledOffset.args = {
  ...Default.args,
  min: 0,
  variant: 'offset',
};

export const Ramp = Template.bind({});
Ramp.args = {
  ...Default.args,
  variant: "ramp",
};

export const Range = Template.bind({});
Range.args = {
  ...Default.args,
  values: [14, 16],
};

export const Tick = Template.bind({});
Tick.args = {
  ...Default.args,
  label: undefined,
  showTicks: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true,
};
