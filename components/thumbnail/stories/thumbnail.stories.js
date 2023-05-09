// Import the component markup template
import { Template } from "./template";

export default {
  title: "Thumbnail",
  description:
    "A thumbnail is used to display a preview of an image, layer, or effect.",
  component: "Thumbnail",
  argTypes: {
    reduceMotion: { table: { disable: true } },
    size: {
      name: "Size",
      type: { name: "string", required: true },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      options: ["50", "75", "100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"],
      control: "select",
    },
    imageURL: {
      name: "Image URL",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
    },
    svg: { table: { disable: true } },
    altText: {
      name: "Descriptive text for the image",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      control: "text",
    },
    isCover: {
      name: "Cover",
      description: "Images will maintain their aspect ratio while filling the entire content box.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
    isDisabled: {
      name: "Disabled",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
    },
  },
  args: {
    rootClass: "spectrum-Thumbnail",
    size: "500",
    isCover: false,
    isDisabled: false,
    imageURL: "example-card-landscape.png",
    altText: "Landscape with mountains and lake",
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("thumbnail")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {};


export const Layer = Template.bind({});
Layer.args = {
  isLayer: true,
  isSelected: false
};

export const WithBackground = Template.bind({});
WithBackground .args = {
  backgroundColor: 'orange'
};
