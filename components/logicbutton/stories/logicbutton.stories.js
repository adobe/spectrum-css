// Import the component markup template
import { Template } from "./template";

export default {
  title: "Logic button",
  description: "A LogicButton displays an operator within a boolean logic sequence.",
  component: "Logicbutton",
  argTypes: {
    variant: {
      name: "Varient",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["and", "or"],
      control: "inline-radio",
    },
  },
  args: {
    rootClass: "spectrum-LogicButton",
    variant: "and",
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('logicbutton') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {
  variant: "and"
};

