// Import the component markup template
import { Template } from "./template";

import { default as Checkbox } from "@spectrum-css/checkbox/stories/checkbox.stories.js";
// import { ava } from "@spectrum-css/asset/stories/asset.stories.js";

export default {
  title: "Asset list",
  description: "A selectable list of Assets, often used inside of Miller Columns.",
  component: "Assetlist",
  argTypes: {
    content: { table: { disable: true } },
  },
  args: {
    rootClass: "spectrum-AssetList",
  },
  parameters: {
    actions: {
      handles: [
        ...Checkbox.parameters.actions.handles,
      ]
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('assetlist') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {
  content: [{
    image: "/example-ava.png",
    label: "Shantanu.jpg",
    isSelectable: true,
  }, {
    iconName: "Document",
    label: "Resource Allocation.csv",
    isSelectable: true,
  }, {
    iconName: "Folder",
    label: "Frontend Projects",
    isSelectable: true,
    isBranch: true,
    isSelected: true,
  }],
};
