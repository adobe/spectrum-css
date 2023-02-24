// Import the component markup template
import { Template } from "./template";

export default {
  title: "Button group",
  description: "The Button group component is...",
  component: "Buttongroup",
  argTypes: {
    size: {
      name: "Size",
      type: { name: "string", required: true },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["s", "m", "l", "xl"],
      control: "select"
    },
<<<<<<< HEAD
    vertical: {
      name: "Vertical layout",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean"
    },
    items: { table: { disable: true } },
  },
  args: {
    rootClass: "spectrum-ButtonGroup",
    size: "m",
    vertical: false,
=======
  },
  args: {
    rootClass: "spectrum-",
    size: "m",
>>>>>>> 3d21aa7eb (chore: generate new storybook assets)
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('buttongroup') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
<<<<<<< HEAD
Default.args = {
  items: [{
    variant: "secondary",
    treatment: "outline",
    label: "No, thanks"
  }, {
    variant: "secondary",
    treatment: "outline",
    label: "Remind me later"
  }, {
    variant: "primary",
    treatment: "fill",
    label: "Rate now"
  }]
};

export const Vertical = Template.bind({});
Vertical.args = {
  vertical: true,
  items: [{
    variant: "secondary",
    treatment: "outline",
    label: "No, thanks"
  }, {
    variant: "secondary",
    treatment: "outline",
    label: "Remind me later"
  }, {
    variant: "primary",
    treatment: "fill",
    label: "Rate now"
  }]
};
=======
Default.args = {};
>>>>>>> 3d21aa7eb (chore: generate new storybook assets)
