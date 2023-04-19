// Import the component markup template
import { Template } from "./template";

export default {
  title: "Drop zone",
  description:
    'A drop zone is an area on the screen into a which an object can be dragged and dropped to accomplish a task. For example, a drop zone might be used in an upload workflow to enable the user to simply drop a file from their operating system into the drop zone, which is a more efficient and intuitive action, rather than utilize the standard "Choose File" dialog.',
  component: "DropZone",
  argTypes: {
    isDragged: {
      name: "Dragged",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
      control: "boolean",
    },
  },
  args: {
    rootClass: "spectrum-Dropzone",
    isDragged: false,
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("dropzone")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {};
