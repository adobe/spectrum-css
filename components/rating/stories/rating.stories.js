// Import the component markup template
import { Template } from "./template";

export default {
  title: "Rating",
  description:
    "A rating element is used to display or collect a user's rating of an item as represented by a number of stars.",
  component: "Rating",
  argTypes: {
    isEmphasized: {
      name: "Emphasized styling",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
  },
  args: {
    rootClass: "spectrum-Rating",
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("rating")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {};
