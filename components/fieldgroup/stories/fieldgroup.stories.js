// Import the component markup template
import { Template } from "./template";
import { default as Checkbox } from "@spectrum-css/checkbox/stories/checkbox.stories.js";
import { default as Radio } from "@spectrum-css/radio/stories/radio.stories.js";

export default {
  title: "Field group",
  description: "The Field group component is...",
  component: "Fieldgroup",
  argTypes: {
    layout: {
      name: "Layout",
      type: { name: "string", required: true },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["vertical", "horizontal"],
      control: "select"
    },
    labelPosition: {
      name: "Label Position",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["top", "side"],
      control: "select"
    },
    inputType: {
      name: "Input Type",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["radio", "checkbox"],
      control: "select"
    },
    labelPosition: {
      name: "Label Position",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["top", "side"],
      control: "select"
    },
    inputType: {
      name: "Input Type",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["radio", "checkbox"],
      control: "select"
    },
    isInvalid: {
      name: "Invalid",
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
    isReadOnly: {
      name: "Read-Only",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
  },
  args: {
    rootClass: "spectrum-FieldGroup",
    layout: "vertical",
    labelPosition: "top",
  },
  parameters: {
    actions: {
      handles: [
        ...Checkbox.parameters.actions.handles,
        ...Radio.parameters.actions.handles,
      ]
  },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('fieldgroup') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {
  inputType: "radio",
  items: [{
    id: "1",
    label: "Radio 1",
  },{
    id: "2",
    label: "Radio 2",
  }]
};

export const Checkboxes = Template.bind({});
Checkboxes.args = {
  inputType: "checkbox",
  items: [{
    id: "1",
    label: "Checkbox 1",
  },{
    id: "2",
    label: "Checkbox 2",
  }]
};
