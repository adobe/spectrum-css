// Import the component markup template
import { Template } from "./template";
<<<<<<< HEAD
import { default as Checkbox } from "@spectrum-css/checkbox/stories/checkbox.stories.js";
import { default as Radio } from "@spectrum-css/radio/stories/radio.stories.js";
=======
>>>>>>> 89878387 (chore: generate new storybook assets)

export default {
  title: "Field group",
  description: "The Field group component is...",
  component: "Fieldgroup",
  argTypes: {
<<<<<<< HEAD
    layout: {
      name: "Layout",
=======
    size: {
      name: "Size",
>>>>>>> 89878387 (chore: generate new storybook assets)
      type: { name: "string", required: true },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
<<<<<<< HEAD
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
=======
      options: ["s", "m", "l", "xl"],
>>>>>>> 89878387 (chore: generate new storybook assets)
      control: "select"
    },
  },
  args: {
<<<<<<< HEAD
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
=======
    rootClass: "spectrum-",
    size: "m",
  },
  parameters: {
    actions: {
      handles: []
>>>>>>> 89878387 (chore: generate new storybook assets)
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('fieldgroup') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
<<<<<<< HEAD
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
=======
Default.args = {};
>>>>>>> 89878387 (chore: generate new storybook assets)
