// Import the component markup template
import { Template } from "./template";

import { default as Checkbox } from "@spectrum-css/checkbox/stories/checkbox.stories.js";

export default {
  title: "Asset card",
  description: "The asset card component allows users to select and manage assets and their metadata in a grid.",
  component: "Assetcard",
  argTypes: {
    image: {
      name: "Image",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
    },
    exampleImage: {
      name: "Example images",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["landscape", "portrait", "square"],
      control: "select",
      if: { arg: 'image', truthy: false },
    },
    title: {
      name: "Title",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Content",
      },
      control: { type: "text" },
    },
    headerContent: {
      name: "Additional header content",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Content",
      },
      control: { type: "text" },
    },
    content: { table: { disable: true } },
    selection: {
      name: "Selection styles",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
        disable: true,
      },
      options: ["checkbox", "highlight", "ordered"],
      control: "select",
      if: { arg: 'isDropTarget', truthy: false },
    },
    isSelected: {
      name: "Selected",
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
    isDropTarget: {
      name: "Drop target",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Advanced",
      },
      control: "boolean",
    },
  },
  args: {
    rootClass: "spectrum-AssetCard",
    exampleImage: "portrait",
    selection: "checkbox",
    isSelected: false,
    isFocused: false,
    isDropTarget: false,
  },
  parameters: {
    actions: {
      handles: [
        ...Checkbox.parameters.actions.handles,
      ]
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('assetcard') ? 'migrated' : undefined
    }
  }
};

export const Portrait = Template.bind({});
Portrait.args = {
  title: "Portrait asset",
  content: ["Image"],
};

export const Landscape = Template.bind({});
Landscape.args = {
  title: "Landscape asset",
  exampleImage: "landscape",
};

export const Square = Template.bind({});
Square.args = {
  title: "Square asset",
  exampleImage: "square",
};

export const OptionalContent = Template.bind({});
OptionalContent.args = {
  title: "MVI_0123.mp4",
  headerContent: "39:02",
  exampleImage: "square",
};

export const HighlightSelection = Template.bind({});
HighlightSelection.args = {
  title: "Highlight selection",
  selection: "highlight",
  isSelected: true,
};

export const CheckboxSelection = Template.bind({});
CheckboxSelection.args = {
  title: "Checkbox selection",
  selection: "checkbox",
  isSelected: true,
};

export const OrderedSelection = Template.bind({});
OrderedSelection.args = {
  title: "Ordered selection",
  selection: "ordered",
  isSelected: true,
  exampleImage: "landscape",
};

export const DropTarget = Template.bind({});
DropTarget.args = {
  title: "Drop target",
  isDropTarget: true,
  exampleImage: "square",
};
