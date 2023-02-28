// Import the component markup template
import { Template } from "./template";
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
  },
  args: {
    rootClass: "spectrum-FieldGroup",
    layout: "vertical",
    labelPosition: "top",
  },
  parameters: {
    actions: {
      handles: [
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
