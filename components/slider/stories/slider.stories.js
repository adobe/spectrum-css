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
        category: "Component",
      },
      control: { type: "text" },
    },
    min: {
      name: "Minimum value",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        category: "Component",
      },
      control: { type: "number" },
    },
    max: {
      name: "Maximum value",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        category: "Component",
      },
      control: { type: "number" },
    },
    step: {
      name: "Step value",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        category: "Component",
      },
      control: { type: "number" },
    },
    values: { table: { disable: true } },
    isDisabled: {
      name: "Disabled",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
        disable: true
      },
      control: "boolean",
    },
    isFocused: {
      name: "Focused",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
        disable: true
      },
      control: "boolean",
    },
    isDragged: {
      name: "Dragged",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
        disable: true,
      },
      control: "boolean",
    },
    isRamp: {
      name: "Ramp style",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    isRange: {
      name: "Range",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    isFilled: {
      name: "Filled",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    fillColor: {
      name: "Fill color",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      control: "color",
    },
    showTicks: {
      name: "Show tick marks",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    showOffset: {
      name: "Show offset",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
  },
  args: {
    rootClass: "spectrum-Slider",
    isDisabled: false,
    isFocused: false,
    isDragged: false,
    isRamp: false,
    isRange: false,
    showOffset: false,
    showTicks: false,
    isFilled: false,
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
  label: "Slider Label",
  min: 10,
  max: 20,
  values: [14],
  step: 2,
  showOffset: false,
};
Default.argTypes = {
  isRange: { table: { disable: true } },
  isRamp: { table: { disable: true } },
};

export const Filled = Template.bind({});
Filled.args = {
  ...Default.args,
  isFilled: true,
};

export const FilledOffset = Template.bind({});
FilledOffset.args = {
  ...Default.args,
  min: 0,
  showOffset: true,
};

export const Ramp = Template.bind({});
Ramp.args = {
  ...Default.args,
  isRamp: true,
};
Ramp.argTypes = {
  fillColor: { table: { disable: true } },
};

export const Range = Template.bind({});
Range.args = {
  ...Default.args,
  label: "Slider Label",
  isRange: true,
  values: [14, 16],
};

export const Tick = Template.bind({});
Tick.args = {
  ...Default.args,
  showTicks: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true,
};
Disabled.argTypes = {
  fillColor: { table: { disable: true } },
};
