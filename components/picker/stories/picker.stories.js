// Import the component markup template
import { Template } from "./template";

import { Default as MenuStories } from "@spectrum-css/menu/stories/menu.stories.js";
import { default as PickerButtonStories } from "@spectrum-css/pickerbutton/stories/pickerbutton.stories.js";

export default {
  title: "Picker",
  description: "A picker outlines a set of options for a user.",
  component: "Picker",
  argTypes: {
    ...PickerButtonStories.argTypes,
    label: {
      name: "Label",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Content",
      },
      control: { type: "text" },
    },
    isLoading: {
      name: "Loading",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
    content: { table: { disable: true } },
  },
  args: {
    ...PickerButtonStories.args,
    rootClass: "spectrum-Picker",
    label: "Country",
    isLoading: false,
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("picker")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {
  content: [
    MenuStories(MenuStories.args),
  ]
};

export const Quiet = Template.bind({});
Quiet.args = {
  isQuiet: true,
  content: [
    MenuStories(MenuStories.args),
  ]
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  content: [
    MenuStories(MenuStories.args),
  ]
};
