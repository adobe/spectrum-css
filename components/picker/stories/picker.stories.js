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
    content: { table: { disable: true } },
  },
  args: {
    ...PickerButtonStories.args,
    rootClass: "spectrum-Picker",
    label: "Select a Country",
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
