// Import the component markup template
import { Template } from "./template";

export default {
  title: "Text field",
  description:
    "Text fields are text boxes that allow users to input custom text entries with a keyboard. Various decorations can be displayed around the field to communicate the entry requirements.",
  component: "TextField",
  argTypes: {
    isValid: {
      name: "Valid",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean"
    },
    isInvalid: {
      name: "Invalid",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean"
    },
    isFocused: {
      name: "Focused",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean"
    },
    isKeyboardFocused: {
      name: "Keyboard focused",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean"
    },
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
    isQuiet: {
      name: "Quiet styling",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    multiline: {
      name: "Multiline",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean"
    },
    grows: {
      name: "Grows",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
      if: { arg: "multiline", truthy: true }
    },
    iconName: {
      table: { disable: true },
    },
    isDisabled: {
      name: "Disabled",
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
        category: "Component",
      },
      control: "boolean",
    },
    isReadOnly: {
      name: "Read only",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    isLoading: {
      name: "Loading",
      type: { name: "boolean" },
      table: {
        disable: true,
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean"
    },
    pattern: {
      name: "Pattern",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      control: "text"
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    rootClass: "spectrum-Textfield",
    isValid: false,
    isInvalid: false,
    isValid: false,
    isDisabled: false,
    isRequired: false,
    isReadOnly: false,
    isFocused: false,
    isKeyboardFocused: false,
    isLoading: false,
    size: "m",
    multiline: false,
    grows: false,
    isQuiet: false,
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("textfield")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {};

export const WithIcon = Template.bind({});
WithIcon.args = {
  iconName: "Magnify"
};

export const TextArea = Template.bind({});
TextArea.args = {
  multiline: true,
  grows: true,
  value: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
};
