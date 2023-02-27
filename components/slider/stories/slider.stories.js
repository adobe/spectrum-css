// Import the component markup template
import { Template } from "./template";

export default {
  title: "Slider",
  description:
    "A slider allows users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable.",
  component: "Slider",
  argTypes: {
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
    value: { table: { disable: true } },
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
    variant: {
      name: "Styling options",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["filled", "ramp", "range", "tick", "default"],
      control: "inline-radio",
    },
  },
  args: {
    rootClass: "spectrum-Slider",
    isDisabled: false,
    isFocused: false,
    isDragged: false,
    variant: "default",
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
  min: 10,
  max: 20,
  value: 14,
  step: 2,
};

export const Filled = Template.bind({});
Filled.args = {
  ...Default.args,
  variant: "filled",
};

export const Ramp = Template.bind({});
Ramp.args = {
  ...Default.args,
  variant: "ramp",
};

export const Range = Template.bind({});
Range.args = {
  ...Default.args,
  label: "Slider Label",
  variant: "range",
  value: [14, 16],
};

export const Tick = Template.bind({});
Tick.args = {
  ...Default.args,
  variant: "tick",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true,
};
